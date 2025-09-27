"use client";
import React from "react";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import companyStrip from "../../public/Assets/Kushi_logo.png"; // <-- replace with company logo strip
import sbeDbeBadge from "../../public/Assets/footer_img.png";       // <-- replace with SBE+DBE badge
import cloudPattern from "../../public/Assets/footerRectangle.png"; // <-- replace with footer wave/cloud

export default function Footer() {
  return (
    <footer className="bg-black text-white relative">
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
              width={120}
              height={60}
            />
          </div>
        </div>

        {/* Quick Links */}
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
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="mailto: info@kushigateway.com">info@kushigateway.com</a></li>
            <li>
                <button className="cursor-pointer bg-[#DA4628] hover:bg-red-600 text-white px-4 py-2 rounded transition-all duration-300 text-sm font-bold">
                  <a href="https://calendly.com/hypervsolutions/" target="_blank" rel="noreferer">Book Free Consultation</a>                  
                </button>
            </li>            
          </ul>
        </div>
      </div>

      {/* Cloud Pattern */}
      <div className="w-full">
        <Image
          src={cloudPattern} // <-- replace with footer background pattern
          alt="Cloud Pattern"
          width={1920}
          height={200}
          className="w-full"
        />
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#E9593C] text-white flex flex-col md:flex-row items-center justify-between px-6 lg:px-20 py-4">
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
