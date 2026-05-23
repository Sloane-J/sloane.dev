"use client";

import { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState, useMemo } from "react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
  slug: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Work Profiles on Android — A Discovery Through Gaming",
    excerpt:
      "How a mobile game led me to discover Android's built-in work profile feature — a powerful tool hiding in plain sight.",
    date: "2025-11-22",
    readTime: "8 min",
    category: "Post",
    image: "images/placeholder.avif",
    tags: ["Android", "Work Profiles", "Simcity Buildit"],
    slug: "android-work-profiles",
    link: "https://sloane-dev-blog.vercel.app/posts/android-work-profile",
  },
  {
    id: "2",
    title: "Q-Vault",
    excerpt:
      "A Laravel + Livewire system built to bring order to the chaos of past exam paper storage and access for university students.",
    date: "2025-01-25",
    readTime: "5 min",
    category: "Project",
    image: "images/placeholder.avif",
    tags: ["Laravel", "Livewire", "Supabase"],
    slug: "q-vault",
    link: "https://sloane-dev-blog.vercel.app/projects/q-vault",
  },
  {
    id: "3",
    title: "The Future of Web Development: What to Expect in 2024",
    excerpt:
      "Exploring upcoming trends and technologies that will shape the future of web development.",
    date: "2024-02-10",
    readTime: "6 min",
    category: "Docs",
    image: "images/placeholder.avif",
    tags: ["Web Development", "Trends", "Technology"],
    slug: "future-of-web-development",
    link: "https://sloane-dev-blog.vercel.app/docs/configuration",
  },
];

const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

function Blog() {
  const [selected, setSelected] = useState("All");

  const filtered = useMemo(() => {
    return selected === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === selected);
  }, [selected]);

  return (
    <section id="blog" className="bg-[#080807] px-6 lg:px-10 py-20">

      {/* Top bar */}
      <div className="max-w-6xl mx-auto flex items-center justify-between pb-6 border-b border-[#1a1a1a] mb-12">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#333]">
          005 / Writing & projects
        </span>
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#333]">
          {filtered.length} posts
        </span>
      </div>

      <div className="max-w-6xl mx-auto">

        {/* Header + filter row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-syne font-extrabold text-3xl lg:text-4xl text-white leading-none"
          >
            Writing &<br />
            <span className="text-[#FF5733]">projects</span>
          </motion.h2>

          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`font-mono text-[10px] tracking-[0.1em] uppercase px-3 py-2 border rounded-sm transition-colors duration-200 ${
                  selected === cat
                    ? "border-[#FF5733] text-[#FF5733]"
                    : "border-[#222] text-[#444] hover:border-[#444] hover:text-[#777]"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Posts — bordered list on desktop, grid on mobile */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-[#1a1a1a]"
          >
            {filtered.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className={`group flex flex-col bg-[#080807] hover:bg-[#0d0d0c] transition-colors duration-200
                  border-b border-[#1a1a1a]
                  ${i % 3 !== 2 ? "lg:border-r lg:border-[#1a1a1a]" : ""}
                  ${i % 2 !== 1 ? "sm:border-r sm:border-[#1a1a1a] lg:border-r-0" : ""}
                  ${i % 3 !== 2 ? "lg:border-r" : ""}
                `}
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden border-b border-[#1a1a1a]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://placehold.co/800x450/0d0d0c/1a1a1a?text=.";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080807]/60 to-transparent" />

                  {/* Category tag */}
                  <span className="absolute top-3 left-3 font-mono text-[9px] tracking-[0.15em] uppercase text-[#555] border border-[#222] bg-[#080807]/80 px-2 py-1 rounded-sm">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 p-6 flex-1">
                  {/* Meta */}
                  <div className="flex items-center gap-3 font-mono text-[9px] tracking-[0.12em] uppercase text-[#333]">
                    <span>{formatDate(post.date)}</span>
                    <span className="w-px h-3 bg-[#222]" />
                    <span>{post.readTime} read</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-syne font-bold text-base text-white leading-snug line-clamp-2 group-hover:text-[#FF5733] transition-colors duration-200">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="font-mono text-xs text-[#555] leading-[1.8] line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] tracking-wide text-[#444] border border-[#1e1e1e] px-2 py-0.5 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Read link */}
                <a
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between px-6 py-4 border-t border-[#1a1a1a] font-mono text-[10px] tracking-[0.1em] uppercase text-[#444] hover:text-[#FF5733] hover:border-[#FF5733]/20 transition-colors duration-200"
                >
                  Read post
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Blog link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-6 flex justify-end"
        >
          <a
            href="https://sloane-dev-blog.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] uppercase text-[#444] hover:text-[#FF5733] transition-colors duration-200"
          >
            View all posts
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(Blog);