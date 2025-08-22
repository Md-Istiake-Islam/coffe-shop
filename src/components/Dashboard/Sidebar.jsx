"use client";
import React, { useEffect, useRef, useState } from "react";
import { File, House, LogOut, User, X } from "lucide-react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Swal from "sweetalert2";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
   const session = useSession();

   const handelSignOut = () => {
      signOut()
         .then(() => {
            Swal.fire({
               title: "logout successfully",
               icon: "success",
               draggable: true,
            });
         })
         .catch((error) => {
            Swal.fire({
               title: "Failed to logout",
               html: `<p className='swal-text'>${error.message}</p>`,
               icon: "error",
               draggable: true,
            });
         });
   };

   //manage dropdown menu
   const [isOpen, setIsOpen] = useState(false);
   const dropdownRef = useRef(null);

   // Close when clicking outside
   useEffect(() => {
      const handleClickOutside = (e) => {
         if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsOpen(false);
         }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, []);

   return (
      <>
         {/* Close side bar if click out side of side bar */}
         {sidebarOpen && (
            <div
               className="fixed inset-0 bg-black/20 z-40 lg:hidden "
               onClick={() => setSidebarOpen(false)}
            />
         )}

         {/* Sidebar */}
         <div
            className={`fixed inset-y-0 left-0 z-45 w-2/12 shadow-xl transform transition-transform duration-200 ease-in-out lg:translate-x-0 bg-gray-800 ${
               sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } `}
         >
            <div
               className={`flex items-center justify-between h-16 px-6 border-b border-gray-700 `}
            >
               <button
                  onClick={() => setSidebarOpen(false)}
                  className={`lg:hidden text-gray-400 hover:text-gray-200`}
               >
                  <X size={24} />
               </button>
            </div>

            <nav className="mt-6 px-3">
               <Link
                  href={"/dashboard/add-product"}
                  className={`flex items-center px-3 py-3 mb-1 text-sm font-medium rounded-lg transition-colors duration-150 bg-blue-900 text-blue-200 hover:bg-blue-800 hover:text-white`}
               >
                  <File size={20} className="mr-3" />
                  Add Product
               </Link>
            </nav>

            <div
               className={`absolute bottom-0 left-0 right-0  border-t border-gray-700 `}
            >
               <div className="relative ">
                  <div
                     className={`flex items-center p-4 relative z-20 bg-gray-800 `}
                  >
                     <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center relative group">
                        <button
                           ref={dropdownRef}
                           tabIndex={0}
                           className="btn btn-ghost btn-circle avatar w-full h-full"
                           onClick={() => setIsOpen((prev) => !prev)}
                        >
                           <div className="w-full h-full bg-gradient-to-br from-blue-500 to-green-500 rounded-full !flex items-center justify-center">
                              <User className="w-8 text-white" />
                           </div>
                        </button>
                     </div>
                     <div className="ml-3">
                        <p className={`text-sm font-medium text-gray-400`}>
                           {session.data.user.name}
                        </p>
                        <p className={`text-xs  text-gray-400 `}>
                           {session.data.user.email}
                        </p>
                     </div>
                  </div>
                  {/* Popup Menu */}
                  <div
                     className={`absolute left-2 -top-42 min-w-54  rounded-2xl shadow-sm border   transition-all origin-bottom-left duration-300 transform z-10 bg-gray-700 border-gray-600 ${
                        isOpen
                           ? "visible translate-y-0 opacity-100"
                           : " translate-y-2 opacity-0 invisible"
                     } `}
                  >
                     <div className="p-2">
                        <Link
                           href="/"
                           className={`flex items-center text-sm space-x-3 px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors duration-200 text-gray-200 `}
                        >
                           <House className="w-5 h-5" />
                           <span>Home</span>
                        </Link>

                        <hr className="my-1 border-gray-200" />
                        <button
                           onClick={() => handelSignOut()}
                           className={`w-full flex items-center text-sm space-x-3 px-4 py-3  hover:bg-red-50 rounded-xl transition-colors duration-200 text-red-400 font-semibold `}
                        >
                           <LogOut className="w-5 h-5" />
                           <span>Sign Out</span>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Sidebar;
