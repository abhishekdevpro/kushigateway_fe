"use client";
import React from "react";
import Image from "next/image";
import servicePath1 from "../../public/Assets/servicePath1.png";
import servicePath2 from "../../public/Assets/servicePath2.png";
import servicePath3 from "../../public/Assets/servicePath3.png";
import texture2 from "../../public/Assets/texture2.png";
import line from "../../public/Assets/line.png";

export default function GetInvolved() {
  return (
    <section className="w-full py-12 bg-white">
      {/* Section Heading */}
      <div className="flex items-center justify-center mb-4 gap-2">
        <Image src={line} alt="horizontal-line" className="h-1 w-0 md:w-15"/>
        <p className="text-[#DA4628] text-sm tracking-wider font-semibold">
          GET INVOLVED WITH KUSHI
        </p>
        <Image src={line} alt="horizontal-line" className="h-1 w-0 md:w-15"/>
        </div>
        <div className="text-center mb-12">    
        <h2 className="text-3xl font-bold text-gray-800">
          Get Involved With Kushi
        </h2>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[350px] md:max-w-[1340px] mx-auto px-6 text-white">
        
        {/* Card 1 */}
        <div style={{backgroundImage: `url(${texture2.src})`, backgroundSize: 'fit', backgroundRepeat: 'no-repeat'}}
        className="bg-[#DA4628] text-center rounded-2xl shadow-sm p-6 pr-0 relative flex items-center justify-center">
          <h3 className="text-[20px] w-54 h-18 md:text-[25px] font-bold">
            Volunteer with us
          </h3>        
        </div>

        {/* Card 2 */}
        <div style={{backgroundImage: `url(${texture2.src})`, backgroundSize: 'fit', backgroundRepeat: 'no-repeat'}}
        className="bg-[#DA4628] text-center rounded-2xl shadow-sm p-6 pr-0 relative flex items-center justify-center">
          <h3 className="text-[20px] w-54 h-18 md:text-[25px] font-bold">
            Partner with us (corporates, NGOs)
          </h3>        
        </div>

        {/* Card 3 */}
        <div style={{backgroundImage: `url(${texture2.src})`, backgroundSize: 'fit', backgroundRepeat: 'no-repeat'}}
        className="bg-[#DA4628] text-center rounded-2xl shadow-sm p-6 pr-0 relative flex items-center justify-center">
          <h3 className="text-[20px] w-54 h-18 md:text-[25px] font-bold">
            Donate
          </h3>        
        </div>

      </div>
    </section>
  );
}
