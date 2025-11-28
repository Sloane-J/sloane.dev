import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  memo,
} from "react";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

// --- Data ---
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
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop",
      },
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop",
      },
      {
        src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=675&fit=crop",
      },
    ],
  },
  {
    title: "Grain & Gradient",
    description:
      "Grain & Gradient is a modern digital publication offering a blend of insightful and entertaining content across various topics, including technology, current affairs, entertainment, and more.",
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
      {
        src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=675&fit=crop",
      },
      {
        src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=675&fit=crop",
      },
    ],
  },
  {
    title: "Q-Vault",
    description:
      "Q-Vault is a web-based platform designed to streamline the examination process for educational institutions. It offers a comprehensive suite of tools for administrators, educators, and students.",
    tags: ["Laravel", "Tailwind CSS", "Livewire"],
    liveUrl: "#",
    githubUrl: "https://github.com/Q-Vault",
    images: [
      {
        src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=675&fit=crop",
      },
      {
        src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=675&fit=crop",
      },
    ],
  },
  {
    title: "Peer Tech Konnect",
    description:
      "Peer Tech Konnect is a web based Learning Management System (LMS) designed to connect students, tutors, and administrators in a unified education environment.",
    tags: ["PHP", "HTML", "Bootstrap", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/LMS",
    images: [
      {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=675&fit=crop",
      },
      {
        src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=675&fit=crop",
      },
    ],
  },
];

// --- Sub Components ---

const ImageSlider = memo(({ images, projectTitle, isVisible }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef(null);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  useEffect(() => {
    if (!isVisible || isPaused || images.length <= 1) return;
    autoPlayRef.current = setInterval(goToNext, 4000);
    return () => clearInterval(autoPlayRef.current);
  }, [isVisible, isPaused, goToNext, images.length]);

  if (!images || images.length === 0) return null;

  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex w-full h-full transition-transform duration-500 ease-out will-change-transform"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 relative bg-gray-900"
          >
            <img
              src={image.src}
              alt={`${projectTitle} ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 backdrop-blur-sm rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 backdrop-blur-sm rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-6 bg-white" : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
});

ImageSlider.displayName = "ImageSlider";

const ProjectCard = memo(
  ({ project, index, sectionProgress, totalProjects }) => {
    const segmentSize = 1 / totalProjects;
    const start = index * segmentSize;
    const end = start + segmentSize;

    let localProgress = (sectionProgress - start) / segmentSize;

    if (localProgress < -0.5 || localProgress > 1.5) return null;

    const clampedProgress = Math.max(0, Math.min(1, localProgress));
    const isActive = clampedProgress > 0 && clampedProgress < 1;

    const opacity =
      localProgress < 0
        ? 0
        : localProgress < 0.2
        ? localProgress * 5
        : localProgress > 0.8
        ? (1 - localProgress) * 5
        : 1;

    const scale =
      localProgress < 0.2
        ? 0.9 + localProgress * 0.5
        : localProgress > 0.8
        ? 1 - (localProgress - 0.8) * 0.25
        : 1;

    const reveal = (threshold) =>
      Math.max(0, Math.min(1, (clampedProgress - threshold) * 8));

    const titleY = (1 - reveal(0.1)) * 40;
    const titleOp = reveal(0.1);

    const descY = (1 - reveal(0.15)) * 30;
    const descOp = reveal(0.15);

    const tagsY = (1 - reveal(0.2)) * 20;
    const tagsOp = reveal(0.2);

    const imgScale = 0.95 + reveal(0.1) * 0.05;

    return (
      <div
        className="absolute inset-0 w-full h-full flex items-center justify-center will-change-transform"
        style={{
          opacity: Math.max(0, Math.min(1, opacity)),
          transform: `scale(${scale})`,
          zIndex: isActive ? 10 : 0,
          pointerEvents: isActive ? "auto" : "none",
        }}
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-16 w-full max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            {/* Text Content */}
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
              {/* Number */}
              <div className="overflow-hidden">
                <span className="block text-8xl md:text-9xl font-bold text-white/5 tabular-nums leading-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Title & Desc */}
              <div className="space-y-4 relative -mt-8 md:-mt-12">
                <h2
                  className="text-3xl md:text-5xl font-bold text-white leading-tight"
                  style={{
                    transform: `translateY(${titleY}px)`,
                    opacity: titleOp,
                  }}
                >
                  {project.title}
                </h2>
                <div
                  className="hidden md:block"
                  style={{
                    transform: `translateY(${descY}px)`,
                    opacity: descOp,
                  }}
                >
                  <p className="text-gray-400 text-lg leading-relaxed max-w-lg font-inter">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div
                className="flex flex-wrap gap-2"
                style={{ transform: `translateY(${tagsY}px)`, opacity: tagsOp }}
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm text-white/80 bg-white/10 border border-white/10 rounded-full backdrop-blur-sm font-inter"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all hover:scale-105 font-inter text-sm"
                >
                  <Github className="w-4 h-4 md:w-[18px] md:h-[18px]" />
                  <span>Code</span>
                </a>

                {project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 rounded-full text-white transition-all hover:scale-105 shadow-lg shadow-orange-900/20 font-inter text-sm"
                  >
                    <ExternalLink className="w-4 h-4 md:w-[18px] md:h-[18px]" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Image Area - Now Landscape */}
            <div
              className="order-1 lg:order-2 relative w-full aspect-video"
              style={{
                transform: `scale(${imgScale})`,
                opacity: titleOp,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-2xl -rotate-2 scale-105 opacity-50 blur-sm" />
              <div className="relative w-full h-full shadow-2xl shadow-black/50 rounded-2xl overflow-hidden bg-[#111]">
                <ImageSlider
                  images={project.images}
                  projectTitle={project.title}
                  isVisible={isActive}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

// --- Main Component ---

const Projects = () => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const bounds = useRef({ top: 0, height: 0 });

  const updateBounds = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    bounds.current = {
      top: rect.top + scrollTop,
      height: rect.height,
      vh: window.innerHeight,
    };
  }, []);

  useEffect(() => {
    updateBounds();

    const handleScroll = () => {
      const { top, height, vh } = bounds.current;
      const scrollY = window.scrollY;

      const startOffset = top - vh;
      const distance = scrollY - startOffset;
      const totalScrollable = height + vh;

      const newProgress = Math.max(0, Math.min(1, distance / totalScrollable));

      setProgress(newProgress);
    };

    const throttledScroll = () => requestAnimationFrame(handleScroll);

    window.addEventListener("scroll", throttledScroll, { passive: true });
    window.addEventListener("resize", updateBounds);

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      window.removeEventListener("resize", updateBounds);
    };
  }, [updateBounds]);

  const totalHeight = `${projects.length * 150}vh`;

  return (
    <section
      ref={containerRef}
      className="relative bg-[#080807] w-full"
      style={{ height: `calc(${totalHeight} + 200px)` }}
      id="projects"
    >
      {/* Header Section */}
      <div className="sticky top-0 pt-16 pb-8 z-20 bg-[#080807]/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              Projects
            </h2>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto font-inter">
              Showcasing real-world solutions and creative implementations
            </p>
          </div>
        </div>
      </div>

      {/* Scrolling Projects Container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)] pointer-events-none" />

        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            project={project}
            index={i}
            totalProjects={projects.length}
            sectionProgress={progress}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;