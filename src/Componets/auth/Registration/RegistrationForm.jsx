import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";

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

  const password = watch("password");

  // Form Submit
  const handleRegForm = (data) => {
    toast.success("Form Submitted Successfully!");
    console.log("Register Data:", data);
    reset();
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-6">
        Create Account
      </h2>

      <form onSubmit={handleSubmit(handleRegForm)} className="space-y-4">

        {/* Full Name */}
        <input
          type="text"
          {...register("fullname", { required: true })}
          placeholder="Full Name"
          className="w-full input input-bordered"
        />
        {errors.fullname && (
          <p className="text-red-500 text-xs font-medium mt-1">
            Full name is required
          </p>
        )}

        {/* Username */}
        <input
          type="text"
          {...register("username", { required: true })}
          placeholder="Username"
          className="w-full input input-bordered"
        />
        {errors.username && (
          <p className="text-red-500 text-xs font-medium mt-1">
            Username is required
          </p>
        )}

        {/* Email */}
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Email"
          className="w-full input input-bordered"
        />
        {errors.email && (
          <p className="text-red-500 text-xs font-medium mt-1">
            Email is required
          </p>
        )}

        {/* Phone */}
        <input
          type="number"
          {...register("phone", { required: true })}
          placeholder="Phone Number"
          className="w-full input input-bordered"
        />
        {errors.phone && (
          <p className="text-red-500 text-xs font-medium mt-1">
            Phone number is required
          </p>
        )}

        {/* Password */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 12,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/,
            })}
            placeholder="Password"
            className="w-full input input-bordered pr-10"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>

        {errors.password?.type === "required" && (
          <p className="text-red-500 text-xs font-medium mt-1">
            Password is required
          </p>
        )}
        {errors.password?.type === "minLength" && (
          <p className="text-red-500 text-xs font-medium mt-1">
            Minimum 6 characters required
          </p>
        )}
        {errors.password?.type === "maxLength" && (
          <p className="text-red-500 text-xs font-medium mt-1">
            Maximum 12 characters allowed
          </p>
        )}
        {errors.password?.type === "pattern" && (
          <p className="text-red-500 text-xs font-medium mt-1">
            Include uppercase, lowercase & special character
          </p>
        )}

        {/* Confirm Password */}
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            {...register("confirmpassword", {
              required: true,
              validate: (value) => value === password,
            })}
            placeholder="Confirm Password"
            className="w-full input input-bordered pr-10"
          />
          <span
            onClick={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
          >
            {showConfirmPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </span>
        </div>

        {errors.confirmpassword?.type === "required" && (
          <p className="text-red-500 text-xs font-medium mt-1">
            Confirm password is required
          </p>
        )}
        {errors.confirmpassword?.type === "validate" && (
          <p className="text-red-500 text-xs font-medium mt-1">
            Passwords do not match
          </p>
        )}

        {/* Gender */}
        <select
          {...register("gender", { required: true })}
          className="w-full select select-bordered"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && (
          <p className="text-red-500 text-xs font-medium mt-1">
            Gender is required
          </p>
        )}

        {/* Date */}
        <input
          type="date"
          {...register("date", { required: true })}
          className="w-full input input-bordered"
        />
        {errors.date && (
          <p className="text-red-500 text-xs font-medium mt-1">
            Date of birth is required
          </p>
        )}

        {/* Profile Image */}
        <input
          type="file"
          {...register("image", { required: true })}
          className="file-input file-input-bordered w-full"
        />
        {errors.image && (
          <p className="text-red-500 text-xs font-medium mt-1">
            Profile image is required
          </p>
        )}

        {/* Terms */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            {...register("check", { required: true })}
            className="checkbox"
          />
          <span className="text-sm">
            I agree to Terms & Conditions
          </span>
        </label>
        {errors.check && (
          <p className="text-red-500 text-xs font-medium mt-1">
            You must accept the terms
          </p>
        )}

        <button className="btn btn-primary w-full mt-4">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
