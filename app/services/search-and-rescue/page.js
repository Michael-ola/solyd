import React from "react";
import CTASection from "@components/CTASection";
import ImageHero from "@components/image-hero";

const Page = () => {
  return (
    <div className="w-full">
      <ImageHero
        image="/images/services/search1.jpeg"
        header="Search and Rescue"
        paragraph=""
      />

      <section className="py-[5%] px-[5%] bg-white">
        {/* Unlocking Precision Section */}

        <div className="text-left mb-[8%] md:mb-[5%]">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-axiforma text-[#1a1a1a] md:text-[2.5rem]">
            Efficient Search and Rescue with Drones
          </h1>
          <p className="mt-2 text-sm sm:text-base lg:text-lg text-[#000] md:text-[1.5rem] leading-relaxed md:leading-[2.5rem] md:w-[85%]">
            Our drones are equipped with advanced search and rescue
            capabilities, including thermal imaging and night vision technology.
            This allows us to locate missing persons or survivors in various
            conditions and terrain, improving the efficiency and effectiveness
            of search and rescue operations.
          </p>
          <div className="w-full md:h-[500px] mt-[3%] overflow-hidden">
            <img
              src="/images/services/search3.jpeg"
              alt="search and rescue"
              className="rounded-lg object-cover object-[center_20%] shadow-lg w-full h-full"
            />
          </div>
        </div>

        <div className="mt-[7%]">
          <h1 className="text-2xl lg:w-[60%] sm:text-3xl font-bold font-axiforma text-[#1a1a1a] md:text-[2.5rem] md:leading-[3.7rem]">
            Integrated Technologies Enhancing Search and Rescue Operations
          </h1>
          <div className="w-full mt-[3%] overflow-hidden">
            <img
              src="/images/services/search4.png"
              alt="search and rescue"
              className="rounded-lg w-full h-full"
            />
          </div>
        </div>
      </section>
      <CTASection
        className="pt-[3%]"
        image={"/images/services/search2.jpeg"}
        h1={"Ready to Enhance your Search and Rescue Operations?"}
        h2={" "}
        p={
          "Partner with us to enhance your rescue missions with advanced drone technology. Our team is here to provide tailored solutions for your needs"
        }
      />
    </div>
  );
};

export default Page;
