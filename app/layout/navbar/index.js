"use client";
import React, { useState } from "react";
import Link from "next/link";

const MenuItem = ({ href, label }) => (
  <li>
    <Link
      href={href}
      className="block px-4 py-2 hover:bg-red-500 hover:text-white rounded-md transition"
    >
      {label}
    </Link>
  </li>
);

const Dropdown = ({
  title,
  items,
  isMobile,
  isOpen,
  toggleDropdown,
  onHover,
}) => {
  return (
    <div
      className={`relative py-2 md:hover:bg-red-500 md:rounded-md md:transition md:hover:text-white h-full ${
        isMobile ? "w-full" : ""
      }`}
      onMouseEnter={!isMobile ? onHover : undefined}
      onMouseLeave={!isMobile ? onHover : undefined}
    >
      <button
        className={`flex items-center h-full justify-between w-full ${
          isMobile ? "px-4 py-2 text-left bg-gray-100" : "hover:text-white px-4"
        }`}
        onClick={isMobile ? toggleDropdown : undefined}
      >
        {title}{" "}
        {isMobile ? (
          <span>{isOpen ? "▲" : "▼"}</span>
        ) : (
          <span className="ml-1">▼</span>
        )}
      </button>
      {isOpen && (
        <div className="md:absolute md:w-full md:h-full md:top-10 md:pt-[10%]">
          <ul
            className={`${
              isMobile
                ? "block bg-gray-200 mt-2 rounded-md"
                : "absolute left-0 mt-2 w-[220px]"
            } bg-white text-black rounded-md shadow-lg p-2 z-20`}
          >
            {items.map((item, index) => (
              <MenuItem key={index} href={item.href} label={item.label} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const products = [
    { href: "/products/drones/", label: "Drones" },
    { href: "/products/armored-vehicles/", label: "Armored Vehicles" },
    { href: "/products/tactical-gear/", label: "Tactical Gear" },
    { href: "/products/riot-control/", label: "Riot Control Products" },
    { href: "/products/counter-surveillance/", label: "Counter Surveillance" },
    { href: "/products/cctv/", label: "CCTV" },
  ];

  const services = [
    {
      href: "/services/ai-drone-solutions/",
      label: "AI-Powered Drone Solutions",
    },
    { href: "/services/lidar/", label: "Lidar Services" },
    {
      href: "/services/search-and-rescue",
      label: "Search and Rescue Services",
    },
    {
      href: "/services/long-range-surveillance/",
      label: "Long Range Wide Area Surveillance",
    },
    { href: "/services/emergency-management/", label: "Emergency Management" },
  ];

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="flex justify-between items-center px-8 py-2 md:py-4 bg-[#FFFFFF66] md:bg-[#FFFFFF33] backdrop-blur-lg border rounded-[12px] border-[#FFFFFF4D] text-white w-[90%] mx-auto left-0 right-0 top-[2%] md:top-[30px] fixed z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <img
            src="/images/logo.png"
            className="w-[100px] h-[36px] md:w-[113px] md:h-[38px]"
            alt="Logo"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 items-center">
        <MenuItem href="/" label="Home" />
        <MenuItem href="/about-us" label="About Us" />
        <Dropdown
          title="Products"
          items={products}
          isOpen={openDropdown === "products"}
          toggleDropdown={() => toggleDropdown("products")}
          onHover={() => toggleDropdown("products")}
        />
        <Dropdown
          title="Services"
          items={services}
          isOpen={openDropdown === "services"}
          toggleDropdown={() => toggleDropdown("services")}
          onHover={() => toggleDropdown("services")}
        />
        <MenuItem href="/CSR" label="CSR" />
      </ul>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-white "
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <img
            src="/images/close.png"
            className="w-[22px] h-[22px]"
            alt="Close"
          />
        ) : (
          <img
            src="/images/open.png"
            className="w-[22px] h-[22px]"
            alt="Open"
          />
        )}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="absolute top-[80px] left-0 w-full bg-white rounded-md text-black p-4 space-y-4 md:hidden z-10">
          <MenuItem href="/" label="Home" />
          <MenuItem href="/about-us" label="About Us" />
          <Dropdown
            title="Products"
            items={products}
            isMobile
            isOpen={openDropdown === "products"}
            toggleDropdown={() => toggleDropdown("products")}
          />
          <Dropdown
            title="Services"
            items={services}
            isMobile
            isOpen={openDropdown === "services"}
            toggleDropdown={() => toggleDropdown("services")}
          />
          <MenuItem href="/CSR" label="CSR" />
          <li>
            <Link href="/contact-us">
              <button className="bg-[#CE2232] hover:bg-red-700 text-white px-4 py-2 rounded-[12px] w-full">
                Contact Us
              </button>
            </Link>
          </li>
        </ul>
      )}

      {/* Contact Us Button */}
      <Link href="/contact-us" className="hidden md:block">
        <button className="hidden md:block bg-[#CE2232] hover:bg-red-700 text-white px-4 py-2 rounded-[12px]">
          Contact Us
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
