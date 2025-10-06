"use client";
import Image from "next/image";
import cardImg1 from "../../public/Assets/Partnerships_iocn1.png";
import cardImg2 from "../../public/Assets/Partnerships_iocn2.png";
import cardImg3 from "../../public/Assets/Partnerships_iocn3.png";
import cardImg4 from "../../public/Assets/Partnerships_iocn4.png";
import arrowBtn from "../../public/Assets/Arrow button.png";
import leftQuote from "../../public/Assets/Lets_help_sec_testim_iocn.png";
import rightQuote from "../../public/Assets/Lets_help_sec_testim_iocn2.png";
import handsPic from "../../public/Assets/hands-photo.png";
import line from "../../public/Assets/line.png";
import Link from "next/link";

const cards = [
    {
      id: 1,
      icon: cardImg1, // replace with actual icon
      title: "Career Facilitation",
      color: "bg-[#8138E7]",
      progressBarValue: "135",
      percentage: 45,
      description:
        "Provides job assessments and coaching to match offenders with suitable roles."
    },
    {
      id: 2,
      icon: cardImg2, // replace with actual icon
      title: "Employer Engagement",
      color: "bg-[#1D3557]",
      progressBarValue: "135",
      percentage: 75,
      description:
        "Partners with companies to operate in prisons, managing inmate rehabilitation."
    },
    {
      id: 3,
      icon: cardImg4, // replace with actual icon
      title: "Skill Training",
      color: "bg-[#F4A261]",
      progressBarValue: "135",
      percentage: 45,
      description:
        "Delivers training aligned with industry standards to enhance job readiness."
    },
    {
      id: 4,
      icon: cardImg3, // replace with actual icon
      title: "Work Programme",
      color: "bg-[#14899A]",
      progressBarValue: "135",
      percentage: 75,
      description:
        "Runs prison-based work programs to build work ethics and skills."
    }
  ];

  const hoverEffect = "transition-all duration-300 transform hover:-translate-y-2";

export default function HomeFive() {
  return (
    <section className="w-full bg-white px-4 md:px-8 py-12 flex flex-col items-center">
      {/* Top Content */}
        <p className="font-semibold text-[#F4A261] tracking-wide my-5 flex justify-center items-center">
            <Image src={line} alt="horizontal-line" className="h-1 w-16"/>
            &nbsp;
            KUSHI GATEWAY
            &nbsp;
            <Image src={line} alt="horizontal-line" className="h-1 w-16"/>
          </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 my-4 font-sans ml-6 md:ml-0">
            Partnerships and Programmes
        </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:w-[1170px] text-white my-12 place-items-center">
                {cards.map((card) => (
                    <div
                        className={`flex rounded-2xl p-6 md:px-8 md:w-[570px] h-[180px] md:h-[150px] ${card.color} ${hoverEffect}`}
                    >
                        <div className="flex items-start gap-3">
                            <Image
                        src={card.icon}
                        alt={`cards_image_${card.id}`}
                        width={40}
                        height={40}
                        className="w-14 h-14 mt-1"
                        />
                            <div className="mr-3">
                                <h3 className="font-semibold text-2xl font-sans">{card.title}</h3>
                                <p className="text-[14px] md:text-[12px]">{card.description}</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                          <Link href="#">
                            <Image src={arrowBtn} alt="button" className="rounded-full w-12 md:h-auto"/>
                        </Link>                                                       
                        </div>                  
                    </div>
                ))}
            </div>
         <div className="bg-[#14899A] rounded-2xl md:w-[1170px] flex flex-col items-center text-white px-5 md:px-20 pt-10">
            <h3 className="font-semibold my-8 font-sans text-3xl">LET'S HELP THEM</h3>
            <div className="flex items-start gap-1 md:gap-10">
                <Image src={leftQuote} alt="left-quot" className="w-fit h-6"/>
                <p className="leading-loose text-center text-xl">“Together, we can create opportunities, spread hope, 
                and build a brighter tomorrow for those in need.
                Every small step makes a big difference, and your support helps transform lives.”</p>
                <Image src={rightQuote} alt="right-quot" className="w-fit h-6"/>
            </div>
            <p className="font-semibold text-xl md:text-2xl mt-6 mb-2">David Alexandar Thompson</p>
            <p className="text-md md:text-lg">There are many variations</p>
            <Image src={handsPic} alt="hands-design" className="w-1/2"/>
        </div>

    </section>
  );
}