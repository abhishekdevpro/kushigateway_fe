"use client";
import React from "react";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import companyStrip from "../../public/Assets/Kushi_logo.png"; // <-- replace with company logo strip
import sbeDbeBadge from "../../public/Assets/footer_img.png";       // <-- replace with SBE+DBE badge
import cloudPattern from "../../public/Assets/footerRectangle.png"; // <-- replace with footer wave/cloud

const hoverEffect = "transition-all duration-300 transform hover:-translate-y-1 active:-translate-y-1";

export default function Footer() {
  return (
    <footer className="bg-[#0A2647] text-white relative">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 px-6 lg:px-10 py-12">
        {/* Company Info */}
        <div className="md:col-span-2 w-[350px]">
          {/* Company Strip/Logo */}
          <div className="mb-4">
            <Image
              src={companyStrip} // <-- replace with company strip image
              alt="Company Strip"
              width={220}
              height={140}
            />
          </div>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed mr-3 md:mr-0">
            Kushi Gateway is committed to making a real difference by providing genuine support and opportunities 
            for those facing challenges. We believe every story matters and ensure our help is sincere, reliable, and 
            empowers lasting change.
          </p>
          {/* SBE + DBE Badge */}
          <div>
            <Image
              src={sbeDbeBadge} // <-- replace with badge image
              alt="SBE & DBE"
              width={180}
              height={100}
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="hidden md:block">
          <h3 className="text-lg font-semibold mb-4">Quick links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="transition duration-300 hover:border-b-2 hover:text-white">About Us</a></li>
            <li><a href="#" className="transition duration-300 hover:border-b-2 hover:text-white">What We Do</a></li>
            <li><a href="#" className="transition duration-300 hover:border-b-2 hover:text-white">Join With Us</a></li>
            <li><a href="#" className="transition duration-300 hover:border-b-2 hover:text-white">Teams</a></li>
            <li><a href="#" className="transition duration-300 hover:border-b-2 hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Address */}
        <div className="hidden md:block">
          <h3 className="text-lg font-semibold mb-4">Address</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            P O Box 1084, <br />
            Columbia, SC 29202, <br />
            United States.
          </p>
        </div>

        {/* Contact */}
        <div className="hidden md:block">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="mailto: info@kushigateway.com">info@kushigateway.com</a></li>
            <li>
                <button className={`cursor-pointer bg-[#14899A] hover:[#0E6370] text-white px-4 py-2 rounded text-sm font-bold ${hoverEffect}`}>
                  <a href="https://calendly.com/hypervsolutions/" target="_blank" rel="noreferer">Book Free Consultation</a>                  
                </button>
            </li>            
          </ul>
        </div>
        {/* Below is for mobile device */}
        <div className="md:hidden flex flex-wrap justify-between">
          <div>
          <h3 className="text-lg font-semibold mb-4">Quick links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">About Us</a></li>
            <li><a href="#">What We Do</a></li>
            <li><a href="#">Join With Us</a></li>
            <li><a href="#">Teams</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Address</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            1509 Lady St, <br />
            Columbia SC, 29201, <br />
            United States.
          </p>
        </div>

        {/* Contact */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="mailto: info@kushigateway.com">info@kushigateway.com</a></li>
            <li>
                <button className={`cursor-pointer text-white px-4 py-2 rounded text-sm font-bold ${hoverEffect}`}>
                  <a href="https://calendly.com/hypervsolutions/" target="_blank" rel="noreferer">Book Free Consultation</a>                  
                </button>
            </li>            
          </ul>
        </div>
        </div>
      </div>

      {/* Cloud Pattern */}
     <footer className="relative h-64 overflow-hidden">
  {/* Animated Waves */}
  <svg
    className="absolute bottom-0 w-full h-full"
    viewBox="0 0 1440 320"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    {/* Wave 1 */}
    <path
      fill="#14899A"
      fillOpacity="0.6"
      d="M0,160 C240,240 480,80 720,160 C960,240 1200,80 1440,160 C1680,240 1920,80 2160,160 L2160,320 L0,320 Z"
    >
      <animateTransform
        attributeName="transform"
        type="translate"
        from="0 0"
        to="-720 0"
        dur="20s"
        repeatCount="indefinite"
      />
    </path>

    {/* Wave 2 */}
    <path
      fill="#14899A"
      fillOpacity="0.5"
      d="M0,180 C240,260 480,100 720,180 C960,260 1200,100 1440,180 C1680,260 1920,100 2160,180 L2160,320 L0,320 Z"
    >
      <animateTransform
        attributeName="transform"
        type="translate"
        from="0 0"
        to="-720 0"
        dur="25s"
        repeatCount="indefinite"
      />
    </path>

    {/* Wave 3 */}
    <path
      fill="#14899A"
      fillOpacity="0.4"
      d="M0,200 C240,280 480,120 720,200 C960,280 1200,120 1440,200 C1680,280 1920,120 2160,200 L2160,320 L0,320 Z"
    >
      <animateTransform
        attributeName="transform"
        type="translate"
        from="0 0"
        to="-720 0"
        dur="30s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
</footer>



      {/* Bottom Footer */}
      <div className="bg-[#14899A] text-white flex flex-col md:flex-row items-center justify-between px-6 lg:px-20 py-4">
        <p className="text-sm">
          © 2025 kushigateway.in All Rights Reserved
        </p>
        {/* Social Icons */}
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-gray-200">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-gray-200">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-gray-200">
            <Instagram size={20} />
          </a>
          <a href="#" className="hover:text-gray-200">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
