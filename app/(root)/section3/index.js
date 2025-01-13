import React from "react";

// Reusable Card Component for Logos
const Logo = ({ src, alt }) => {
  return <img src={src} alt={alt} className="h-16 object-contain" />;
};

// Main Component
const StrategicPartners = () => {
  // Array of logos
  const logos = [
    { src: "/images/section3/logo1.png", alt: "Logo 1" },
    { src: "/images/section3/logo2.png", alt: "Logo 2" },
    { src: "/images/section3/logo3.png", alt: "Logo 3" },
    { src: "/images/section3/logo4.png", alt: "Logo 4" },
    { src: "/images/section3/logo5.png", alt: "Logo 5" },
    { src: "/images/section3/logo6.png", alt: "Logo 6" },
    { src: "/images/section3/logo7.png", alt: "Logo 7" },
  ];

  return (
    <section className="bg-white py-[7%] px-[5%] md:px-16">
      {/* Image with Text Section */}
      <div className="relative mb-12 rounded-xl overflow-hidden">
        <img
          src="/images/section3/image1.jpeg"
          alt="Strategic Meeting"
          className="w-full rounded-lg h-[468px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <div className="text-white w-[45%] p-6 md:p-12">
            <h1 className="text-3xl md:text-4xl font-axiforma font-bold leading-tight">
              Driving the Future
              <br />
              with <span className="text-purple-500">Bold Ideas</span> and
              Innovations
            </h1>
          </div>
        </div>
      </div>

      {/* Subtext Section */}
      <div className="text-center mb-8">
        <p className="text-purple-500 text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#0E1FDB] to-[#BE187C]">
          Alliances that drive innovation and deliver results
        </p>
        <h2 className="text-4xl leading-[3.75rem] md:text-[2.5rem]  text-[#1A1A1A] font-axiforma font-bold mt-2">
          Strategic Partners
        </h2>
      </div>

      {/* Logos Section */}
      <div className="flex flex-wrap justify-center items-center gap-8">
        {logos.map((logo, index) => (
          <Logo key={index} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </section>
  );
};

export default StrategicPartners;
