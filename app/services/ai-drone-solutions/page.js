import React from "react";
import CTASection from "@components/CTASection";
import ImageHero from "@components/image-hero";

const page = () => {
  const TextImageBlock = ({ title, text, image, reverse, imageStyle }) => (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center md:items-start gap-8 lg:gap-16 mb-10 md:mb-[10%] md:justify-start`}
    >
      {/* Text Section */}
      <div className="lg:w-1/2 lg:text-left">
        <h2 className="text-2xl md:mt-8 md:text-[2rem] font-axiforma font-bold text-[#1A1A1A] mb-4 md:leading-[2.75rem]">
          {title}
        </h2>
        <p className="text-[#212121] md:text-[1.2rem] md:w-[90%] leading-relaxed">
          {text}
        </p>
      </div>
      {/* Image Section */}
      <div
        className={`lg:w-1/2 ${imageStyle} overflow-hidden rounded-[12px] shadow-md`}
      >
        <img src={image} alt={title} className=" w-full" />
      </div>
    </div>
  );

  const FeatureCard = ({ title, icon, className }) => (
    <div
      className={`relative flex gap-2 shadow-lg md:w-full md:h-[100px] rounded-[12px] p-4 text-left md:text-center ${className}`}
      style={{
        backdropFilter: "blur(100px)",
        backgroundImage: "url('/images/products/overlay.png')",
        backgroundSize: "95% 95%",
      }}
    >
      <div className="absolute inset-0 bg-white opacity-[0.9] rounded-[11px] -z-10"></div>
      {icon ? (
        <img
          src={icon}
          alt="SOLYD Drone"
          className="w-[24px] h-[24px] md:w-[51px] md:h-[51px]"
        />
      ) : (
        <></>
      )}
      <p className="font-semibold md:text-left text-[#1a1a1a] text-sm">
        {title}
      </p>
    </div>
  );

  const features = [
    "Real-time data processing for faster decision-making",
    "Improved safety and reduced human error",
    "Cost-effective solutions for complex tasks",
  ];

  const workflow = [
    ["/images/services/vector1.png", "Data Collection"],
    ["/images/services/Vector2.png", "AI Processing"],
    ["/images/services/Vector3.png", "Decisions"],
  ];

  return (
    <div className="">
      <ImageHero
        image="/images/services/drone0.jpg"
        header="AI-Powered Drone Solutions"
        paragraph=""
      />
      <div className="container mx-auto px-4 lg:px-[5%] pt-[7%] md:pt-16">
        {/* First Block */}
        <TextImageBlock
          title="Transforming Drone Operations with AI Technology"
          text="At Solyd Nigeria, we harness the power of AI technology to enhance the capabilities of our drones, enabling them to perform critical functions and deliver exceptional results. Our AI-powered drones are equipped with advanced features that allow for efficient and effective operations in various scenarios."
          image="/images/services/drone1.jpg"
          imageStyle={"lg:max-h-[503px]"}
        />
      </div>

      <div className="container px-4 md:px-[5%] flex flex-col-reverse mx-auto mt-[10%] md:mt-[11%] md:mb-[10%] md:pr-[6%]">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-2 md:gap-12 items-center">
          {/* Left Side */}
          <div className="flex justify-center mt-6 md:-mt-20">
            <img
              src="/images/services/drone2.jpg"
              alt="SOLYD Drone"
              className="rounded-[12px] w-full max-w-lg md:w-[550px] md:max-w-[550px]  md:h-[503px]"
            />
          </div>

          {/* Right Side */}
          <div>
            <h3 className="text-[1.75rem] md:text-[2rem] font-axiforma font-bold mb-4 text-[#1a1a1a]">
              Benefits of AI Integration
            </h3>
            <p className="text-[#212121] text-justify md:text-[1.2rem]">
              AI integration enhances drone functionality by enabling
              intelligent decision-making, real-time data analysis, and
              increased automation. This results in improved efficiency,
              accuracy, and adaptability across diverse applications, from
              surveillance to disaster management.
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

      <h2 className="font-axiforma text-[#1a1a1a] mt-[7%] font-bold text-xl md:text-[2.5rem] text-center md:mb-[2%]">
        The AI Drone Workflow
      </h2>
      <div className="flex flex-col gap-2 md:gap-0 md:flex-row mt-[5%] justify-center px-4 md:px-[5%]">
        {workflow.map((workflow, index) => (
          <React.Fragment key={index}>
            <FeatureCard
              className="!w-full md:!w-[20%] flex items-center"
              icon={workflow[0]}
              title={workflow[1]}
            />
            {index < 2 ? (
              <img
                src="/images/services/Arrow1.png"
                alt="arrow"
                className="md:w-[4%] w-7 h-4 md:h-4 self-center rotate-90 md:rotate-0"
              />
            ) : (
              <></>
            )}
          </React.Fragment>
        ))}
      </div>
      <CTASection
        image="/images/services/drone3.png"
        h1={"Take Flight with AI-Powered Drones"}
        h2={" "}
        p={
          "Contact us today to explore tailored drone solutions for your needs."
        }
        className="pt-[3%] mt-8"
      />
    </div>
  );
};

export default page;
