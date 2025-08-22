"use client";

import { useParams } from "next/navigation";
import {
   ArrowLeft,
   Star,
   Coffee,
   MapPin,
   Tag,
   Package,
   ShoppingCart,
   Heart,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

const fetchProductById = async (id) => {
   const res = await fetch(`/api/products/${id}`);
   const data = await res.json();
   return data.data;
};

const SingleProduct = () => {
   const { id } = useParams();

   const [quantity, setQuantity] = useState(1);
   const [isFavorite, setIsFavorite] = useState(false);

   const [product, setProduct] = useState(null);
   useEffect(() => {
      const getProduct = async () => {
         const productData = await fetchProductById(id);
         setProduct(productData);
      };
      getProduct();
   }, [id]);

   if (!product) {
      return <LoadingSpinner />;
   }

   const handleQuantityChange = (change) => {
      setQuantity(Math.max(1, quantity + change));
   };
   return (
      <div className="min-h-screen bg-gray-900 py-2">
         {/* Breadcrumb */}
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
            <Link
               href="/products"
               className="inline-flex items-center text-amber-600 hover:text-amber-700 transition-colors"
            >
               <ArrowLeft className="h-6 w-6 mr-2 bg-amber-600 text-white rounded-full p-1" />
            </Link>
         </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="bg-gray-700 rounded-2xl shadow-xl overflow-hidden">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Product Image */}
                  <div className="relative h-96 lg:h-full">
                     <img
                        src={product.imageUrl}
                        alt={product.coffeeName}
                        className="w-full h-full object-cover"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                     <button
                        onClick={() => setIsFavorite(!isFavorite)}
                        className={`absolute top-6 right-6 p-3 rounded-full transition-all duration-300 ${
                           isFavorite
                              ? "bg-red-500 text-white"
                              : "bg-white/90 text-gray-600 hover:bg-white"
                        }`}
                     >
                        <Heart
                           className={`h-5 w-5 ${
                              isFavorite ? "fill-current" : ""
                           }`}
                        />
                     </button>
                  </div>

                  {/* Product Details */}
                  <div className="p-8 lg:p-12">
                     <div className="mb-6">
                        <div className="flex items-center justify-between mb-4">
                           <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-400/30 text-amber-300">
                              <Coffee className="h-4 w-4 mr-1" />
                              {product.type}
                           </span>
                           <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                 <Star
                                    key={i}
                                    className="h-4 w-4 text-yellow-400 fill-current"
                                 />
                              ))}
                              <span className="ml-2 text-sm text-gray-300">
                                 (4.8)
                              </span>
                           </div>
                        </div>

                        <h1 className="text-3xl lg:text-4xl font-bold text-gray-200 mb-2">
                           {product.coffeeName}
                        </h1>

                        <div className="flex items-center space-x-4 text-gray-300 mb-4">
                           <div className="flex items-center">
                              <Tag className="h-4 w-4 mr-1" />
                              <span>{product.brand}</span>
                           </div>
                           <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              <span>{product.origin}</span>
                           </div>
                        </div>

                        <div className="text-4xl font-bold text-amber-500 mb-6">
                           ${product.price}
                        </div>
                     </div>

                     {/* Product Info Cards */}
                     <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-amber-600/30 rounded-lg p-4 text-center">
                           <Package className="h-6 w-6 text-amber-300 mx-auto mb-2" />
                           <div className="text-sm font-medium text-gray-200">
                              Origin
                           </div>
                           <div className="text-sm text-gray-300">
                              {product.origin}
                           </div>
                        </div>
                        <div className="bg-amber-400/30 rounded-lg p-4 text-center">
                           <Coffee className="h-6 w-6 text-amber-300 mx-auto mb-2" />
                           <div className="text-sm font-medium text-gray-200">
                              Type
                           </div>
                           <div className="text-sm text-gray-300">
                              {product.type}
                           </div>
                        </div>
                     </div>

                     {/* Description */}
                     <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-200 mb-3">
                           Description
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                           {product.description}
                        </p>
                     </div>

                     {/* Quantity and Add to Cart */}
                     <div className="space-y-6">
                        <div>
                           <label className="block text-sm font-medium text-gray-200 mb-2">
                              Quantity
                           </label>
                           <div className="flex items-center space-x-3">
                              <button
                                 onClick={() => handleQuantityChange(-1)}
                                 className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:text-gray-800 transition-colors"
                              >
                                 -
                              </button>
                              <span className="text-lg font-semibold w-8 text-center">
                                 {quantity}
                              </span>
                              <button
                                 onClick={() => handleQuantityChange(1)}
                                 className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:text-gray-800 transition-colors"
                              >
                                 +
                              </button>
                           </div>
                        </div>

                        <button className="w-full coffee-gradient text-white py-4 px-6 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                           <ShoppingCart className="h-5 w-5" />
                           <span>
                              Add to Cart - $
                              {(parseFloat(product.price) * quantity).toFixed(
                                 2
                              )}
                           </span>
                        </button>

                        <div className="grid grid-cols-2 gap-4">
                           <button className="border-2 border-amber-600 text-amber-600 py-3 px-6 rounded-lg font-semibold hover:bg-amber-50 transition-colors">
                              Buy Now
                           </button>
                           <button className="border-2 border-gray-300 text-gray-300 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                              Add to Wishlist
                           </button>
                        </div>
                     </div>

                     {/* Additional Info */}
                     <div className="mt-8 pt-8 border-t border-gray-200">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300">
                           <div>
                              <span className="font-medium">Product ID:</span>{" "}
                              {product._id}
                           </div>
                           <div>
                              <span className="font-medium">Brand:</span>{" "}
                              {product.brand}
                           </div>
                           <div>
                              <span className="font-medium">Free shipping</span>{" "}
                              on orders over $50
                           </div>
                           <div>
                              <span className="font-medium">30-day</span> return
                              policy
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SingleProduct;
