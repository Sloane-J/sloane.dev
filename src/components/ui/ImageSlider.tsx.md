import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: "Affiliate Nexus",
    description:
      "Affiliate Nexus is a platform designed to empower individuals through personalized coaching in affiliate marketing and lifestyle optimization. It offers services such as affiliate marketing training, life coaching sessions, and self-paced online courses.",
    tags: [
      "React.js",
      "TypeScript",
      "Astro.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
    liveUrl: "https://affiliate-nexus.vercel.app/",
    githubUrl: "https://github.com/fairy-app",
    images: [
      { src: "/images/affiliate-nexus-1.png" },
      { src: "/images/affiliate-nexus-2.png" },
      { src: "/images/affiliate-nexus-3.png" },
      { src: "/images/affiliate-nexus-4.png" },
      { src: "/images/affiliate-nexus-5.png" },
    ],
  },
  {
    title: "Grain and Gradient",
    description: "Grain & Gradient is a modern digital publication offering a blend of insightful and entertaining content across various topics, including technology, current affairs, entertainment, and more. The website features a range of articles.",
    tags: [
      "React.js",
      "TypeScript",
      "Astro.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
    liveUrl: "http://grainandgradient.vercel.app/",
    githubUrl: "https://github.com/Sloane-J/Grain-Gradient",
    images: [
      { src: "/images/affiliate-nexus-1.png" },
      { src: "/images/affiliate-nexus-2.png" },
      { src: "/images/affiliate-nexus-3.png" },
      { src: "/images/affiliate-nexus-4.png" },
      { src: "/images/affiliate-nexus-5.png" },
    ],
  },
  {
    title: "Q-Vault",
    description: "Q-Vault is a web-based platform designed to streamline the examination process for educational institutions. It offers a comprehensive suite of tools for administrators, educators, and students, aiming to enhance efficiency, security, and user experience.",
    tags: ["Laravel", "Tailwind CSS", "Livewire"],
    liveUrl: "#",
    githubUrl: "https://github.com/Q-Vault",
    images: [
      { src: "/images/affiliate-nexus-1.png" },
      { src: "/images/affiliate-nexus-2.png" },
      { src: "/images/affiliate-nexus-3.png" },
      { src: "/images/affiliate-nexus-4.png" },
      { src: "/images/affiliate-nexus-5.png" },
    ],
  },
  {
    title: "Peer Tech Konnect",
    description: "Peer Tech Konnect is a web based Learning Management System (LMS) designed to connect students, tutors, and administrators in a unified education environment. It offers user authentication, course enrollment, tutor approvals, discussions, assignments, quizzes, grading, analytics, and real-time email notifications.",
    tags: ["PHP", "HTML", "Bootstrap", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/LMS",
    images: [
      { src: "/images/affiliate-nexus-1.png" },
      { src: "/images/affiliate-nexus-2.png" },
      { src: "/images/affiliate-nexus-3.png" },
      { src: "/images/affiliate-nexus-4.png" },
      { src: "/images/affiliate-nexus-5.png" },
    ],
  },
];

const ImageSlider = ({ images, projectTitle, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState({});
  const sliderRef = useRef(null);

  const goToPrevious = useCallback(() => {
    setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  }, [images.length]);

  const handleImageLoad = useCallback((index) => {
    setImageLoaded(prev => ({ ...prev, [index]: true }));
  }, []);

  return (
    <div className={`relative w-full h-full rounded-2xl overflow-hidden group ${className}`}>
      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Image container */}
      <div className="w-full h-full overflow-hidden relative">
        <div
          ref={sliderRef}
          className="flex w-full h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 relative"
            >
              {!imageLoaded[index] && (
                <div className="absolute inset-0 bg-gray-800/50 flex items-center justify-center z-10">
                  <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                </div>
              )}
              <img
                src={image.src}
                alt={image.alt || `${projectTitle} screenshot ${index + 1}`}
                className="w-full h-full object-cover object-center"
                loading={index === 0 ? "eager" : "lazy"}
                onLoad={() => handleImageLoad(index)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? "bg-white w-8 h-2" 
                  : "bg-white/50 hover:bg-white/75 w-2 h-2"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectSection = ({ project, index, isActive, scrollProgress }) => {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);

  // Calculate display number based on scroll progress
  const displayNumber = Math.max(1, Math.min(projects.length, Math.floor(scrollProgress * projects.length) + 1));

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black transition-all duration-1000 ${
        isActive ? 'opacity-100' : 'opacity-95'
      }`}
      data-project={index}
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-orange-400/10 to-orange-600/5 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-purple-600/5 blur-2xl rounded-full animate-pulse" />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Project Number with morphing effect */}
            <div className="overflow-hidden">
              <span 
                ref={numberRef}
                className="text-8xl lg:text-9xl font-bold text-white/10 leading-none block transition-all duration-700 ease-out"
                style={{
                  transform: isActive ? 'translateY(0)' : 'translateY(50px)',
                  opacity: isActive ? 1 : 0.5
                }}
              >
                {String(isActive ? index + 1 : displayNumber).padStart(2, '0')}
              </span>
            </div>

            {/* Project Title */}
            <div className="overflow-hidden">
              <h2 
                className="text-4xl lg:text-6xl font-bold text-white leading-tight transition-all duration-700 ease-out delay-100"
                style={{
                  transform: isActive ? 'translateY(0)' : 'translateY(30px)',
                  opacity: isActive ? 1 : 0.7
                }}
              >
                {project.title}
              </h2>
            </div>

            {/* Project Description */}
            <div className="overflow-hidden">
              <p 
                className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl transition-all duration-700 ease-out delay-200"
                style={{
                  transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isActive ? 1 : 0.8
                }}
              >
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div 
              className="flex flex-wrap gap-3 transition-all duration-700 ease-out delay-300"
              style={{
                transform: isActive ? 'translateY(0)' : 'translateY(15px)',
                opacity: isActive ? 1 : 0.7
              }}
            >
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-sm bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                  style={{
                    transitionDelay: `${300 + tagIndex * 50}ms`
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 transition-all duration-700 ease-out delay-500"
              style={{
                transform: isActive ? 'translateY(0)' : 'translateY(10px)',
                opacity: isActive ? 1 : 0.8
              }}
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all border border-white/20 text-white font-medium min-w-[180px] hover:scale-105 duration-300"
              >
                <Github className="w-5 h-5" />
                <span>View Code</span>
              </a>
              {project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full hover:from-orange-500 hover:to-orange-300 transition-all text-white font-medium min-w-[180px] hover:scale-105 duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Side - Image Slider */}
          <div className="relative">
            <div 
              className="aspect-[4/3] lg:aspect-[3/2] transition-all duration-700 ease-out delay-200"
              style={{
                transform: isActive ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
                opacity: isActive ? 1 : 0.8
              }}
            >
              <ImageSlider 
                images={project.images} 
                projectTitle={project.title}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const containerRef = useRef(null);
  const [activeProject, setActiveProject] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Calculate scroll progress (0 to 1)
      const scrollTop = -rect.top;
      const maxScroll = containerHeight - viewportHeight;
      const progress = Math.max(0, Math.min(1, scrollTop / maxScroll));
      
      setScrollProgress(progress);

      // Determine active project based on scroll position
      const projectIndex = Math.floor(progress * projects.length);
      const clampedIndex = Math.max(0, Math.min(projects.length - 1, projectIndex));
      
      if (clampedIndex !== activeProject) {
        setActiveProject(clampedIndex);
      }
    };

    // Throttle scroll events for performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', throttledScroll);
  }, [activeProject]);

  return (
    <div ref={containerRef} className="relative">
      {projects.map((project, index) => (
        <ProjectSection 
          key={`project-${index}`}
          project={project} 
          index={index} 
          isActive={activeProject === index}
          scrollProgress={scrollProgress}
        />
      ))}
    </div>
  );
};

export default Projects;