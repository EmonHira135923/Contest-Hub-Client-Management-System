import React from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiUser, FiArrowRight, FiTag } from "react-icons/fi";
import useTheme from "../hooks/useTheme";

const Blogs = () => {
  const { isDark } = useTheme();

  const blogPosts = [
    {
      id: 1,
      title: "How to Master Competitive Programming in 2026",
      excerpt:
        "Competitive programming is not just about coding; it's about solving problems efficiently...",
      author: "Adnan Sami",
      date: "Oct 24, 2024",
      category: "Coding",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "10 Principles of Modern UI/UX Design",
      excerpt:
        "Design is more than just making things look pretty. It's about how the user interacts...",
      author: "Sara Khan",
      date: "Oct 20, 2024",
      category: "Design",
      image:
        "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Why Cyber Security is Everyone's Responsibility",
      excerpt:
        "In the digital age, security starts with the user. Learn how to protect your data...",
      author: "Rakib Hasan",
      date: "Oct 18, 2024",
      category: "Tech",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div
      className={`min-h-screen p-6 md:p-12 transition-colors duration-300 ${isDark ? "bg-[#0b1120] text-slate-100" : "bg-gray-50 text-slate-900"}`}
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Insights & <span className="text-blue-600">Articles</span>
          </h1>
          <p
            className={`max-w-2xl mx-auto text-lg ${isDark ? "text-slate-400" : "text-slate-600"}`}
          >
            Stay updated with the latest trends in coding, design, and
            technology.
          </p>
        </motion.div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex flex-col overflow-hidden rounded-3xl border transition-all duration-300 group
              ${isDark ? "bg-slate-900 border-slate-800 hover:border-blue-500/50" : "bg-white border-slate-200 hover:shadow-2xl"}`}
          >
            {/* Blog Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-blue-600 text-white rounded-lg shadow-lg">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Blog Content */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-4 mb-3 text-xs opacity-60 font-medium">
                <span className="flex items-center gap-1">
                  <FiCalendar /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <FiUser /> {post.author}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors line-clamp-2">
                {post.title}
              </h3>

              <p
                className={`text-sm mb-6 line-clamp-3 ${isDark ? "text-slate-400" : "text-slate-500"}`}
              >
                {post.excerpt}
              </p>

              <div className="mt-auto">
                <button
                  className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all
                  ${isDark ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"}`}
                >
                  Read Full Story{" "}
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
