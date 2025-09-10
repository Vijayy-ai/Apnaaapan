import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const TAU = Math.PI * 2;

function dist(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.hypot(dx, dy);
}

function getNormal(a, b) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  return { x: -dy / len, y: dx / len };
}

function smoothPath(points) {
  const mids = [];
  for (let i = 0; i < points.length - 1; i++) {
    mids.push({ x: (points[i].x + points[i + 1].x) / 2, y: (points[i].y + points[i + 1].y) / 2 });
  }
  return mids;
}

function CursorTrail() {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const pointsRef = useRef([]); // {x,y,t}
  const lastTimeRef = useRef(0);
  const speedRef = useRef(0);

  useEffect(() => {
    if (typeof window === 'undefined' || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const setSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setSize();

    const MAX_POINTS = 120; // cap stored points
    const RENDER_LAST = 30; // only draw last N points near cursor
    const MIN_DIST = 2.5;
    const JUMP_RESET_DIST = 120; // reset trail on teleport-like jumps

    const onMove = (e) => {
      const now = performance.now();
      const p = { x: e.clientX, y: e.clientY, t: now };
      const arr = pointsRef.current;

      if (arr.length > 0) {
        const last = arr[arr.length - 1];
        const d = dist(last, p);
        const dt = Math.max(0.0001, now - last.t);
        const v = d / dt;
        speedRef.current = speedRef.current * 0.85 + v * 0.15;

        // Reset trail on large jumps to avoid long spans
        if (d > JUMP_RESET_DIST) {
          pointsRef.current = [p];
          return;
        }
      }

      if (arr.length === 0 || dist(arr[arr.length - 1], p) > MIN_DIST) {
        arr.push(p);
        if (arr.length > MAX_POINTS) arr.shift();
      } else {
        arr[arr.length - 1] = p;
      }
    };

    const onTouch = (e) => {
      if (e.touches && e.touches.length > 0) {
        const now = performance.now();
        const p = { x: e.touches[0].clientX, y: e.touches[0].clientY, t: now };
        const arr = pointsRef.current;
        if (arr.length > 0) {
          const last = arr[arr.length - 1];
          const d = dist(last, p);
          const dt = Math.max(0.0001, now - last.t);
          const v = d / dt;
          speedRef.current = speedRef.current * 0.85 + v * 0.15;
          if (d > JUMP_RESET_DIST) {
            pointsRef.current = [p];
            return;
          }
        }
        if (arr.length === 0 || dist(arr[arr.length - 1], p) > MIN_DIST) {
          arr.push(p);
          if (arr.length > MAX_POINTS) arr.shift();
        } else {
          arr[arr.length - 1] = p;
        }
      }
    };

    const onResize = () => setSize();

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('touchmove', onTouch, { passive: true });
    window.addEventListener('resize', onResize);

    // Two subtle layers for professional look
    const layers = [
      { hue: 220, saturation: 70, light: 62, thickness: 8, offset: 0, baseAmp: 5, baseSpeed: 0.0030 },
      { hue: 280, saturation: 68, light: 64, thickness: 13, offset: TAU / 2, baseAmp: 9, baseSpeed: 0.0022 },
    ];

    const step = (t) => {
      if (!lastTimeRef.current) lastTimeRef.current = t;
      const dt = Math.min(50, t - lastTimeRef.current);
      lastTimeRef.current = t;

      const pts = pointsRef.current;
      // Aggressive trimming when nearly idle so trail stays near cursor only
      if (pts.length > 2 && speedRef.current < 0.02) {
        for (let i = 0; i < 2 && pts.length > 2; i++) pts.shift();
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (pts.length < 2) {
        rafRef.current = requestAnimationFrame(step);
        return;
      }

      // Only render last N points near the cursor
      const startIndex = Math.max(0, pts.length - RENDER_LAST - 1);
      const renderPts = pts.slice(startIndex);
      if (renderPts.length < 2) {
        rafRef.current = requestAnimationFrame(step);
        return;
      }

      const mids = smoothPath(renderPts);

      // Speed-based waviness
      const v = Math.min(0.8, speedRef.current);
      const ampMul = 1 + v * 6;
      const freqMul = 1 + v * 3;

      for (let li = layers.length - 1; li >= 0; li--) {
        const L = layers[li];

        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';

        const start = renderPts[0];
        const end = renderPts[renderPts.length - 1];
        const grad = ctx.createLinearGradient(start.x, start.y, end.x, end.y);
        grad.addColorStop(0, `hsla(${L.hue}, ${L.saturation}%, ${L.light}%, 0)`);
        grad.addColorStop(0.35, `hsla(${L.hue}, ${L.saturation}%, ${L.light}%, 0.35)`);
        grad.addColorStop(0.8, `hsla(${L.hue + 8}, ${L.saturation}%, ${L.light}%, 0.55)`);
        grad.addColorStop(1, `hsla(${L.hue + 16}, ${L.saturation}%, ${L.light}%, 0)`);
        ctx.strokeStyle = grad;

        ctx.beginPath();
        ctx.moveTo(renderPts[0].x, renderPts[0].y);

        for (let i = 0; i < mids.length; i++) {
          const p = renderPts[i + 1];
          const m = mids[i];
          const prev = renderPts[i];
          const normal = getNormal(prev, p);
          const progress = i / mids.length;
          const phase = t * (L.baseSpeed * freqMul) + L.offset + progress * TAU * 1.5;
          const amp = L.baseAmp * ampMul * (0.2 + 0.8 * progress);
          const ox = normal.x * Math.sin(phase) * amp;
          const oy = normal.y * Math.sin(phase) * amp;

          const cx = p.x;
          const cy = p.y;
          const mx = m.x + ox;
          const my = m.y + oy;

          ctx.quadraticCurveTo(cx, cy, mx, my);
        }

        // Taper: thinner near tail within last segment
        ctx.lineWidth = L.thickness;
        ctx.stroke();
      }

      // Head glow near cursor only
      const head = renderPts[renderPts.length - 1];
      const glow = ctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, 18);
      glow.addColorStop(0, 'rgba(255,255,255,0.18)');
      glow.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(head.x, head.y, 18, 0, TAU);
      ctx.fill();

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onTouch);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  if (typeof document === 'undefined') return null;

  const canvasEl = (
    <canvas
      ref={canvasRef}
      className="cursor-trail-pointer"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 2147483647,
      }}
    />
  );

  return createPortal(canvasEl, document.body);
}

export default CursorTrail;
