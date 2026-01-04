import Hero from "../components/Hero";
import ProductInfo from "@/components/ProductInfo";
import Advantages from "@/components/Advantages";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Hero />
      <ProductInfo />
      <Advantages />
      <FAQ />
      <Footer />
    </main>
  );
}
