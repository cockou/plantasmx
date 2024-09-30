import Image from "next/image";
import Herosection from "./components/Herosection";
import Footer from "./components/Footer";
import CtaSection from "./components/cta";
import Gensection from "./components/gensection";

export default function Home() {
  return (
    
    <div>
      <Herosection />
      <Gensection />
      <CtaSection />
      <Footer />
    </div>
  );
}
