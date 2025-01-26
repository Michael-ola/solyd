import React from "react";

const CustomersSection = () => {
  return (
    <section
      className="relative w-full h-[70vh] md:h-screen bg-cover bg-no-repeat text-white bg-[center_top_35%]"
      style={{
        backgroundImage: "url('/images/section4/image1.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      {/* Text Section */}
      <div className="absolute top-16 w-full text-center">
        <p className="text-2xl mb-4 text-[#E5E5E5] font-light">
          Proudly serving these brands
        </p>
        <h2 className="text-2xl md:text-[2.5rem] font-bold font-axiforma">
          Some of Our Customers
        </h2>
      </div>

      {/* Logo Image */}
      <div className="absolute mt-20 md:mt-28 inset-0 flex items-center justify-center overflow-hidden">
        <img
          src="/images/section4/image2.png"
          alt="Customer Logos"
          className="w-[90%] md:w-[30%] h-auto animate-rotate-infinite"
        />
      </div>
    </section>
  );
};

export default CustomersSection;
