import Image from "next/image";
import Herosection from "./components/Herosection";
import Footer from "./components/Footer";
import BlogSection from "./components/Blogsection";
import CtaSection from "./components/cta";

export default function Home() {
  return (
    
    <div>
      <Herosection />
      <BlogSection /> 
      <CtaSection />

      <Footer />
    </div>
  );
}
