import React from "react";
import { useNavigate } from "react-router";
import {
  ShieldCheck,
  Trophy,
  Rocket,
  Users,
  BadgeDollarSign,
  Zap,
} from "lucide-react";
import useTheme from "../hooks/useTheme";

const WhyJoins = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const benefits = [
    {
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      title: "Win Big Prizes",
      description:
        "From cash rewards to professional gear, our contests offer high-value prizes for your creative talents.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-blue-500" />,
      title: "Boost Your Career",
      description:
        "Build a world-class portfolio and get noticed by industry leaders through our featured challenges.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
      title: "Secure Payments",
      description:
        "Our integrated Stripe system ensures that prize money is held securely and paid out promptly.",
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Vibrant Community",
      description:
        "Join thousands of creators, exchange feedback, and grow alongside the best in the industry.",
    },
    {
      icon: <BadgeDollarSign className="w-8 h-8 text-emerald-500" />,
      title: "Low Entry Fees",
      description:
        "Participate in premium contests with minimal registration fees, making excellence accessible to all.",
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: "Instant Recognition",
      description:
        "Get featured on our global leaderboard and earn badges that showcase your expertise.",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-[#050505] text-white" : "bg-gray-50 text-gray-900"
      } pt-24 pb-16 px-6 relative overflow-hidden`}
    >
      {/* Background Decorative Grid (Visible in Dark Mode) */}
      {isDark && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h2 className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">
            The Ultimate Arena
          </h2>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            WHY JOIN{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              CONTEST HUB?
            </span>
          </h1>
          <p
            className={`text-lg max-w-2xl mx-auto font-light ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            Empowering creators to showcase talent, compete in global
            challenges, and earn what they deserve.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, index) => (
            <div
              key={index}
              className={`p-8 rounded-3xl border transition-all duration-500 group ${
                isDark
                  ? "bg-white/[0.03] border-white/10 hover:border-blue-500/50 hover:bg-white/[0.05]"
                  : "bg-white border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-300"
              }`}
            >
              <div
                className={`mb-6 p-4 w-fit rounded-2xl transition-transform duration-500 group-hover:rotate-12 ${
                  isDark ? "bg-white/5" : "bg-gray-100"
                }`}
              >
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight">
                {item.title}
              </h3>
              <p
                className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div
          className={`mt-24 rounded-[2.5rem] border p-8 md:p-16 text-center relative overflow-hidden ${
            isDark
              ? "bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20 border-white/10"
              : "bg-blue-600 border-transparent text-white"
          }`}
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
              Ready to claim your <br /> first victory?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => navigate("/registration")}
                className={`px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 ${
                  isDark
                    ? "bg-white text-black hover:bg-blue-400"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                Join Now - It's Free
              </button>
              <button
                onClick={() => navigate("/all-contests")}
                className={`px-10 py-4 rounded-full font-bold border transition-all ${
                  isDark
                    ? "bg-transparent border-white/20 hover:bg-white/5 text-white"
                    : "bg-transparent border-white/40 hover:bg-white/10 text-white"
                }`}
              >
                View Live Contests
              </button>
            </div>
          </div>

          {/* Animated Glows (Dark Mode Only) */}
          {isDark && (
            <>
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 blur-[120px] -mr-40 -mt-40 animate-pulse" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/20 blur-[120px] -ml-40 -mb-40 animate-pulse" />
            </>
          )}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-24">
          {[
            { label: "Prizes Awarded", value: "$50k+" },
            { label: "Daily Users", value: "1,200+" },
            { label: "Total Contests", value: "450+" },
            { label: "Satisfaction", value: "99%" },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div
                className={`text-4xl md:text-5xl font-black mb-2 transition-colors ${
                  isDark
                    ? "text-white group-hover:text-blue-400"
                    : "text-gray-900 group-hover:text-blue-600"
                }`}
              >
                {stat.value}
              </div>
              <div className="text-blue-500 text-xs uppercase font-bold tracking-[0.2em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyJoins;
