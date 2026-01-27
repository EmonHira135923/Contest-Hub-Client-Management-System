import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  Eye,
  EyeOff,
  User,
  Mail,
  Phone,
  Lock,
  Image as ImageIcon,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import useTheme from "../../hooks/useTheme";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Baseurl from "../../utils/Baseurl";

const Register = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { isDark } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const { reg, updateUser, googleUser } = useAuth();

  const password = watch("password");
  const from = location?.state || "/";

  // --- ১. ইমেইল এবং পাসওয়ার্ড দিয়ে রেজিস্ট্রেশন ---
  const handleRegForm = async (data) => {
    setIsSubmitting(true);
    const imageFile = data.image[0];
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      // Step A: ImgBB তে ছবি আপলোড
      const image_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_APIKEY}`;
      const imgRes = await axios.post(image_url, formData);
      const photoURL = imgRes.data.data.display_url;

      // Step B: Firebase এ ইউজার তৈরি
      await reg(data.email, data.password);

      // Step C: Firebase প্রোফাইল আপডেট (Name & Photo)
      await updateUser({ displayName: data.fullname, photoURL });

      // Step D: ডাটাবেজে (MongoDB) ইউজার তথ্য সেভ করা
      const userInfo = {
        name: data.fullname,
        email: data.email,
        phone: data.phone,
        photo: photoURL,
        role: "user",
        createdAt: new Date(),
      };

      const dbRes = await axios.post(`${Baseurl}/register`, userInfo);

      if (dbRes.data) {
        toast.success(`Welcome ${data.fullname}! Account Created.`);
        reset();
        navigate(from, { replace: true });
      }
    } catch (err) {
      console.error(err);
      toast.error(
        err?.code === "auth/email-already-in-use"
          ? "Email already exists!"
          : "Registration failed!",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- ২. গুগল দিয়ে লগইন এবং ডাটাবেজে সেভ ---
  const handleGoogleLogin = async () => {
    try {
      const res = await googleUser();

      const userInfo = {
        name: res?.user?.displayName,
        email: res?.user?.email,
        photo: res?.user?.photoURL,
        role: "user",
        lastLogin: new Date(),
      };

      // গুগল ইউজারকে ডাটাবেজে পাঠানো (Backend handles if user already exists)
      await axios.post(`${Baseurl}/register`, userInfo);

      toast.success(`Welcome ${res?.user?.displayName}!`);
      navigate(from, { replace: true });
    } catch (err) {
      console.error("Google login error:", err);
      toast.error(err.message || "Google login failed");
    }
  };

  const themeStyles = isDark
    ? {
        card: "bg-[#0f172a] border-gray-800 shadow-2xl",
        sidebar: "from-purple-900 to-indigo-950",
        input: "bg-[#1e293b] border-gray-700 text-white placeholder-gray-500",
        text: "text-gray-100",
        sub: "text-gray-400",
      }
    : {
        card: "bg-white border-gray-100 shadow-xl",
        sidebar: "from-purple-600 to-indigo-700",
        input: "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400",
        text: "text-gray-900",
        sub: "text-gray-500",
      };

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 ${isDark ? "bg-[#020617]" : "bg-gray-50"}`}
    >
      <div
        className={`flex flex-col lg:flex-row max-w-4xl w-full rounded-3xl overflow-hidden border ${themeStyles.card}`}
      >
        {/* Sidebar Info */}
        <div
          className={`hidden lg:flex lg:w-[40%] bg-gradient-to-br ${themeStyles.sidebar} p-10 text-white flex-col justify-between relative`}
        >
          <div className="z-10">
            <h1 className="text-3xl font-black mb-4 uppercase tracking-tighter">
              Contest Hub
            </h1>
            <div className="space-y-4">
              {[
                "Join Live Contests",
                "Win Exciting Prizes",
                "Build Your Portfolio",
              ].map((t, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-sm font-medium"
                >
                  <CheckCircle size={18} className="text-green-400" /> {t}
                </div>
              ))}
            </div>
          </div>
          <p className="z-10 text-[10px] opacity-40">
            SECURE REGISTRATION SYSTEM V2.0
          </p>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        {/* Form Section */}
        <div className="flex-1 p-6 sm:p-10">
          <div className="max-w-sm mx-auto">
            <h2 className={`text-2xl font-bold mb-1 ${themeStyles.text}`}>
              Create Account
            </h2>
            <p className={`text-xs mb-6 ${themeStyles.sub}`}>
              Fill in the details to start your journey.
            </p>

            <form onSubmit={handleSubmit(handleRegForm)} className="space-y-3">
              {/* Name */}
              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <input
                  {...register("fullname", { required: "Name is required" })}
                  placeholder="Full Name"
                  className={`w-full pl-10 py-2 text-sm rounded-xl border outline-none transition-all ${themeStyles.input}`}
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <input
                  type="email"
                  {...register("email", { required: "Email required" })}
                  placeholder="Email Address"
                  className={`w-full pl-10 py-2 text-sm rounded-xl border outline-none ${themeStyles.input}`}
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <Phone
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <input
                  type="number"
                  {...register("phone", { required: "Phone required" })}
                  placeholder="Phone Number"
                  className={`w-full pl-10 py-2 text-sm rounded-xl border outline-none ${themeStyles.input}`}
                />
              </div>

              {/* Password */}
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password required",
                    minLength: 6,
                  })}
                  placeholder="Password"
                  className={`w-full pl-10 pr-10 py-2 text-sm rounded-xl border outline-none ${themeStyles.input}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>

              {/* Profile Image */}
              <div className="space-y-1">
                <label
                  className={`text-[10px] font-bold ml-1 ${themeStyles.sub}`}
                >
                  PROFILE PHOTO
                </label>
                <input
                  type="file"
                  {...register("image", { required: true })}
                  className="file-input file-input-bordered file-input-xs w-full h-9 rounded-lg"
                />
              </div>

              <button
                disabled={isSubmitting}
                className="btn btn-primary w-full btn-sm h-10 text-white bg-gradient-to-r from-purple-600 to-indigo-600 border-none rounded-xl"
              >
                {isSubmitting ? "Uploading & Creating..." : "Register Now"}{" "}
                <ArrowRight size={14} className="ml-1" />
              </button>

              <div className="divider text-[10px] opacity-50 uppercase">
                Or continue with
              </div>

              <button
                type="button"
                onClick={handleGoogleLogin}
                className={`btn btn-outline btn-sm w-full h-10 rounded-xl border-gray-300 ${isDark ? "text-white hover:bg-gray-800" : "text-gray-700"}`}
              >
                <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  className="w-4 mr-2"
                  alt="google"
                />
                Google
              </button>

              <p className={`text-center text-[11px] mt-4 ${themeStyles.sub}`}>
                Already member?{" "}
                <Link to="/auth/login" className="text-purple-500 font-bold">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
