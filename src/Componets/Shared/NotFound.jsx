import React from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-2xl w-full text-center z-10">
        {/* Animated Glitch Header */}
        <div className="relative mb-4">
          <h2 className="text-sm uppercase tracking-[0.3em] text-blue-500 font-bold mb-2">
            Error Protocol: 404
          </h2>
          <h1 className="text-8xl md:text-9xl font-black italic tracking-tighter leading-none">
            OUT OF{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              BOUNDS
            </span>
          </h1>
        </div>

        {/* Platform Message */}
        <div className="mb-10">
          <p className="text-gray-400 text-lg md:text-xl max-w-md mx-auto leading-relaxed">
            The contest you're looking for has ended, moved, or never existed in
            this arena.
          </p>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
          <button
            onClick={() => navigate("/all-contests")}
            className="flex items-center justify-center gap-3 px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Browse Contests
          </button>

          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-3 px-6 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl font-bold transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Return Home
          </button>
        </div>

        {/* Search Suggestion */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-gray-500 text-sm">
            Lost your way?{" "}
            <button className="text-blue-400 hover:underline">
              Contact Support
            </button>{" "}
            or check our{" "}
            <button className="text-blue-400 hover:underline">
              Leaderboards
            </button>
            .
          </p>
        </div>
      </div>

      {/* Aesthetic Floating Element */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]" />
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-600/10 rounded-full blur-[100px]" />
    </div>
  );
};

export default NotFound;
