"use client";
import Image from "next/image";
import videoImage from "../../public/Assets/Welcome_sec_img.png";
import supporter1 from "../../public/Assets/supporters-logo1.png";
import supporter2 from "../../public/Assets/supporters-logo2.png";
import supporter3 from "../../public/Assets/supporters-logo3.png";
import supporter4 from "../../public/Assets/supporters-logo4.png";
import supporter5 from "../../public/Assets/supporters-logo5.png";
import playButton from "../../public/Assets/Welcome_sec_iocn.png";
import line from "../../public/Assets/line.png";

export default function HomeSecond() {
  return (
    <section className="w-full bg-white px-6 md:px-16 lg:px-14 pt-16 pb-10">
      {/* Top Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <p className="text-sm font-semibold text-[#DA4628] tracking-wide mb-3 flex items-center">
            <Image src={line} alt="horizontal-line" className="h-1 w-0 md:w-12"/>
            &nbsp;
            WELCOME TO KUSHI GATEWAY,
          </p>
          <div className="md:ml-14">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-6">
            Transforming lives with <br /> second chances and <br /> teamwork.
          </h1>
          <p className="text-gray-600 mb-6 max-w-lg">
            At Kushi Gateway, we believe in second chances, fresh beginnings,
            and the limitless potential of individuals and businesses. As a
            transformative 501(c)(3) nonprofit organization, we are dedicated to
            empowering those who face personal, professional, or business
            challenges, offering guidance, resources, and opportunities—at no
            cost.
          </p>
          <button className="bg-[#DA4628] hover:bg-red-600 text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 transition">
            Learn More
            <span className="text-lg">→</span>
          </button>
          </div>
        </div>

        {/* Right Content (Video Placeholder) */}
        <div className="relative">
          <Image
            src={videoImage} // Replace with your image path
            alt="Hero Section Image"
            width={500}
            height={400}
            className="rounded-2xl object-cover"
          />        
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white rounded-full p-4 md:mr-20 shadow-md hover:scale-105 transition">
              <Image src={playButton} alt="play-button" className="w-12 h-12 object-cover"/>
            </button>
          </div>
        </div>
      </div>

      {/* Supporters Section */}
      <div className="mt-16">
        <h2 className="text-sm font-semibold text-gray-700 flex items-center mb-6">
          <span className="md:w-1/7 pr-0">OUR SUPPORTERS</span>
           <hr className="md:w-full opacity-30"/>
        </h2>
        <div className="flex flex-wrap justify-center md:ustify-between items-center gap-4">
          <Image
            src={supporter1} // supporter logo
            alt="Freevance Logo"
            width={170}
            height={60}
          />
          <Image
            src={supporter2}
            alt="Kushi Gateway Logo"
            width={170}
            height={60}
          />
          <Image
            src={supporter3}
            alt="Nova Home Care Logo"
            width={170}
            height={60}
          />
          <Image
            src={supporter4}
            alt="Ultra Aura Logo"
            width={170}
            height={60}
          />
          <Image
            src={supporter5}
            alt="Nova Jobs Logo"
            width={170}
            height={80}
          />
        </div>
      </div>
    </section>
  );
}
