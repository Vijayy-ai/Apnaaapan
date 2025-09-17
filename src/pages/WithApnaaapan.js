import React from 'react';

const WithApnaaapan = () => {
  const [galleryImages, setGalleryImages] = React.useState([]);

  const fileInputRef = React.useRef(null);

  const handleAddClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleFilesSelected = (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;
    const urls = files.map((f) => URL.createObjectURL(f));
    setGalleryImages((prev) => prev.concat(urls).slice(0, 8));
    e.target.value = '';
  };

  return (
    <div className="min-h-screen bg-[#EFE7D5] px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Hero Card */}
        <div className="relative rounded-[32px] bg-[#F6F0E0] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-white/40">
          {/* Global inner softness/vignette */}
          <div className="pointer-events-none absolute inset-0"
               style={{
                 background: 'radial-gradient(120% 80% at 50% 45%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.75) 28%, rgba(255,255,255,0.35) 48%, rgba(255,255,255,0) 62%)',
                 mixBlendMode: 'normal'
               }} />

          {/* Top-left bluish corner with soft inner white */}
          <div className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full"
               style={{background: 'radial-gradient( circle at 30% 30%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0) 60%)', filter: 'blur(2px)'}} />
          <div className="pointer-events-none absolute -left-12 -top-12 h-48 w-48 rounded-full opacity-90"
               style={{background: 'radial-gradient(circle at 35% 35%, #88A4E6 0%, rgba(136,164,230,0.6) 35%, rgba(136,164,230,0.0) 62%)', filter: 'blur(1.5px)'}} />

          {/* Bottom-left big yellow quarter-circle with white core */}
          <div className="pointer-events-none absolute -left-40 bottom-[-180px] h-[520px] w-[520px] rounded-full"
               style={{background: 'radial-gradient(circle at 55% 55%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.0) 40%)', filter: 'blur(4px)'}} />
          <div className="pointer-events-none absolute -left-36 bottom-[-200px] h-[560px] w-[560px] rounded-full"
               style={{background: 'radial-gradient(circle at 55% 55%, #FFC100 10%, rgba(255,193,0,0.85) 35%, rgba(255,193,0,0.35) 55%, rgba(255,193,0,0) 70%)', filter: 'blur(8px)'}} />

          {/* Right big orange ellipse with soft white center and feathered edge */}
          <div className="pointer-events-none absolute -right-28 -top-6 h-[640px] w-[460px] rounded-full"
               style={{background: 'radial-gradient(ellipse at 45% 45%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.0) 45%)', filter: 'blur(6px)'}} />
          <div className="pointer-events-none absolute -right-24 -top-8 h-[640px] w-[460px] rounded-full"
               style={{background: 'radial-gradient(ellipse at 50% 50%, rgba(240,95,40,0.95) 25%, rgba(240,95,40,0.65) 45%, rgba(240,95,40,0.25) 60%, rgba(240,95,40,0) 72%)', filter: 'blur(6px)'}} />

          {/* Content */}
          <div className="relative z-10 px-6 sm:px-12 lg:px-24 py-20 md:py-28 text-center">
            <h1 className="font-serif text-[#0D1B2A] leading-tight mx-auto max-w-3xl"
                style={{fontWeight: 700, fontSize: 'clamp(36px,5vw,72px)'}}>
              Where Curiosity
            </h1>
            <h2 className="font-serif leading-tight mx-auto max-w-3xl mt-3"
                style={{fontWeight: 700, fontSize: 'clamp(36px,5vw,72px)',
                        background: 'linear-gradient(90deg, #E65522 0%, #F9C219 100%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent'}}>
              Finds Its Tribe
            </h2>

            <p className="mt-8 text-[#5B5B5B] max-w-xl mx-auto leading-relaxed"
               style={{fontSize: 'clamp(14px,2.2vw,18px)'}}>
              Apnaaapan is a space where curiosity thrives and connections grow
            </p>

            <div className="mt-10">
              <a href="#join" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-white font-semibold shadow-lg hover:shadow-xl active:scale-[0.99] transition"
                 style={{background: 'linear-gradient(90deg, #E86C21 0%, #F8C31A 100%)'}}>
                <span className="text-white">⭐</span>
                <span>Be a Part</span>
              </a>
            </div>
          </div>

          {/* Card padding bottom to show gradient fade */}
          <div className="h-10" />
        </div>
      </div>

      {/* Concentric Circles Section */}
      <section className="mt-20">
        <div className="relative mx-auto" style={{width: 'min(740px, 88vw)', height: 'min(740px, 88vw)'}}>
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full"
               style={{
                 background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.35) 22%, rgba(29,12,69,0.65) 52%, rgba(29,12,69,1) 60%, rgba(29,12,69,0.85) 66%, rgba(255,255,255,0.75) 90%, rgba(255,255,255,0) 100%)',
                 filter: 'blur(0.5px)'
               }} />

          {/* Deep blue ring */}
          <div className="absolute inset-[11%] rounded-full"
               style={{
                 background: 'radial-gradient(circle, #2D2A7A 56%, #1E1A52 60%, rgba(14,8,40,0.95) 78%, rgba(14,8,40,0.6) 100%)'
               }} />

          {/* Middle cyan ring */}
          <div className="absolute inset-[21%] rounded-full overflow-hidden">
            <div className="absolute inset-0"
                 style={{
                   background: 'radial-gradient(circle at 50% 50%, rgba(0,188,212,0.28) 28%, rgba(0,188,212,0.14) 52%, rgba(0,188,212,0.08) 68%, rgba(0,188,212,0.0) 82%)'
                 }} />
            <div className="absolute inset-[2%] rounded-full"
                 style={{
                   border: '1px solid rgba(255,255,255,0.35)'
                 }} />
          </div>

          {/* Bright aqua ring */}
          <div className="absolute inset-[30.5%] rounded-full"
               style={{
                 background: 'radial-gradient(circle, rgba(0,196,255,0.75) 33%, rgba(0,196,255,0.35) 53%, rgba(0,196,255,0.14) 70%, rgba(0,196,255,0) 86%)'
               }} />

          {/* Inner green disc */}
          <div className="absolute inset-[41.5%] rounded-full flex items-center justify-center"
               style={{
                 background: 'radial-gradient(circle at 50% 35%, #39C7A5 0%, #2FB9A2 45%, #169D8E 78%)',
                 boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.45), 0 20px 50px rgba(0,0,0,0.22)'
               }}>
            <div className="text-white text-[clamp(26px,4.5vw,52px)] font-serif drop-shadow-lg">What</div>
          </div>

          {/* How label - sits on cyan ring */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[26%] text-white text-[clamp(20px,3.2vw,36px)] font-serif drop-shadow-md">How</div>

          {/* WHY label - sits on outer ring */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[6%] text-white/90 text-[clamp(22px,3.6vw,44px)] font-serif drop-shadow">WHY</div>

          {/* Speech bubble - top right */}
          <div className="absolute -top-1 right-[6%] bg-white rounded-2xl shadow-xl w-[min(340px,74vw)] p-4">
            <div className="absolute -bottom-3 right-12 w-0 h-0 border-l-[12px] border-l-transparent border-t-[14px] border-t-white border-r-[12px] border-r-transparent" />
            <p className="text-[#5B5B5B] leading-relaxed text-[15px]">Curiosity is the foundation of every great idea, innovation, and experience</p>
          </div>

          {/* Speech bubble - left middle */}
          <div className="absolute left-[-2%] top-[46%] -translate-y-1/2 bg-white rounded-2xl shadow-xl w-[min(360px,76vw)] p-4">
            <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[14px] border-l-white" />
            <p className="text-[#5B5B5B] leading-relaxed text-[15px]">By building a community of curious individuals... offline meet-ups, & more</p>
          </div>

          {/* Speech bubble - bottom right */}
          <div className="absolute -bottom-6 right-[10%] bg-white rounded-2xl shadow-xl w-[min(340px,74vw)] p-4">
            <div className="absolute -top-3 left-12 w-0 h-0 border-l-[12px] border-l-transparent border-b-[14px] border-b-white border-r-[12px] border-r-transparent" />
            <p className="text-[#5B5B5B] leading-relaxed text-[15px]">Curiosity is the foundation of every great idea, innovation, and experience</p>
          </div>
        </div>
      </section>

      

      {/* Curiosity Manifesto Section */}
      <section className="mt-24 mb-24">
        <div className="max-w-6xl mx-auto text-center px-2">
          <h3 className="font-serif text-[#0D1B2A] mb-10" style={{fontWeight:700, fontSize:'clamp(28px,3.5vw,44px)'}}>
            The Curiosity Manifesto
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 place-items-center">
            {/* Card: What */}
            <div className="rounded-3xl w-[min(340px,86vw)] h-[420px] md:h-[440px] flex items-center justify-center relative shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
                 style={{background:'#E24E15'}}>
              {/* quotes */}
              <div className="absolute left-6 top-5 text-white/90 select-none" style={{fontSize:'54px', lineHeight:1}}>“”</div>
              <div className="absolute right-6 bottom-5 text-white/90 rotate-180 select-none" style={{fontSize:'54px', lineHeight:1}}>“”</div>
              <div className="text-white font-serif" style={{fontSize:'clamp(26px,3.2vw,40px)'}}>What</div>
            </div>

            {/* Card: Why */}
            <div className="rounded-3xl w-[min(340px,86vw)] h-[420px] md:h-[440px] flex items-center justify-center relative shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
                 style={{background:'#5C80C3'}}>
              <div className="absolute left-6 top-5 text-white/90 select-none" style={{fontSize:'54px', lineHeight:1}}>“”</div>
              <div className="absolute right-6 bottom-5 text-white/90 rotate-180 select-none" style={{fontSize:'54px', lineHeight:1}}>“”</div>
              <div className="text-white font-serif" style={{fontSize:'clamp(26px,3.2vw,40px)'}}>Why</div>
            </div>

            {/* Card: How */}
            <div className="rounded-3xl w-[min(340px,86vw)] h-[420px] md:h-[440px] flex items-center justify-center relative shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
                 style={{background:'#F2BC09'}}>
              <div className="absolute left-6 top-5 text-white/90 select-none" style={{fontSize:'54px', lineHeight:1}}>“”</div>
              <div className="absolute right-6 bottom-5 text-white/90 rotate-180 select-none" style={{fontSize:'54px', lineHeight:1}}>“”</div>
              <div className="text-white font-serif" style={{fontSize:'clamp(26px,3.2vw,40px)'}}>How</div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog / Stories Section */}
      <section className="mt-8 mb-28">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          {/* Header row */}
          <div className="flex items-baseline justify-between mb-6">
            <div>
              <h3 className="font-serif text-[#0D1B2A]" style={{fontWeight:700, fontSize:'clamp(28px,3.8vw,48px)'}}>
                Blog / Stories
              </h3>
              <p className="text-[#353535] opacity-70 mt-2" style={{fontSize:'clamp(13px,2vw,16px)'}}>
                Lorem ipsum is placeholder text commonly
              </p>
            </div>
            <a
              href="/blog"
              className="text-[#D24E1D] underline underline-offset-4 hover:opacity-80"
              style={{fontSize:'clamp(14px,2vw,18px)'}}
            >
              See All
            </a>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[0,1,2].map((idx) => (
              <article key={idx} className="group">
                <div className="rounded-xl bg-white/70 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] overflow-hidden">
                  <div className="h-[360px] bg-white rounded-xl"></div>
                </div>
                <div className="mt-4 text-[#6F6F6F] text-sm">10 Min</div>
                <h4 className="mt-2 font-serif text-[#0D1B2A] leading-snug"
                    style={{fontWeight:600, fontSize:'clamp(18px,2.4vw,22px)'}}>
                  The Power of Social Media...
                </h4>
                <p className="mt-2 text-[#6F6F6F] text-sm leading-relaxed max-w-md">
                  Discover how social media can shape your brand's voice, build real connections, and drive meaningful gro...
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="mb-28">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 items-center">
          {/* Left column: title + button (centered vertically) */}
          <div className="pl-2 md:justify-self-start">
            <h3 className="font-serif text-[#0D1B2A] mb-6" style={{fontWeight:700, fontSize:'clamp(32px,4vw,56px)'}}>
              Gallery
            </h3>
            <button onClick={handleAddClick}
                    className="inline-flex items-center gap-3 rounded-[16px] px-6 py-4 text-white font-semibold shadow-md hover:shadow-lg active:scale-[0.99] transition"
                    style={{background:'linear-gradient(90deg,#E86C21 0%, #F6BE18 100%)'}}>
              <span className="bg-white/20 rounded-md p-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5z" stroke="white" strokeWidth="1.5"/>
                  <path d="M7 16l3-3 2 2 4-4 3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span>Add Yours</span>
            </button>
            <input ref={fileInputRef} type="file" accept="image/*" multiple className="hidden" onChange={handleFilesSelected} />
          </div>

          {/* Grid 2x4 with quotes anchored to this box */}
          <div className="relative">
            {/* Decorative quotes positioned to match mock */}
            <div className="absolute -top-6 -left-6 text-[#D24E1D] select-none" style={{fontSize:'52px'}}>“</div>
            <div className="absolute -bottom-8 -right-2 text-[#D24E1D] select-none rotate-180" style={{fontSize:'52px'}}>“</div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({length: 8}).map((_, i) => {
              const img = galleryImages[i];
              return (
                <div key={i} className="rounded-xl border border-black/30 bg-white/70 shadow-sm overflow-hidden h-[220px] sm:h-[240px]">
                  {img ? (
                    <img src={img} alt={`Gallery ${i+1}`} className="w-full h-full object-cover" />
                  ) : null}
                </div>
              );
            })}
            </div>
          </div>
        </div>
      </section>

      {/* What's Next Section */}
      <section className="mt-2 mb-24">
        <div className="max-w-6xl mx-auto px-2">
          <h3 className="font-serif text-[#0D1B2A] mb-8" style={{fontWeight:700, fontSize:'clamp(32px,4vw,56px)'}}>
            What’s Next
          </h3>

          {/* Timeline */}
          <div className="relative grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6">
            {/* Full-height dashed line spanning all events */}
            <div className="hidden md:block relative md:row-span-2 pointer-events-none">
              <div className="absolute left-[14px] top-2 bottom-2 border-l-2 border-dashed border-black/25" />
            </div>

            {/* Row 1: Date + Card */}
            <div className="hidden md:flex items-center relative pl-8">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-black/70" />
              <span className="text-[#2E2E2E]">Aug 20</span>
            </div>
            <div>
              {/* Card 1 */}
              <div className="relative rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-black/10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-6 py-6">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl leading-none">😍</div>
                    <div>
                      <div className="font-serif text-[#0D1B2A]" style={{fontWeight:700, fontSize:'clamp(20px,2.6vw,28px)'}}>
                        Curiosity Meetup at HQ
                      </div>
                      <div className="text-[#5B5B5B] mt-1" style={{fontSize:'14px'}}>By Apnaaapan Team</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <span className="inline-flex items-center rounded-full bg-[#E84F1F] text-white px-3 py-1 text-sm font-semibold shadow-sm">04:30 PM</span>
                    <a href="#rsvp1" className="ml-auto sm:ml-0 inline-flex items-center gap-2 rounded-full px-5 py-2 text-white font-semibold shadow-md hover:shadow-lg active:scale-[0.99] transition" style={{background:'linear-gradient(90deg,#E86C21 0%, #F6BE18 100%)'}}>
                      <span className="text-white">➤</span>
                      <span>RSVP NOW</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Date + Card */}
            <div className="hidden md:flex items-center relative pl-8">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-black/70" />
              <span className="text-[#2E2E2E]">Aug 25</span>
            </div>
            <div>
              {/* Card 2 */}
              <div className="relative rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-black/10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-6 py-6">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl leading-none">💬</div>
                    <div>
                      <div className="font-serif text-[#0D1B2A]" style={{fontWeight:700, fontSize:'clamp(20px,2.6vw,28px)'}}>
                        Storytelling Workshop
                      </div>
                      <div className="text-[#5B5B5B] mt-1" style={{fontSize:'14px'}}>By Apnaaapan Team</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <span className="inline-flex items-center rounded-full bg-[#E84F1F] text-white px-3 py-1 text-sm font-semibold shadow-sm">01:00 PM</span>
                    <a href="#rsvp2" className="ml-auto sm:ml-0 inline-flex items-center gap-2 rounded-full px-5 py-2 text-white font-semibold shadow-md hover:shadow-lg active:scale-[0.99] transition" style={{background:'linear-gradient(90deg,#E86C21 0%, #F6BE18 100%)'}}>
                      <span className="text-white">➤</span>
                      <span>RSVP NOW</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Row spanning right column */}
            <div className="md:col-start-2 flex justify-center pt-2">
              <a href="#suggest" className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-white font-semibold shadow-md hover:shadow-lg active:scale-[0.99] transition" style={{background:'linear-gradient(90deg,#E86C21 0%, #F6BE18 100%)'}}>
                <span>Suggest an Event</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Curiosity Challenge - final section */}
      <section className="mt-10 mb-28">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <h3 className="text-center font-serif text-[#0D1B2A] mb-10" style={{fontWeight:700, fontSize:'clamp(32px,4vw,56px)'}}>
            Curiosity Challenge
          </h3>

          <div className="grid grid-cols-1 md:[grid-template-columns:minmax(0,1fr)_minmax(0,1.6fr)] gap-8 items-start">
            {/* Left Card */}
            <div className="rounded-[20px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-black/10 p-8 md:p-9 md:min-h-[260px]">
              <div className="font-serif text-[#0D1B2A] leading-tight mb-8" style={{fontWeight:700, fontSize:'clamp(24px,3vw,34px)'}}>
                <div>What are you</div>
                <div>curious about today?</div>
              </div>
              <button className="inline-flex items-center justify-center w-[200px] h-[46px] rounded-full text-white font-semibold shadow-md hover:shadow-lg active:scale-[0.99] transition"
                      style={{background:'linear-gradient(90deg,#E86C21 0%, #F6BE18 100%)'}}>
                I’m In!
              </button>
            </div>

            {/* Right Card */}
            <div className="rounded-[20px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-black/10 p-8 md:p-10 md:min-h-[360px]">
              <div className="font-serif text-[#0D1B2A] leading-tight mb-4" style={{fontWeight:700, fontSize:'clamp(24px,3vw,34px)'}}>
                Be a Part!
              </div>
              <ul className="text-[#4F4F4F] space-y-2 mb-5" style={{fontSize:'14px'}}>
                <li className="flex items-start gap-2"><span className="mt-[6px] inline-block w-1.5 h-1.5 rounded-full bg-[#111]" /> Connect with curious minds</li>
                <li className="flex items-start gap-2"><span className="mt-[6px] inline-block w-1.5 h-1.5 rounded-full bg-[#111]" /> Participate in meaningful discussions</li>
                <li className="flex items-start gap-2"><span className="mt-[6px] inline-block w-1.5 h-1.5 rounded-full bg-[#111]" /> Contribute and lead projects</li>
              </ul>

              {/* Roles */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-5 text-sm text-[#222]">
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <span className="w-2 h-2 rounded-full bg-[#E86C21]" /> Member
                </label>
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <span className="w-2 h-2 rounded-full bg-[#C0C0C0]" /> Collaborator
                </label>
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <span className="w-2 h-2 rounded-full bg-[#C0C0C0]" /> Volunteer
                </label>
              </div>

              {/* Email + CTA */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 w-full rounded-full border border-black/10 bg-white px-3 py-2.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#9E9E9E]">
                      <path d="M4 6h16v12H4z" stroke="#9E9E9E" strokeWidth="1.5"/>
                      <path d="M4 7l8 6 8-6" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <input type="email" placeholder="Email address" className="w-full outline-none text-sm placeholder-[#9E9E9E]" />
                  </div>
                </div>
                <button className="sm:w-[170px] inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-white font-semibold shadow-md hover:shadow-lg active:scale-[0.99] transition"
                        style={{background:'linear-gradient(90deg,#E86C21 0%, #F6BE18 100%)'}}>
                  Join now
                  <span>➝</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WithApnaaapan;


