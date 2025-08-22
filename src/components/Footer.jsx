import { Coffee, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
   return (
      <footer className="bg-amber-600/40 text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {/* Logo and Description */}
               <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center space-x-2 mb-4">
                     <Coffee className="h-8 w-8" />
                     <span className="text-xl font-bold">CoffeeShop</span>
                  </div>
                  <p className="text-gray-300 mb-4">
                     Bringing you the finest coffee experience with premium
                     beans sourced from the best coffee regions around the
                     world.
                  </p>
                  <div className="flex space-x-4">
                     <Facebook className="h-6 w-6 text-gray-300 hover:text-white transition-colors cursor-pointer" />
                     <Twitter className="h-6 w-6 text-gray-300 hover:text-white transition-colors cursor-pointer" />
                     <Instagram className="h-6 w-6 text-gray-300 hover:text-white transition-colors cursor-pointer" />
                  </div>
               </div>

               {/* Quick Links */}
               <div>
                  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                     <li>
                        <a
                           href="/"
                           className="text-gray-300 text-sm hover:text-white transition-colors"
                        >
                           Home
                        </a>
                     </li>
                     <li>
                        <a
                           href="/products"
                           className="text-gray-300 text-sm hover:text-white transition-colors"
                        >
                           All Products
                        </a>
                     </li>
                     <li>
                        <a
                           href="/about"
                           className="text-gray-300 text-sm hover:text-white transition-colors"
                        >
                           About Us
                        </a>
                     </li>
                     <li>
                        <a
                           href="/contact"
                           className="text-gray-300 text-sm hover:text-white transition-colors"
                        >
                           Contact
                        </a>
                     </li>
                  </ul>
               </div>

               {/* Contact Info */}
               <div>
                  <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                  <div className="space-y-2 text-gray-300">
                     <p>123 Coffee Street</p>
                     <p>Bean City, BC 12345</p>
                     <p>Phone: (555) 123-4567</p>
                     <p>Email: info@coffeeshop.com</p>
                  </div>
               </div>
            </div>

            <div className="border-t border-amber-800 mt-8 pt-8 text-center">
               <p className="text-amber-200">
                  © 2024 CoffeeShop. All rights reserved.
               </p>
            </div>
         </div>
      </footer>
   );
}
