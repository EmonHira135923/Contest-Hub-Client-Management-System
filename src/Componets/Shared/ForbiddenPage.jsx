import React from "react";
import { useNavigate } from "react-router";
import useTheme from "../hooks/useTheme";

const ForbiddenPage = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  // Ensuring the background adapts if useTheme provides dynamic values,
  // but defaulting to a deep dark aesthetic as requested.
  const themeClasses = isDark
    ? "bg-slate-950 text-slate-100"
    : "bg-gray-900 text-white";

  return (
    <div
      className={`min-h-screen ${themeClasses} flex flex-col items-center justify-center p-6 relative overflow-hidden`}
    >
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-md w-full text-center z-10">
        {/* Animated Error Code */}
        <div className="relative inline-block">
          <div className="text-9xl font-black tracking-tighter animate-pulse opacity-20 absolute inset-0 blur-lg select-none">
            403
          </div>
          <div className="text-9xl font-black tracking-tighter relative">
            <span className="bg-gradient-to-b from-white via-red-400 to-purple-600 bg-clip-text text-transparent">
              403
            </span>
          </div>
        </div>

        {/* Icon with Glassmorphism */}
        <div className="mt-4 mb-8">
          <div className="w-24 h-24 mx-auto rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <svg
              className="w-12 h-12 text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-4xl font-extrabold mb-3 tracking-tight">
          Entry Forbidden
        </h1>
        <p className="text-slate-400 mb-10 text-lg font-light">
          This area is restricted. Even the shadows need clearance to be here.
        </p>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate("/dashboard")}
            className="group relative px-8 py-4 bg-white text-black rounded-xl font-bold transition-all duration-300 hover:scale-[1.02] active:scale-95 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-red-400 opacity-0 group-hover:opacity-10 transition-opacity" />
            <span className="relative flex items-center justify-center gap-2">
              Back to Dashboard
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </button>

          <button
            onClick={() => navigate(-1)}
            className="px-8 py-4 bg-transparent border border-slate-800 text-slate-400 rounded-xl font-medium hover:bg-slate-900 hover:text-white transition-all"
          >
            Go Back
          </button>
        </div>

        {/* Footer Meta */}
        <div className="mt-12 flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-slate-600 font-semibold">
          <span className="w-8 h-[1px] bg-slate-800" />
          Error Protocol: 403_RESTRICTED
          <span className="w-8 h-[1px] bg-slate-800" />
        </div>
      </div>
    </div>
  );
};

export default ForbiddenPage;
