import React, { useState, useEffect } from "react";
import { Outlet } from "react-router";
import Aside from "../Componets/Dashboard/Shared/Aside";
import Anavbar from "../Componets/Dashboard/Shared/Anavbar";
import useTheme from "../Componets/hooks/useTheme";
import useAuth from "../Componets/hooks/useAuth";

const DashboardLayout = () => {
  const { isDark } = useTheme();
  const { loading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) setIsOpen(!isOpen);
    else setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`${isDark ? "dark" : ""}`}>
      {/* h-screen ensure kore jate height pura screen nibe */}
      <div className="flex h-screen w-full overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-300">
        <aside
          className={`fixed inset-y-0 left-0 z-50 bg-white border-gray-200 dark:border-gray-800 transition-all duration-300
            ${isMobile ? (isOpen ? "translate-x-0" : "-translate-x-full") : "translate-x-0"}
            ${!isMobile && isCollapsed ? "w-20" : "w-64"} lg:relative lg:translate-x-0`}
        >
          <Aside isCollapsed={isCollapsed} />
        </aside>

        <div className="flex-1 flex flex-col min-w-0 w-full h-full">
          <Anavbar onToggle={toggleSidebar} />

          {/* Ekhane bg-white dark:bg-[#020617] ensure kore pichoner dark color light mode e jabe na */}
          <main className="flex-1 w-full overflow-y-auto bg-white dark:bg-[#020617]">
            {loading ? (
              <div className="flex justify-center items-center h-full">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
              </div>
            ) : (
              /* content-wrapper jeta pura width nibe */
              <div className="w-full min-h-full">
                <Outlet />
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
