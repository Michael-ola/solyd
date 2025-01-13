import React from "react";
import CTASection from "@components/CTASection";
import ImageHero from "@components/image-hero";

const KeyApplicationCard = ({ imageSrc, altText, title }) => {
  return (
    <div className="relative rounded-[12px] overflow-hidden max-h-[387px]">
      <img
        src={imageSrc}
        alt={altText}
        className="rounded-[12px] shadow-lg mb-4 w-full h-full object-cover"
      />
      <h3
        className="absolute left-0 right-0 bottom-0 font-bold text-white py-4 pl-3 bg-[#00000026]"
        style={{ backdropFilter: "blur(2px)" }}
      >
        <p>{title}</p>
      </h3>
    </div>
  );
};

const HowItWorksStep = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col justify-center text-center h-[240px] md:h-[314px] bg-[#FBFBFB] border border-[#C4C4C4] rounded-[12px]">
      <img
        className="mb-4 md:mb-[15%] h-[40px] mx-auto"
        src={icon}
        alt="icon"
      />
      <h4 className="font-bold text-base mb-2 md:text-[1.5rem] text-[#1A1A1A]">
        {title}
      </h4>
      <p className="text-[#212121] text-sm md:text-[1rem] mt-2 sm:text-base leading-relaxed h-[35%]">
        {description}
      </p>
    </div>
  );
};

const Page = () => {
  const applications = [
    {
      imageSrc: "/images/services/lidar2.jpeg",
      altText: "Terrain Mapping",
      title: "Terrain Mapping",
    },
    {
      imageSrc: "/images/services/lidar3.jpeg",
      altText: "Urban Planning",
      title: "Urban Planning",
    },
    {
      imageSrc: "/images/services/lidar4.jpeg",
      altText: "Infrastructure Inspection",
      title: "Infrastructure Inspection",
    },
  ];

  const steps = [
    {
      icon: "/images/services/lidarv1.png",
      title: "1. Laser Emission",
      description:
        "Lidar sensors emit laser pulses that reflect off objects to measure distances accurately.",
    },
    {
      icon: "/images/services/lidarv2.png",
      title: "2. Data Collection",
      description:
        "Multiple laser pulses generate detailed 3D modeling and mapping.",
    },
    {
      icon: "/images/services/lidarv3.png",
      title: "3. Data Processing",
      description:
        "Advanced algorithms process the collected data to create precise measurements.",
    },
    {
      icon: "/images/services/lidarv4.png",
      title: "4. Integration",
      description:
        "The data has applications in tasks like mapping, planning, and infrastructure management.",
    },
  ];

  return (
    <div className="w-full">
      <ImageHero
        image="/images/services/lidar.jpeg"
        header="Lidar Services"
        paragraph=""
      />

      <section className="py-[5%] px-[5%] bg-white">
        {/* Unlocking Precision Section */}

        <div className="text-left mb-[8%] md:mb-[5%]">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-axiforma text-[#1a1a1a] md:text-[2.5rem]">
            Unlocking Precision with Lidar Technology
          </h1>
          <p className="mt-2 text-sm sm:text-base lg:text-lg text-[#212121] md:text-[1.5rem] leading-relaxed">
            We offer Lidar services using our state-of-the-art drones equipped
            with Lidar technology. Lidar enables us to create detailed 3D maps
            and accurately measure distances, making it ideal for applications
            such as terrain mapping, urban planning, and infrastructure
            inspection. This technology ensures faster, safer, and more
            efficient assessments, empowering businesses and governments to make
            informed decisions with confidence.
          </p>
        </div>

        {/* Key Applications Section */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 font-axiforma md:text-[2.25rem] text-[#1a1a1a]">
            Key Applications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applications.map((application, index) => (
              <KeyApplicationCard
                key={index}
                imageSrc={application.imageSrc}
                altText={application.altText}
                title={application.title}
              />
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mt-16">
          <h3 className="text-2xl mb-8 font-bold font-axiforma text-[#1a1a1a] md:text-[2.5rem]">
            How it works
          </h3>
          <p className=" text-[#212121] text-[1.5rem] mb-8">
            Explore how Lidar transforms laser pulses into actionable insights.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {steps.map((step, index) => (
              <HowItWorksStep
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>

        {/* Innovative Mapping Section */}
        <div className="mt-16 md:flex items-center gap-[5%] md:mt-[10%]">
          <h3 className="text-2xl font-bold mb-8 md:mb-0 font-axiforma text-[#1A1A1A] md:text-[3rem] md:leading-[4.1125rem]">
            Innovative Mapping with Lidar Technology
          </h3>
          <img
            src="/images/services/lidar5.png"
            alt="Innovative Mapping"
            className="rounded-lg shadow-lg w-full md:max-w-[677px] md:max-h-[406px]"
          />
        </div>
      </section>

      <CTASection
        className="pt-[3%]"
        image={"/images/services/lidarCTA.jpeg"}
        h1={"Your Partner in Advanced Lidar Services"}
        h2={" "}
        p={
          "Discover how our advanced Lidar technology can transform your inspection and mapping projects. Reach out to explore tailored solutions."
        }
      />
    </div>
  );
};

export default Page;
