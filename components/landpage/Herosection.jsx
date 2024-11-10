"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
} from "swiper/modules";

import { FaAngleRight } from "react-icons/fa6";
import { MdPlayArrow } from "react-icons/md";

import ReactDOMServer from "react-dom/server";
import Link from "next/link";
import Button from "../Button";

export default function Herosection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <section className="relative">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            const iconHTML = ReactDOMServer.renderToString(<FaAngleRight />);
            return `<span class="${className} custom-pagination-icon">${iconHTML}</span>`;
          },
        }}
        scrollbar={{ draggable: true }}
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <div className="bg-[url('/images/confetti.jpg')] bg-cover bg-no-repeat min-h-[600px] flex relative ">
            <div className="absolute h-full w-full bg-[rgba(0,0,0,0.4)]"></div>

            <div className="text-center z-40 flex flex-col items-center justify-center h-full w-full">
            <div className="three-d-text ssn"></div>
            <div className="three-d-text magic"></div>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/images/solar-arr1.jpg')] bg-cover bg-no-repeat min-h-[600px] flex relative ">
            <div className="absolute h-full w-full bg-[rgba(0,0,0,0.4)]"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/images/solar-arr2.jpeg')] bg-cover bg-no-repeat min-h-[600px] flex relative ">
            <div className="absolute h-full w-full bg-[rgba(0,0,0,0.4)]"></div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Text content */}
      <div className="absolute top-0  px-16 flex flex-col justify-center h-[550px] container py-4 max-w-[1300px]">
        {activeIndex === 0 && (
          <div className="fade-in-out z-10 max-w-[800px] space-y-7">
            <h1 className="font-extrabold text-white text-5xl leading-[1.38]">
              Baltai Energy's SSN aims to transform the
              <span className="bg-gradient bg-clip-text text-transparent">
                {" "}ENERGY{" "}
              </span>
              landscape in Nigeria
            </h1>
            <p className="font-medium text-white opacity-80 text-xl max-w-[700px] leading-[1.38]">
              Our goal is to transform the energy landscape in Nigeria by
              providing comprehensive off-grid SOLAR POWER solutions to at least
              500,000 households.
            </p>

            <div className="space-x-4 pt-12">
              <Link href={"/"}>
                <Button classNames={"bg-gradient text-white"}>
                  Become An Ambassador
                </Button>
              </Link>
              <Link href={"/"}>
                <Button classNames={"bg-white"}>Apply For SSN</Button>
              </Link>
            </div>
          </div>
        )}

        {activeIndex === 1 && (
          <div className="fade-in-out z-10 max-w-[850px] space-y-7">
            <h1 className="font-extrabold text-white text-5xl leading-[1.38]">
              Embrace uninterrupted power supply with cutting edge solar
              equipment via our SSN Programme.
            </h1>
            <p className="font-medium text-white opacity-80 text-xl max-w-[700px] leading-[1.38]">
              Easy Finance, Reduced cost, Easy Application.
            </p>

            <div className="space-x-4 pt-12">
              <Link href={"/"}>
                <Button classNames={"bg-gradient text-white"}>
                  Make The Switch
                </Button>
              </Link>
            </div>
          </div>
        )}

        {activeIndex === 2 && (
          <div className="fade-in-out z-10 max-w-[850px] space-y-7">
            <h1 className="font-extrabold text-white text-5xl leading-[1.38]">
              Get Low Interest Solar Financing for your home or business for up
              to 5years on our SSN Programme
            </h1>
            <p className="font-medium text-white opacity-80 text-xl  max-w-[700px] flex items-center gap-1">
              <span className="text-white opacity-80">
                <MdPlayArrow />
              </span>
              Get financed within 48hrs
            </p>
            <p className="font-medium text-white opacity-80 text-xl max-w-[700px] flex items-center gap-1">
              <span className="text-white opacity-80">
                <MdPlayArrow />
              </span>
              Enjoy Low interest rates
            </p>
            <p className="font-medium text-white opacity-80 text-xl max-w-[700px] flex items-center gap-1">
              <span className="text-white opacity-80">
                <MdPlayArrow />
              </span>
              Experience No hassle Application
            </p>

            <div className="space-x-4 pt-7">
              <Link href={"/"}>
                <Button classNames={"bg-gradient text-white"}>
                  Get Finance Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
