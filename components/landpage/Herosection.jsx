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
import Button from "../ui/Button";

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
          <div className="bg-[url('/images/confetti.jpg')] bg-cover bg-center bg-no-repeat min-h-[600px] flex relative ">
            <div className="absolute h-full w-full bg-[rgba(0,0,0,0.4)]"></div>

            {/* <div className="text-center z-40 flex flex-col items-center justify-center h-full w-full">
              <div className="three-d-text ss before:-left-[100px] before:absolute"></div>
              <div className="three-d-text maic"></div>
            </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/images/solar-arr1.jpg')] bg-cover bg-center bg-no-repeat min-h-[600px] flex relative ">
            <div className="absolute h-full w-full bg-[rgba(0,0,0,0.4)]"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/images/solar-arr2.jpeg')] bg-cover bg-center bg-no-repeat min-h-[600px] flex relative ">
            <div className="absolute h-full w-full bg-[rgba(0,0,0,0.4)]"></div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Text content */}
      <div className="absolute top-0 px-4 flex flex-col justify-center h-[550px] container py-4 max-w-[1300px] md:px-16">
        {activeIndex === 0 && (
          <div className="fade-in-out z-10 max-w-full text-center md:text-left md:max-w-[800px] space-y-7">
            <h1 className=" text-4xl font-bold text-white leading-[1.25] md:font-extrabold md:text-5xl  md:leading-tight ">
              Baltai Energy's SSN aims to transform the
              <span className="bg-gradient bg-clip-text text-transparent">
                {" "}
                ENERGY{" "}
              </span>
              landscape in Nigeria
            </h1>
            <p className="font-normal text-white opacity-80 text-lg md:font-bold md:text-xl max-w-full md:max-w-[700px] leading-[1.38]">
              Our goal is to transform the energy landscape in Nigeria by
              providing comprehensive off-grid SOLAR POWER solutions to at least
              500,000 households.
            </p>

            <div className="space-x-4 pt-7 md:pt-12">
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
          <div className="fade-in-out z-10 max-w-full text-center md:text-left md:max-w-[850px] space-y-7">
            <h1 className="text-4xl font-bold text-white leading-[1.25] md:font-extrabold md:text-5xl  md:leading-tight">
              Embrace uninterrupted power supply with cutting edge solar
              equipment via our SSN Programme.
            </h1>
            <p className="font-medium text-white opacity-80 text-lg md:font-bold md:text-xl max-w-full md:max-w-[700px] leading-[1.38]">
              Easy Finance, Reduced cost, Easy Application.
            </p>

            <div className="space-x-4 pt-7 md:pt-12">
              <Link href={"/"}>
                <Button classNames={"bg-gradient text-white"}>
                  Make The Switch
                </Button>
              </Link>
            </div>
          </div>
        )}

        {activeIndex === 2 && (
          <div className="fade-in-out z-10 max-w-full text-center md:text-left md:max-w-[800px] space-y-7">
            <h1 className="text-3xl font-bold text-white leading-[1.25] md:font-extrabold md:text-4xl  md:leading-tight">
              Get Low Interest Solar Financing for your home or business for up
              to 5 years on our SSN Programme
            </h1>

            <div>
              <p className="font-medium text-white opacity-80 text-lg md:text-xl max-w-full md:max-w-[700px] flex items-center gap-1">
                <span className="text-white opacity-80">
                  <MdPlayArrow />
                </span>
                Get financed within 48hrs
              </p>
              <p className="font-medium text-white opacity-80 text-lg md:text-xl max-w-full md:max-w-[700px] flex items-center gap-1">
                <span className="text-white opacity-80">
                  <MdPlayArrow />
                </span>
                Enjoy Low interest rates
              </p>
              <p className="font-medium text-white opacity-80 text-lg md:text-xl max-w-full md:max-w-[700px] flex items-center gap-1">
                <span className="text-white opacity-80">
                  <MdPlayArrow />
                </span>
                Experience No hassle Application
              </p>
            </div>

            <div className="space-x-4 pt-7 md:pt-12">
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
