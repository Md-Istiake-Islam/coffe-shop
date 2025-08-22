import { Eye } from "lucide-react";

const featuredProducts = [
   {
      id: 1,
      name: "Blue Mountain Supreme",
      price: "$24.99",
      image: "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg",
      description:
         "Smooth and mild with a distinctive flavor profile from Jamaica's Blue Mountains.",
   },
   {
      id: 2,
      name: "Colombian Gold",
      price: "$19.99",
      image: "https://images.pexels.com/photos/372851/pexels-photo-372851.jpeg",
      description:
         "Rich, full-bodied coffee with caramel notes from Colombia's finest regions.",
   },
   {
      id: 3,
      name: "Italian Espresso Blend",
      price: "$22.99",
      image: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg",
      description:
         "Bold and intense blend perfect for espresso with a thick, golden crema.",
   },
   {
      id: 4,
      name: "Kenyan AA",
      price: "$26.99",
      image: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg",
      description:
         "Bright and wine-like acidity with complex berry flavors from Kenya's highlands.",
   },
];

export default function ProductHighlight() {
   return (
      <section className="py-16 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
               <h2 className="text-3xl sm:text-4xl font-bold coffee-text-gradient mb-4">
                  Featured Products
               </h2>
               <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Discover our most popular coffee selections, carefully curated
                  for exceptional taste and quality.
               </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               {featuredProducts.map((product) => (
                  <div
                     key={product.id}
                     className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                     <div className="relative h-48 overflow-hidden">
                        <img
                           src={product.image}
                           alt={product.name}
                           className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                     </div>
                     <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                           {product.name}
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                           {product.description}
                        </p>
                        <div className="flex items-center justify-between">
                           <span className="text-2xl font-bold text-amber-600">
                              {product.price}
                           </span>
                           <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md transition-colors duration-300 flex items-center space-x-2">
                              <Eye className="h-4 w-4" />
                              <span>View Details</span>
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
