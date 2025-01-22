import React from "react";
import CTASection from "@components/CTASection";
import ImageHero from "@components/image-hero";

const page = () => {
  const TextImageBlock = ({
    title,
    text,
    image,
    flex,
    imageStyle,
    className,
  }) => (
    <div
      className={`flex flex-col ${
        flex ? "lg:flex-row" : ""
      }  gap-8 lg:gap-16 mb-8 md:mb-[7%] md:justify-start ${className}`}
    >
      {/* Text Section */}
      <div className="lg:w-1/2 lg:text-left Text">
        <h2 className="text-2xl md:text-[2.5rem] font-axiforma font-semibold #1A1A1A mb-4 md:leading-[3rem]">
          {title}
        </h2>
        <p className="#212121 md:text-[1.2rem] leading-relaxed">{text}</p>
      </div>
      {/* Image Section */}
      <div
        className={`lg:w-1/2 ${imageStyle} overflow-hidden rounded-[12px] shadow-md `}
      >
        <img src={image} alt={title} className="w-full h-full block" />
      </div>
    </div>
  );
  return (
    <div>
      <ImageHero
        image="/images/products/imageq1.jpeg"
        header="Closed-Circuit Television"
        paragraph="Smart Security with Reliable CCTV Monitoring"
      />

      <div className="container flex flex-col mx-auto px-4 lg:px-[5%] md:gap-[15vh] pt-[7%] md:pt-[5%]">
        {/* First Block */}
        <TextImageBlock
          title="Reliable CCTV Solutions for Every Security Need"
          text="Our CCTV systems provide high-quality video surveillance for a variety of applications. From small-scale installations to large-scale security systems, we offer a range of CCTV solutions to meet your specific needs."
          image="/images/products/imageq3.jpeg"
          imageStyle={
            "max-h-[50vh] md:h-[499px] md:w-[512px] md:max-h-full md:max-w-[40%] md:ml-auto"
          }
          className={"items-center"}
          flex
        />

        {/* Second Block */}
        <TextImageBlock
          title="24/7 Surveillance for Unmatched Security and Peace of Mind"
          text="Security should never be compromised, which is why our CCTV solutions are designed to provide continuous, reliable surveillance for any environment. Whether you're securing a business, monitoring a public space, or protecting your home, our advanced CCTV systems offer high-definition video quality, real-time monitoring, and remote access to ensure you're always in control. With easy installation and customizable features, our solutions provide round-the-clock security to help deter criminal activity and provide peace of mind."
          image="/images/products/imageq2.jpeg"
          imageStyle={"lg:w-full md:h-[499px]"}
          className={"[&_.Text]:md:w-[62%]"}
        />
      </div>

      <CTASection className="pt-[3%]" />
    </div>
  );
};

export default page;
