import AuthHeader from "@/components/AuthHeader";
import RegisterForm from "@/components/RegisterForm";
import React from "react";

export default function Register() {
   return (
      <div>
         <section>
            <AuthHeader />
         </section>

         <div>
            <RegisterForm />
         </div>
      </div>
   );
}
