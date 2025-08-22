import Sidebar from "@/components/Dashboard/Sidebar";
import Navbar from "@/components/Navbar";
import React from "react";

export default function MainLayout({ children }) {
   return (
      <>
         <section className="sticky top-0 z-50">
            <Navbar />
         </section>

         <section>{children}</section>
      </>
   );
}
