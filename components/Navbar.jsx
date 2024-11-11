"use client"
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { RxHamburgerMenu } from "react-icons/rx";
import Menu from "./ui/Menu";

const links = [
  { path: "/", title: "Home" },
  { path: "about", title: "About Us" },
  { path: "", title: "Apply for SSN" },
  { path: "", title: "Solar Solutions" },
  { path: "", title: "Energy Calculator" },
  { path: "", title: "Contact Us" },
];

const MenuLinks = [
  { path: "/", title: " About SSN" },
  { path: "about", title: "Partnership" },
  { path: "", title: "Financing" },
  { path: "", title: "Blogs" },
  { path: "", title: "FAQ's" },
  { path: "", title: "Energy Glossary" },
  { path: "", title: "Energy Calculator" },
  { path: "", title: "Contact Us" },
];

const Navbar = () => {
  const headerRef = useRef(null);
  const [toggleNav, setToggleNav] = useState(false);
  // const arrowRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        headerRef.current.classList.add("sticky-anim");
        // arrowRef.current.style.transform = "translateY(0px)";
      } else {
        headerRef.current.classList.remove("sticky-anim");
        // arrowRef.current.style.transform = "translateY(200px)";
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header ref={headerRef} className="sticky z-[1000] backdrop-blur-sm">
      <div className="max-w-[1300px] flex items-center justify-between py-4 px-4 container mx-auto">
        <Link href="/">
          <Image
            src={"/images/logo.png"}
            className=" max-w-[200px] xl:max-w-[250px]"
            height={200}
            width={100}
            alt="Baltai Logo"
            layout="responsive"
          />
        </Link>

        <nav
          className={` ${
            toggleNav ? "flex" : "hidden"
          } fixed w-full z-[1000] h-[400px] top-0 right-0 left-0 mt-[77px] flex-col items-center gap-7 justify-center bg-lightgrey md:mt-0 md:bg-transparent md:w-fit md:h-fit md:relative  md:flex  md:flex-row`}
        >
          {links.map((link, index) => (
            <Link
              key={index}
              href={`/${link.path}`}
              className="font-medium relative transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient after:transition-all after:duration-300 after:ease-out after:hover:w-full"
            >
              {link.title}
            </Link>
          ))}

          <Menu
            title={<RxHamburgerMenu className="text-2xl cursor-pointer" />}
            links={MenuLinks}
          />
        </nav>
        <RxHamburgerMenu
          className="block text-2xl cursor-pointer md:hidden"
          onClick={() => setToggleNav((nav) => !nav)}
        />
      </div>
    </header>
  );
};

export default Navbar;
