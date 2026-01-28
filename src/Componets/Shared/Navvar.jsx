import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router";
import {
  Menu,
  X,
  House,
  Trophy,
  Moon,
  Sun,
  BookText,
  ShieldQuestion,
  LogIn,
  UserPlus,
  PlusCircle,
  LayoutDashboard,
  LogOut,
  ChevronDown,
} from "lucide-react";
import useTheme from "../hooks/useTheme";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { isDark, toggleTheme } = useTheme();
  const { user, loading, Signout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await Signout();
    setIsProfileOpen(false);
    navigate("/");
  };

  const theme = {
    navBg: isDark ? "bg-gray-950 border-gray-800" : "bg-white border-gray-200",
    textMain: isDark ? "text-gray-100" : "text-gray-800",
    dropdownBg: isDark
      ? "bg-gray-900 border-gray-800"
      : "bg-white border-gray-100",
    activeLink: isDark
      ? "text-purple-400 border-purple-400"
      : "text-purple-700 border-purple-600",
    btnGhost: isDark
      ? "text-gray-300 hover:bg-gray-800"
      : "text-gray-600 hover:bg-gray-100",
    skeleton: isDark ? "bg-gray-800" : "bg-gray-200",
  };

  const publicLinks = [
    { name: "Home", path: "/", icon: <House size={18} /> },
    { name: "All Contests", path: "/all-contests", icon: <Trophy size={18} /> },
    {
      name: "Problems",
      path: "/all-problems",
      icon: <ShieldQuestion size={18} />,
    },
    { name: "Blog", path: "/blog", icon: <BookText size={18} /> },
  ];

  const privateLinks = user
    ? [
        {
          name: "Create Contest",
          path: "/create-contest",
          icon: <PlusCircle size={18} />,
        },
      ]
    : [];
  const navLinks = [...publicLinks, ...privateLinks];

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 shadow-sm ${theme.navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-xl transition-colors ${theme.btnGhost}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <NavLink to="/" className="flex items-center">
              <span
                className={`text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r ${isDark ? "from-purple-400 to-blue-400" : "from-purple-700 to-indigo-600"}`}
              >
                CONTEST-HUB
              </span>
            </NavLink>
          </div>

          {/* Desktop Links with Skeleton Logic */}
          <div className="hidden md:flex items-center gap-2">
            {loading
              ? // Navigation Links Skeleton
                [1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`h-8 w-24 mx-2 rounded-lg animate-pulse ${theme.skeleton}`}
                  ></div>
                ))
              : navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-4 py-2 text-sm font-bold transition-all ${theme.textMain} ${isActive ? `border-b-2 ${theme.activeLink}` : "hover:text-purple-500"}`
                    }
                  >
                    {link.icon} {link.name}
                  </NavLink>
                ))}
          </div>

          {/* Action Buttons & Profile Skeleton */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-full transition-all active:scale-90 ${isDark ? "bg-gray-800 text-yellow-400" : "bg-gray-100 text-gray-600"}`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {loading ? (
              // Profile/Auth Skeleton
              <div className="flex items-center gap-3 animate-pulse">
                <div
                  className={`h-10 w-10 rounded-full ${theme.skeleton}`}
                ></div>
                <div
                  className={`hidden sm:block h-8 w-20 rounded-xl ${theme.skeleton}`}
                ></div>
              </div>
            ) : user ? (
              /* User Profile Dropdown */
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 p-1 pr-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all border border-transparent hover:border-purple-500/30"
                >
                  <img
                    src={user?.photoURL || "https://i.ibb.co/5GzXkwq/user.png"}
                    alt="profile"
                    className="w-9 h-9 rounded-full object-cover border-2 border-purple-500"
                  />
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${isProfileOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`absolute right-0 mt-3 w-56 rounded-2xl border shadow-xl transition-all duration-300 origin-top-right ${theme.dropdownBg} ${isProfileOpen ? "scale-100 opacity-100 visible" : "scale-95 opacity-0 invisible"}`}
                >
                  <div className="p-4 border-b dark:border-gray-800">
                    <p
                      className={`text-sm font-bold truncate ${theme.textMain}`}
                    >
                      {user?.displayName || "Coder"}
                    </p>
                    <p className="text-[10px] text-gray-500 truncate">
                      {user?.email}
                    </p>
                  </div>
                  <div className="p-2">
                    <NavLink
                      to="/dashboard"
                      onClick={() => setIsProfileOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium hover:bg-purple-500 hover:text-white transition-all ${theme.textMain}`}
                    >
                      <LayoutDashboard size={18} /> Dashboard
                    </NavLink>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-all"
                    >
                      <LogOut size={18} /> Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Auth Links for Guest */
              <div className="hidden sm:flex items-center gap-3">
                <NavLink
                  to="/auth/login"
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold transition-all ${theme.btnGhost}`}
                >
                  <LogIn size={18} /> Login
                </NavLink>
                <NavLink
                  to="/auth/register"
                  className="flex items-center gap-2 px-6 py-2.5 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 shadow-lg transition-all"
                >
                  <UserPlus size={18} /> Register
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Skeleton or Links */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[600px] border-t" : "max-h-0"} ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
      >
        <div className="px-6 py-8 space-y-5">
          {loading
            ? [1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`h-10 w-full rounded-xl animate-pulse ${theme.skeleton}`}
                ></div>
              ))
            : navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={`flex items-center gap-4 text-lg font-bold ${theme.textMain}`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-purple-500">{link.icon}</span>{" "}
                  {link.name}
                </NavLink>
              ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
