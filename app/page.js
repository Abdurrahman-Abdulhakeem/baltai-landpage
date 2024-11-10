"use client"
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

import { PiSolarPanelLight } from "react-icons/pi";
import { RiBatteryChargeLine } from "react-icons/ri";
import { LuCable } from "react-icons/lu";
import { GrServices, GrUserExpert } from "react-icons/gr";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { MdOutlineHighQuality } from "react-icons/md";

import Herosection from "@/components/landpage/Herosection";



export default function Home() {
  return (
    <>
      <Navbar />

      
      <Herosection />

<div className="">
<PiSolarPanelLight className="text-9xl text-goldorange" />
<RiBatteryChargeLine className="text-9xl text-goldorange" />
<LuCable className="text-9xl text-goldorange" />
<GrServices className="text-9xl text-goldorange" />
<SiAmazonsimpleemailservice className="text-9xl text-goldorange" />
<GrUserExpert  className="text-9xl text-goldorange" />
<MdOutlineHighQuality  className="text-9xl text-goldorange" />



</div>

      <div className="relative flex justify-center mb-36 max-w-[1200px] mx-auto">
        {/* <div className="absolute left-0 right-0 bg-white shadow-md p-7 rounded-lg flex items-center justify-between -mt-[70px]">
          <Image src={"/images/con.png"} width={100} height={100} alt="" />
          <Image src={"/images/ce.png"} width={100} height={100} alt="" />
          <Image src={"/images/ul.png"} width={100} height={100} alt="" />
          <Image src={"/images/iec.png"} width={100} height={100} alt="" />
          <Image src={"/images/iso.png"} width={100} height={100} alt="" />
          <Image src={"/images/roh.png"} width={100} height={100} alt="" />
        </div> */}
      </div>

      <section className="text-center my-20 max-w-[700px] mx-auto">
        <h1 className="font-bold text-3xl mb-14 pt-10 relative after:content-[''] after:absolute after:left-[35%] after:-bottom-5 after:right[35%] after:w-[30%] after:h-1 after:bg-green">
          One Of A Kind Products.
        </h1>

        <p className="font-medium">
          We deploy best-in-class products that comply with EU standards,
          ensuring top quality and reliability. Our tailored solutions meet both
          commercial and domestic capacity needs effortlessly. Our unique
          panel-inverter-battery combinations are easy to install and feature an
          aesthetically pleasing industrial finish, providing both functionality
          and style.
        </p>
      </section>

      <section className=" pb-24 max-w-[1200px] mx-auto">
        <h1 className="text-center text-2xl font-semibold mb-11">
          We cover every capacity need which are...
        </h1>
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
          <div className="bg-white rounded-md shadow-md w-[350px] h-[440px]">
            <Image
              src={"/images/midScale.jpg"}
              alt="large scale"
              width={100}
              height={100}
              layout="responsive"
              className="rounded-t-md max-h-[178px]"
            />
            <div className="py-10 px-7">
              <h1 className="mb-5 text-xl font-medium">
                Mid-Capacity Solutions
              </h1>
              <p className="opacity-75">
                Ideal for medium-sized businesses seeking efficient,
                cost-effective power solutions for daily operations.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-md shadow-md w-[350px] h-[440px]">
            <Image
              src={"/images/smallScale.jpg"}
              alt="large scale"
              width={100}
              height={100}
              layout="responsive"
              className="rounded-t-md max-h-[178px]"
            />
            <div className="py-10 px-7">
              <h1 className="mb-5 text-xl font-medium">
                Small-Capacity Solutions
              </h1>
              <p className="opacity-75">
                Customized for homeowners and micro businesses aiming to reduce
                energy costs and promote a healthier environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-darkgrey text-white  ">
        <div className="flex justify-center flex-row-reverse items-center gap-16 py-24 max-w-[1200px] mx-auto">
          <div className="w-1/2 relative">
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

          <div className="w-1/2">
            <h1 className="font-bold text-5xl leading-snug mb-6">
              Commitments To Energy Efficiency.
            </h1>
            <p className="font-normal text-lg mb-8 opacity-90">
              Baltai Energy provides high-quality solar solutions backed by
              top-notch equipment, professional expertise, and tailored designs
              to meet your unique energy needs.
            </p>

            <p className="font-normal text-lg mb-8 opacity-90">
              Baltai Energy helps you embrace uninterrupted power supply with
              cutting edge solar equipment via our SSN Programme.
            </p>

            <p className="font-normal text-lg mb-8 opacity-90">
              Baltai Energy offers complete solutions which include the
              equipment and its installation. Solar Panels, Inverter + Battery,
              Cables, Accessories, Mounting Apparatus, Installation and After
              Sales Service.
            </p>

            <p className="font-normal text-lg"></p>
            <Link href={"/"}>
              <Button classNames={"bg-gradient"}>Learn More</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="my-28 relative">
        <h1 className="text-3xl text-center font-bold relative after:content-[''] after:absolute after:left-[45%] after:-bottom-5 after:right[45%] after:w-[10%] after:h-1 after:bg-green">Testimonials</h1>
        <div className="flex items-center justify-between gap-5 my-20 container mx-auto max-w-[1200px]">

          <div className="bg-gradient p-7 text-white rounded-lg min-w-[400px]">
            <span className="flex items-center justify-start gap-5">
              <Image
                src={"/images/globe.jpg"}
                width={100}
                height={100}
                className="rounded-full"
                alt=""
              />
              <h3 className="text-xl">Fawas Babatunde O.</h3>
            </span>
            <p className="my-5 leading-relaxed font-medium text-sm">
            Our factory’s energy needs are now met efficiently, and we’ve seen significant savings on operational costs. The installation process was smooth, and they ensured everything was running perfectly before they left.
            </p>
          </div>
          <div className="bg-gradient p-7 text-white rounded-lg min-w-[400px]">
            <span className="flex items-center justify-start gap-5">
              <Image
                src={"/images/globe.jpg"}
                width={100}
                height={100}
                className="rounded-full"
                alt=""
              />
              <h3 className="text-xl">Mary Oluwaseun J.</h3>
            </span>
            <p className="my-5 leading-relaxed font-medium text-sm">
            As a growing business, we needed a reliable power solution that wouldn’t break the bank. Baltai Energy’s mid-capacity setup has been a game-changer. It’s perfectly suited to our needs.
            </p>
          </div>
          <div className="bg-gradient p-7 text-white rounded-lg min-w-[400px]">
            <span className="flex items-center justify-start gap-5">
              <Image
                src={"/images/globe.jpg"}
                width={100}
                height={100}
                className="rounded-full"
                alt=""
              />
              <h3 className="text-xl">Samuel Adedapo A.</h3>
            </span>
            <p className="my-5 leading-relaxed font-medium text-sm">
            The installation was quick, and the team was incredibly respectful and efficient. Now, we’re saving money each month, and we feel great knowing our power is greener and more sustainable.
            </p>
          </div>
         
        </div>
      </section>

      
    </>
  );
}
