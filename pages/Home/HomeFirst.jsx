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

const HomeFirst = () => {
  return (
    // Main container with red background and responsive padding
    <div className="bg-[#DA4628] min-h-screen flex flex-col items-center justify-center p-6 md:p-12 font-sans text-white">
      {/* Main title section */}
      <div className="flex flex-col justify-end h-[260px]">
      <h1 className="text-5xl font-semibold text-white text-center mb-6">
        Building Second Chances, <br/> Restoring Lives
      </h1>
      <p className="text-center">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. 
        Aliquam in <br/>hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula </p>
      </div>
      {/* Content grid layout with responsive columns */}
      <div className="flex items-end lg:space-x-3">
        <div className="flex flex-col lg:h-[517px] lg:w-[260px]">
            <div style={{backgroundImage: `url(${banner1.src})`, backgroundSize: 'cover'}} className="text-white h-[362px]">
                <p className="font-bold font-serif text-[40px] p-8 mt-2">95%</p>        
                <p className="text-sm p-8">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. 
                    Aliquam in hendrerit urna. Pellentesque sit amet</p>
                <Link href="#" 
                    className="text-center text-black bg-white bg-opacity-50 ml-8 mb-3 w-46 h-14 p-2 
                    rounded-full flex justify-around items-center text-sm"
                >Learn More
                    <Image src={Frame24} className="w-fit" alt="arrow-icon"/>
                </Link>
            </div>
            <div className="my-4">
                <Image src={Frame15} className="w-full" alt="smile-image"/>
            </div>
        </div>
        <div className="lg:h-[350px] lg:w-[246px] flex items-end p-4 pb-8 font-serif"
            style={{backgroundImage: `url(${banner2.src})`, backgroundSize: 'cover'}}
        >
            Free maternal Education after child birth  education
        </div>
        <div className="bg-[#C4C4C4] rounded-4xl w-64 h-44 flex flex-col items-center">
            <p className="text-[#2E2E2E] text-center font-bold text-[25px] font-serif my-5">Join 1000+ <br/>People donate</p>
            <Link href="#" className="flex justify-around text-gray-100 bg-[#B4B4B4] py-3 rounded-full w-52 h-12">
                <p className="text-gray-700 ml-2">Join community</p>
                <Image src={centerArrowIcon} className="w-fit" alt="arrow-icon"/>
            </Link>
        </div>
        <div className="lg:h-[350px] lg:w-[246px] flex items-end p-4 pb-8 font-serif"
            style={{backgroundImage: `url(${banner3.src})`, backgroundSize: 'cover'}}
        >
            Sponsored Medication for over 1000+ women
        </div>
        <div className="flex flex-col lg:h-[517px] lg:w-auto">
            <div style={{backgroundImage: `url(${banner4.src})`, backgroundSize: 'cover'}} className="text-white h-[362px] flex flex-col items-center justify-between">
                <p className="text-black font-bold font-serif text-[40px] p-8 mt-4">Gallery</p>            
                <Link href="#" 
                    className="text-center text-white bg-gray-500 mb-3 w-52 h-14 p-2 
                    rounded-full flex justify-around items-center text-sm"
                >See all our moments
                    <Image src={rightArrowIcon} className="w-fit" alt="arrow-icon"/>
                </Link>
            </div>
            <div>
                <Image src={Frame16} alt="smile-image" className="mt-3"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFirst;