"use client";
import React from "react";
import Image from "next/image";
import servicePath1 from "../../public/Assets/servicePath1.png";
import servicePath2 from "../../public/Assets/servicePath2.png";
import servicePath3 from "../../public/Assets/servicePath3.png";
import line from "../../public/Assets/line.png";

export default function ServicePathways() {
  return (
    <section className="w-full py-12 bg-white">
      {/* Section Heading */}
      <div className="flex items-center justify-center mb-4 gap-2">
              <Image src={line} alt="horizontal-line" className="h-1 w-0 md:w-15"/>
              <p className="text-[#DA4628] text-sm tracking-wider font-semibold">
                SERVICE PATHWAYS
              </p>
              <Image src={line} alt="horizontal-line" className="h-1 w-0 md:w-15"/>
              </div>
              <div className="text-center mb-12">    
              <h2 className="text-3xl font-bold text-gray-800">
                Service Pathways
              </h2>
            </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        
        {/* Card 1 */}
        <div className="bg-white border rounded-2xl shadow-sm p-6 relative">
          <h3 className="text-lg font-bold text-gray-900">
            Jobs & Careers
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Connect with employers and find meaningful jobs
          </p>
          {/* CTA Button */}
          <button className="mt-6 flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition">
            →
          </button>
          {/* Icon Placeholder */}
          <div className="absolute bottom-6 right-6 w-12 h-12">
            <Image
              src={servicePath1} // replace with actual icon
              alt="Jobs Icon"
              width={48}
              height={48}
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border rounded-2xl shadow-sm p-6 relative">
          <h3 className="text-lg font-bold text-gray-900">
            Skills & Education
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Upgrade yourself with future-ready skills and certifications.
          </p>
          {/* CTA Button */}
          <button className="mt-6 flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition">
            →
          </button>
          {/* Icon Placeholder */}
          <div className="absolute bottom-6 right-6 w-12 h-12">
            <Image
              src={servicePath2} // replace with actual icon
              alt="Skills Icon"
              width={48}
              height={48}
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white border rounded-2xl shadow-sm p-6 relative">
          <h3 className="text-lg font-bold text-gray-900">
            Homecare Support
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Get access to reliable caregiving & home assistance.
          </p>
          {/* CTA Button */}
          <button className="mt-6 flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition">
            →
          </button>
          {/* Icon Placeholder */}
          <div className="absolute bottom-6 right-6 w-12 h-12">
            <Image
              src={servicePath3} // replace with actual icon
              alt="Homecare Icon"
              width={48}
              height={48}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
