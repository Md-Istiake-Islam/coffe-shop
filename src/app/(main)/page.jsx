import Footer from "@/components/Footer";
import Hero from "@/components/HeroSection";
import ProductHighlight from "@/components/ProductHighlight";

const Home = () => {
   return (
      <div>
         <section>
            <Hero />
         </section>
         <section>
            <ProductHighlight />
         </section>
         <section>
            <Footer />
         </section>
      </div>
   );
};

export default Home;
