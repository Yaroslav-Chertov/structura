import Hero from "../components/Hero";
import ProductInfo from "@/components/ProductInfo";
import Advantages from "@/components/Advantages";
import BuySection from "@/components/BuySection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Hero />
      <ProductInfo />
      <Advantages />
      <BuySection />
      <FAQ />
      <Footer />
    </main>
  );
}
