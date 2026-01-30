import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Eye, EyeOff, Mail, Lock, LogIn, ShieldCheck } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import useTheme from "../../hooks/useTheme";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Baseurl from "../../utils/Baseurl";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { isDark } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const { signin, googleUser } = useAuth();

  // --- ১. ইমেইল এবং পাসওয়ার্ড দিয়ে লগইন ---
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const result = await signin(data.email, data.password);

      if (result) {
        toast.success("Welcome back! Login successful.");
        // সফল লগইন এর পর রিডাইরেক্ট
        navigate(location?.state || "/dashboard");
      }
    } catch (err) {
      console.error("Login Error:", err);
      toast.error(
        err?.code === "auth/invalid-credential"
          ? "Invalid email or password!"
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- ২. গুগল দিয়ে লগইন এবং ডাটাবেজে সেভ ---
  const handleGoogleLogin = async () => {
    try {
      const res = await googleUser();

      if (res?.user) {
        const userInfo = {
          name: res.user.displayName,
          email: res.user.email,
          photo: res.user.photoURL,
          role: "user",
          lastLogin: new Date(),
        };

        // ডাটাবেজে ইউজার ইনফো পাঠানো
        await axios.post(`${Baseurl}/register`, userInfo);

        toast.success(`Welcome ${res.user.displayName}!`);
        // সফল গুগল লগইন এর পর রিডাইরেক্ট
        navigate(location?.state || "/dashboard");
      }
    } catch (err) {
      console.error("Google login error:", err);
      toast.error("Google login failed!");
    }
  };

  // থিম স্টাইল কনফিগ
  const themeStyles = isDark
    ? {
        card: "bg-[#0f172a] border-gray-800 shadow-2xl shadow-purple-900/10",
        sidebar: "from-indigo-900 to-purple-950",
        input: "bg-[#1e293b] border-gray-700 text-white placeholder-gray-500",
        text: "text-gray-100",
        sub: "text-gray-400",
      }
    : {
        card: "bg-white border-gray-100 shadow-xl",
        sidebar: "from-indigo-600 to-purple-700",
        input: "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400",
        text: "text-gray-900",
        sub: "text-gray-500",
      };

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-500 ${isDark ? "bg-[#020617]" : "bg-gray-50"}`}
    >
      <div
        className={`flex flex-col lg:flex-row max-w-4xl w-full rounded-3xl overflow-hidden border ${themeStyles.card}`}
      >
        {/* বাম পাশ: ইনফো সেকশন */}
        <div
          className={`hidden lg:flex lg:w-[40%] bg-gradient-to-br ${themeStyles.sidebar} p-10 text-white flex-col justify-between relative`}
        >
          <div className="z-10">
            <h1 className="text-3xl font-black mb-4 tracking-tighter">
              CONTEST HUB
            </h1>
            <p className="opacity-80 text-sm mb-8 leading-relaxed">
              Login to access your dashboard, track progress, and join ongoing
              coding battles.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm bg-white/10 p-3 rounded-2xl border border-white/10">
                <ShieldCheck className="text-green-400" />
                <span>Secure Authentication</span>
              </div>
            </div>
          </div>
          <div className="z-10 text-[10px] font-mono opacity-50 uppercase tracking-widest">
            Member access only
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl"></div>
        </div>

        {/* ডান পাশ: লগইন ফর্ম */}
        <div className="flex-1 p-8 sm:p-12">
          <div className="max-w-sm mx-auto">
            <div className="text-center lg:text-left mb-8">
              <h2 className={`text-3xl font-bold mb-2 ${themeStyles.text}`}>
                Welcome Back!
              </h2>
              <p className={`text-xs font-medium ${themeStyles.sub}`}>
                Please enter your details to login.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Email */}
              <div className="space-y-1">
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    placeholder="Email Address"
                    className={`w-full pl-11 pr-4 py-3 text-sm rounded-2xl border outline-none transition-all focus:ring-2 focus:ring-purple-500/50 ${themeStyles.input}`}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-[10px] ml-2">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-1">
                <div className="relative">
                  <Lock
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                    })}
                    placeholder="Password"
                    className={`w-full pl-11 pr-12 py-3 text-sm rounded-2xl border outline-none transition-all focus:ring-2 focus:ring-purple-500/50 ${themeStyles.input}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-500 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-[10px] ml-2">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="text-right">
                <button
                  type="button"
                  className="text-[11px] text-purple-500 hover:underline font-semibold"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Submit Button */}
              <button
                disabled={isSubmitting}
                className="btn btn-primary w-full h-12 text-white bg-gradient-to-r from-indigo-600 to-purple-600 border-none rounded-2xl hover:shadow-lg hover:shadow-purple-500/30 transition-all active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <span className="loading loading-spinner loading-xs"></span>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <LogIn size={18} /> Sign In
                  </div>
                )}
              </button>

              <div className="divider text-[10px] opacity-50 uppercase font-bold py-2">
                Or continue with
              </div>

              {/* Google Button */}
              <button
                state={location?.state}
                type="button"
                onClick={handleGoogleLogin}
                className={`btn btn-outline w-full h-12 rounded-2xl border-gray-200 hover:bg-gray-50 transition-all font-bold ${isDark ? "text-white border-gray-700 hover:bg-gray-800" : "text-gray-700 bg-white"}`}
              >
                <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  className="w-5 mr-3"
                  alt="google"
                />
                Google
              </button>

              <p className={`text-center text-xs mt-6 ${themeStyles.sub}`}>
                Don't have an account?{" "}
                <Link
                  state={location?.state}
                  to="/auth/register"
                  className="text-purple-500 font-bold hover:underline"
                >
                  Sign Up Free
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
