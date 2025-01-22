import React from "react";
import Image from "next/image";
import Illustration from "@public/images/scroll-down.svg";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative bg-hero-gradient text-white">
      <header className="relative flex flex-col items-center justify-center h-[85vh] md:h-screen bg-black">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center backdrop-blur-[3px] opacity-65"
          style={{
            backgroundImage: "url('/images/hero.png')",
          }}
        ></div>
        {/* Content */}
        <div className="flex flex-col items-center z-10 text-center">
          <h1 className="text-[2.5rem] md:text-6xl font-axiforma font-bold md:leading-[75px]">
            SOLYD NIGERIA LIMITED
          </h1>
          <p className="mx-auto w-[70%] mt-4 text-[1.25rem] font-[500] md:text-xl text-[#E5E5E5] font-montserrat leading-[1.8125rem]">
            Has been a leading supplier of top-tier physical and electronic
            security and counterterrorism equipment for over three decades.
          </p>
          <Link href="/about-us">
            <button className="flex justify-center items-center hover:border-[0.2px] border-white gap-[8px] mt-12 w-[194px] h-[60px] bg-[#5E5E5E] text-white text-[1rem] hover:bg-black px-6 py-3 rounded-[12px] font-[600] leading-[1.25rem]">
              <p className="block">Learn More</p>
              <span className="block w-2 h-2 -mb-[2px] border-b-2 border-r-2 -rotate-45 border-white"></span>
            </button>
          </Link>
        </div>
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-3 text-center ml-2">
          <Image src={Illustration} alt="v" className="animate-updown ml-2" />
          <p className="text-gray-300">Scroll Down</p>
        </div>
      </header>
    </div>
  );
};

export default HeroSection;
