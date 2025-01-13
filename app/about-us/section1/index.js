import React from "react";
import Image from "next/image";
const Section1 = () => {
  return (
    <section className="bg-[#0A0A0A] text-[#E5E5E5] px-6 pb-10 pt-[22%] flex flex-col md:flex-row md:gap-8 md:px-[5%] md:pt-[10%] md:pb-[2%] h-auto md:h-[100vh]">
      {/* Left Section */}
      <div className="flex flex-col w-full md:w-[34%] justify-center items-center md:items-start text-center md:text-left">
        <p className="text-[1.25rem] md:text-[1.5rem]">About Solyd</p>
        <h1 className="text-white text-[2rem] md:text-[3.125rem] font-bold font-axiforma">
          Our Mission
        </h1>
        <p className="text-[1rem] md:text-[1.5rem] font-[500] mt-4 md:mt-0">
          is to provide innovative, reliable, and tailored security solutions
          that help clients protect their people, assets, and communities.
        </p>
        <button className="flex justify-center items-center hover:border-[0.2px] border-white gap-[8px] mt-6 md:mt-12 w-[160px] md:w-[194px] h-[50px] md:h-[60px] bg-[#CE2232] text-white text-[0.875rem] md:text-[1rem] hover:bg-black px-4 md:px-6 py-2 md:py-3 rounded-[12px] font-[600] leading-[1.25rem]">
          Contact Us
        </button>
      </div>

      {/* Right Section */}
      <div className="h-[300px] w-full mt-6 md:mt-0 md:h-full md:w-[50%] ml-auto overflow-hidden rounded-[12px] bg-black">
        <div
          className="h-full w-full bg-cover hover:scale-105 transition-transform duration-300"
          style={{
            backgroundPosition: "center 54%",
            backgroundSize: "cover", // Responsive background size
            backgroundRepeat: "no-repeat",
            backgroundImage: "url('/images/about_us/image1.jpeg')",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Section1;
