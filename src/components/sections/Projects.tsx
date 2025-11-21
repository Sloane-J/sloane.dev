import React, { useEffect, useRef, useState, useCallback, memo } from "react";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

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
      { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" },
      { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" },
      { src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop" },
      { src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop" },
      { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop" },
    ],
  },
  {
    title: "Grain & Gradient",
    description:
      "Grain & Gradient is a modern digital publication offering a blend of insightful and entertaining content across various topics, including technology, current affairs, entertainment, and more. The website features a range of articles.",
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
      { src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop" },
      { src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop" },
      { src: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop" },
      { src: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop" },
      { src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop" },
    ],
  },
  {
    title: "Q-Vault",
    description:
      "Q-Vault is a web-based platform designed to streamline the examination process for educational institutions. It offers a comprehensive suite of tools for administrators, educators, and students, aiming to enhance efficiency, security, and user experience.",
    tags: ["Laravel", "Tailwind CSS", "Livewire"],
    liveUrl: "#",
    githubUrl: "https://github.com/Q-Vault",
    images: [
      { src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop" },
      { src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop" },
      { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop" },
      { src: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&h=600&fit=crop" },
      { src: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop" },
    ],
  },
  {
    title: "Peer Tech Konnect",
    description:
      "Peer Tech Konnect is a web based Learning Management System (LMS) designed to connect students, tutors, and administrators in a unified education environment. It offers user authentication, course enrollment, tutor approvals, discussions, assignments, quizzes, grading, analytics, and real-time email notifications.",
    tags: ["PHP", "HTML", "Bootstrap", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/LMS",
    images: [
      { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop" },
      { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop" },
      { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop" },
      { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop" },
      { src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=600&fit=crop" },
    ],
  },
];

// Memoized ImageSlider component with auto-play
const ImageSlider = memo(({ images, projectTitle, className = "", isVisible }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set([0]));
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef(null);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => {
      const newIndex = prev === 0 ? images.length - 1 : prev - 1;
      setLoadedImages(prevLoaded => new Set([...prevLoaded, newIndex]));
      return newIndex;
    });
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => {
      const newIndex = (prev + 1) % images.length;
      setLoadedImages(prevLoaded => new Set([...prevLoaded, newIndex]));
      return newIndex;
    });
  }, [images.length]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
    setLoadedImages(prevLoaded => new Set([...prevLoaded, index]));
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isVisible || isPaused || images.length <= 1) return;

    autoPlayRef.current = setInterval(() => {
      goToNext();
    }, 4000); // 4 seconds per image

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isVisible, isPaused, goToNext, images.length]);

  // Preload adjacent images
  useEffect(() => {
    if (isVisible && currentIndex !== null) {
      const nextIndex = (currentIndex + 1) % images.length;
      const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      setLoadedImages(prevLoaded => new Set([...prevLoaded, nextIndex, prevIndex]));
    }
  }, [currentIndex, isVisible, images.length]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 md:w-10 md:h-10 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 md:w-10 md:h-10 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </>
      )}

      <div className="w-full h-full overflow-hidden relative">
        <div
          className="flex w-full h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              {loadedImages.has(index) ? (
                <img
                  src={image.src}
                  alt={image.alt || `${projectTitle} screenshot ${index + 1}`}
                  className="w-full h-full object-contain object-center"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              ) : (
                <div className="w-full h-full bg-gray-800/50 flex items-center justify-center">
                  <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 px-2 md:px-3 py-1.5 md:py-2 bg-black/40 backdrop-blur-sm rounded-full">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-white w-4 h-1.5 md:w-6 md:h-2"
                  : "bg-white/50 hover:bg-white/75 w-1.5 h-1.5 md:w-2 md:h-2"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
});

ImageSlider.displayName = "ImageSlider";

// Memoized ProjectCard component
const ProjectCard = memo(({ project, index, sectionProgress, allProjects }) => {
  const cardStart = index / allProjects.length;
  const cardEnd = (index + 1) / allProjects.length;

  const isInRange =
    sectionProgress >= cardStart - 0.04 && sectionProgress < cardEnd + 0.04;

  // Skip expensive calculations if card is not near viewport
  if (!isInRange) {
    return null;
  }

  const localProgress = Math.max(
    0,
    Math.min(1, (sectionProgress - cardStart) / (cardEnd - cardStart))
  );

  // Optimized opacity and scale logic for 220vh
  let opacity = 0;
  let scale = 0.95;

  if (sectionProgress < cardStart) {
    opacity = 0;
    scale = 0.95;
  } else if (
    sectionProgress >= cardStart &&
    sectionProgress < cardStart + 0.035
  ) {
    const fadeInProgress = (sectionProgress - cardStart) / 0.035;
    opacity = fadeInProgress;
    scale = 0.95 + fadeInProgress * 0.05;
  } else if (
    sectionProgress >= cardStart + 0.035 &&
    sectionProgress < cardEnd - 0.18
  ) {
    opacity = 1;
    scale = 1;
  } else if (sectionProgress >= cardEnd - 0.18 && sectionProgress < cardEnd) {
    const fadeOutProgress = (sectionProgress - (cardEnd - 0.18)) / 0.18;
    opacity = 1 - fadeOutProgress;
    scale = 1 - fadeOutProgress * 0.05;
  } else {
    opacity = 0;
    scale = 0.95;
  }

  const isActive =
    sectionProgress >= cardStart + 0.035 && sectionProgress < cardEnd - 0.18;

  // Fast, nearly simultaneous text reveal animations
  const baseReveal = Math.max(0, Math.min(1, (localProgress - 0.02) * 10));
  const titleReveal = baseReveal;
  const descReveal = Math.max(0, Math.min(1, (localProgress - 0.03) * 10));
  const tagsReveal = Math.max(0, Math.min(1, (localProgress - 0.04) * 10));
  const buttonsReveal = Math.max(0, Math.min(1, (localProgress - 0.05) * 10));

  // Vertical slide number transition
  const getNumberSlide = () => {
    const currentNum = index + 1;
    const nextNum = index + 2 > allProjects.length ? 1 : index + 2;
    const prevNum = index === 0 ? allProjects.length : index;

    if (sectionProgress >= cardEnd - 0.18 && sectionProgress < cardEnd) {
      const slideProgress = (sectionProgress - (cardEnd - 0.18)) / 0.18;
      return {
        currentTranslate: -slideProgress * 100,
        nextTranslate: (1 - slideProgress) * 100,
        showNext: true,
        current: currentNum,
        next: nextNum,
      };
    } else if (
      sectionProgress >= cardStart &&
      sectionProgress < cardStart + 0.035
    ) {
      const slideProgress = (sectionProgress - cardStart) / 0.035;
      return {
        currentTranslate: (1 - slideProgress) * 100 - 100,
        nextTranslate: -slideProgress * 100 - 100,
        showNext: true,
        current: currentNum,
        next: prevNum,
      };
    }

    return {
      currentTranslate: 0,
      nextTranslate: 100,
      showNext: false,
      current: currentNum,
      next: nextNum,
    };
  };

  const numberSlide = getNumberSlide();

  return (
    <div
      className="absolute inset-0 w-full h-full transition-all duration-300"
      style={{
        transform: `scale(${scale})`,
        opacity: opacity,
        zIndex: isInRange ? 10 : 1,
        pointerEvents: isActive ? "auto" : "none",
        willChange: isActive ? "transform, opacity" : "auto",
      }}
    >
      <div className="w-full h-full bg-[#080807] overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 h-full flex items-center py-8 md:py-0">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-20 items-center w-full">
            {/* Left Side - Content */}
            <div className="space-y-3 md:space-y-6">
              {/* Project Number - Vertical Slide */}
              <div
                className="overflow-hidden h-[72px] md:h-[96px] lg:h-[144px] relative"
                style={{
                  opacity: titleReveal,
                }}
              >
                <div
                  className="transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateY(${numberSlide.currentTranslate}%)`,
                  }}
                >
                  <span className="text-6xl md:text-8xl lg:text-9xl font-bold text-white/10 leading-none block tabular-nums">
                    {String(numberSlide.current).padStart(2, "0")}
                  </span>
                </div>
                {numberSlide.showNext && (
                  <div
                    className="absolute top-0 left-0 transition-transform duration-500 ease-out"
                    style={{
                      transform: `translateY(${numberSlide.nextTranslate}%)`,
                    }}
                  >
                    <span className="text-6xl md:text-8xl lg:text-9xl font-bold text-white/10 leading-none block tabular-nums">
                      {String(numberSlide.next).padStart(2, "0")}
                    </span>
                  </div>
                )}
              </div>

              {/* Project Title */}
              <div
                className="overflow-hidden"
                style={{
                  transform: `translateY(${(1 - titleReveal) * 20}px)`,
                  opacity: titleReveal,
                }}
              >
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {project.title}
                </h2>
              </div>

              {/* Project Description - Hidden on mobile */}
              <div
                className="overflow-hidden hidden md:block"
                style={{
                  transform: `translateY(${(1 - descReveal) * 15}px)`,
                  opacity: descReveal,
                }}
              >
                <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed max-w-xl font-inter">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div
                className="flex flex-wrap gap-1.5 md:gap-2 font-inter"
                style={{
                  transform: `translateY(${(1 - tagsReveal) * 10}px)`,
                  opacity: tagsReveal,
                }}
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 md:px-3 py-1 md:py-1.5 text-xs md:text-sm bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-2 md:gap-3 font-inter"
                style={{
                  transform: `translateY(${(1 - buttonsReveal) * 5}px)`,
                  opacity: buttonsReveal,
                }}
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all border border-white/20 text-white text-xs md:text-sm font-medium hover:scale-105 duration-300"
                >
                  <Github className="w-3 h-3 md:w-4 md:h-4" />
                  <span>View Code</span>
                </a>
                {project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full hover:from-orange-500 hover:to-orange-300 transition-all text-white text-xs md:text-sm font-medium hover:scale-105 duration-300"
                  >
                    <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Side - Image Slider */}
            <div
              className="relative h-[300px] md:h-[400px] lg:h-[500px]"
              style={{
                transform: `scale(${0.95 + titleReveal * 0.05})`,
                opacity: titleReveal,
              }}
            >
              <ImageSlider
                images={project.images}
                projectTitle={project.title}
                className="w-full h-full rounded-xl md:rounded-2xl"
                isVisible={isActive}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";

const Projects = () => {
  const containerRef = useRef(null);
  const [sectionProgress, setSectionProgress] = useState(0);
  const rafRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const sectionTop = rect.top;
    const sectionHeight = rect.height;
    const windowHeight = window.innerHeight;

    if (sectionTop > windowHeight || sectionTop + sectionHeight < 0) {
      return;
    }

    const scrolled = windowHeight - sectionTop;
    const scrollableHeight = sectionHeight + windowHeight;
    const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));

    setSectionProgress(progress);
  }, []);

  useEffect(() => {
    const throttledScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll]);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#080807] py-10 md:py-20"
      style={{ minHeight: `${projects.length * 220}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="relative w-full h-full">
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              project={project}
              index={index}
              sectionProgress={sectionProgress}
              allProjects={projects}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
