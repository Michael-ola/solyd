import React from "react";

const AboutSection = () => {
  const sections = [
    {
      imageSrc: "/images/about_us/image2.jpeg", // Replace with your image path
      title: "Who We Are",
      extra: true,
      paragraphs: [
        "Welcome to Solyd Nigeria, your trusted partner in providing top-tier physical and electronic security solutions to law enforcement agencies, governments, and commercial entities. With over twenty years of experience, we are dedicated to ensuring the safety and security of our clients and their assets.",
        "At Solyd Nigeria,",
        "We understand that security is not just about having the latest technology; it’s about having the right solutions tailored to your specific needs. That’s why we work closely with our clients to design and implement comprehensive security systems that meet their unique requirements.",
      ],
      reverse: false, // Standard layout: Image on the left
      customHeight: null, // No height adjustment for this image
    },
    {
      imageSrc: "/images/about_us/image3.jpeg", // Replace with your image path
      title: "What We Do",
      extra: false,
      paragraphs: [
        "Our commitment to excellence and innovation sets us apart in the industry. We are constantly exploring new technologies and methodologies to provide our clients with the most effective and efficient security solutions available.",
        "Whether you are looking to protect a government facility, secure a commercial property, or equip law enforcement officers with the tools they need to keep our communities safe, Solyd Nigeria has you covered. Contact us today to learn more about how we can help you achieve your security goals.",
      ],
      reverse: true, // Flipped layout: Text on the left
      customHeight: "h-[600px]", // Limit the height of this image
    },
  ];

  return (
    <section className="bg-[#0A0A0A] text-white pt-[10%] pb-16 px-4">
      <div className="max-w-7xl mx-auto space-y-24">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse gap-10 md:flex-row ${
              section.reverse ? "md:flex-row-reverse" : ""
            }  items-center`}
          >
            {/* Image */}
            <div
              className={`flex-1 rounded-lg overflow-hidden shadow-md ${
                section.customHeight ? section.customHeight : ""
              }`}
            >
              <img
                src={section.imageSrc}
                alt={section.title}
                className="w-full object-cover rounded-lg h-full hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1 text-[#E5E5E5]">
              <h2 className="text-3xl text-[#fff] font-axiforma font-bold mb-3 md:text-[2.5rem]">
                {section.title}
              </h2>
              {section.paragraphs.map((text, index) => (
                <div key={index}>
                  {section.extra && index === 1 ? (
                    <h2 className="text-3xl text-[#fff] font-axiforma font-bold mt-8 mb-3 md:text-[2.5rem]">
                      {text}
                    </h2>
                  ) : (
                    <p className="text-lg mb-4 leading-relaxed md:text-[1.25rem] text-[#E5E5E5]">
                      {text}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
