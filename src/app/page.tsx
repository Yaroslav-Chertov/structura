import Hero from "../components/Hero";
import ProductInfo from "@/components/ProductInfo";
import Advantages from "@/components/Advantages";
import VisualBlock from "@/components/VisualBlock";
import Steps from "@/components/Steps";
import Reviews from "@/components/Reviews";
import BuySection from "@/components/BuySection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Hero />
      <ProductInfo />
      <Advantages />
      <VisualBlock />
      <Steps />
      <Reviews />
      <BuySection />
      <FAQ />
      <Footer />
    </main>
  );
}
