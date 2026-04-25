import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Method } from "@/components/sections/Method";
import { Treatments } from "@/components/sections/Treatments";
import { Differentials } from "@/components/sections/Differentials";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-sand-100">
      <Header />
      <main id="top" className="flex-1">
        <Hero />
        <About />
        <Method />
        <Treatments />
        <Differentials />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
