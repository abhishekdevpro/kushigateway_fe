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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      id: 2,
      icon: icon2, // replace with actual icon
      title: "We make a positive impact, step by step.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
  ];

export default function HomeThird() {
  return (
    <section className="w-full bg-[#DA46281A] px-6 md:px-16 lg:px-14 py-16">
      {/* Top Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-30 items-start">
        {/* Left Content */}
        <div>
          <p className="text-sm font-semibold text-[#DA4628] tracking-wide mb-3 flex items-center">
            <Image src={line} alt="horizontal-line" className="h-1 w-12"/>
            &nbsp;
            TRANSFORMING LIVES WITH EVERY STEP
          </p>
          <div className="ml-14">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-6">
            Support Services for a <br/>Brighter Future
          </h1>
          <p className="text-gray-600 mb-6 max-w-lg">
            Our mission is to provide a lifeline to individuals who feel stuck and businesses 
            encountering unforeseen obstacles. We specialize in creating tailored solutions through retraining programs, 
            business reinvention opportunities, and mental health support, ensuring that every journey with us is unique 
            and impactful.
          </p>
          <p className="text-gray-600 mb-6 max-w-lg">
            Whether you're seeking personal growth, career advancement, or a fresh start for your business, 
            Kushi Gateway is here to help you overcome limitations and unlock your full potential. Empowered by 
            Hyper V Solutions, an AI-driven business incubator at the University of South Carolina, we leverage 
            cutting-edge technology and innovative strategies to make our support effective, efficient, and sustainable.
          </p>
        <div className="max-w-4xl space-y-8 w-[450px] mx-14">
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
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
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
        <div className="relative">
          <Image
            src={childImage} // Replace with your image path
            alt="section 3 Image"
            width={500}
            height={400}
            className="rounded-2xl object-cover"
          />    
        </div>
      </div>
    </section>
  );
}