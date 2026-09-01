import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Creators from "./components/Creators";
import HowItWorks from "./components/HowItWorks";
import WhyVirtualSponsor from "./components/WhyVirtualSponsor";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <Creators />
        <HowItWorks />
        <WhyVirtualSponsor />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
