"use client";
import React from "react";
import Image from "next/image";
import doorImage from "../../public/Assets/contact_sec_img.png"; // <-- replace with your image
import line from "../../public/Assets/line.png";

export default function ContactSection() {
  return (
    <section className="w-full bg-white py-16 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Content */}
        <div className="flex flex-col items-start">
            <p className="font-semibold text-[#DA4628] tracking-wide mb-5 flex items-center">
                      <Image src={line} alt="horizontal-line" className="h-1 w-16 mb-1"/>
                      &nbsp;
                      CONTACT US
            </p>
            <div className="md:ml-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Send Us A Message
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            At Kushi Gateway, we believe in second chances, fresh beginnings,
            and the limitless potential of individuals and businesses. As a
            transformative 501(c)(3) nonprofit organization, we are dedicated to
            empowering those who face personal, professional, or business
            challenges, offering guidance, resources, and opportunities—at no
            cost.
          </p>

          {/* Form */}
          <div className="bg-neutral-900 text-white p-6 rounded-md shadow-md ">
            <form className="space-y-4 px-2 py-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600 focus:outline-none"
              />
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-4 py-2 rounded-md bg-transparent border border-gray-600 focus:outline-none w-1/2"
                />
                <select className="px-4 py-2 rounded-md bg-transparent border border-gray-600 focus:outline-none w-1/2">
                  <option className="text-black">Select Service</option>
                  <option className="text-black">Service 1</option>
                  <option className="text-black">Service 2</option>
                </select>
              </div>
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600 focus:outline-none"
              />
              <textarea
                rows="4"
                placeholder="Extra Detail"
                className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full py-3 bg-[#DA4628] hover:bg-red-700 transition rounded-md font-medium font-sans"
              >
                Send A Message
              </button>
            </form>
          </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          {/* Replace with your image */}
          <div className="w-full max-w-md rounded-md overflow-hidden shadow-lg">
            <Image
              src={doorImage} // <-- replace with your own image path
              alt="Open Door"
              width={500}
              height={600}
              className="rounded-md h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
