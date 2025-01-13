import React from "react";
import CTASection from "@components/CTASection";
import ImageHero from "@components/image-hero";

const ProductCard = ({ imageSrc, altText, title }) => {
  return (
    <div className="text-center h-full border rounded-[12px] overflow-hidden border-[#C4C4C4] shadow-lg flex flex-col">
      <div className="overflow-hidden h-[90%] mb-2 flex flex-col justify-center mx-auto">
        <img
          src={imageSrc}
          alt={altText}
          className="w-[98%] mx-auto md:w-full object-cover"
        />
      </div>
      <p className="font-bold border-t border-t-[#C4C4C4] text-[#1a1a1a] md:text-[1.25rem] py-[1em]">
        {title}
      </p>
    </div>
  );
};

const page = () => {
  const RiotControlSection = () => {
    const products = [
      {
        imageSrc: "/images/products/riot2.jpeg",
        altText: "Protective Gear",
        title: "Protective Gear",
      },
      {
        imageSrc: "/images/products/riot3.jpeg",
        altText: "Anti-Riot Shield",
        title: "Anti-Riot Shield",
      },
      {
        imageSrc: "/images/products/riot4.jpeg",
        altText: "Baton",
        title: "Baton",
      },
      {
        imageSrc: "/images/products/riot5.jpeg",
        altText: "Tear Gas Cannister",
        title: "Tear Gas Cannister",
      },
    ];

    return (
      <section className="pb-[5%] pt-[8%] md:pt-[5%] px-[5%] bg-white">
        <div className="grid grid-cols-1 gap-3 md:gap-12 items-center md:mb-[5%]">
          {/* Text Content */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-axiforma text-[#1a1a1a] font-bold md:text-[2.5rem] mb-4 md:w-[50%] md:leading-[4.125rem]">
              Reliable Equipment for Effective Riot Management
            </h2>
            <p className="text-[#212121] text-justify mb-6 md:text-[1.5rem] md:w-[84%]">
              Our riot control products are designed to help law enforcement
              maintain order in challenging situations. From riot shields to
              tear gas, we offer a range of products to help control crowds and
              manage riots effectively.
            </p>
          </div>
        </div>

        <div className="text-center flex flex-col mb-[3%]">
          <p className="text-[#212121] text-[1.25rem] mb-[0.7%]">
            Some of Our Products
          </p>
          <h2 className="text-[#1A1A1A] font-axiforma font-bold text-[2.25rem]">
            Products
          </h2>
        </div>

        {/* Product List */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              imageSrc={product.imageSrc}
              altText={product.altText}
              title={product.title}
            />
          ))}
        </div>
      </section>
    );
  };

  return (
    <div>
      <ImageHero
        image="/images/products/riot1.jpeg"
        header="Riot Control Products"
        paragraph="Tools for Maintaining Order and Ensuring Public Safety"
      />
      <RiotControlSection />
      <CTASection className="pt-[3%]" />
    </div>
  );
};

export default page;
