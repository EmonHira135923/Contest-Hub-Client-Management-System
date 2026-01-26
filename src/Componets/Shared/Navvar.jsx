import React, { useState } from "react";
import { NavLink } from "react-router";
import {
  Menu,
  X,
  House,
  Trophy,
  Moon,
  Sun,
  BookText,
  HelpCircle,
  ShieldQuestion,
  LogIn,
  UserPlus,
  PlusCircle,
} from "lucide-react";
import useTheme from "../hooks/useTheme";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Context থেকে isDark এবং toggleTheme ফাংশন নিন
  const { isDark, toggleTheme } = useTheme();
  const { user } = useAuth();

  // --- Theme Based Conditional Classes ---
  const theme = {
    navBg: isDark ? "bg-gray-950 border-gray-800" : "bg-white border-gray-200",
    textMain: isDark ? "text-gray-100" : "text-gray-800",
    mobileMenuBg: isDark ? "bg-gray-900" : "bg-gray-50",
    activeLink: isDark
      ? "text-purple-400 border-purple-400"
      : "text-purple-700 border-purple-600",
    btnGhost: isDark
      ? "text-gray-300 hover:bg-gray-800"
      : "text-gray-600 hover:bg-gray-100",
  };

  // ১. সবার জন্য পাবলিক লিঙ্ক
  const publicLinks = [
    { name: "Home", path: "/", icon: <House size={18} /> },
    { name: "All Contests", path: "/all-contests", icon: <Trophy size={18} /> },
    { name: "Why Join?", path: "/why-join", icon: <HelpCircle size={18} /> },
    {
      name: "Problems",
      path: "/all-problems",
      icon: <ShieldQuestion size={18} />,
    },
    { name: "Blog", path: "/blog", icon: <BookText size={18} /> },
  ];

  const privateLinks = [
    {
      name: "Create Contest",
      path: "/create-contest",
      icon: <PlusCircle size={18} />,
    },
  ];

  const navLinks = user ? [...publicLinks, ...privateLinks] : publicLinks;

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 shadow-sm ${theme.navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo & Mobile Menu Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-xl transition-colors ${theme.btnGhost}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <NavLink to="/" className="flex items-center">
              <span
                className={`text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r ${
                  isDark
                    ? "from-purple-400 to-blue-400"
                    : "from-purple-700 to-indigo-600"
                }`}
              >
                CONTEST-HUB
              </span>
            </NavLink>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 text-sm font-bold transition-all ${
                    theme.textMain
                  } 
                  ${isActive ? `border-b-2 ${theme.activeLink}` : "hover:text-purple-500"}`
                }
              >
                {link.icon} {link.name}
              </NavLink>
            ))}
          </div>

          {/* Action Buttons (Theme Toggle + Auth) */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-full transition-all active:scale-90 ${
                isDark
                  ? "bg-gray-800 text-yellow-400"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className="hidden sm:flex items-center gap-3">
              <NavLink
                to="/login"
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold transition-all ${theme.btnGhost}`}
              >
                <LogIn size={18} /> Login
              </NavLink>
              <NavLink
                to="/register"
                className="flex items-center gap-2 px-6 py-2.5 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 shadow-lg shadow-purple-200 dark:shadow-none transition-all"
              >
                <UserPlus size={18} /> Register
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] border-t" : "max-h-0"
        } ${theme.mobileMenuBg}`}
      >
        <div className="px-6 py-8 space-y-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={`flex items-center gap-4 text-lg font-bold ${theme.textMain}`}
              onClick={() => setIsOpen(false)}
            >
              <span className="text-purple-500">{link.icon}</span> {link.name}
            </NavLink>
          ))}
          <div className="pt-6 flex flex-col gap-3">
            <NavLink
              to="/login"
              className={`flex justify-center items-center gap-2 py-3.5 rounded-2xl font-bold border ${
                isDark
                  ? "border-gray-700 text-white"
                  : "border-gray-300 text-gray-800"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="py-3.5 bg-purple-600 text-white text-center rounded-2xl font-bold shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              Register Now
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
