import Showcase from "@/components/Showcase";
import Image from "next/image";

const Team = () => {
  const title = "Our Team";
  const content = "Meet the team behind the dream";

  return (
    <>
      <Showcase
        title={title}
        content={content}
        img={"team.svg"}
        imgVisibility={"opacity-40"}
      />

      <section className="max-w-[800px] mx-auto px-7 my-16">
      <div className="flex flex-col items-center ">
          <Image
            src={"/images/team-small.svg"}
            alt=""
            width={100}
            height={100}
            className=" max-w-[70px]"
            layout="responsive"
          />
          <h1 className="text-xl mt-6 mb-4 font-semibold text-transparent bg-clip-text bg-gradient">
          Meet the Team behind the dream
          </h1>
        </div>

        <div className="">
          <p className="text-lg text-center opacity-85">
          We are progressive, seasoned professionals from the engineering, technology and business domains with strong passion for excellence, and a desire to make significant impact in the proliferation of renewable energy sources for a greener and cleaner future for Nigeria, and the world at large.
          </p>
        </div>
      </section>
    </>
  );
};

export default Team;
