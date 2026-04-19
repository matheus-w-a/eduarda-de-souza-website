import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Differentials } from "@/components/sections/Differentials";
import { Process } from "@/components/sections/Process";
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
        <Services />
        <Differentials />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
