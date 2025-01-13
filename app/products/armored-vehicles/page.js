import React from "react";
import CTASection from "@components/CTASection";
import ImageHero from "@components/image-hero";

const Section = ({ title, content, image, reverse = false, icon }) => {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-8 md:gap-12 py-4`}
    >
      {/* Text Content */}
      <div className="flex-1 space-y-4">
        {icon && (
          <div className="text-3xl flex items-center gap-2">
            <img
              src={icon}
              alt="icon"
              className="w-[35px] h-[40px] self-start mt-2"
            />
            <h2 className="text-lg text-[#1A1A1A] font-bold font-axiforma md:text-[2rem] md:leading-[3rem]">
              {title}
            </h2>
          </div>
        )}
        {!icon && (
          <h2 className="text-lg text-[#1A1A1A] font-bold font-axiforma md:text-[2rem] md:leading-[3rem]">
            {title}
          </h2>
        )}
        <p className="text-[#212121] md:text-[1.3rem]">{content}</p>
      </div>

      {/* Image */}
      <div className="flex-1">
        <img
          src={image}
          alt={title}
          className="rounded-lg shadow-lg object-cover w-full h-auto"
        />
      </div>
    </div>
  );
};

// Main Component
const ArmoredVehicles = () => {
  return (
    <section className="bg-white">
      <ImageHero
        image="/images/products/tank1.jpeg"
        header="Armored Vehicles"
        paragraph="Unparalleled Protection In High-Risk Environments"
      />
      {/* Why Choose Section */}
      <div className="container md:flex md:flex-col md:gap-[5vh] mx-auto px-4 pt-[5%] md:px-[5%]">
        <Section
          title="Why Choose Our Armored Vehicles?"
          content="Solyd Nigeria provides a range of armored vehicles designed to protect personnel and assets in high-risk environments. Our vehicles are built to the highest standards of safety and durability, ensuring maximum protection in dangerous situations."
          image="/images/products/tank2.jpeg"
        />

        {/* Enhanced Security Section */}
        <Section
          title="Enhanced Security Solutions for Challenging Environments"
          content="At Solyd Nigeria, we specialize in delivering armored vehicles that combine cutting-edge technology with unmatched durability. Designed to withstand even the most extreme conditions, our vehicles offer superior protection for personnel and valuable assets. Whether for government operations, law enforcement, or private security, our armored solutions are engineered to meet the highest safety standards, ensuring reliability and peace of mind in high-risk scenarios."
          image="/images/products/tank3.jpeg"
          reverse={true}
          icon="/images/products/Vector.png"
        />
      </div>
      <CTASection className="pt-[3%]" />
    </section>
  );
};

export default ArmoredVehicles;
