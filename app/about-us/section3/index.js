import React from "react";

const values = [
  {
    id: "/images/about_us/num1.png",
    title: "Integrity",
    description: "Upholding honesty and ethical practices in all our dealings.",
    icon: "/images/about_us/Vector1.png", // Replace this with an appropriate image or SVG if needed
  },
  {
    id: "/images/about_us/num2.png",
    title: "Innovation",
    description:
      "Constantly exploring new technologies to stay ahead in the security industry.",
    icon: "/images/about_us/Vector2.png", // Replace with appropriate icon or image
  },
  {
    id: "/images/about_us/num3.png",
    title: "User-Centric",
    description:
      "Ensuring our clients' needs are at the heart of everything we do.",
    icon: "/images/about_us/Vector3.png", // Replace with appropriate icon or image
  },
  {
    id: "/images/about_us/num4.png",
    title: "Excellence",
    description: "Delivering unparalleled service and top-quality solutions.",
    icon: "/images/about_us/Vector4.png", // Replace with appropriate icon or image
  },
];

const ValueCard = ({ id, title, description, icon }) => (
  <div
    className="flex flex-col items-center justify-start text-center border rounded-lg px-2 py-6 sm:px-4 sm:py-6 lg:px-8 lg:py-10 bg-[#FBFBFB] border-[#C4C4C4]"
    style={{ boxShadow: "0px 2px 2px 0px #00000033" }}
  >
    <div className="w-full relative flex items-center">
      <img
        src={id}
        alt="ID"
        className="w-[30px] h-[40px] sm:w-[37px] sm:h-[50px] absolute left-0 top-1/2 transform -translate-y-1/2"
      />
      <img
        src={icon}
        alt="icon"
        className="w-[50px] h-[50px] sm:w-[58px] sm:h-[58px] mx-auto"
      />
    </div>
    <h3 className="mt-4 font-[600] text-xl md:text-[1.75rem]">{title}</h3>
    <p className="mt-2 text-[#212121] text-sm md:text-base">{description}</p>
  </div>
);

const OurValues = () => {
  return (
    <section className="py-[5%] px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-left">
        {/* Section Title */}
        <h2 className="text-2xl font-bold font-axiforma text-[#1A1A1A] md:text-[2.5rem]">
          Our Values
        </h2>
        <p className="mt-4 text-[#212121] text-sm md:text-[1.5rem] md:w-[80%] md:leading-[2.5rem]">
          Our core values guide every decision and interaction, ensuring that we
          stay true to our commitment to excellence.
        </p>
        {/* Grid for Values */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {values.map((value) => (
            <ValueCard
              key={value.id}
              id={value.id}
              title={value.title}
              description={value.description}
              icon={value.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
