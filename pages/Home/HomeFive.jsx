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
      color: "#EBD18D",
      progressBarValue: "135",
      percentage: 45,
      description:
        "At Kushi Gateway, we believe in second chances, fresh beginnings, and the limitless potential of individuals and businesses."
    },
    {
      id: 2,
      icon: cardImg2, // replace with actual icon
      title: "Employer Engagement",
      color: "#8DD4EB",
      progressBarValue: "135",
      percentage: 75,
      description:
        "At Kushi Gateway, we believe in second chances, fresh beginnings, and the limitless potential of individuals and businesses."
    },
    {
      id: 3,
      icon: cardImg4, // replace with actual icon
      title: "Skill Training",
      color: "gray",
      progressBarValue: "135",
      percentage: 45,
      description:
        "At Kushi Gateway, we believe in second chances, fresh beginnings, and the limitless potential of individuals and businesses."
    },
    {
      id: 4,
      icon: cardImg3, // replace with actual icon
      title: "Work Programmer",
      color: "pink",
      progressBarValue: "135",
      percentage: 75,
      description:
        "At Kushi Gateway, we believe in second chances, fresh beginnings, and the limitless potential of individuals and businesses."
    }
  ];

export default function HomeFive() {
  return (
    <section className="w-full bg-white px-6 md:px-16 lg:px-10 py-12 flex flex-col items-center">
      {/* Top Content */}
        <p className="font-semibold text-[#DA4628] tracking-wide my-5 flex justify-center items-center">
            <Image src={line} alt="horizontal-line" className="h-1 w-16"/>
            &nbsp;
            KUSHI GATEWAY
            &nbsp;
            <Image src={line} alt="horizontal-line" className="h-1 w-16"/>
          </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 my-4 font-sans">
            Partnerships and Programmes
        </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-[1170px] text-white my-12 place-items-center">
                {cards.map((card) => (
                    <div
                        className="flex rounded-2xl p-4 px-8 w-[570px] h-[150px] bg-[#DA4628] flex items-center"
                    >
                        <div className="flex items-start gap-3">
                            <Image
                        src={card.icon}
                        alt={`cards_image_${card.id}`}
                        width={40}
                        height={40}
                        className="w-14 h-14 mt-1"
                        />
                            <div>
                                <h3 className="font-bold text-xl font-sans">{card.title}</h3>
                                <p className="text-sm">{card.description}</p>
                            </div>
                        </div>
                        <Link href="#">
                            <Image src={arrowBtn} className="rounded-full w-18 h-12"/>
                        </Link>                                                       
                    </div>
                ))}
            </div>
         <div className="bg-[#DA4628] rounded-2xl flex flex-col items-center text-white px-20 pt-10">
            <h3 className="font-bold my-8 font-sans text-3xl">LET'S HELP THEM</h3>
            <div className="flex items-start gap-4">
                <Image src={leftQuote} alt="left-quot" className="w-fit h-6"/>
                <p className="leading-loose text-center">“Together, we can create opportunities, spread hope, 
                and build a brighter tomorrow for those in need. <br/>
                Every small step makes a big difference, and your support helps transform lives.”</p>
                <Image src={rightQuote} alt="right-quot" className="w-fit h-6"/>
            </div>
            <p className="font-bold text-xl mt-6 mb-2">David Alexandar Thompson</p>
            <p>There are many variations</p>
            <Image src={handsPic} alt="hands-design" className="w-fit"/>
        </div>

    </section>
  );
}