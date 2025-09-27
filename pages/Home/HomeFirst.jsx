"use client";
import React from "react";
import Image from "next/image";
import banner1 from "../../public/Assets/Banner_img2.png";
import Frame15 from "../../public/Assets/Frame15.png";
import Frame16 from "../../public/Assets/Frame16.png";
import Frame24 from "../../public/Assets/Frame24.png";
import banner2 from "../../public/Assets/Banner_img1.png";
import banner3 from "../../public/Assets/Banner_img3.png";
import banner4 from "../../public/Assets/Banner_img4.png";
import centerArrowIcon from "../../public/Assets/center-arrow-icon.png";
import rightArrowIcon from "../../public/Assets/right-arrow-icon.png";
import Link from "next/link";

const hoverEffect = "transition-all duration-300 transform hover:-translate-y-2"
const HomeFirst = () => {
  return (
    // Main container with red background and responsive padding
    <div className="bg-[#DA4628] min-h-screen flex flex-col items-center justify-center p-6 font-sans text-white">
      {/* Main title section */}
      <div className="flex flex-col justify-end md:h-[260px]">
      <h1 className="text-5xl font-semibold text-white text-center mb-6">
        Building Second Chances, <br/> Restoring Lives
      </h1>
      <p className="text-center mb-8 md:mb-0">Empowering individuals to rebuild stronger futures after adversity through<br/> education, support, 
        and care. </p>
      </div>
      {/* Content grid layout with responsive columns */}
      <div className="flex flex-wrap flex-grow md:items-end lg:space-x-3">
        <div className="flex flex-col lg:h-[517px] lg:w-[260px]">
            <div style={{backgroundImage: `url(${banner1.src})`, backgroundSize: 'cover'}} 
            className={`text-white h-[362px] ${hoverEffect}`}>
                <p className="font-bold font-serif text-[40px] p-8 mt-2">95%</p>        
                <p className="text-sm pl-10 pr-20 md:p-8 mb-8 md:mb-0">Successfully Reintegrated – Our support network ensures the majority of
                    beneficiaries find stable housing, education, and employment.</p>
                <Link href="#" 
                    className="text-center text-black bg-white bg-opacity-50 ml-8 mb-3 w-46 h-14 p-2 
                    rounded-full flex justify-around items-center text-sm"
                >Learn More
                    <Image src={Frame24} className="w-fit" alt="arrow-icon"/>
                </Link>
            </div>
            <div className={`my-4 ${hoverEffect}`}>
                <Image src={Frame15} className="w-full" alt="smile-image"/>
            </div>
        </div>
        <div className={`h-[400px] w-[250px] mx-auto md:mx-0 lg:h-[350px] lg:w-[246px] flex items-end p-4 pb-8 font-serif mb-5 md:mb-0 ${hoverEffect}`}
            style={{backgroundImage: `url(${banner2.src})`, backgroundSize: 'cover'}}
        >
            Free maternal Education after child birth  education
        </div>
        <div className={`bg-[#C4C4C4] rounded-4xl w-64 h-44 flex flex-col items-center mx-auto md:mx-0 ${hoverEffect}`}>
            <p className="text-[#2E2E2E] text-center font-bold text-[25px] font-serif my-5">Join 1000+ <br/>People donate</p>
            <Link href="https://novajobs.us/community" target="_blank" rel="noreferer" className="flex justify-around text-gray-100 bg-[#B4B4B4] py-3 rounded-full w-52 h-12">
                <p className="text-gray-700 ml-2">Join community</p>
                <Image src={centerArrowIcon} className="w-fit" alt="arrow-icon"/>
            </Link>
        </div>
        <div className={`h-[400px] w-[250px] mx-auto md:mx-0 lg:h-[350px] lg:w-[246px] flex items-end p-4 pb-8 font-serif my-5 md:my-0 ${hoverEffect}`}
            style={{backgroundImage: `url(${banner3.src})`, backgroundSize: 'cover'}}
        >
            Sponsored Medication for over 1000+ women
        </div>
        <div className="flex flex-col lg:h-[517px] lg:w-auto">
            <div style={{backgroundImage: `url(${banner4.src})`, backgroundSize: 'cover'}} 
            className={`text-white h-[362px] flex flex-col items-center justify-between ${hoverEffect}`}>
                <p className="text-black font-bold font-serif text-[40px] p-8 mt-4">Gallery</p>            
                <Link href="#" 
                    className="text-center text-white bg-gray-500 mb-3 w-52 h-14 p-2 
                    rounded-full flex justify-around items-center text-sm"
                >See all our moments
                    <Image src={rightArrowIcon} className="w-fit" alt="arrow-icon"/>
                </Link>
            </div>
            <div>
                <Image src={Frame16} alt="smile-image" className={`mt-3 ${hoverEffect}`}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFirst;