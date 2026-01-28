import React from "react";
import useTheme from "../../hooks/useTheme";

const Dashboards = () => {
  const { isDark } = useTheme();

  return (
    /* w-full and min-h-full use kora hoyeche jate screen pura bhorat thake */
    <div
      className={`w-full min-h-[calc(100vh-64px)] p-6 md:p-10 transition-all duration-300
      ${isDark ? "bg-[#020617] text-white" : "bg-white text-gray-800"}`}
    >
      <div className="w-full">
        <h1
          className={`text-3xl md:text-5xl font-black tracking-tight mb-2
          ${isDark ? "text-blue-400" : "text-blue-600"}`}
        >
          Dashboard Overview
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
          Welcome back! Your management dashboard is now in full-width mode.
        </p>

        {/* Border line to show width spread */}
        <div
          className={`w-full h-px ${isDark ? "bg-gray-800" : "bg-gray-200"}`}
        ></div>

        {/* Statistics section full width spread e thakbe */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className={`p-8 rounded-3xl border transition-all
              ${isDark ? "bg-[#0f172a] border-gray-800 shadow-xl" : "bg-gray-50 border-gray-100 shadow-sm"}`}
            >
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
                Total Stats {item}
              </p>
              <p className="text-4xl font-bold mt-3">1,240</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboards;
