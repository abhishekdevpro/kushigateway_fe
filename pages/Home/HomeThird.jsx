"use client";
import Image from "next/image";
import videoImage from "../../public/Assets/Welcome_sec_img.png";
import supporter1 from "../../public/Assets/supporters-logo1.png";
import supporter2 from "../../public/Assets/supporters-logo2.png";
import supporter3 from "../../public/Assets/supporters-logo3.png";
import supporter4 from "../../public/Assets/supporters-logo4.png";
import supporter5 from "../../public/Assets/supporters-logo5.png";
import childImage from "../../public/Assets/Services_sec_img.png";
import icon1 from "../../public/Assets/Services_sec_iocn1.png";
import icon2 from "../../public/Assets/Services_sec_iocn2.png";
import line from "../../public/Assets/line.png";

const features = [
    {
      id: 1,
      icon: icon1, // replace with actual icon
      title: "Every action transforms lives.",
      description:
        "Small, thoughtful actions can create powerful ripple effects. Each step we take brings lasting change and builds a foundation of hope for those in need.",
    },
    {
      id: 2,
      icon: icon2, // replace with actual icon
      title: "We make a positive impact, step by step.",
      description:
        "With compassion and dedication, we move forward one challenge at a time. Our community stands together, making progress and celebrating every victory—no matter how small.",
    },
  ];

const hoverEffect = "transition-all duration-300 transform hover:scale-105";

export default function HomeThird() {
  return (
    <section className="w-full bg-[#FDF1E7] px-4 md:px-8 py-4 py-16">
      {/* Top Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-start md:flex md:justify-between">
        {/* Left Content */}
        <div>
          <p className="text-[12px] md:text-md font-semibold text-[#F4A261] tracking-widest mb-3 flex md:items-center">
            <Image src={line} alt="horizontal-line" className="h-1 w-0 md:w-15"/>
            &nbsp;
            TRANSFORMING LIVES WITH EVERY STEP
          </p>
          <div className="ml-4 md:ml-17 text-left">
          <h1 className="hidden md:block text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-6">
            Support Services for a <br/>Brighter Future
          </h1>
          <h1 className="md:hidden text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-6">
            Support Services for A Brighter Future
          </h1>
          <p className="text-gray-600 mb-6 max-w-xl">
            Our mission is to provide a lifeline to individuals who feel stuck and businesses 
            encountering unforeseen obstacles. We specialize in creating tailored solutions through retraining programs, 
            business reinvention opportunities, and mental health support, ensuring that every journey with us is unique 
            and impactful.
          </p>
          <p className="text-gray-600 mb-10 md:mb-6 max-w-xl">
            Whether you're seeking personal growth, career advancement, or a fresh start for your business, 
            Kushi Gateway is here to help you overcome limitations and unlock your full potential. Empowered by 
            Hyper V Solutions, an AI-driven business incubator at the University of South Carolina, we leverage 
            cutting-edge technology and innovative strategies to make our support effective, efficient, and sustainable.
          </p>
        <div className="max-w-4xl space-y-8 md:w-[450px] md:mx-8">
        {features.map((feature) => (
          <div key={feature.id} className="flex items-start gap-4">
            {/* Icon */}
            <div className="flex-shrink-0">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={40}
                height={40}
                className="w-8 h-8"
              />
            </div>

            {/* Text Content */}
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-900 md:mb-1">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
        </div>
          </div>
        </div>

        {/* Right Content (Video Placeholder) */}
        <div className="relative place-items-center md:ml-8 mt-6 md:mt-0">
          <Image
            src={childImage} // Replace with your image path
            alt="section 3 Image"
            width={500}
            height={500}
            className={`rounded-2xl ${hoverEffect}`}
          />    
        </div>
      </div>
    </section>
  );
}