import Link from "next/link";

const Footer = () => {
  const footerSections = [
    {
      title: "COMPANY",
      links: ["Home", "About", "Contact"],
    },
    {
      title: "SERVICES",
      links: [
        ["AI-Powered Drone Solutions", "/services/ai-drone-solutions/"],
        ["Lidar Services", "/services/lidar/"],
        ["Search and Rescue Services", "/services/search-and-rescue"],
        [
          "Long Range Wide Area Surveillance",
          "/services/long-range-surveillance/",
        ],
        ["Emergency Management", "/services/emergency-management/"],
      ],
    },
    {
      title: "PRODUCTS",
      links: [
        ["Drones", "/products/drones"],
        ["Armored Vehicles", "/products/armored-vehicles/"],
        ["Tactical Gear", "/products/tactical-gear/"],
        ["Riot Control Products", "/products/riot-control/"],
        ["Counter Surveillance", "/products/counter-surveillance/"],
        ["CCTV", "/products/cctv/"],
      ],
    },
  ];

  return (
    <footer className="bg-black text-[#E5E5E5] py-10">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 text-sm">
          {/* Logo & Description */}
          <div>
            <img
              src="/images/logo.png"
              alt="Solyd Logo"
              className="mb-4 w-[120px] bg-[#5E5E5E] p-2 rounded-[12px]"
            />
            <p className="leading-6">
              We provide non-lethal solutions for law enforcement and best
              practice security equipment for civil defense.
            </p>
          </div>

          {/* Dynamic Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-white text-lg mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={section.title == "COMPANY" ? link : link[1]}
                      className="hover:underline"
                    >
                      {section.title == "COMPANY" ? link : link[0]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm">
          <p>© 2024 Solyd. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
