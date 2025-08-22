import ProductDetails from "@/components/ProductDetails";

const fetchProductById = async (id) => {
   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
   const res = await fetch(`${baseUrl}/api/products/${id}`, {
      cache: "no-store",
   });
   const data = await res.json();
   return data.data;
};

const SingleProduct = async ({ params }) => {
   const { id } = await params;
   const product = await fetchProductById(id);

   if (!product) {
      return (
         <div className="text-center py-20 text-gray-400">
            No featured products yet.
         </div>
      );
   }

   return <ProductDetails product={product} />;
};

export default SingleProduct;
