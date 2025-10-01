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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function HomeSecond() {
  return (
    <section className="w-full bg-white px-4 md:px-8 pt-16 pb-10">
      {/* Top Content */}
      <div className="grid grid-cols-1 md:flex md:justify-between gap-10 items-center">
        {/* Left Content */}
        <div>
          <p className="text-md font-semibold text-[#DA4628] tracking-widest mb-6 flex items-center">
            <Image src={line} alt="horizontal-line" className="h-1 w-5 md:w-15"/>
            &nbsp;&nbsp;
            WELCOME TO KUSHI GATEWAY,
          </p>
          <div className="md:ml-19">
          <h1 className="hidden md:block text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6 font-sans">
            Transforming lives with <br /> second chances and <br /> teamwork.
          </h1>
          <h1 className="md:hidden text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6 font-sans">
            Transforming lives with second chances and teamwork.
          </h1>
          <p className="text-gray-600 mb-10 max-w-xl">
            At Kushi Gateway, we believe in second chances, fresh beginnings,
            and the limitless potential of individuals and businesses. As a
            transformative 501(c)(3) nonprofit organization, we are dedicated to
            empowering those who face personal, professional, or business
            challenges, offering guidance, resources, and opportunities—at no
            cost.
          </p>
          <button className="bg-[#DA4628] hover:bg-red-600 text-white px-6 py-3 rounded-full inline-flex items-center transition">
            Learn More →
          </button>
          </div>
        </div>

        {/* Right Content (Video Placeholder) */}
        <div className="relative w-full max-w-xl">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/D2suqUY_LBo"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </div>
      {/* Supporters Section (Slider) */}
      <div className="mt-16 mb-3">
        <h2 className="text-md tracking-widest font-semibold text-gray-700 flex items-center mb-6">
          <span className="md:w-1/5 pr-0">OUR SUPPORTERS</span>
          <hr className="md:w-full opacity-30"/>
        </h2>

        {/* Swiper Slider */}
        <div className="w-full">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 2 },   // small screens → 2 logos
              640: { slidesPerView: 3 },   // medium screens → 3 logos
              1024: { slidesPerView: 4 },  // large screens → 5 logos
            }}
          >
            {/* Slides */}
            <SwiperSlide>
              <Image src={supporter1} alt="Freevance Logo" width={170} height={60} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={supporter2} alt="Kushi Gateway Logo" width={170} height={60} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={supporter3} alt="Nova Home Care Logo" width={170} height={60} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={supporter4} alt="Ultra Aura Logo" width={170} height={60} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={supporter5} alt="Nova Jobs Logo" width={170} height={80} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
