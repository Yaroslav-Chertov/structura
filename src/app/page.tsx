"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductInfo from "@/components/ProductInfo";
import Advantages from "@/components/Advantages";
import MonthlyPlannerShowcase from "@/components/MonthlyPlannerShowcase";
import Reviews from "@/components/Reviews";
import BuySection from "@/components/BuySection";
import FAQ from "@/components/FAQ";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import OrderModal from "@/components/OrderModal";

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <main>
      <Header onBuyClick={openModal} />
      <Hero onBuyClick={openModal} />
      <ProductInfo />
      <Advantages />
      <MonthlyPlannerShowcase />
      <Reviews />
      <BuySection onBuyClick={openModal} />
      <FAQ />
      <ContactUs />
      <Footer />
      <OrderModal isOpen={modalOpen} onClose={closeModal} />
    </main>
  );
}
