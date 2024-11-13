import Image from "next/image";
import Link from "next/link";

import {
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
} from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-greyGradient text-lightgrey font-normal px-7 pt-24 pb-14">
      <div className="grid grid-cols-1 lg:grid-cols-4 max-w-[1200px] mx-auto mb-14">
        <div>
          <Link href="/">
            <Image
              src={"/images/baltai-logo-white.png"}
              className=" max-w-[200px] xl:max-w-[250px]"
              height={200}
              width={100}
              alt="Baltai Logo"
              layout="responsive"
            />
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-14 col-span-1 mr-0 lg:col-span-2 lg:mr-10">
          <div className="space-y-3 text-[15px] mt-12 lg:mt-0">
            <h1 className="text-lg mb-4">Company</h1>

            <Link
              href="/"
              className="block opacity-85 w-fit hover:text-goldorange transition"
            >
              About Us
            </Link>
            <Link
              href="/"
              className="block opacity-85 w-fit hover:text-goldorange transition"
            >
              Our Team
            </Link>
            <Link
              href="/"
              className="block opacity-85 w-fit hover:text-goldorange transition"
            >
              Contact Us
            </Link>
            <Link
              href="/"
              className="block opacity-85 w-fit hover:text-goldorange transition"
            >
              Blogs
            </Link>
            <Link
              href="/faqs"
              className="block opacity-85 w-fit hover:text-goldorange transition"
            >
              FAQ's
            </Link>
          </div>
          <div className="space-y-3 text-[15px]">
            <h1 className="text-lg mb-4">Quick Links</h1>

            <Link
              href="/"
              className="block opacity-85 w-fit hover:text-goldorange transition"
            >
              Apply for SSN
            </Link>
            <Link
              href="/"
              className="block opacity-85 w-fit hover:text-goldorange transition"
            >
              Partnerships
            </Link>
            <Link
              href="/"
              className="block opacity-85 w-fit hover:text-goldorange transition"
            >
              Financing
            </Link>
            <Link
              href="/"
              className="block opacity-85 w-fit hover:text-goldorange transition"
            >
              Energy Glossary
            </Link>
            <Link
              href="/"
              className="block opacity-85 w-fit hover:text-goldorange transition"
            >
              Energy Calculator
            </Link>
          </div>
          <div className="space-y-3 text-[15px] ">
            <h1 className="text-lg mb-4">Services</h1>

            <p className="opacity-85">Solar Panels</p>
            <p className="opacity-85">Inverter + Battery</p>
            <p className="opacity-85">
              Cables, Accessories and Mounting Apparatus
            </p>
            <p className="opacity-85">Installation</p>
            <p className="opacity-85">After Sales Service</p>
          </div>
        </div>

        <div className="space-y-3 mt-12 lg:mt-0">
          <h1 className="text-lg mb-4">Get in Touch</h1>

          <p className="opacity-85 text-[15px] flex items-start gap-1.5">
           <span><FaLocationDot className="text-xl mt-1" /></span> 652 Lagos-Abeokuta Express Way, Alagbado, Adura bus stop, Lagos.
          </p>

          <p className="opacity-85 text-[15px] flex items-center gap-1.5 hover:text-goldorange transition">
            <IoIosMail className="text-xl"/>
            <Link href={"mailto:info@baltaienergy.com"}>info@baltaienergy.com</Link>
          </p>
          <p className="opacity-85 text-[15px] flex items-center gap-1.5 hover:text-goldorange transition">
           <IoIosMail className="text-xl"/>
            <Link href={"mailto:baltaienergy@gmail.com"}>baltaienergy@gmail.com</Link>
          </p>
        </div>
      </div>

      <div className="flex justify-center mb-10 items-center gap-5 text-lightgrey">
        <Link
          href="https://web.facebook.com/baltaienergy?_rdc=1&_rdr#"
          target="_blank"
        >
          <FaFacebookF className="text-xl hover:text-goldorange transition" />
        </Link>
        <Link href="/" target="_blank">
          <FaXTwitter className="text-xl hover:text-goldorange transition" />
        </Link>
        <Link
          href="https://www.youtube.com/channel/UChBCFzPzAgfcV1W4lprqVkw/about"
          target="_blank"
        >
          <FaYoutube className="text-xl hover:text-goldorange transition" />
        </Link>
        <Link href="https://www.instagram.com/baltaienergy/" target="_blank">
          <FaInstagram className="text-xl hover:text-goldorange transition" />
        </Link>
        <Link
          href="https://www.linkedin.com/company/baltai-energy?originalSubdomain=ng"
          target="_blank"
        >
          <FaLinkedinIn className="text-xl hover:text-goldorange transition" />
        </Link>
      </div>

      <hr />

      <div className="flex justify-between items-center pt-6 text-sm text-lightgrey">
        <p className="opacity-85">
          &copy; {date.getFullYear()} Baltai Energy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
