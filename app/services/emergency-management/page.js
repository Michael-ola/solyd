import React from "react";
import CTASection from "@components/CTASection";
import ImageHero from "@components/image-hero";

const page = () => {
  const TextImageBlock = ({ title, text, image, reverse, imageStyle }) => (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-8 lg:gap-16 mb-10 md:mb-[10%] md:justify-start`}
    >
      {/* Text Section */}
      <div className="lg:w-1/2 lg:text-left">
        <h2 className="text-2xl md:text-[2.5rem] font-axiforma font-semibold text-[#1A1A1A] mb-4 md:leading-[3.75rem]">
          {title}
        </h2>
        <p className="text-[#212121] md:text-[1.2rem] md:w-[90%] leading-relaxed">
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
        image="/images/services/emergency1.jpg"
        header="Emergency Management"
        paragraph=""
      />
      <div className="container mx-auto px-4 lg:px-[5%] pt-8 md:pt-16">
        {/* First Block */}
        <TextImageBlock
          title="Swift Response, Saving Lives"
          text="Our drones are engineered for advanced search and rescue missions, enhancing efficiency and effectiveness in critical situations. With high-resolution thermal imaging, night vision capabilities, and precise navigation, we provide the tools needed to locate individuals in disaster-stricken areas, remote locations, and low-visibility environments. These drones are vital assets for quick response and life-saving missions."
          image="/images/services/emergency2.jpg"
          imageStyle={"md:scale-x-75"}
        />

        {/* Second Block */}
        <TextImageBlock
          title="Supporting Coordinated Efforts"
          text="Our drone systems integrate seamlessly with emergency management teams, enabling coordinated responses. With real-time data sharing and communication capabilities, drones provide actionable insights that enhance teamwork and decision-making."
          image="/images/services/emergency3.jpg"
          reverse
          imageStyle={""}
        />
      </div>
      <CTASection
        image="/images/services/emergency4.jpg"
        h1={"Ready to Enhance your Emergency Response?"}
        h2={" "}
        p={
          "Discover how our drone technology can revolutionize your disaster management efforts. Take action today to build a safer tomorrow"
        }
        className="pt-[3%]"
      />
    </div>
  );
};

export default page;
