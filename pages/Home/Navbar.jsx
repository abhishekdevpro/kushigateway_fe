import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Kushi_logo from "../../public/Assets/Kushi_logo.png";

export default function navbarTopStrip() {
  return (
    <header>
      {/* Top bar */}
      <div className="bg-[#DA4628] text-white text-sm flex justify-between px-6 py-2">
        <div>
          <span className="mr-6">📞 +91 1234 5678 90</span>
          <span>📍 1509 Lady St, Columbia SC, 29201</span>
        </div>
        <div className="flex gap-7">
          <FaFacebookF />
          <FaTwitter />
          <FaYoutube />
          <FaInstagram />
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white shadow flex justify-between items-center px-8 py-4">
        <div className="flex items-center gap-3 w-1/3">
          <Image src={Kushi_logo} alt="Logo" className="h-12 w-50" />          
        </div>

        <nav className="flex gap-10 font-medium font-sans">
          <a href="#" className="hover:text-[#DA4628]">Home</a>
          <a href="#" className="hover:text-[#DA4628]">About Us</a>
          <a href="#" className="hover:text-[#DA4628]">Partnership & Programmes</a>
          <a href="#" className="hover:text-[#DA4628]">What We Do</a>
        </nav>

        <button className="bg-[#DA4628] text-white px-5 py-3 rounded-full">
          Contact Us →
        </button>
      </div>
    </header>
  );
}
