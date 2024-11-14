"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { RxHamburgerMenu } from "react-icons/rx";
import { FaAtlassian } from "react-icons/fa6";

import Menu from "./ui/Menu";
import { usePathname } from "next/navigation";

const links = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About Us" },
  { path: "", title: "Apply for SSN" },
  { path: "", title: "Solar Solutions" },
  { path: "", title: "Energy Calculator" },
  { path: "", title: "Contact Us" },
];

export const MenuLinks = [
  { path: "/", title: "About SSN" },
  { path: "/partnerships", title: "Partnership" },
  { path: "/financing", title: "Financing" },
  { path: "", title: "Blogs" },
  { path: "/faqs", title: "FAQ's" },
  { path: "/energy-glossary", title: "Energy Glossary" },
  { path: "", title: "Energy Calculator" },
  { path: "", title: "Contact Us" },
];

const Navbar = () => {
  const headerRef = useRef(null);
  const arrowRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        headerRef.current.classList.add("sticky-anim");
        arrowRef.current.style.transform = "translateY(0px)";
      } else {
        headerRef.current.classList.remove("sticky-anim");
        arrowRef.current.style.transform = "translateY(200px)";
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="sticky z-[1000] backdrop-blur-sm"
        id="header"
      >
        <div className="max-w-[1300px] flex items-center justify-between py-4 px-4 container mx-auto">
          <Link href="/">
            <Image
              src={"/images/logo.png"}
              className="max-w-[200px] md:max-w-[150px] lg:max-w-[250px]"
              height={200}
              width={100}
              alt="Baltai Logo"
              layout="responsive"
            />
          </Link>

          <nav
            className={`hidden
          items-center gap-5 xl:gap-7 justify-center bg-lightgrey mt-0 bg-transparent relative md:flex flex-row`}
          >
            {links.map((link, index) => (
              <Link
                key={index}
                href={`${link.path}`}
                className={`${
                  pathname === link.path ? "text-goldorange" : ""
                } tracking-[-0.07em] lg:tracking-normal md:text-sm lg:text-base font-medium relative transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient after:transition-all after:duration-300 after:ease-out after:hover:w-full`}
              >
                {link.title}
              </Link>
            ))}

            <Menu
              title={<RxHamburgerMenu className="text-2xl cursor-pointer" />}
              links={MenuLinks}
            />
          </nav>
          <Menu
            className={"block md:hidden"}
            innerClassName={"w-full mt-6 rounded-none"}
            title={<RxHamburgerMenu className="text-2xl cursor-pointer" />}
            links={links}
            otherLinkName="Products"
            otherLinks={MenuLinks}
          />
        </div>
      </header>

      {/* Arrow to move upwards */}
      <div>
        <Link href="#header">
          {" "}
          <FaAtlassian
            ref={arrowRef}
            className="fixed bottom-12 right-12 cursor-pointer z-[10000] text-4xl text-goldorange translate-y-52 transition"
          />
        </Link>
      </div>
      {/* Arrow to move upwards ends..*/}
    </>
  );
};

export default Navbar;


// ⌘
