"use client";
import Button from "@/components/ui/Button";

import Image from "next/image";
import Link from "next/link";

import { PiSolarPanelLight } from "react-icons/pi";
import { RiBatteryChargeLine, RiDoubleQuotesL } from "react-icons/ri";
import { LuCable } from "react-icons/lu";
import { GrServices, GrUserExpert } from "react-icons/gr";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import {
  MdOutlineHighQuality,
  MdOutlineEnergySavingsLeaf,
} from "react-icons/md";

import Herosection from "@/components/landpage/Herosection";

export default function Home() {
  return (
    <>
      <Herosection />

      {/* <div className="relative flex justify-center mb-36 max-w-[1200px] mx-auto">
        <div className="absolute left-0 right-0 bg-white shadow-md p-7 rounded-lg flex items-center justify-between -mt-[70px]">
          <Image src={"/images/ce.png"} width={100} height={100} alt="" />
          <Image src={"/images/ul.png"} width={100} height={100} alt="" />
          <Image src={"/images/iec.png"} width={100} height={100} alt="" />
          <Image src={"/images/iso.png"} width={100} height={100} alt="" />
          <Image src={"/images/roh.png"} width={100} height={100} alt="" />
        </div>
      </div> */}

      <section className="my-24  mx-auto flex gap-20 items-start justify-between max-w-[1200px] px-7 lg:my-36 lg:mb-36">
        <div className="hidden lg:flex lg:w-1/2">
          <div className="flex gap-7">
            <Image
              src={"/images/aside.jpg"}
              width={100}
              height={100}
              alt=""
              layout="responsive"
              className="-mb-28 mt-28"
            />
            <Image
              src={"/images/aside-2.jpg"}
              width={100}
              height={100}
              alt=""
              layout="responsive"
            />
          </div>
        </div>
        <aside className="w-full text-center lg:text-left lg:w-1/2">
          <h1 className="font-bold font-geist text-3xl  -mt-3 mb-7 leading-tight md:text-5xl">
            Global <br /> Baltai Energy
          </h1>

          <p className="opacity-60 font-normal text-base leading-[1.7] md:text-xl">
            We deploy best-in-class products that comply with EU standards,
            ensuring top quality and reliability. Our tailored solutions meet
            both commercial and domestic capacity needs effortlessly. <br />{" "}
            <br /> Our unique panel-inverter-battery combinations are easy to
            install and feature an aesthetically pleasing industrial finish,
            providing both functionality and style. <br /> <br /> We offer
            complete solutions which include the equipment and its installation.
            Solar Panels, Inverter + Battery, Cables, Accessories, Mounting
            Apparatus, Installation and After Sales Service.
          </p>
        </aside>
      </section>

      <section className="my-14 bg-darkgrey text-white py-20 px-7">
        <div className="max-w-[1200px] mx-auto">
          <h3 className="font-medium text-center md:text-left">OUR SERVICE</h3>
          <h1 className="font-medium my-10 text-2xl md:text-4xl">
            We Cover Every Capacity Need
          </h1>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="border-[3px] border-yellow rounded-md p-6 space-y-6 max-w-full md:max-w-[280px]">
              <PiSolarPanelLight className="text-5xl text-white" />

              <h1 className="text-xl">SOLAR PANEL</h1>

              <p className="opacity-85">
                Tailored for large-scale projects like factories, government
                initiatives, and estate developments. Our experienced team
                ensures seamless installation, backed by a solid warranty.
              </p>
            </div>
            <div className="border-[3px] border-goldorange rounded-md p-6 space-y-6 max-w-full md:max-w-[280px]">
              <RiBatteryChargeLine className="text-5xl text-white" />

              <h1 className="text-xl">Inverter + Battery</h1>

              <p className="opacity-85">
                Tailored for large-scale projects like factories, government
                initiatives, and estate developments. Our experienced team
                ensures seamless installation, backed by a solid warranty.
              </p>
            </div>
            <div className="border-[3px] border-orange-500 rounded-md p-6 space-y-6 max-w-full md:max-w-[280px]">
              <LuCable className="text-5xl text-white" />

              <h1 className="text-xl">Cables</h1>

              <p className="opacity-85">
                Tailored for large-scale projects like factories, government
                initiatives, and estate developments. Our experienced team
                ensures seamless installation, backed by a solid warranty.
              </p>
            </div>
            <div className="border-[3px] border-gray-400 rounded-md p-6 space-y-6 max-w-full md:max-w-[280px]">
              <GrServices className="text-5xl text-white" />

              <h1 className="text-xl">Installation</h1>

              <p className="opacity-85">
                Tailored for large-scale projects like factories, government
                initiatives, and estate developments. Our experienced team
                ensures seamless installation, backed by a solid warranty.
              </p>
            </div>
            <div className="border-[3px] border-gray-600 rounded-md p-6 space-y-6 max-w-full md:max-w-[280px]">
              <SiAmazonsimpleemailservice className="text-5xl text-white" />

              <h1 className="text-xl">After Sales Service</h1>

              <p className="opacity-85">
                Tailored for large-scale projects like factories, government
                initiatives, and estate developments. Our experienced team
                ensures seamless installation, backed by a solid warranty.
              </p>
            </div>
            <div className="border-[3px] border-gray-400  rounded-md p-6 space-y-6 max-w-full md:max-w-[280px]">
              <GrUserExpert className="text-5xl text-white" />

              <h1 className="text-xl">Professional Expertise</h1>

              <p className="opacity-85">
                Tailored for large-scale projects like factories, government
                initiatives, and estate developments. Our experienced team
                ensures seamless installation, backed by a solid warranty.
              </p>
            </div>
            <div className="border-[3px] border-gray-700  rounded-md p-6 space-y-6 max-w-full md:max-w-[280px]">
              <MdOutlineHighQuality className="text-5xl text-white" />

              <h1 className="text-xl">High Quality Equipment</h1>

              <p className="opacity-85">
                Tailored for large-scale projects like factories, government
                initiatives, and estate developments. Our experienced team
                ensures seamless installation, backed by a solid warranty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className=" pb-24 max-w-[1200px] mx-auto">
        
        <div className="flex justify-between items-center gap-14">
          <div className="bg-white rounded-md shadow-md w-[350px] h-[440px]">
            <Image
              src={"/images/largeScale.jpg"}
              alt="large scale"
              width={100}
              height={100}
              layout="responsive"
              className="rounded-t-md max-h-[178px]"
            />
            <div className="py-10 px-7">
              <h1 className="mb-5 text-xl font-medium">
                High-Capacity Solutions
              </h1>
              <p className="opacity-75">
                Tailored for large-scale projects like factories, government
                initiatives, and estate developments. Our experienced team
                ensures seamless installation, backed by a solid warranty.
              </p>
            </div>
          </div>
      
        </div>
      </section> */}

      <section className="px-7">
        <div className="flex justify-start items-start gap-16 py-14  max-w-[1200px] mx-auto flex-col md:justify-center lg:items-center lg:flex-row-reverse">
          <div className="w-full lg:w-1/2 relative">
            <span className="absolute bg-goldorange h-full w-full rounded-lg top-3 -left-3"></span>
            <Image
              src={"/images/ppl.jpeg"}
              width={100}
              height={100}
              alt=""
              className="relative rounded-lg"
              layout="responsive"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h1 className="font-bold relative font-geist text-3xl md:text-5xl leading-snug mb-6">
              Commitments To Energy Efficiency.
              <span className="absolute top-0 -z-10 -right-4">
                {" "}
                <MdOutlineEnergySavingsLeaf className="text-goldorange text-5xl md:text-8xl" />{" "}
              </span>
            </h1>
            <p className="font-normal text-lg mb-8 opacity-90">
              <span className="font-bold">High-Capacity Solutions:</span>{" "}
              Tailored for large-scale projects like factories, government
              initiatives, and estate developments. Our experienced team ensures
              seamless installation, backed by a solid warranty.
            </p>

            <p className="font-normal text-lg mb-8 opacity-90">
              <span className="font-bold">Mid-Capacity Solutions:</span> Ideal
              for medium-sized businesses seeking efficient, cost-effective
              power solutions for daily operations.
            </p>

            <p className="font-normal text-lg mb-8 opacity-90">
              <span className="font-bold">Small-Capacity Solutions:</span>{" "}
              Customized for homeowners and micro businesses aiming to reduce
              energy costs and promote a healthier environment.
            </p>

            <p className="font-normal text-lg"></p>
            <Link href={"/"}>
              <Button classNames={"bg-gradient text-white"}>Learn More</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="my-12">
        <marquee>
          <div className="flex items-center gap-12 justify-between">
            <Image
              src={"/images/fox-ess-logo.png"}
              width={100}
              height={100}
              alt=""
              className=" md:h-[100px] md:w-[200px]"
            />
            <Image
              src={"/images/uba-logo.svg"}
              width={100}
              height={100}
              alt=""
              className="md:h-[100px] md:w-[200px]"
            />
            <Image
              src={"/images/opticom-logo.png"}
              width={100}
              height={100}
              alt=""
              className="md:h-[100px] md:w-[200px]"
            />
            <Image
              src={"/images/opticom-logo.png"}
              width={100}
              height={100}
              alt=""
            />
            <Image
              src={"/images/opticom-logo.png"}
              width={100}
              height={100}
              alt=""
            />
          </div>
        </marquee>
      </section>

      <section className="my-28 relative px-7">
        <h1 className="text-3xl text-center font-bold relative after:content-[''] after:absolute after:left-[45%] after:-bottom-5 after:right[45%] after:w-[10%] after:h-1 after:bg-gradient">
          Testimonials
        </h1>
        <div className="flex items-center flex-wrap justify-center gap-5 my-20 container mx-auto max-w-[1200px]">
          <div className="bg-darkgrey p-7 text-white rounded-lg max-w-[380px] h-[285px] text-center">
            <RiDoubleQuotesL className="text-6xl text-goldorange w-full" />
            <p className="my-4 leading-relaxed font-medium text-sm">
              Our factory’s energy needs are now met efficiently, and we’ve seen
              significant savings on operational costs. The installation process
              was smooth, and they ensured everything was running perfectly
              before they left.
            </p>
            <p className="font-semibold opacity-75">Fortnight Ltd</p>
          </div>
          <div className="bg-darkgrey p-7 text-white rounded-lg max-w-[380px] h-[285px] text-center">
            <RiDoubleQuotesL className="text-6xl text-goldorange w-full" />
            <p className="my-4 leading-relaxed font-medium text-sm">
              As a growing business, we needed a reliable power solution that
              wouldn’t break the bank. Baltai Energy’s mid-capacity setup has
              been a game-changer. It’s perfectly suited to our needs.
            </p>
            <p className="font-semibold opacity-75">MicPlaza Ltd</p>
          </div>
          <div className="bg-darkgrey p-7 text-white rounded-lg max-w-[380px] h-[285px] text-center">
            <RiDoubleQuotesL className="text-6xl text-goldorange w-full" />
            <p className="my-4 leading-relaxed font-medium text-sm">
              The installation was quick, and the team was incredibly respectful
              and efficient. Now, we’re saving money each month, and we feel
              great knowing our power is greener and more sustainable.
            </p>
            <p className="font-semibold opacity-75">Mary Smith.</p>
          </div>
        </div>
      </section>
    </>
  );
}

// Baltai Energy provides high-quality solar solutions backed by
// top-notch equipment, professional expertise, and tailored designs
// to meet your unique energy needs.
// Baltai Energy helps you embrace uninterrupted power supply with
// cutting edge solar equipment via our SSN Programme.
