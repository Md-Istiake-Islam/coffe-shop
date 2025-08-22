import Footer from "@/components/Footer";
import Hero from "@/components/HeroSection";
import ProductHighlight from "@/components/ProductHighlight";

const fetchProducts = async () => {
   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
   const res = await fetch(`${baseUrl}/api/products`);
   const data = await res.json();
   return data.data;
};

const Home = async () => {
   const allProducts = await fetchProducts();
   return (
      <div>
         <section>
            <Hero />
         </section>
         <section>
            <ProductHighlight allProducts={allProducts} />
         </section>
         <section>
            <Footer />
         </section>
      </div>
   );
};

export default Home;
