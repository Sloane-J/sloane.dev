import React, { useEffect, useRef, useState, useCallback, memo } from "react";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

// --- Data ---
const projects = [
  {
    title: "Affiliate Nexus",
    description:
      "A platform for personalized coaching in affiliate marketing and lifestyle optimization — training, coaching sessions, and self-paced courses.",
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
      "A modern digital publication offering insightful content across technology, current affairs, and entertainment.",
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
      "A web platform that streamlines the examination process for educational institutions — tools for admins, educators, and students.",
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
      "A web-based LMS that connects students, tutors, and administrators in a unified educational environment.",
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

// --- ImageSlider ---
const ImageSlider = memo(
  ({
    images,
    projectTitle,
    isVisible,
  }: {
    images: { src: string }[];
    projectTitle: string;
    isVisible: boolean;
  }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const goToNext = useCallback(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const goToPrevious = useCallback(() => {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }, [images.length]);

    const goToSlide = useCallback((index: number) => {
      setCurrentIndex(index);
    }, []);

    useEffect(() => {
      if (!isVisible || isPaused || images.length <= 1) return;
      autoPlayRef.current = setInterval(goToNext, 4000);
      return () => {
        if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      };
    }, [isVisible, isPaused, goToNext, images.length]);

    if (!images || images.length === 0) return null;

    return (
      <div
        className="relative w-full h-full overflow-hidden group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="flex w-full h-full transition-transform duration-500 ease-out will-change-transform"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 bg-[#111]">
              <img
                src={image.src}
                alt={`${projectTitle} screenshot ${index + 1}`}
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
              className="absolute left-3 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center bg-black/60 hover:bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-sm z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center bg-black/60 hover:bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-sm z-10"
              aria-label="Next image"
            >
              <ChevronRight size={14} />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-0.5 rounded-none transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-6 bg-[#FF5733]"
                      : "w-2 bg-white/30"
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  },
);

ImageSlider.displayName = "ImageSlider";

// --- ProjectCard ---
const ProjectCard = memo(
  ({
    project,
    index,
    sectionProgress,
    totalProjects,
  }: {
    project: (typeof projects)[0];
    index: number;
    sectionProgress: number;
    totalProjects: number;
  }) => {
    const segmentSize = 1 / totalProjects;
    const start = index * segmentSize;
    const localProgress = (sectionProgress - start) / segmentSize;

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

    const reveal = (threshold: number) =>
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
        <div className="w-full max-w-6xl mx-auto px-6 lg:px-10">
          {/* Section label row */}
          <div
            className="flex items-center justify-between mb-6 pb-4 border-b border-[#1a1a1a]"
            style={{ opacity: titleOp, transform: `translateY(${titleY}px)` }}
          >
            <span className="font-mono text-[12px] tracking-[0.2em] uppercase text-zinc-400">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(totalProjects).padStart(2, "0")}
            </span>
            <span className="font-mono text-[12px] tracking-[0.2em] uppercase text-zinc-400">
              002 / Selected work
            </span>
          </div>

          {/* Main card grid */}
          <div className="grid lg:grid-cols-2 border border-[#1a1a1a] bg-[#080807]">
            {/* Left — text */}
            <div className="flex flex-col gap-6 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
              {/* Big ghost number */}
              <span
                className="font-syne font-extrabold text-[6rem] leading-none text-[#FF5733]/5 select-none"
                style={{ opacity: titleOp }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div
                className="-mt-10 flex flex-col gap-4"
                style={{
                  transform: `translateY(${titleY}px)`,
                  opacity: titleOp,
                }}
              >
                <h2 className="font-syne font-extrabold text-3xl lg:text-4xl text-white leading-tight">
                  {project.title}
                </h2>
              </div>

              <div
                style={{ transform: `translateY(${descY}px)`, opacity: descOp }}
              >
                <p className="font-mono text-sm text-zinc-400 leading-[1.8]">
                  {project.description}
                </p>
              </div>

              <div
                className="flex flex-wrap gap-1.5"
                style={{ transform: `translateY(${tagsY}px)`, opacity: tagsOp }}
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[12px] tracking-wide text-[#555] border border-[#222] px-2.5 py-1 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div
                className="flex gap-3 mt-auto pt-6 border-t border-[#1a1a1a]"
                style={{ opacity: tagsOp }}
              >
                {project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-[#FF5733] hover:opacity-85 transition-opacity text-white font-syne font-bold text-sm tracking-wide px-5 py-3 rounded-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live demo
                  </a>
                )}

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-[#222] hover:border-[#444] hover:text-white transition-colors text-[#555] font-mono text-[12px] tracking-[0.08em] px-5 py-3 rounded-sm"
                >
                  <Github className="w-3.5 h-3.5" />
                  Code
                </a>
              </div>
            </div>

            {/* Right — image */}
            <div
              className="relative w-full aspect-video lg:aspect-auto lg:min-h-[360px] bg-[#0d0d0c]"
              style={{
                transform: `scale(${imgScale})`,
                opacity: titleOp,
              }}
            >
              <ImageSlider
                images={project.images}
                projectTitle={project.title}
                isVisible={isActive}
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
);

ProjectCard.displayName = "ProjectCard";

// --- Main Component ---
const Projects = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const bounds = useRef({ top: 0, height: 0, vh: 0 });

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

      const start = top - vh;
      const end = top + height;

      const raw = (scrollY - start) / (end - start);

      setProgress(Math.min(1, Math.max(0, raw)));
    };

    const throttledScroll = () => requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", throttledScroll, { passive: true });
    window.addEventListener("resize", updateBounds);

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      window.removeEventListener("resize", updateBounds);
    };
  }, [updateBounds]);

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative bg-[#080807] w-full"
      style={{ height: `calc(${projects.length * 150}vh + 200px)` }}
    >
      {/* Section header */}
      <div className="sticky top-0 z-20 bg-[#080807] border-b border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-6 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[12px] tracking-[0.2em] uppercase text-zinc-400">
              002 / Selected work
            </span>
            <h2 className="font-syne font-extrabold text-2xl text-white">
              Projects & <span className="text-[#FF5733]">work</span>
            </h2>
          </div>
          <span className="font-mono text-[12px] tracking-[0.2em] uppercase text-zinc-400">
            {projects.length} projects
          </span>
        </div>
      </div>

      {/* Scrolling project cards */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
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
