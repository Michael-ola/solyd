import React from "react";
import CTASection from "@components/CTASection";
import ImageHero from "@components/image-hero";

const page = () => {
  const TextImageBlock = ({ title, text, image, reverse, imageStyle }) => (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center md:items-start gap-8 lg:gap-16 mb-10 md:mb-[10%] md:justify-start`}
    >
      {/* Text Section */}
      <div className="lg:w-1/2 lg:text-left">
        <h2 className="text-2xl md:mt-8 md:text-[2.5rem] font-axiforma font-semibold text-[#1A1A1A] mb-4 md:leading-[3.75rem]">
          {title}
        </h2>
        <p className="text-[#212121] md:text-[1.2rem] md:w-[90%] leading-relaxed">
          {text}
        </p>
      </div>
      {/* Image Section */}
      <div
        className={`lg:w-1/2 ${imageStyle} overflow-hidden rounded-[12px] shadow-md`}
      >
        <img src={image} alt={title} className=" w-full" />
      </div>
    </div>
  );
  return (
    <div className="">
      <ImageHero
        image="/images/services/surveillance0.jpg"
        header="Long-Range Wide Area Surveillance"
        paragraph=""
      />
      <div className="container mx-auto px-4 lg:px-[5%] pt-[7%] md:pt-16">
        {/* First Block */}
        <TextImageBlock
          title="Precision Surveillance from Afar"
          text="Our drones are equipped with long-range surveillance capabilities, allowing us to monitor large areas from a safe distance. This is particularly useful for security and surveillance applications, where real-time monitoring of wide areas is essential."
          image="/images/services/surveillance1.jpg"
          imageStyle={"md:h-[450px]"}
        />

        {/* Second Block */}
        <TextImageBlock
          title="Why Choose Us"
          text="At Solyd Nigeria, we combine advanced drone technology with expert knowledge to deliver unmatched surveillance solutions. Our commitment to quality and innovation ensures that you receive a reliable service tailored to your operational needs."
          image="/images/services/surveillance2.jpg"
          reverse
          imageStyle={"md:max-h-[503px]"}
        />
      </div>
      <CTASection
        image="/images/services/surveillance3.jpg"
        h1={"Trusted Drones for Wide Surveillance Operations"}
        h2={" "}
        p={"Contact us today to explore long range wide area solutions"}
        className="pt-[3%]"
      />
    </div>
  );
};

export default page;
