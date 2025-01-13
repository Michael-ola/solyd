import React from "react";

const PartnerRow = ({ partners }) => {
  return (
    <div className="flex justify-center items-center gap-4 md:gap-12">
      {partners.map((partner, index) => (
        <React.Fragment key={partner.id}>
          {/* Partner Logo */}
          <img
            src={partner.img}
            alt={partner.name}
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-28 md:h-28 object-contain"
          />
          {/* Add connecting line */}
          {index !== partners.length - 1 && (
            <div className="w-8 sm:w-12 md:w-28 h-1 bg-gradient-to-r from-[#0E1FDB] to-[#BE187C]" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const TrustedPartners = () => {
  const partnersData = [
    [
      { id: 1, name: "Cimline", img: "/images/about_us/image 9.png" },
      { id: 2, name: "Norinco", img: "/images/about_us/image 10.png" },
      { id: 3, name: "QIE", img: "/images/about_us/image 11.png" },
      { id: 4, name: "Bizoe", img: "/images/about_us/image 12.png" },
    ],
    [
      { id: 5, name: "Condor", img: "/images/about_us/image 13.png" },
      { id: 6, name: "Zima", img: "/images/about_us/image 14.png" },
      { id: 7, name: "Alpine Armoring", img: "/images/about_us/image 15.png" },
    ],
  ];

  return (
    <section className="py-[5%] px-[5%] md:px-[10%] bg-white">
      <h2 className="text-2xl md:text-[2.5rem] font-bold font-axiforma text-left text-[#1A1A1A] md:leading-[4.1125rem]">
        Our Trusted Partners
      </h2>

      <div className="mt-8 space-y-8 md:space-y-12">
        {partnersData.map((partners, index) => (
          <PartnerRow key={index} partners={partners} />
        ))}
      </div>
    </section>
  );
};

export default TrustedPartners;
