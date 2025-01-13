import Image from "next/image";
import Hero from "./hero";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import CTASection from "@components/CTASection";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <CTASection />
    </div>
  );
}
