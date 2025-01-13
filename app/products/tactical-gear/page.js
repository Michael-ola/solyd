import React from "react";
import CTASection from "@components/CTASection";
import ImageHero from "@components/image-hero";

const page = () => {
  const SafetyGearSection = () => {
    return (
      <section className="pb-[5%] pt-[8%] md:pt-[5%] px-[5%] bg-white">
        <div className="grid grid-cols-1 gap-3 md:gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-axiforma text-[#1a1a1a] font-bold md:text-[2.5rem] mb-4">
              Safety and Performance Gear
            </h2>
            <p className="text-[#212121] mb-6 md:text-[1.5rem] md:w-[80%]">
              Our range of tactical gear is designed to meet the demanding
              requirements of law enforcement and security professionals. From
              body armor to tactical vests and helmets, we offer a comprehensive
              selection of gear to ensure your safety and effectiveness in the
              field.
            </p>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 justify-center">
            <div className="rounded-lg md:ml-[10%] shadow-lg overflow-hidden max-w-[510px] md:max-h-[565px] max-h-[350px]">
              <img
                src="/images/products/gear1.jpeg"
                alt="Person with tactical gear"
                className="w-full object-cover"
              />
            </div>
            <div className="rounded-[12px] md:max-h-[565px] h-[370px] md:h-auto">
              <div className="md:mr-auto md:w-[80%] overflow-hidden h-full shadow-lg border rounded-[12px] border-[#C4C4C4]">
                <img
                  src="/images/products/gear2.jpeg"
                  alt="Tactical vest"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div>
      <ImageHero
        image="/images/products/tactical.jpeg"
        header="Tactical Gear"
        paragraph="Reliable and Durable Equipment for Professionals in the Field"
      />
      <SafetyGearSection />
      <CTASection className="pt-[3%]" />
    </div>
  );
};

export default page;
