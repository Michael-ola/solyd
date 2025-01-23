import Link from "next/link";
import CTASection from "@components/CTASection";

const Marquee = ({ className }) => {
  return (
    <div
      className={`absolute w-[90%] py-2 left-0 right-0 rounded-[8px] bg-black mx-auto ${className}`}
    >
      <div className="whitespace-nowrap overflow-hidden">
        <div className="animate-marquee flex">
          <p className="text-white uppercase text-sm mx-4 flex items-center">
            Corporate Social Responsibility <span className="mx-2">✳</span>
          </p>
          <p className="text-white uppercase text-sm mx-4 flex items-center">
            Corporate Social Responsibility <span className="mx-2">✳</span>
          </p>
          <p className="text-white uppercase text-sm mx-4 flex items-center">
            Corporate Social Responsibility <span className="mx-2">✳</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const CSRSection = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/CSR.jpeg')", // Replace with your image path
        }}
      ></div>

      {/* Overlay Layer */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Marquee - Top */}
      <Marquee className="top-[20%]" />

      {/* Content Section */}
      <div className="relative flex flex-col justify-center items-center text-center z-30 h-full px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Watch this Space
        </h1>
        <p className="text-white mt-4 text-lg md:text-xl max-w-2xl">
          Our Corporate Social Responsibility efforts are coming soon.
          Anticipate as we create lasting impacts in our communities.
        </p>
        <Link href="/about-us">
          <button className="flex justify-center items-center hover:border-[0.2px] border-white gap-[8px] mt-12 w-[194px] h-[60px] bg-red-600 hover:bg-red-700 text-white text-[1rem] px-6 py-3 rounded-[12px] font-[600] leading-[1.25rem]">
            <p className="block">Learn More</p>
            <span className="block w-2 h-2 -mb-[2px] border-b-2 border-r-2 -rotate-45 border-white"></span>
          </button>
        </Link>
      </div>

      {/* Marquee - Bottom */}
      <Marquee className="bottom-[20%] md:bottom-[15%]" />
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <CSRSection />
    </div>
  );
}
