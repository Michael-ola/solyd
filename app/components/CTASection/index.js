import React from "react";
import Link from "next/link";
const CallToAction = ({ className, image, h1, h2, p }) => {
  return (
    <div
      className={`bg-white w-full py-16 px-4 md:px-[5%] flex justify-center items-center ${className}`}
    >
      <div className="relative bg-gray-100 w-full py-16 flex justify-center items-center">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden rounded-[12px]">
          <img
            src={image ? image : "/images/section5/image1.jpeg"}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-55"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-axiforma font-bold md:mb-3 md:leading-[2.75rem]">
            {h1 ? h1 : "Ready to take the next step?"}
          </h2>
          <h2 className="text-2xl md:text-3xl font-axiforma font-bold mb-3 md:leading-[2.75rem]">
            {h2 ? h2 : "Get in touch with us today"}
          </h2>
          <p className="mb-[10%]">{p}</p>
          <Link href="/contact-us">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-[12px] shadow-lg">
              CONTACT US
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
