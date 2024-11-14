import Image from "next/image"

const Partners = () => {
  return (
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
  )
}

export default Partners