import Image from "next/image"

const Partners = () => {
  return (
    <marquee>
    <div className="flex items-center gap-12 justify-between">
      <Image
        src={"/images/fox.png"}
        width={100}
        height={100}
        alt=""
        className="max-h-[50px] md:max-h-[80px]"
        layout="responsive"
      />
      <Image
        src={"/images/ktech.png"}
        width={100}
        height={100}
        alt=""
        className="max-h-[50px] md:max-h-[80px]"
        layout="responsive"
      />
      <Image
        src={"/images/opticom.png"}
        width={100}
        height={100}
        alt=""
        className="max-h-[50px] md:max-h-[80px]"
        layout="responsive"
        // className="max-h-[50px] md:h-[100px] md:w-[200px]"
      />
      <Image
        src={"/images/payhippo.png"}
        width={100}
        height={100}
        alt=""
        className="max-h-[50px] md:max-h-[80px]"
        layout="responsive"
      />
      <Image
        src={"/images/amerisolar.png"}
        width={100}
        height={100}
        alt=""
        className="max-h-[50px] md:max-h-[80px]"
        layout="responsive"
      />
      <Image
        src={"/images/4th-day-decree.png"}
        width={100}
        height={100}
        alt=""
        className="max-h-[50px] md:max-h-[80px]"
        layout="responsive"
      />
      <Image
        src={"/images/sunrise.png"}
        width={100}
        height={100}
        alt=""
        className="max-h-[50px] md:max-h-[80px]"
        layout="responsive"
      />
    </div>
  </marquee>
  )
}

export default Partners