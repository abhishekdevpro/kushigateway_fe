"use client";
import Image from "next/image";
import cardIcon1 from "../../public/Assets/Change_everything_sec_icon1.png";
import cardIcon2 from "../../public/Assets/Change_everything_sec_icon2.png";
import line from "../../public/Assets/line.png";
import sec4img from "../../public/Assets/Change_everything_sec_img.png";
import leftArrow from "../../public/Assets/slider_icon_left.png";
import rightArrow from "../../public/Assets/slider_icon_right.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useRef } from "react";

const cards = [
    {
      id: 1,
      icon: cardIcon1, // replace with actual icon
      title: "Our Vision",
      color: "#EBD18D",
      progressBarValue: "135",
      percentage: 45,
      description:
        "To create a world where everyone, regardless of their past, has the chance to thrive and succeed."
    },
    {
      id: 2,
      icon: cardIcon2, // replace with actual icon
      title: "Our Mission",
      color: "#8DD4EB",
      progressBarValue: "135",
      percentage: 75,
      description:
        "Transforming lives by providing support, education, and opportunities for prison inmates and their families."
    },
    {
      id: 3,
      icon: cardIcon1, // replace with actual icon
      title: "Our Values",
      color: "orange",
      progressBarValue: "135",
      percentage: 45,
      description:
        "Promoting dignity, empathy, and empowerment in every life we touch."
    }
  ];

export default function HomeFourth() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
  return (
    <section className="w-full bg-[#F4F4F4] px-6 md:px-16 lg:px-10 pt-12 pb-0">
      {/* Top Content */}
      <div className="flex flex-col items-center">
        <p className="font-semibold text-[#DA4628] tracking-wide mb-3 flex justify-center items-center">
            <Image src={line} alt="horizontal-line" className="h-1 w-10 md:w-16"/>
            &nbsp;
            CHANGE EVERYTHING
            &nbsp;
            <Image src={line} alt="horizontal-line" className="h-1 w-10 md:w-16"/>
          </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-sans text-center">
            We’re Here to Transform Lives and Create Second Chances
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
        {/* Left Content */}
            <div className="md:ml-14 mt-8 ">
                <Image
                src={sec4img} // Replace with your image path
                alt="section 4 Image"
                width={600}
                height={300}
                className="rounded-2xl object-cover"
            />  
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-between w-inherit md:h-[570px]">
                <p className="text-gray-600 max-w-lg mb-8 md:my-20 font-serif md:w-[500px] text-center md:text-left">
                Kushi Gateway is dedicated to changing the odds for prison inmates and their families. 
                We provide housing, education, support, advice, and advocacy. Our passion drives us to 
                make a difference and never give up.
                </p>
            <Swiper
                modules={[Navigation]}
                spaceBetween={15}
                slidesPerView={2}  // how many cards visible at once
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                loop={true}
                breakpoints={{
                // when window width is >= 0px
                0: {
                  slidesPerView: 1,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 2,
                },
              }}
                // onInit={(swiper) => {
                // // Attach custom refs to swiper navigation
                // swiper.params.navigation.prevEl = prevRef.current;
                // swiper.params.navigation.nextEl = nextRef.current;
                // swiper.navigation.init();
                // swiper.navigation.update();
                // }}
                className="relative w-full mx-5"
            >
                {cards.map((card) => (
                    <SwiperSlide key={card.id}>
                    <div
                        className={`flex flex-col justify-around gap-2 rounded-2xl border-shadow p-4 h-[300px]`}
                        style={{ backgroundColor: card.color }}
                    >
                        {/* Icon */}
                        <Image
                        src={card.icon}
                        alt={`cards_image_${card.id}`}
                        width={40}
                        height={40}
                        className="w-14 h-14"
                        />

                        <h3 className="font-bold text-xl font-serif">{card.title}</h3>
                        <p>{card.description}</p>

                        <div>
                            <span>
                        {card.progressBarValue} {card.title.slice(4)} / {card.percentage}
                        </span>

                        <div className="w-full h-1.5 bg-gray-300 rounded">
                        <div
                            className="h-1.5 bg-black rounded"
                            style={{ width: `${card.percentage}%` }}
                        />
                        </div>
                        </div>            
                    </div>
                    </SwiperSlide>
                ))}
                <div
          ref={prevRef}
          className="absolute md:left-2 top-1/2 -translate-y-1/2 z-20 cursor-pointer"
        >
          <Image
            src={leftArrow}
            alt="Prev"
            width={60}
            height={60}
            className="md:w-fit"
          />
        </div>

        {/* Custom Next Button */}
        <div
          ref={nextRef}
          className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 z-20 cursor-pointer"
        >
          <Image
            src={rightArrow}
            alt="Next"
            width={60}
            height={60}
            className="md:w-fit"
          />
        </div>
                </Swiper>
            </div>
      </div>
    </section>
  );
}