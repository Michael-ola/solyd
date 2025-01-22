import React from "react";
import CTASection from "@components/CTASection";
import ImageHero from "@components/image-hero";

// Feature Card Component
const FeatureCard = ({ title }) => (
  <div
    className="relative shadow-lg md:w-full md:h-[100px] rounded-[12px] p-4 text-center"
    style={{
      backdropFilter: "blur(100px)",
      backgroundImage: "url('/images/products/overlay.png')",
      backgroundSize: "95% 95%",
    }}
  >
    <div className="absolute inset-0 bg-white opacity-[0.9] rounded-[11px] -z-10"></div>
    <p className="font-semibold md:text-left text-[#1a1a1a]">{title}</p>
  </div>
);

const DroneFeatureSection = () => {
  const features = [
    "High-Resolution Cameras",
    "GPS Navigation",
    "Real-Time Data Transmission",
  ];

  return (
    <section className="bg-white flex flex-col md:gap-[7vh] pt-[7%]  md:py-[5%] px-[5%]">
      {/* Top Section */}
      <div className="container mx-auto">
        <div className="">
          <h2 className="text-2xl font-bold mb-4 text-[#1a1a1a] md:text-[2.5rem] md:text-left font-axiforma">
            Innovative Drones for Critical Missions
          </h2>
          <p className="text-[#212121] md:text-[1.2rem] mb-8 md:text-left md:w-[75%]">
            Our drones are equipped with the latest technology to provide
            advanced surveillance and reconnaissance capabilities. Whether for
            security, search and rescue, or emergency management, our drones
            deliver reliable performance and exceptional results.
          </p>
          <div className="flex justify-center md:justify-start">
            <img
              src="/images/products/drone2.jpeg"
              alt="Drone for Critical Missions"
              className="rounded-lg shadow-lg w-full max-w-lg md:max-w-[95%] md:max-h-[400px]"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container flex flex-col-reverse mx-auto mt-[10%] md:mt-16 md:pr-[6%]">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-2 md:gap-12 items-center">
          {/* Left Side */}
          <div className="flex justify-center mt-6 md:-mt-20">
            <img
              src="/images/products/drone3.png"
              alt="SOLYD Drone"
              className="rounded-[12px] w-full max-w-lg md:w-[880px] md:max-w-[880px]  md:h-[588px]"
            />
          </div>

          {/* Right Side */}
          <div>
            <h3 className="text-2xl md:text-[2.5rem] font-axiforma font-bold mb-4 text-[#1a1a1a]">
              SOLYD Drone Key Features
            </h3>
            <p className="text-[#212121] text-justify md:text-[1.2rem]">
              Drones are revolutionizing the way businesses and individuals
              approach tasks like surveillance, mapping, delivery, and more. Our
              cutting-edge drones are designed to meet the demands of various
              industries, offering unmatched precision, efficiency, and
              reliability. Whether you're conducting aerial inspections,
              enhancing security, or capturing stunning visuals, our drones are
              equipped with advanced features.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-[5%] md:w-[90%]">
              {features.map((feature, index) => (
                <FeatureCard key={index} title={feature} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Drone Image */}
      </div>
    </section>
  );
};

const page = () => {
  return (
    <div>
      <ImageHero
        image="/images/products/drone.jpeg"
        header="Drones"
        paragraph="Empowering operations with cutting-edge aerial technology for surveillance, security, and emergency response"
      />

      <DroneFeatureSection />

      <CTASection className="pt-[3%]" />
    </div>
  );
};

export default page;
