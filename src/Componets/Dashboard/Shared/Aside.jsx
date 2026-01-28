import React from "react";
import useRole from "../../hooks/useRole";
import { Link, useLocation } from "react-router";
import { LayoutDashboard, Users, Settings, ShieldCheck } from "lucide-react";
import useTheme from "../../hooks/useTheme";

const Aside = ({ isCollapsed }) => {
  const { isDark } = useTheme(); // ThemeContext theke isDark nilam
  const location = useLocation();
  const { role, isLoading } = useRole();

  const navLinks = [
    {
      name: "Overview",
      path: "/dashboard",
      icon: <LayoutDashboard size={22} />,
    },
    {
      name: "Users",
      path: "/dashboard/users",
      icon: <Users size={22} />,
      adminOnly: true,
    },
    {
      name: "Settings",
      path: "/dashboard/settings",
      icon: <Settings size={22} />,
    },
  ];

  return (
    <div
      className={`flex flex-col h-full py-6 transition-colors duration-300 
      ${isDark ? "bg-gray-900 border-r border-gray-800" : "bg-white border-r border-gray-200"}`}
    >
      {/* Sidebar Logo */}
      <div
        className={`px-6 mb-8 flex items-center gap-3 ${isCollapsed ? "justify-center" : ""}`}
      >
        <div className="p-2 bg-blue-600 rounded-lg text-white shadow-lg">
          <ShieldCheck size={24} />
        </div>
        {!isCollapsed && (
          <span
            className={`font-bold text-xl tracking-wide transition-colors
            ${isDark ? "text-white" : "text-gray-800"}`}
          >
            Contest-Hub
          </span>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-2">
        {navLinks.map((link) => {
          if (link.adminOnly && role !== "admin") return null;

          const isActive = location.pathname === link.path;

          return (
            <Link
              key={link.path}
              to={link.path}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : isDark
                      ? "text-gray-400 hover:bg-gray-800 hover:text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                }
                ${isCollapsed ? "justify-center" : ""}
              `}
            >
              <span className={`${isActive ? "text-white" : "text-gray-400"}`}>
                {link.icon}
              </span>
              {!isCollapsed && <span className="font-medium">{link.name}</span>}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Aside;
