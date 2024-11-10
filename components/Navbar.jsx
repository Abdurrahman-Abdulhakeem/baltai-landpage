import Image from "next/image";
import Link from "next/link";

const links = [
  { path: "/", title: "Home" },
  { path: "about", title: "About Us" },
  { path: "", title: "Apply for SSN" },
  { path: "", title: "Solar Solutions" },
  { path: "", title: "Energy Calculator" },
  { path: "", title: "Contact Us" },
];

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4 container max-w-[1300px] mx-auto">
      <Link href="/"><Image
        src={"/images/logo.png"}
        className=" max-w-[250px]"
        height={200}
        width={100}
        alt="Baltai Logo"
        layout="responsive"
      /></Link>

      <nav className="flex gap-10">
        {links.map((link, index) => (
          <Link key={index} href={`/${link.path}`} className="font-medium">
            {link.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
