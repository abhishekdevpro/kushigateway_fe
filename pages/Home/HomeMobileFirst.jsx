"use client";
import Image from "next/image";
import React from "react";
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

const hoverEffect = "transition-all duration-300 transform hover:-translate-y-2";
const hoverEffectBtn = "transition-all duration-300 transform hover:scale-105";
export default function HeroSection() {
  return (
    <section className="md:hidden bg-[#DA4628] text-white px-4 py-8">
    <div className="flex flex-col justify-end h-[260px]">
      <h1 className="text-2xl md:text-5xl font-semibold text-white text-center mt-8 md:mt-0 mb-6">
        Building Second Chances, <br/> Restoring Lives
      </h1>
      <p className="text-center mb-8 md:mb-0">Empowering individuals to rebuild stronger futures after adversity through<br/> education, support, 
        and care. </p>
      </div>
      <div className="grid grid-cols-1">
      <div className="grid grid-cols-2 place-items-end justify-items-center">
        <div className="flex flex-col h-[330px] w-[156px]">
              <div style={{backgroundImage: `url(${banner1.src})`, backgroundSize: 'contain', backgroundRepeat: "no-repeat"}} 
              className={`text-white w-[150px] h-[230px] flex flex-col ${hoverEffect}`}>
                  <p className="font-bold font-serif text-[25px] p-4 mt-2">95%</p>
                  <p className="text-[9px] pl-4 p-2">Successfully Reintegrated – Our support network ensures the majority of
                      beneficiaries find stable housing, education, and employment.</p>
                  <Link href="#" 
                      className={`text-center text-black bg-white w-30 h-10 p-2 ml-3 
                      rounded-full flex justify-around items-center text-[10px] ${hoverEffectBtn}`}
                  >Learn More
                      <Image src={Frame24} className="w-fit" alt="arrow-icon"/>
                  </Link>
              </div>
              <div className={`my-4 ${hoverEffect} h-[90px] w-[150px]`}>
                  <Image src={Frame15} alt="smile-image"/>
              </div>
          </div>
          <div className={`font-bold h-[230px] w-[150px] text-[12px] flex items-end p-2 pb-10 font-serif ${hoverEffect}`}
                        style={{backgroundImage: `url(${banner2.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}
                    >
                        Free maternal Education after child birth education
          </div>
        </div>
        <div className="grid grid-cols-2 place-items-end justify-items-center">
          <div className="flex flex-col">
            <div className={`bg-[#C4C4C4] rounded-4xl w-[155px] h-32 flex flex-col items-center mb-4 ${hoverEffect}`}>
            <p className="text-[#2E2E2E] text-center font-bold text-[16px] font-serif my-4">Join 1000+ <br/>People donate</p>
            <Link href="https://novajobs.us/community" target="_blank" rel="noreferer" 
            className={`flex justify-around items-center text-gray-100 bg-[#B4B4B4] py-1 rounded-full w-32 h-10 ${hoverEffectBtn}`}>
                <p className="text-gray-700 ml-2 text-[9px]">Join community</p>
                <Image src={centerArrowIcon} className="w-fit" alt="arrow-icon"/>
            </Link>
            </div>  
            <div className={`font-bold h-[260px] w-[156px] flex items-end text-[12px] p-2 pb-10 font-serif mb-4 ${hoverEffect}`}
                        style={{backgroundImage: `url(${banner3.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}
                    >
                        Sponsored Medication for over 1000+ women
            </div>                      
          </div>
          <div className="flex flex-col h-[330px] w-[147px]">
            <div style={{backgroundImage: `url(${banner4.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} 
            className={`text-white h-[230px] w-[147px] flex flex-col items-center justify-between ${hoverEffect}`}>
                <p className="text-black font-bold font-serif text-[22px] p-8 mt-4">Gallery</p>            
                <Link href="#" 
                    className={`text-center text-white bg-gray-500 mb-3 w-30 h-10 p-2 
                    rounded-full flex justify-around items-center text-[8px] ${hoverEffectBtn}`}
                >See all our moments
                    <Image src={rightArrowIcon} className="w-fit" alt="arrow-icon"/>
                </Link>
            </div>
            <div>
                <Image src={Frame16} alt="smile-image" className={`my-4 ${hoverEffect}`}/>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
}