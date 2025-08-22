"use client";
import { set, useForm } from "react-hook-form";

import { Coffee, DollarSign, Tag, MapPin, Image, FileText } from "lucide-react";
import { useState } from "react";
import Swal from "sweetalert2";

const AddProductForm = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm();

   const [isLoading, setIsLoading] = useState(false);

   const onSubmit = async (data) => {
      setIsLoading(true);
      // You can send this to your API or database

      try {
         const res = await fetch("http://localhost:3000/api/products", {
            method: "POST",
            "Content-Type": "application/json",
            body: JSON.stringify(data),
         });
         const result = await res.json();
         console.log(result);
         if (result.data.acknowledged === true) {
            console.log("Product added successfully:", result);
            Swal.fire({
               title: "Product added successfully!",
               icon: "success",
               draggable: true,
            });
            setIsLoading(false);
            reset();
         } else {
            throw new Error(result.message || "Failed to add product");
         }
         reset();
      } catch (error) {
         console.log(error);
      }
   };

   const coffeeTypes = [
      "Single Origin",
      "Blend",
      "Espresso",
      "Dark Roast",
      "Medium Roast",
      "Light Roast",
      "Decaf",
   ];

   const coffeeBrands = [
      "CoffeeShop Premium",
      "Mountain Peak",
      "Urban Roasters",
      "Heritage Coffee",
      "Artisan Blend",
      "Classic Choice",
   ];

   const coffeeOrigins = [
      "Colombia",
      "Ethiopia",
      "Jamaica",
      "Kenya",
      "Brazil",
      "Guatemala",
      "Costa Rica",
      "Yemen",
      "Hawaii",
      "Mexico",
   ];

   return (
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 px-">
         <div className="mb-8">
            <h2 className="text-2xl font-bold coffee-text-gradient mb-2">
               Add New Coffee Product
            </h2>
            <p className="text-gray-400">
               Fill in the details below to add a new coffee product to your
               inventory.
            </p>
         </div>
         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {/* Coffee Name */}
               <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                     Coffee Name
                  </label>
                  <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Coffee className="h-5 w-5 text-gray-400" />
                     </div>
                     <input
                        {...register("coffeeName", {
                           required: "Coffee name is required",
                           minLength: {
                              value: 2,
                              message:
                                 "Coffee name must be at least 2 characters",
                           },
                        })}
                        type="text"
                        className="block w-full pl-10 pr-3 py-3 border hover:bg-gray-600/20 border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="Enter coffee name"
                     />
                  </div>
                  {errors.coffeeName && (
                     <p className="mt-1 text-sm text-red-600">
                        {errors.coffeeName.message}
                     </p>
                  )}
               </div>

               {/* Price */}
               <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                     Price
                  </label>
                  <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <DollarSign className="h-5 w-5 text-gray-400" />
                     </div>
                     <input
                        {...register("price", {
                           required: "Price is required",
                           pattern: {
                              value: /^\d+(\.\d{2})?$/,
                              message:
                                 "Please enter a valid price (e.g., 19.99)",
                           },
                        })}
                        type="text"
                        className="block w-full pl-10 pr-3 py-3 border hover:bg-gray-600/20 border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="19.99"
                     />
                  </div>
                  {errors.price && (
                     <p className="mt-1 text-sm text-red-600">
                        {errors.price.message}
                     </p>
                  )}
               </div>

               {/* Brand */}
               <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                     Brand
                  </label>
                  <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Tag className="h-5 w-5 text-gray-400" />
                     </div>
                     <select
                        {...register("brand", {
                           required: "Brand is required",
                        })}
                        className="block w-full pl-10 pr-3 py-3 hover:bg-gray-600/20 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                     >
                        <option className="bg-gray-600" value="">
                           Select brand
                        </option>
                        {coffeeBrands.map((brand) => (
                           <option
                              className="bg-gray-600 "
                              key={brand}
                              value={brand}
                           >
                              {brand}
                           </option>
                        ))}
                     </select>
                  </div>
                  {errors.brand && (
                     <p className="mt-1 text-sm text-red-600">
                        {errors.brand.message}
                     </p>
                  )}
               </div>

               {/* Type */}
               <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                     Coffee Type
                  </label>
                  <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Coffee className="h-5 w-5 text-gray-400" />
                     </div>
                     <select
                        {...register("type", {
                           required: "Coffee type is required",
                        })}
                        className="block w-full pl-10 pr-3 py-3 border hover:bg-gray-600/20 border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                     >
                        <option className="bg-gray-600 " value="">
                           Select type
                        </option>
                        {coffeeTypes.map((type) => (
                           <option
                              className="bg-gray-600 "
                              key={type}
                              value={type}
                           >
                              {type}
                           </option>
                        ))}
                     </select>
                  </div>
                  {errors.type && (
                     <p className="mt-1 text-sm text-red-600">
                        {errors.type.message}
                     </p>
                  )}
               </div>

               {/* Origin */}
               <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                     Origin
                  </label>
                  <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400" />
                     </div>
                     <select
                        {...register("origin", {
                           required: "Origin is required",
                        })}
                        className="block w-full pl-10 pr-3 py-3 border hover:bg-gray-600/20 border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                     >
                        <option className="bg-gray-600 " value="">
                           Select origin
                        </option>
                        {coffeeOrigins.map((origin) => (
                           <option
                              className="bg-gray-600 "
                              key={origin}
                              value={origin}
                           >
                              {origin}
                           </option>
                        ))}
                     </select>
                  </div>
                  {errors.origin && (
                     <p className="mt-1 text-sm text-red-600">
                        {errors.origin.message}
                     </p>
                  )}
               </div>

               {/* Image URL */}
               <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                     Image URL
                  </label>
                  <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Image className="h-5 w-5 text-gray-400" />
                     </div>
                     <input
                        {...register("imageUrl", {
                           required: "Image URL is required",
                           pattern: {
                              value: /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i,
                              message: "Please enter a valid image URL",
                           },
                        })}
                        type="url"
                        className="block w-full pl-10 pr-3 py-3 border hover:bg-gray-600/20 border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="https://example.com/coffee-image.jpg"
                     />
                  </div>
                  {errors.imageUrl && (
                     <p className="mt-1 text-sm text-red-600">
                        {errors.imageUrl.message}
                     </p>
                  )}
               </div>
            </div>

            {/* Short Description */}
            <div>
               <label className="block text-sm font-medium text-gray-300 mb-2">
                  Short Description
               </label>
               <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                     <FileText className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                     {...register("description", {
                        required: "Description is required",
                        minLength: {
                           value: 10,
                           message:
                              "Description must be at least 10 characters",
                        },
                        maxLength: {
                           value: 200,
                           message:
                              "Description must not exceed 200 characters",
                        },
                     })}
                     rows={4}
                     className="block w-full pl-10 pr-3 py-3 border hover:bg-gray-600/20 border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                     placeholder="Enter a short description of the coffee..."
                  />
               </div>
               {errors.description && (
                  <p className="mt-1 text-sm text-red-600">
                     {errors.description.message}
                  </p>
               )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
               <button
                  type="submit"
                  className="w-full coffee-gradient text-white py-3 px-6 rounded-md font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-102 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
               >
                  {isLoading ? (
                     <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Creating Camp...</span>
                     </div>
                  ) : (
                     "Create Medical Camp"
                  )}
                  Add Coffee Product
               </button>
            </div>
         </form>
      </div>
   );
};

export default AddProductForm;
