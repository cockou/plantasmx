import Image from "next/image";
import Herosection from "./components/Herosection";
import Footer from "./components/Footer";
import CtaSection from "./components/cta";

export default function Home() {
  return (
    
    <div>
      <Herosection />
      <CtaSection />
      <Footer />
    </div>
  );
}
