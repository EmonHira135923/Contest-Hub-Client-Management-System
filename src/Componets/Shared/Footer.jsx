import React from "react";
import { NavLink } from "react-router";
import {
  Facebook,
  Linkedin,
  Twitter,
  Github,
  Mail,
  Phone,
  MapPin,
  Code2,
  Trophy,
  Users,
  Sparkles,
} from "lucide-react";
import useTheme from "../hooks/useTheme";

const Footer = () => {
  const { isDark } = useTheme();

  // Improved theme configurations
  const theme = {
    footerBg: isDark
      ? "bg-gradient-to-t from-gray-900 to-gray-950 border-gray-800"
      : "bg-gradient-to-t from-gray-50 to-white border-gray-100",
    textMain: isDark ? "text-gray-100" : "text-gray-900",
    textMuted: isDark ? "text-gray-400" : "text-gray-600",
    border: isDark ? "border-gray-800" : "border-gray-200",
    cardBg: isDark ? "bg-gray-900/50" : "bg-white/50",
    iconHover:
      "hover:text-purple-500 transition-all duration-300 hover:scale-110",
    linkHover: isDark
      ? "hover:text-purple-300 hover:translate-x-1"
      : "hover:text-purple-600 hover:translate-x-1",
  };

  // Features array for showing platform benefits
  const features = [
    { icon: <Trophy size={16} />, text: "Win Exciting Prizes" },
    { icon: <Code2 size={16} />, text: "Real-world Challenges" },
    { icon: <Users size={16} />, text: "Global Community" },
    { icon: <Sparkles size={16} />, text: "Skill Development" },
  ];

  return (
    <footer
      className={`w-full border-t backdrop-blur-sm transition-all duration-500 ${theme.footerBg} ${theme.textMain}`}
    >
      {/* Decorative top border */}
      <div
        className={`h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500`}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Feature badges */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border ${theme.border} ${theme.cardBg} backdrop-blur-sm`}
              >
                <span
                  className={`${isDark ? "text-purple-300" : "text-purple-600"}`}
                >
                  {feature.icon}
                </span>
                <span className={`text-sm font-medium ${theme.textMuted}`}>
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Section 1: Brand & About */}
          <div className="space-y-6">
            <NavLink to="/" className="flex items-center group">
              <div className="relative">
                <div
                  className={`absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200`}
                ></div>
                <span
                  className={`relative text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r ${
                    isDark
                      ? "from-purple-300 via-purple-400 to-blue-400"
                      : "from-purple-700 via-purple-600 to-indigo-600"
                  }`}
                >
                  CONTEST-HUB
                </span>
              </div>
            </NavLink>
            <p
              className={`text-sm leading-relaxed ${theme.textMuted} max-w-xs`}
            >
              The ultimate platform for competitive programmers. Sharpen your
              skills, compete with the best minds worldwide, and unlock your
              potential through real-world coding challenges.
            </p>
            <div className="flex gap-4 pt-2">
              {[
                { icon: <Twitter size={20} />, label: "Twitter" },
                { icon: <Facebook size={20} />, label: "Facebook" },
                { icon: <Linkedin size={20} />, label: "LinkedIn" },
                { icon: <Github size={20} />, label: "GitHub" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`p-2 rounded-lg border ${theme.border} ${theme.cardBg} ${theme.iconHover} group relative`}
                  aria-label={social.label}
                >
                  {social.icon}
                  <div
                    className={`absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isDark
                        ? "bg-gray-800 text-gray-100"
                        : "bg-gray-900 text-white"
                    }`}
                  >
                    {social.label}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-5 flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${isDark ? "bg-purple-400" : "bg-purple-600"}`}
              ></div>
              <span>Quick Links</span>
            </h3>
            <ul className={`space-y-3 text-sm ${theme.textMuted}`}>
              {[
                { to: "/", label: "Home" },
                { to: "/all-contests", label: "All Contests" },
                { to: "/upcoming", label: "Upcoming Events" },
                { to: "/all-problems", label: "Problem Sets" },
                { to: "/leaderboard", label: "Leaderboard" },
              ].map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.to}
                    className={`flex items-center gap-2 transition-all duration-300 ${theme.linkHover}`}
                  >
                    <div
                      className={`w-1 h-1 rounded-full ${isDark ? "bg-gray-600" : "bg-gray-400"}`}
                    ></div>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Support */}
          <div>
            <h3 className="text-lg font-bold mb-5 flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${isDark ? "bg-blue-400" : "bg-blue-600"}`}
              ></div>
              <span>Support</span>
            </h3>
            <ul className={`space-y-3 text-sm ${theme.textMuted}`}>
              {[
                { to: "/why-join", label: "Why Join Us?" },
                { to: "/privacy", label: "Privacy Policy" },
                { to: "/terms", label: "Terms & Conditions" },
                { to: "/faq", label: "FAQs" },
                { to: "/contact", label: "Contact Support" },
              ].map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.to}
                    className={`flex items-center gap-2 transition-all duration-300 ${theme.linkHover}`}
                  >
                    <div
                      className={`w-1 h-1 rounded-full ${isDark ? "bg-gray-600" : "bg-gray-400"}`}
                    ></div>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-5 flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${isDark ? "bg-indigo-400" : "bg-indigo-600"}`}
              ></div>
              <span>Contact Us</span>
            </h3>
            <ul className={`space-y-4 text-sm ${theme.textMuted}`}>
              <li className="flex items-start gap-3 group">
                <div
                  className={`p-2 rounded-lg ${isDark ? "bg-purple-900/30" : "bg-purple-50"} group-hover:bg-purple-100/50 transition-colors`}
                >
                  <MapPin
                    size={18}
                    className={`${isDark ? "text-purple-300" : "text-purple-600"}`}
                  />
                </div>
                <div>
                  <span className="font-medium">Address</span>
                  <p className="mt-1">
                    123 Tech Street, Silicon Valley, CA 94000
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div
                  className={`p-2 rounded-lg ${isDark ? "bg-blue-900/30" : "bg-blue-50"} group-hover:bg-blue-100/50 transition-colors`}
                >
                  <Phone
                    size={18}
                    className={`${isDark ? "text-blue-300" : "text-blue-600"}`}
                  />
                </div>
                <div>
                  <span className="font-medium">Phone</span>
                  <p className="mt-1">+1 (555) 123-4567</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div
                  className={`p-2 rounded-lg ${isDark ? "bg-indigo-900/30" : "bg-indigo-50"} group-hover:bg-indigo-100/50 transition-colors`}
                >
                  <Mail
                    size={18}
                    className={`${isDark ? "text-indigo-300" : "text-indigo-600"}`}
                  />
                </div>
                <div>
                  <span className="font-medium">Email</span>
                  <p className="mt-1">support@contesthub.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`mt-12 pt-8 border-t text-center ${theme.border}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-sm ${theme.textMuted}`}>
              Copyright © {new Date().getFullYear()} - All rights reserved by{" "}
              <span
                className={`font-bold ${isDark ? "text-purple-300" : "text-purple-700"}`}
              >
                CONTEST-HUB Team
              </span>
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className={`text-xs ${theme.textMuted} hover:text-purple-500 transition-colors`}
              >
                Cookie Policy
              </a>
              <a
                href="#"
                className={`text-xs ${theme.textMuted} hover:text-purple-500 transition-colors`}
              >
                Security
              </a>
              <a
                href="#"
                className={`text-xs ${theme.textMuted} hover:text-purple-500 transition-colors`}
              >
                Sitemap
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-8 max-w-md mx-auto">
            <p className={`text-sm mb-3 ${theme.textMuted}`}>
              Subscribe to our newsletter for contest updates
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className={`flex-1 px-4 py-2 rounded-lg border ${theme.border} ${isDark ? "bg-gray-800" : "bg-white"} focus:outline-none focus:ring-2 focus:ring-purple-500 ${theme.textMain}`}
              />
              <button
                className={`px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105`}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
