"use client";
import React from "react";
import { Menu, House } from "lucide-react";
import Link from "next/link";

export default function Header({ setSidebarOpen }) {
   // button text style
   const btnTxtStyle = "text-gray-400 hover:text-gray-200";

   return (
      <header
         className={"px-10 shadow-sm border-b border-gray-700 bg-gray-800 "}
      >
         <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center">
               <button
                  onClick={() => setSidebarOpen(true)}
                  className={`lg:hidden ${btnTxtStyle}`}
               >
                  <Menu size={24} />
               </button>
               <h2 className={"text-xl font-bold text-white"}>Dashboard</h2>
            </div>

            <div className="flex items-center space-x-4">
               <Link href={"/"}>
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                     <span className="text-white font-semibold text-sm ">
                        <House className="w-5" />
                     </span>
                  </div>
               </Link>
            </div>
         </div>
      </header>
   );
}
