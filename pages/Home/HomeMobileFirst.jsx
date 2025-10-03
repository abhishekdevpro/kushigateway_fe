"use client";
import Image from "next/image";
import React from "react";
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
export default function HeroSection() {
  return (
    <section className="md:hidden bg-[#14899A] text-white p-4">
    <div className="flex flex-col justify-start h-[200px]">
      <h1 className="text-2xl md:text-5xl font-semibold text-white text-center mt-6">
        Transforming Lives with Second Chances
      </h1>
      <p className="text-center mt-4">At Kushi Gateway, we believe in fresh beginnings and limitless potential. </p>
      </div>
      <div className="grid grid-cols-1">
      <div className="grid grid-cols-2 place-items-end justify-items-center">
        <div className="flex flex-col h-[330px] w-[156px]">
              <div style={{backgroundImage: `url(${banner1.src})`, backgroundSize: 'contain', backgroundRepeat: "no-repeat"}} 
              className={`text-white w-[150px] h-[230px] flex flex-col ${hoverEffect}`}>
                  <p className="font-bold font-serif text-[18px] p-3 pb-0 mt-3">95% Success Stories</p>
                  <p className="text-[9px] pl-4 p-2">Our programs have successfully reintegrated individuals into society by providing education, 
                housing, and meaningful employment.</p>
                  <Link href="https://ultraaura.education/about-us" target="_blank" rel="noreferer"
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
          <div className={`font-bold h-[250px] w-[150px] text-[12px] flex flex-col justify-end items-center p-2 pb-10 font-serif ${hoverEffect}`}
                        style={{backgroundImage: `url(${banner2.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}
                    >
                        <p className="font-bold text-[15px] pl-1">Skill Training & Education</p>
                <p className="text-[9px] p-1">From digital skills to job readiness, we prepare individuals and families with the 
                knowledge to thrive.</p>
                <Link href="https://ultraaura.education/course-list" target="_blank" rel="noreferer"
                    className={`text-center text-black bg-white w-35 h-10 p-2 
                    rounded-full flex justify-around items-center text-[10px] mt-3 ${hoverEffectBtn}`}
                >Explore Programs
                    <Image src={Frame24} className="w-fit rounded-full" alt="arrow-icon"/>
                </Link> 
          </div>
        </div>
        <div className="grid grid-cols-2 place-items-center justify-items-center">
          <div className="flex flex-col">
            <div className={`bg-[#1D3557] rounded-4xl w-[155px] h-42 flex flex-col justify-around items-center mb-4 ${hoverEffect}`}>
            <div className="mx-5 flex flex-col items-start">
                <p className="text-[#2E2E2E] text-center font-bold text-[16px] font-serif mt-2 text-white">Join 1000+ <br/>Supporters</p>
                <p className="text-[9px] mt-1">Every contribution fuels education, skill-building, and care for those in need. Together, we transform lives.</p>
            </div>
            <Link href="https://calendly.com/hypervsolutions/15-minute-meeting" target="_blank" rel="noreferer" 
            className={`flex justify-around items-center text-gray-100 bg-[#B4B4B4] py-1 mb-1 rounded-full w-34 h-9 ${hoverEffectBtn}`}>
                <p className="text-gray-700 ml-2 text-[11px]">Join our community</p>
                <Image src={centerArrowIcon} className="w-fit" alt="arrow-icon"/>
            </Link>
            </div>  
            <div className={`font-bold h-[260px] w-[156px] flex flex-col justify-end items-start text-[12px] p-2 pb-10 font-serif mb-4 ${hoverEffect}`}
                        style={{backgroundImage: `url(${banner3.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}
                    >
                        <p className="font-bold text-[15px] pl-1 tracking-[-1px]">Support & Care</p>
                <p className="text-[9px] p-1">From digital skills to job readiness, we prepare individuals and families with the 
                knowledge to thrive.</p>
                <Link href="https://calendly.com/hypervsolutions/15-minute-meeting" target="_blank" rel="noreferer"
                    className={`text-center text-black bg-white w-35 h-10 p-2 
                    rounded-full flex justify-around items-center text-[10px] mt-3 ${hoverEffectBtn}`}
                >Get Support
                    <Image src={Frame24} className="w-fit rounded-full border-1 border-black" alt="arrow-icon"/>
                </Link> 
            </div>                      
          </div>
          <div className="flex flex-col h-[330px] w-[147px]">
            <div style={{backgroundImage: `url(${banner4.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} 
            className={`text-white h-[230px] w-[147px] flex flex-col justify-around ${hoverEffect}`}>
                <div>
                <p className="font-bold font-serif text-[18px] p-3 pb-0 mt-3">Gallery of Change</p>
                <p className="text-[9px] pl-4 p-2">See the moments that inspire us- stories of resilience, growth, and transformation</p>
                </div>
                <Link href="#" target="_blank" rel="noreferer"
                    className={`text-center text-black bg-white w-30 h-10 p-2 ml-3 
                    rounded-full flex justify-around items-center text-[10px] mt-3 ${hoverEffectBtn}`}
                >View Stories
                    <Image src={Frame25} className="w-fit rounded-full border-1 border-black" alt="arrow-icon"/>
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