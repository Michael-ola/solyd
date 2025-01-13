import React from "react";

const OurServices = () => {
  const services = [
    {
      title: "AI-Powered Drone Solutions",
      description:
        "At Solyd Nigeria, we harness the power of AI technology to enhance the capabilities of our drones, enabling them to perform critical functions and deliver exceptional results. Our AI-powered drones are equipped with advanced features that allow for efficient and effective operations in various scenarios.",
      image: "/images/Frame1.png",
    },
    {
      title: "Lidar Services",
      description:
        "We offer Lidar services using our state-of-the-art drones equipped with Lidar technology. Lidar enables us to create detailed 3D maps and accurately measure distances, making it ideal for applications such as terrain mapping, urban planning, and infrastructure inspection.",
      image: "/images/Frame2.png",
    },
    {
      title: "Security",
      description:
        "Enhancing safety with advanced drone surveillance, perimeter monitoring, rapid response capabilities, threat detection, real-time situational awareness, crowd control, asset protection, and 24/7 automated security solutions for unparalleled peace of mind.",
      image: "/images/Frame3.png",
    },
  ];

  return (
    <section className="bg-[#0A0A0A] text-white py-16 px-[5%]">
      <div className="container flex flex-col mx-auto text-center">
        <h2 className="inline-block text-[1rem] text-[#E5E5E5] uppercase font-[500] bg-[#24242445] p-3 rounded-[8px] self-start">
          Glimpse of what we offer
        </h2>
        <h1 className="text-[2.5rem] font-axiforma mr-auto font-bold mb-12">
          Our Services
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#141414] rounded-lg overflow-hidden shadow-lg p-6"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[321px] object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
