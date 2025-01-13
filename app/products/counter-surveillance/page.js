import React from "react";
import CTASection from "@components/CTASection";
import ImageHero from "@components/image-hero";

const page = () => {
  const TextImageBlock = ({ title, text, image, reverse, imageStyle }) => (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-8 lg:gap-16 mb-16 md:mb-0 md:justify-start`}
    >
      {/* Text Section */}
      <div className="lg:w-1/2 lg:text-left">
        <h2 className="text-2xl md:text-[2.5rem] font-axiforma font-semibold text-[#1A1A1A] mb-4 md:leading-[3.75rem]">
          {title}
        </h2>
        <p className="text-[#212121] md:text-[1.5rem] leading-relaxed">
          {text}
        </p>
      </div>
      {/* Image Section */}
      <div className={`lg:w-1/2 ${imageStyle}`}>
        <img
          src={image}
          alt={title}
          className="rounded-[12px] shadow-md w-full"
        />
      </div>
    </div>
  );
  return (
    <div className="">
      <ImageHero
        image="/images/products/imagep1.jpeg"
        header="Counter Surveillance"
        paragraph="Solutions to detect and deter unauthorized monitoring, ensuring your privacy and security."
      />
      <div className="container mx-auto px-4 lg:px-[5%] pt-16">
        {/* First Block */}
        <TextImageBlock
          title="Wondering Why to Choose Us"
          text="Solyd Nigeria provides counter-surveillance equipment to help protect against unauthorized surveillance. From bug detectors to signal jammers, our counter-surveillance products help safeguard your privacy and security."
          image="/images/products/imagep2.jpeg"
          imageStyle={"md:scale-x-75"}
        />

        {/* Second Block */}
        <TextImageBlock
          title="Tailored Counter Surveillance"
          text="Counter-surveillance solutions should never be one-size-fits-all. Our products are designed to address the unique requirements of businesses, government agencies, and individuals alike. Whether you're protecting confidential meetings, securing national security, or safeguarding personal privacy, our tools deliver reliable, real-time protection. With cutting-edge technology and user-friendly features, our solutions help detect, disrupt, and neutralize hidden threats, ensuring your communications and activities remain secure."
          image="/images/products/imagep3.jpeg"
          reverse
          imageStyle={"md:scale-75"}
        />
      </div>
      <CTASection className="pt-[3%]" />
    </div>
  );
};

export default page;
