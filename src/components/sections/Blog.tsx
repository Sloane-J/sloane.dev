"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

// Blog post data structure
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
}

// Sample blog posts
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Modern Web Applications with React and TypeScript",
    excerpt:
      "Learn how to leverage React and TypeScript to build scalable web applications with better developer experience.",
    date: "2024-02-20",
    readTime: "5 min read",
    category: "Development",
    image: "images/placeholder.avif",
    tags: ["React", "TypeScript", "Web Development"],
    slug: "building-modern-web-applications",
  },
  {
    id: "2",
    title: "Mastering Framer Motion Animations",
    excerpt:
      "A comprehensive guide to creating smooth and engaging animations using Framer Motion in React applications.",
    date: "2024-02-15",
    readTime: "4 min read",
    category: "Design",
    image: "images/placeholder.avif",
    tags: ["Animation", "React", "Framer Motion"],
    slug: "mastering-framer-motion",
  },
  {
    id: "3",
    title: "The Future of Web Development: What to Expect in 2024",
    excerpt:
      "Exploring upcoming trends and technologies that will shape the future of web development.",
    date: "2024-02-10",
    readTime: "6 min read",
    category: "Technology",
    image: "images/placeholder.avif",
    tags: ["Web Development", "Trends", "Technology"],
    slug: "future-of-web-development",
  },
];

// Get unique categories from blog posts
const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <section id="blog" className="py-20 bg-[#080807]">
      <div className="container mx-auto px-4 text-[#D1D1C7]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest Articles
          </h2>
          <p className="text-gray-400 text-lg">
            Thoughts, insights, and tutorials about web development and design
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <motion.button
            key="all"
            onClick={() => setSelectedCategory("All")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === "All"
                ? "bg-white text-[#121212]"
                : "bg-[#232323] text-gray-300 hover:bg-[#2a2a2a]"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </motion.button>
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-white text-[#121212]"
                  : "bg-[#232323] text-gray-300 hover:bg-[#2a2a2a]"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#232323] rounded-lg overflow-hidden group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={post.image || "images/placeholder.avif"}
                  alt={post.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-3 py-1 bg-white/5 rounded-full flex items-center gap-1"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-white hover:gap-3 transition-all"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
