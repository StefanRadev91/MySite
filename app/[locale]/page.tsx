import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import Different from "@/components/sections/Different";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <Different />
      <Process />
      <Services />
      <Portfolio />
      <Testimonials />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
