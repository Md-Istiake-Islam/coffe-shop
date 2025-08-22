import Header from "@/components/Dashboard/Header";
import Sidebar from "@/components/Dashboard/Sidebar";
import ProtectedAuthProvider from "@/provider/ProtectedAuthProvider";
import React from "react";

export default function DashboardLayout({ children }) {
   return (
      <ProtectedAuthProvider>
         <div className="min-h-screen bg-gray-900 w-full grid grid-cols-12">
            <div className="col-span-12 sticky top-0 z-50 ">
               <Header />
            </div>
            <section className="col-span-2 ">
               <Sidebar />
            </section>
            <main className="col-span-10 px-14">{children}</main>
         </div>
      </ProtectedAuthProvider>
   );
}
