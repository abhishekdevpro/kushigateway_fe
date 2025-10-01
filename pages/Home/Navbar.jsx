import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Image from "next/image";
import Kushi_logo from "../../public/Assets/Kushi_logo.png";
import locationIcon from "../../public/Assets/white_location_icon.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const hoverEffect = "transition-all duration-300 transform hover:scale-105 hover:bg-red-600";
  return (
    <header>
      {/* Top bar */}
      <div className="hidden md:flex bg-[#DA4628] text-white flex justify-between text-sm px-6 py-2">
        <div className="hidden md:flex md:justify-between">
          <span className="mr-6">info@kushigateway.com</span>
          <span className="flex"><Image src={locationIcon} alt="location-svg" className="w-5"/> 1509 Lady St, Columbia SC, 29201, United States</span>
        </div>
        <div className="flex gap-5 md:gap-7">
          <FaFacebookF />
          <FaTwitter />
          <FaYoutube />
          <FaInstagram />
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white shadow flex justify-between items-center px-4 md:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3 w-1/3">
          <Image src={Kushi_logo} alt="Logo" className="h-8 md:h-12 w-auto" />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-10 font-medium font-sans">
          <a href="#" className="hover:text-[#DA4628] transition duration-300 hover:border-b-2 hover:border-[#DA4628]">
            Home
          </a>
          <a href="#" className="hover:text-[#DA4628] transition duration-300 hover:border-b-2 hover:border-[#DA4628]">
            About Us
          </a>
          <a href="#" className="hover:text-[#DA4628] transition duration-300 hover:border-b-2 hover:border-[#DA4628]">
            Partnership & Programmes
          </a>
          <a href="#" className="hover:text-[#DA4628] transition duration-300 hover:border-b-2 hover:border-[#DA4628]">
            What We Do
          </a>
        </nav>

        {/* Desktop CTA */}
        <button className={`hidden md:block bg-[#DA4628] text-white px-5 py-3 rounded-full ${hoverEffect}`}>
          Contact Us →
        </button>

        {/* Mobile menu button */}
        <div className="md:hidden mx-3">
          {menuOpen ? (
            <HiOutlineX
              className="w-7 h-7 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <HiOutlineMenu
              className="w-7 h-7 cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gray-50 px-4 py-3 space-y-3 shadow-inner">
          <nav className="flex flex-col items-center gap-2 text-sm font-medium">
            <a href="#" className="text-[#DA4628]">Home</a>
            <span className="text-gray-400"></span>
            <a href="#" className="hover:text-[#DA4628]">About Us</a>
            <span className="text-gray-400"></span>
            <a href="#" className="hover:text-[#DA4628]">Partnership & Programmes</a>
            <span className="text-gray-400"></span>
            <a href="#" className="hover:text-[#DA4628]">What We Do</a>
          </nav>
          <button className="bg-[#DA4628] text-white px-4 py-2 rounded-full w-full">
            Contact Us →
          </button>
        </div>
      )}
    </header>
  );
}
