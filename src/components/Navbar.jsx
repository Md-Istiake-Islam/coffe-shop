"use client";

import React from "react";
import { CiLogout } from "react-icons/ci";
import Swal from "sweetalert2";
import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
   const session = useSession();
   const router = useRouter();

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

   const user = true;
   const navbarLinks = (
      <>
         <li>
            <Link
               href={"/"}
               className={
                  "!font-nunito px-4 py-0.5 rounded-lg hover:text-amber-100"
               }
            >
               Home
            </Link>
         </li>
         <li>
            <Link
               href={`./products`}
               className={
                  "!font-nunito px-4 py-0.5 rounded-lg hover:text-amber-100"
               }
            >
               Products
            </Link>
         </li>
      </>
   );

   return (
      <div className="coffee-gradient shadow-sm py-2">
         <div className="container mx-auto navbar items-center">
            <div className="flex-1 flex gap-2">
               <div className="hidden lg:flex items-center gap-2">
                  {
                     <Link href={"/"} className="">
                        <Image
                           src={"/Coffee-Shop-Logo.jpg"}
                           alt="Logo"
                           className="w-15 aspect-[16/15] rounded-full"
                           width={60}
                           height={60}
                        ></Image>
                     </Link>
                  }
                  <h1 className="text-xl font-bold ">Coffee Shop</h1>
               </div>
               <div className="dropdown">
                  <div
                     tabIndex={0}
                     role="button"
                     className="btn btn-ghost lg:hidden border-gray-100"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                     >
                        {" "}
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M4 6h16M4 12h8m-8 6h16"
                        />{" "}
                     </svg>
                  </div>
                  <ul
                     tabIndex={0}
                     className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                  >
                     {navbarLinks}
                  </ul>
               </div>
            </div>

            <div className="flex items-center gap-8">
               <ul className="menu menu-horizontal px-1 text-lg font-medium text-gray-100 gap-1 items-center hidden lg:flex">
                  {navbarLinks}
                  {session.data && (
                     <li>
                        <Link
                           href={"/dashboard/add-product"}
                           className={
                              "!font-nunito px-4 py-0.5 rounded-lg hover:text-amber-100"
                           }
                        >
                           Dashboard
                        </Link>
                     </li>
                  )}
               </ul>
               <div>
                  {session.data ? (
                     <div>
                        <button
                           onClick={() => handelSignOut()}
                           className={` btn gap-2  px-3 rounded-lg text-gray-50 bg-gray-700 hover:bg-gray-800]  }`}
                        >
                           <CiLogout className="text-xl font-bold " />
                           Log out
                        </button>
                     </div>
                  ) : (
                     <div className="flex items-center gap-2">
                        <button
                           onClick={() => signIn()}
                           className="btn border-none bg-gray-700 hover:bg-gray-800 text-gray-100 outline-none shadow-none px-7 rounded-lg"
                        >
                           Sign in
                        </button>
                        <span>or</span>
                        <button
                           onClick={() => router.push("/register")}
                           className="btn border-none bg-gray-800 hover:bg-gray-700 text-gray-100 outline-none shadow-none px-7 rounded-lg"
                        >
                           Register
                        </button>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
