import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import useTheme from "../../hooks/useTheme";
import useAuth from "../../hooks/useAuth";
import { Sun, Moon, LogOut, Home, ChevronDown, Menu } from "lucide-react";

const Anavbar = ({ onToggle }) => {
  const { isDark, toggleTheme } = useTheme();
  const { Signout, user } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    `font-medium transition-colors hover:text-blue-500 ${
      isActive ? "text-blue-600" : isDark ? "text-gray-300" : "text-gray-600"
    }`;

  return (
    <header
      className={`h-16 sticky top-0 z-50 w-full border-b transition-all duration-300 
      ${isDark ? "bg-gray-900 border-gray-800 text-white" : "bg-white border-gray-200 text-gray-800"}`}
    >
      {/* max-w-7xl soriye w-full kora hoyeche */}
      <div className="w-full h-full flex items-center justify-between px-4 md:px-6">
        {/* Left Side: Hamburger Menu & Dashboard Title */}
        <div className="flex items-center gap-4">
          <button
            onClick={onToggle}
            className={`p-2 rounded-full transition-colors ${isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"}`}
          >
            <Menu size={24} />
          </button>

          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
            Dashboard
          </h1>
        </div>

        {/* --- Right Side --- */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all ${isDark ? "bg-gray-800 text-yellow-400 hover:bg-gray-700" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {user && (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 p-0.5 rounded-full hover:ring-2 ring-blue-500 transition-all"
              >
                <img
                  src={user?.photoURL || "https://i.ibb.co/0n699S3/user.png"}
                  alt="Profile"
                  className="w-9 h-9 rounded-full object-cover"
                />
              </button>

              {isDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsDropdownOpen(false)}
                  ></div>
                  <div
                    className={`absolute right-0 mt-3 w-56 rounded-2xl shadow-2xl border p-2 z-20 
                    ${isDark ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-100 text-gray-800"}`}
                  >
                    <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                      <p className="text-sm font-bold truncate">
                        {user?.displayName || "User"}
                      </p>
                    </div>
                    <Link
                      to="/"
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Home size={18} /> Home
                    </Link>
                    <button
                      onClick={Signout}
                      className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10"
                    >
                      <LogOut size={18} /> Logout
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Anavbar;
