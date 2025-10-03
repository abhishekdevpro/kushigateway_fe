"use client";
import React from "react";
import Image from "next/image";
import banner1 from "../../public/Assets/Banner_img2.png";
import Frame15 from "../../public/Assets/Frame15.png";
import Frame16 from "../../public/Assets/Frame16.png";
import Frame24 from "../../public/Assets/Frame24.png";
import Frame25 from "../../public/Assets/Frame25.png";
import banner2 from "../../public/Assets/Banner_img1.png";
import banner3 from "../../public/Assets/Banner_img3.png";
import banner4 from "../../public/Assets/Banner_img4.png";
import centerArrowIcon from "../../public/Assets/center-arrow-icon.png";
import rightArrowIcon from "../../public/Assets/right-arrow-icon.png";
import Link from "next/link";

const hoverEffect = "transition-all duration-300 transform hover:-translate-y-2";
const hoverEffectBtn = "transition-all duration-300 transform hover:scale-105";
const HomeFirst = () => {
  return (
    // Main container with red background and responsive padding
    <div className="hidden md:bg-[#14899A] md:flex md:flex-col md:items-around px-8 py-4 font-sans text-white">
      {/* Main title section */}
      <div className="flex flex-col justify-end items-center h-[330px]">
      <h1 className="text-2xl md:text-[68px] font-semibold text-white text-center mt-12 mb-2">
        Transforming Lives with Second <br/> Chances
      </h1>
      <p className="text-center md:text-[27px] mb-8 md:mb-0 w-fit">At Kushi Gateway, we believe in fresh beginnings and <br/>limitless potential. </p>
      </div>
      {/* Content grid layout with responsive columns */}
      <div className="flex justify-between items-end gap-4">
        <div className="flex flex-col lg:h-[490px] lg:w-[220px]">
            <div style={{backgroundImage: `url(${banner1.src})`, backgroundSize: 'contain', backgroundRepeat: "no-repeat"}} 
            className={`text-white w-[220px] h-[380px] flex flex-col ${hoverEffect}`}>
                <p className="font-bold font-serif text-[10px] md:text-[25px] p-5 mt-2">95% Success Stories</p>
                <p className="text-[12px] pl-5 p-3">Our programs have successfully reintegrated individuals into society by providing education, 
                housing, and meaningful employment.</p>
                <Link href="https://ultraaura.education/about-us" target="_blank" rel="noreferer"
                    className={`text-center text-black bg-white bg-opacity-50 ml-8 w-40 h-14 p-2 
                    rounded-full flex justify-around items-center text-sm mt-3 ${hoverEffectBtn}`}
                >Learn More
                    <Image src={Frame24} className="w-fit rounded-full border-1 border-black" alt="arrow-icon"/>
                </Link>
            </div>
            <div className={`mt-4 ${hoverEffect} md:h-[170px] md:w-[220px]`}>
                <Image src={Frame15} alt="smile-image"/>
            </div>
        </div>
        <div className={`lg:h-[292px] lg:w-[200px] text-[12px] flex flex-col justify-end items-center p-2 font-serif mb-4 ${hoverEffect}`}
            style={{backgroundImage: `url(${banner2.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}
        >
           <p className="font-bold text-[10px] md:text-[25px]">Skill Training & Education</p>
                <p className="text-[12px] p-2">From digital skills to job readiness, we prepare individuals and families with the 
                knowledge to thrive.</p>
                <Link href="https://ultraaura.education/course-list" target="_blank" rel="noreferer"
                    className={`text-center text-black bg-white w-44 h-14 p-2 
                    rounded-full flex justify-around items-center text-sm mt-3 ${hoverEffectBtn}`}
                >Explore Programs
                    <Image src={Frame24} className="w-fit rounded-full border-1 border-black" alt="arrow-icon"/>
                </Link> 
        </div>
        <div className={`bg-[#1D3557] rounded-4xl w-[250px] h-56 flex flex-col justify-around items-center mb-4 ${hoverEffect}`}>
            <div className="mx-5 flex flex-col items-start">
                <p className="text-[#2E2E2E] text-center font-bold text-[25px] font-serif mt-2 text-white">Join 1000+ <br/>Supporters</p>
                <p className="text-[12px]">Every contribution fuels education, skill-building, and care for those in need. Together, we transform lives.</p>
            </div>
            <Link href="https://calendly.com/hypervsolutions/15-minute-meeting" target="_blank" rel="noreferer" 
            className={`flex justify-around text-gray-100 bg-[#B4B4B4] py-3 rounded-full w-52 h-12 ${hoverEffectBtn}`}>
                <p className="text-gray-700 ml-2">Join our community</p>
                <Image src={centerArrowIcon} className="w-fit" alt="arrow-icon"/>
            </Link>
        </div>
        <div className={`lg:h-[292px] lg:w-[200px] text-[12px] flex flex-col justify-end items-start p-2 font-serif mb-4 ${hoverEffect}`}
            style={{backgroundImage: `url(${banner3.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}
        >
           <p className="font-bold text-[10px] md:text-[15px] p-2 tracking-[-1px]">Support & Care</p>
                <p className="text-[12px] pl-2">From digital skills to job readiness, we prepare individuals and families with the 
                knowledge to thrive.</p>
                <Link href="https://calendly.com/hypervsolutions/15-minute-meeting" target="_blank" rel="noreferer"
                    className={`text-center text-black bg-white w-44 h-14 p-2 
                    rounded-full flex justify-around items-center text-sm mt-3 ${hoverEffectBtn}`}
                >Get Support
                    <Image src={Frame24} className="w-fit rounded-full border-1 border-black" alt="arrow-icon"/>
                </Link> 
        </div>
        <div className="flex flex-col lg:h-[490px] lg:w-[220px]">
            <div style={{backgroundImage: `url(${banner4.src})`, backgroundSize: 'contain', backgroundRepeat: "no-repeat"}} 
            className={`text-white w-[220px] h-[380px] flex flex-col justify-around ${hoverEffect}`}>
                <div>
                <p className="font-bold font-serif text-[10px] md:text-[25px] p-5 pb-2 mt-6">Gallery of Change</p>
                <p className="text-[12px] pl-5 p-3 pt-0 pr-4">See the moments that inspire us- stories of resilience, growth, and transformation</p>
                </div>
                <Link href="#" target="_blank" rel="noreferer"
                    className={`text-center text-black bg-white ml-8 w-40 h-14 p-2 
                    rounded-full flex justify-around items-center text-sm mt-3 ${hoverEffectBtn}`}
                >View Stories
                    <Image src={Frame25} className="w-fit rounded-full border-1 border-black" alt="arrow-icon"/>
                </Link>
            </div>
            <div className={`mt-4 ${hoverEffect} md:h-[170px] md:w-[220px]`}>
                <Image src={Frame16} alt="smile-image"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFirst;