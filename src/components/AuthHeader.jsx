"use client";
import React from "react";
import { ArrowLeft, Menu, Undo2 } from "lucide-react";
import Link from "next/link";

const AuthHeader = () => {
   return (
      <header
         className={"px-10 shadow-sm border-b border-gray-700 bg-gray-800 "}
      >
         <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center">
               <button
                  onClick={() => setSidebarOpen(true)}
                  className={`lg:hidden text-gray-400 hover:text-gray-200`}
               >
                  <Menu size={24} />
               </button>
               <h2 className={"text-xl font-bold text-white"}>
                  Register Your Account
               </h2>
            </div>

            <div className="flex items-center space-x-4 gap-3 text-sm">
               <Link href={"/"}>
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                     <span className="text-white font-semibold text-sm ">
                        <ArrowLeft className="w-4" />
                     </span>
                  </div>
               </Link>
               Back to Home
            </div>
         </div>
      </header>
   );
};

export default AuthHeader;
