"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import servicePath1 from "../../public/Assets/servicePath1.png";
import servicePath2 from "../../public/Assets/servicePath2.png";
import servicePath3 from "../../public/Assets/servicePath3.png";
import line from "../../public/Assets/line.png";
import ionBtn from "../../public/Assets/ion_arrow-redo-sharp.png";
import texture1 from "../../public/Assets/texture1.png";

export default function ServicePathways() {
  return (
    <section className="w-full py-12 bg-white">
      {/* Section Heading */}
      <div className="flex items-center justify-center mb-4 gap-2">
              <Image src={line} alt="horizontal-line" className="h-1 w-0 md:w-15"/>
              <p className="text-[#F4A261] text-sm tracking-wider font-semibold">
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:max-w-[1340px] mx-auto px-6">
        
        {/* Card 1 */}
        <div className="bg-[#F4A26126] rounded-2xl shadow-md relative flex justify-between">
          <div className="p-6">
          <h3 className="text-[23px] font-bold text-gray-900">
            Jobs & Careers
          </h3>
          <p className="text-[15px] text-gray-600 mt-2 w-[250px]">
            Connect with employers and find meaningful jobs
          </p>
          {/* CTA Button */}
          <button className="mt-6 flex items-center gap-2 bg-[#8138E7] text-white px-6 py-2 rounded-full hover:bg-[#5F27B7] transition">
            <Link href="https://novajobs.us/" target="_blank" rel="noreferer">
            <Image
              src={ionBtn} // replace with actual icon
              alt="Jobs Icon"
              width={24}
              height={24}
            />
            </Link>
          </button>          
          </div>

          {/* Icon Placeholder */}
          <Image
              src={texture1}
              alt="design1"
              width={100}
              height={100}
              className="hidden md:block md:z-1 md:object-cover"
            />
          <div className="z-2 absolute bottom-6 right-6 w-12 h-12">
            <Image
              src={servicePath1} // replace with actual icon
              alt="Jobs Icon"
              width={52}
              height={52}
            />
          </div>          
        </div>

        {/* Card 2 */}
        <div className="bg-[#14899A26] rounded-2xl shadow-md relative flex justify-between">
          <div className="p-6">
          <h3 className="text-[23px] font-bold text-gray-900">
            Skills & Education
          </h3>
          <p className="text-[15px] text-gray-600 mt-2 w-[250px]">
            Upgrade yourself with future-ready skills and certifications.
          </p>
          
          {/* CTA Button */}
          <button className="mt-6 flex items-center gap-2 bg-[#8138E7] text-white px-6 py-2 rounded-full hover:bg-[#5F27B7] transition">
            <Link href="https://ultraaura.education/" target="_blank" rel="noreferer">
            <Image
              src={ionBtn} // replace with actual icon
              alt="Jobs Icon"
              width={24}
              height={24}
            />
            </Link>
          </button>
          </div>
          {/* Icon Placeholder */}      
          <Image
              src={texture1}
              alt="design1"
              width={100}
              height={100}
              className="hidden md:block md:z-1 md:object-cover"
            />
          <div className="z-2 absolute bottom-6 right-6 w-12 h-12">
            <Image
              src={servicePath2} // replace with actual icon
              alt="Skills Icon"
              width={52}
              height={52}
            />
          </div>        
        </div>

        {/* Card 3 */}
        <div className="bg-[#8138E726] rounded-2xl shadow-md relative flex justify-between">
          <div className="p-6">
          <h3 className="text-[23px] font-bold text-gray-900">
            Homecare Support
          </h3>
          <p className="text-[15px] text-gray-600 mt-2 w-[250px]">
            Get access to reliable caregiving & home assistance.
          </p>          
          {/* CTA Button */}
          <button className="mt-6 flex items-center gap-2 bg-[#8138E7] text-white px-6 py-2 rounded-full hover:bg-[#5F27B7] transition">
            <Link href="https://novahome.care/" target="_blank" rel="noreferer">
            <Image
              src={ionBtn} // replace with actual icon
              alt="Jobs Icon"
              width={24}
              height={24}
            />
            </Link>
          </button>
          </div>
          {/* Icon Placeholder */}
          <Image
              src={texture1}
              alt="design1"
              width={100}
              height={100}
              className="hidden md:block md:z-1 md:object-cover"
            />
          <div className="z-2 absolute bottom-6 right-6 w-12 h-12">
            <Image
              src={servicePath3} // replace with actual icon
              alt="Homecare Icon"
              width={52}
              height={52}
            />
          </div>        
        </div>

      </div>
    </section>
  );
}
