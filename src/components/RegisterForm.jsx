"use client";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = async (data) => {
      console.log("User Registered:", data);
      // You can send this data to your backend or Firebase here
      try {
         const res = await fetch(`/api/users`, {
            method: "POST",
            "Content-Type": "application/json",
            body: JSON.stringify(data),
         });
         const recieveData = await res.json();
         console.log(recieveData);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <form
         onSubmit={handleSubmit(onSubmit)}
         style={{ maxWidth: 400, margin: "auto" }}
      >
         <h2>User Registration</h2>
         <div>
            <label>Name</label>
            <input
               {...register("name", { required: "Name is required" })}
               placeholder="Your name"
            />
            {errors.name && (
               <p style={{ color: "red" }}>{errors.name.message}</p>
            )}
         </div>
         <div>
            <label>Email</label>
            <input
               {...register("email", {
                  required: "Email is required",
                  pattern: {
                     value: /^\S+@\S+$/i,
                     message: "Invalid email format",
                  },
               })}
               placeholder="you@example.com"
            />
            {errors.email && (
               <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
         </div>
         <div>
            <label>Password</label>
            <input
               type="password"
               {...register("password", {
                  required: "Password is required",
                  minLength: {
                     value: 6,
                     message: "Password must be at least 6 characters",
                  },
               })}
               placeholder="••••••••"
            />
            {errors.password && (
               <p style={{ color: "red" }}>{errors.password.message}</p>
            )}
         </div>

         <button type="submit" style={{ marginTop: "1rem" }}>
            Register
         </button>
      </form>
   );
}
