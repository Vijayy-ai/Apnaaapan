import React, { useState } from 'react';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Project data with different categories
  const projects = [
    {
      id: 1,
      title: "Reach Talent",
      description: "Flexible Talent Management Solution",
      image: "/images/work/Tsczi1maYoHHENT2Fu6ychsMM 1.png",
      alt: "Reach Talent Banner",
      categories: ["Brand identity", "UI/UX"],
      tags: ["Branding", "UI", "UX"]
    },
    {
      id: 2,
      title: "Prive E-commerce",
      description: "Powerful Subscription Management Platform",
      image: "/images/work/LMpi7r3NpJLF313efaiD60o18jw 1.png",
      alt: "Prive E-commerce Interface",
      categories: ["E-commerce", "Web development"],
      tags: ["E-commerce", "Web", "UI"]
    },
    {
      id: 3,
      title: "Creative Brand Studio",
      description: "Comprehensive Brand Identity Design",
      image: "/images/work/Tsczi1maYoHHENT2Fu6ychsMM 1.png",
      alt: "Creative Brand Studio",
      categories: ["Brand identity", "Graphic Design"],
      tags: ["Branding", "Design", "Creative"]
    },
    {
      id: 4,
      title: "Social Media Hub",
      description: "Integrated Marketing Campaign Platform",
      image: "/images/work/LMpi7r3NpJLF313efaiD60o18jw 1.png",
      alt: "Social Media Hub",
      categories: ["Social Media & Marketing", "UI/UX"],
      tags: ["Marketing", "Social", "UI"]
    },
    {
      id: 5,
      title: "WebFlow Pro",
      description: "Advanced Web Development Solutions",
      image: "/images/work/Tsczi1maYoHHENT2Fu6ychsMM 1.png",
      alt: "WebFlow Pro",
      categories: ["Web development", "UI/UX"],
      tags: ["Web", "Development", "UI"]
    },
    {
      id: 6,
      title: "Design System Pro",
      description: "Comprehensive UI/UX Design System",
      image: "/images/work/LMpi7r3NpJLF313efaiD60o18jw 1.png",
      alt: "Design System Pro",
      categories: ["UI/UX", "Graphic Design"],
      tags: ["UI", "UX", "Design"]
    }
  ];

  // Filter categories
  const categories = ["All", "Brand identity", "UI/UX", "Web development", "E-commerce", "Social Media & Marketing", "Graphic Design"];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter));

  // Handle filter button click
  const handleFilterClick = (category) => {
    setActiveFilter(category);
  };

  return (
    <>
      {/* Our Recent Work Section */}
      <section className="relative py-32 px-8">
        {/* Background decorative lines */}
        <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
          <div className="absolute left-8 top-0 w-px h-full bg-gray-300">
            <div className="absolute left-0 top-0 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-300"></div>
          </div>
          <div className="absolute right-8 top-0 w-px h-full bg-gray-300">
            <div className="absolute right-0 top-0 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-300"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8">
            <span className="text-[#1a365d]">Our recent</span>{' '}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              work
            </span>
          </h1>
          
          {/* Subtitle */}
          <div className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto space-y-4">
            <p>Discover our latest creations, where innovation and design excellence</p>
            <p>come together to deliver impactful solutions and drive success.</p>
            <p>and drive success.</p>
          </div>
        </div>
      </section>

      {/* Portfolio Filter Section */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filter Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterClick(category)}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-200 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {filteredProjects.map((project) => (
              <div key={project.id} className="animate-fadeIn">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video bg-gray-200 relative">
                    <img 
                      src={project.image} 
                      alt={project.alt} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                                       <div className="flex flex-wrap gap-2">
                       {project.tags.map((tag, index) => (
                         <span 
                           key={index}
                           className="px-3 py-1 bg-orange-500 text-white text-xs rounded-full"
                         >
                           {tag}
                         </span>
                       ))}
                     </div>
                </div>
              </div>
            ))}
          </div>

          {/* No projects message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No projects found for the selected category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Work;
