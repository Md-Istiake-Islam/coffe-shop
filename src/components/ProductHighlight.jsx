"use client";
import { Eye } from "lucide-react";
import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import Link from "next/link";

const fetchProducts = async () => {
   const res = await fetch(`/api/products`);
   const data = await res.json();
   return data.data;
};

const ProductHighlight = () => {
   const [allProducts, setAllProducts] = useState([]);

   useEffect(() => {
      const getProducts = async () => {
         const products = await fetchProducts();
         setAllProducts(products);
      };
      getProducts();
   }, []);

   if (!allProducts || allProducts.length === 0) {
      return <LoadingSpinner />;
   }

   return (
      <section className="py-20 bg-gray-900">
         <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-12">
               <h2 className="text-3xl sm:text-4xl font-bold coffee-text-gradient mb-4">
                  Featured Products
               </h2>
               <p className=" text-gray-400 max-w-2xl mx-auto">
                  Discover our most popular coffee selections, carefully curated
                  for exceptional taste and quality.
               </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               {allProducts
                  .reverse()
                  .slice(0, 8)
                  .map((product) => (
                     <div
                        key={product._id}
                        className="bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                     >
                        <div className="relative h-48 overflow-hidden">
                           <img
                              src={product.imageUrl}
                              alt={product.name}
                              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                           />
                        </div>
                        <div className="p-6">
                           <h3 className="text-xl font-semibold text-gray-200 mb-2">
                              {product.coffeeName}
                           </h3>
                           <p className="line-clamp-2 text-gray-300 mb-4 text-sm leading-relaxed">
                              {product.description}
                           </p>
                           <div className="flex items-center justify-between">
                              <span className="text-2xl font-bold text-amber-600">
                                 {`$ ${product.price}`}
                              </span>
                              <Link
                                 href={`/products/${product._id}`}
                                 className="bg-amber-700 hover:bg-amber-800 text-white text-sm px-4 py-2 rounded-md transition-colors duration-300 flex items-center space-x-2"
                              >
                                 <Eye className="h-4 w-4" />
                                 <span>View Details</span>
                              </Link>
                           </div>
                        </div>
                     </div>
                  ))}
            </div>
         </div>
      </section>
   );
};

export default ProductHighlight;
