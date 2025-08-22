"use client";

import LoadingSpinner from "@/components/LoadingSpinner";
import ProductsCard from "@/components/ProductsCard";
import React, { useEffect, useState } from "react";

const fetchProducts = async () => {
   const res = await fetch(`/api/products`);
   const data = await res.json();
   return data.data;
};

const Products = () => {
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
      <div className="min-h-screen bg-gray-800 py-12">
         <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-12">
               <h1 className="text-4xl font-bold text-gray-100 mb-4">
                  All Products
               </h1>
               <p className=" text-gray-400 max-w-3xl mx-auto">
                  Explore our complete collection of premium coffee beans,
                  brewing equipment, and accessories. Each product is carefully
                  selected to bring you the finest coffee experience.
               </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               {allProducts.map((product) => (
                  <ProductsCard key={product._id} product={product} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default Products;
