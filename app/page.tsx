"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "@/components/ui/Header";
import HeroSlider from "@/components/sections/HeroSlider";
import Preloader from "@/components/ui/Preloader";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Clients from "@/components/sections/Clients";
import Impact from "@/components/sections/Impact";
import Certifications from "@/components/sections/Certifications";
import TechStack from "@/components/sections/TechStack";
import Footer from "@/components/ui/Footer";

<<<<<<< HEAD
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
=======
let hasLoadedGlobal = false;

export default function Home() {
  const [isLoading, setIsLoading] = useState(!hasLoadedGlobal);

  const handleComplete = () => {
    hasLoadedGlobal = true;
    setIsLoading(false);
  };
>>>>>>> e949a61892f3bdcc016ef6709176e7dde5c7bbd1

  return (
    <>
      <AnimatePresence mode="wait">
<<<<<<< HEAD
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
=======
        {isLoading && <Preloader onComplete={handleComplete} />}
      </AnimatePresence>

      {(hasLoadedGlobal || !isLoading) && (
>>>>>>> e949a61892f3bdcc016ef6709176e7dde5c7bbd1
        <>
          <Header />
          <HeroSlider />
          <About />
          <Clients />
          <Impact />
          <Certifications />
          <TechStack />
          <Services />
          <Footer />
        </>
      )}
    </>
  );
}
