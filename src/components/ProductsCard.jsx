import { Eye } from "lucide-react";
import Link from "next/link";
const ProductsCard = ({ product }) => {
   return (
      <div className="bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
         <div className="relative h-48 overflow-hidden">
            <img
               src={product.imageUrl}
               alt={product.coffeeName}
               className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />

            <div className="absolute top-4 right-4">
               <span className="bg-amber-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {product.type}
               </span>
            </div>
         </div>
         <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-200 mb-2">
               {product.coffeeName}
            </h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
               {product.description}
            </p>
            <div className="flex items-center justify-between">
               <span className="text-2xl font-bold text-amber-600">
                  {`$ ${product.price}`}
               </span>
               <Link
                  href={`/products/${product._id}`}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md transition-colors duration-300 flex items-center space-x-2"
               >
                  <span className="flex items-center space-x-2">
                     <Eye className="h-4 w-4" />
                     <span>View Details</span>
                  </span>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default ProductsCard;
