import { Coffee } from "lucide-react";
import React from "react";

const Loading = () => {
   return (
      <div
         className={`min-h-screen flex items-center justify-center fixed top-0 left-0 w-full z-[9999] bg-gray-800 `}
      >
         <div className="text-center">
            <div className="relative w-16 h-16 mx-auto mb-4">
               {/* Spinning ring */}
               <div
                  className={`absolute inset-0 border-4  rounded-full border-gray-600 `}
               ></div>
               <div className="absolute inset-0 border-4 border-transparent border-t-amber-600 rounded-full animate-spin"></div>

               {/* Loading Coffee Icons */}
               <div className="absolute inset-0 flex items-center justify-center">
                  <Coffee className="w-6 h-6 text-green-500 animate-pulse" />
               </div>
            </div>

            <h3 className={`text-lg font-semibold  mb-2 text-slate-200 `}>
               Loading Services...
            </h3>
            <p className={` text-gray-400`}>
               Please wait while we connect you to our services.
            </p>
         </div>
      </div>
   );
};

export default Loading;
