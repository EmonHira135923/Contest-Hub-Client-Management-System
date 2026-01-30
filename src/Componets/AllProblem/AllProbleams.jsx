import React from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiFeather,
  FiLayers,
  FiHelpCircle,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";
import useTheme from "../hooks/useTheme";

const AllProblems = () => {
  const { isDark } = useTheme();

  // Expanded Mock data for different types of contests
  const problems = [
    {
      id: "D1",
      title: "Modern SaaS Dashboard UI",
      category: "UI/UX Design",
      contestName: "Designer's Clash #04",
      difficulty: "Medium",
      submissions: 156,
      tags: ["Figma", "Glassmorphism"],
      points: 500,
      type: "design",
    },
    {
      id: "C1",
      title: "Data Structure: Advanced Trees",
      category: "Coding",
      contestName: "Weekly Code-Rush",
      difficulty: "Hard",
      submissions: 890,
      tags: ["C++", "Graphs"],
      points: 300,
      type: "coding",
    },
    {
      id: "Q1",
      title: "React & Modern JS Quiz",
      category: "Online Quiz",
      contestName: "Frontend Trivia",
      difficulty: "Easy",
      submissions: 2400,
      tags: ["JavaScript", "React"],
      points: 100,
      type: "quiz",
    },
    {
      id: "G1",
      title: "Minimalist Brand Logo",
      category: "Graphics",
      contestName: "Vector Masters 2024",
      difficulty: "Medium",
      submissions: 420,
      tags: ["Illustrator", "Branding"],
      points: 400,
      type: "graphics",
    },
  ];

  // Function to get icon based on type
  const getCategoryStyles = (type) => {
    switch (type) {
      case "coding":
        return {
          icon: <FiCode />,
          color: "text-blue-500",
          bg: "bg-blue-500/10",
        };
      case "design":
        return {
          icon: <FiFeather />,
          color: "text-pink-500",
          bg: "bg-pink-500/10",
        };
      case "quiz":
        return {
          icon: <FiHelpCircle />,
          color: "text-amber-500",
          bg: "bg-amber-500/10",
        };
      case "graphics":
        return {
          icon: <FiLayers />,
          color: "text-purple-500",
          bg: "bg-purple-500/10",
        };
      default:
        return {
          icon: <FiCheckCircle />,
          color: "text-slate-500",
          bg: "bg-slate-500/10",
        };
    }
  };

  return (
    <div
      className={`min-h-screen p-6 md:p-12 transition-colors duration-300 ${isDark ? "bg-[#0b1120] text-slate-100" : "bg-gray-50 text-slate-900"}`}
    >
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-extrabold tracking-tight mb-3">
            Contest{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Archive
            </span>
          </h1>
          <p
            className={`text-lg ${isDark ? "text-slate-400" : "text-slate-600"}`}
          >
            Explore past challenges from all domains and keep practicing.
          </p>
        </motion.div>
      </div>

      {/* Dynamic Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {problems.map((item, index) => {
          const style = getCategoryStyles(item.type);

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className={`relative group p-6 rounded-3xl border transition-all duration-300
                ${
                  isDark
                    ? "bg-slate-900/60 border-slate-800 hover:bg-slate-900 hover:border-slate-700 shadow-2xl shadow-black/40"
                    : "bg-white border-slate-200 hover:shadow-xl shadow-slate-200/60"
                }`}
            >
              {/* Category Badge & Icon */}
              <div className="flex justify-between items-start mb-6">
                <div
                  className={`flex items-center gap-3 px-3 py-1.5 rounded-2xl ${style.bg}`}
                >
                  <span className={`${style.color} text-lg`}>{style.icon}</span>
                  <span
                    className={`text-xs font-bold uppercase tracking-wide ${style.color}`}
                  >
                    {item.category}
                  </span>
                </div>
                <div className="text-right">
                  <span
                    className={`text-[10px] font-black px-2 py-1 rounded-md border ${isDark ? "border-slate-700 text-slate-400" : "border-slate-200 text-slate-500"}`}
                  >
                    {item.difficulty}
                  </span>
                </div>
              </div>

              {/* Title & Info */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
                  {item.title}
                </h3>
                <p
                  className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}
                >
                  From:{" "}
                  <span className="font-semibold">{item.contestName}</span>
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[10px] font-medium px-2.5 py-1 rounded-lg ${isDark ? "bg-slate-800 text-slate-300" : "bg-gray-100 text-gray-600"}`}
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Footer Meta */}
              <div
                className={`flex items-center justify-between pt-5 border-t ${isDark ? "border-slate-800" : "border-slate-100"}`}
              >
                <div className="flex gap-4">
                  <div className="text-center">
                    <p className="text-[10px] uppercase opacity-50 font-bold">
                      Submissions
                    </p>
                    <p className="text-sm font-bold">{item.submissions}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] uppercase opacity-50 font-bold">
                      Points
                    </p>
                    <p className="text-sm font-bold text-emerald-500">
                      {item.points}
                    </p>
                  </div>
                </div>

                <button
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all
                  ${
                    isDark
                      ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/30"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  {item.type === "quiz"
                    ? "Start Quiz"
                    : item.type === "coding"
                      ? "Solve Now"
                      : "View Task"}
                  <FiArrowRight />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllProblems;
