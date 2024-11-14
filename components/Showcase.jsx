import Image from "next/image";

const Showcase = ({ title, content, img, imgVisibility }) => {
  return (
    <section className="px-7 bg-thinGrey h-[300px]">
      <div className="flex py-4 h-full max-w-[1300px] mx-auto items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-goldorange md:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-xl max-w-full md:max-w-[650px] opacity-85">
            {content}
          </p>
        </div>

        <div className="self-end md:self-center">
          <Image
            src={`/images/${img}`}
            alt=""
            width={100}
            height={100}
            className={`${imgVisibility} max-w-[250px]`}
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
