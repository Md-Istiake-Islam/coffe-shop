"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";

export default function RegisterForm() {
   const [showPassword, setShowPassword] = useState(false);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = async (data) => {
      // You can send this data to your backend or Firebase here
      try {
         const res = await fetch(`/api/users`, {
            method: "POST",
            "Content-Type": "application/json",
            body: JSON.stringify(data),
         });
         const result = await res.json();
         console.log(result);
         if (result.data.acknowledged === true) {
            Swal.fire({
               title: "Registration successful",
               icon: "success",
               draggable: true,
            });
         }
      } catch (error) {
         Swal.fire({
            title: "User already exist",
            icon: "error",
            draggable: true,
         });
      }
   };

   return (
      <div>
         <div className="bg-gray-900 px-6 shadow-lg rounded-lg min-h-[calc(100vh-80px)] flex items-center">
            <form
               className="space-y-6 min-w-lg mx-auto bg-gray-700/40 p-12 rounded-xl"
               onSubmit={handleSubmit(onSubmit)}
            >
               <h2 className="text-lg font-semibold text-gray-200">
                  Enter your info here{" "}
               </h2>
               <div>
                  <label
                     htmlFor="name"
                     className="block text-sm font-medium text-gray-300 mb-2"
                  >
                     Full Name
                  </label>
                  <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                     </div>
                     <input
                        {...register("name", {
                           required: "Name is required",
                           minLength: {
                              value: 2,
                              message: "Name must be at least 2 characters",
                           },
                        })}
                        type="text"
                        className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-md leading-5 bg-gray-700/40 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="Enter your full name"
                     />
                  </div>
                  {errors.name && (
                     <p className="mt-1 text-sm text-red-600">
                        {errors.name.message}
                     </p>
                  )}
               </div>

               <div>
                  <label
                     htmlFor="email"
                     className="block text-sm font-medium text-gray-300 mb-2"
                  >
                     Email Address
                  </label>
                  <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                     </div>
                     <input
                        {...register("email", {
                           required: "Email is required",
                           pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                           },
                        })}
                        type="email"
                        className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-md leading-5 bg-gray-700/40 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="Enter your email"
                     />
                  </div>
                  {errors.email && (
                     <p className="mt-1 text-sm text-red-600">
                        {errors.email.message}
                     </p>
                  )}
               </div>

               <div>
                  <label
                     htmlFor="password"
                     className="block text-sm font-medium text-gray-300 mb-2"
                  >
                     Password
                  </label>
                  <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                     </div>
                     <input
                        {...register("password", {
                           required: "Password is required",
                           minLength: {
                              value: 6,
                              message: "Password must be at least 6 characters",
                           },
                        })}
                        type={showPassword ? "text" : "password"}
                        className="block w-full pl-10 pr-10 py-3 border border-gray-600 rounded-md leading-5 bg-gray-700/40 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="Create a password"
                     />
                     <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                     >
                        {showPassword ? (
                           <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        ) : (
                           <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        )}
                     </button>
                  </div>
                  {errors.password && (
                     <p className="mt-1 text-sm text-red-600">
                        {errors.password.message}
                     </p>
                  )}
               </div>

               <div>
                  <button
                     type="submit"
                     className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white coffee-gradient hover:opacity-90 focus:outline-none hover:scale-[1.01] focus:scale-100 transition-all duration-300"
                  >
                     Create Account
                  </button>
               </div>

               <div className="text-center flex justify-center">
                  <button
                     type="button"
                     onClick={() => signIn()}
                     className="text-sm text-gray-300 flex items-center gap-2"
                  >
                     Already have an account?{" "}
                     <p
                        href="/login"
                        className="font-medium text-amber-600 hover:text-amber-500 transition-colors"
                     >
                        Sign in here
                     </p>
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
}
