import Showcase from "@/components/showcase";
import Image from "next/image";
import { MdPlayArrow } from "react-icons/md";

const Glossary = () => {
  const title = "Energy Glossary";
  const content =
    "This glossary provides a comprehensive overview of energy-related terms and concepts.";
  return (
    <>
      <Showcase
        title={title}
        content={content}
        img={"open-book.svg"}
        imgVisibility={"opacity-25"}
      />
 

      <section className="px-7 max-w-[800px] mx-auto my-16">
        <div className="flex flex-col items-center ">
          <Image
            src={"/images/light-bulb-11.svg"}
            alt=""
            width={100}
            height={100}
            className=" max-w-[70px]"
            layout="responsive"
          />
          <h1 className="text-xl mt-6 mb-4 font-semibold text-transparent bg-clip-text bg-gradient">
            Energy Key Terms Explained
          </h1>
        </div>

        <main className="mb-20">
          <div className="my-7 pl-7">
            <p className="text-lg opacity-85">
              {" "}
              <span className="font-bold">
                {" "}
                <MdPlayArrow className="-mt-1 -ml-7 mr-1 inline-flex" /> Carbon
                Footprint:
              </span>{" "}
              The total amount of carbon dioxide and other greenhouse gas
              emissions for which an individual or organization is responsible,
              often expressed annually.
            </p>
          </div>

          <div className="my-7 pl-7">
            <p className="text-lg opacity-85">
              {" "}
              <span className="font-bold">
                {" "}
                <MdPlayArrow className="-mt-1 -ml-7 mr-1 inline-flex " />{" "}
                Climate Change:
              </span>{" "}
              Long-term alterations in temperature, precipitation, and other
              atmospheric patterns, largely influenced by human activities,
              especially the burning of fossil fuels.
            </p>
          </div>

          <div className="my-7 pl-7">
            <p className="text-lg opacity-85">
              {" "}
              <span className="font-bold">
                {" "}
                <MdPlayArrow className="-mt-1 -ml-7 mr-1 inline-flex " />{" "}
                Electricity Tariff (Energy Charge Rate):
              </span>{" "}
              The set, fixed price per kilowatt-hour that is locked in by your
              electricity provider or distribution company for an unspecified
              period. Subject to change based on prevailing economic factors.
            </p>
          </div>
          <div className="my-7 pl-7">
            <p className="text-lg opacity-85">
              {" "}
              <span className="font-bold">
                {" "}
                <MdPlayArrow className="-mt-1 -ml-7 mr-1 inline-flex " /> Fixed
                Rate:{" "}
              </span>{" "}
              The prevailing electricity pricing structure where the rate per
              kWh remains constant for a specified contract length.
            </p>
          </div>
          <div className="my-7 pl-7">
            <p className="text-lg opacity-85">
              {" "}
              <span className="font-bold">
                {" "}
                <MdPlayArrow className="-mt-1 -ml-7 mr-1 inline-flex " /> HVAC:
              </span>{" "}
              Heating, Ventilation, and Air Conditioning systems that regulate
              indoor temperatures and air quality.
            </p>
          </div>

          <div className="my-7 pl-7">
            <p className="text-lg opacity-85">
              {" "}
              <span className="font-bold">
                {" "}
                <MdPlayArrow className="-mt-1 -ml-7 mr-1 inline-flex " />{" "}
                Kilowatt (kW):
              </span>{" "}
              A measure of electrical power equal to 1,000 watts, representing
              the rate of energy consumption or production.
            </p>
          </div>

          <div className="my-7 pl-7">
            <p className="text-lg opacity-85">
              {" "}
              <span className="font-bold">
                {" "}
                <MdPlayArrow className="-mt-1 -ml-7 mr-1 inline-flex " />{" "}
                Off-peak:
              </span>{" "}
              Times when energy demand is lower, often during late nights or
              early mornings.
            </p>
          </div>

          <div className="my-7 pl-7">
            <p className="text-lg opacity-85">
              {" "}
              <span className="font-bold">
                {" "}
                <MdPlayArrow className="-mt-1 -ml-7 mr-1 inline-flex " />{" "}
                On-peak:
              </span>{" "}
              Times of high energy demand, typically during early evenings.
            </p>
          </div>

          <div className="my-7 pl-7">
            <p className="text-lg opacity-85">
              {" "}
              <span className="font-bold">
                {" "}
                <MdPlayArrow className="-mt-1 -ml-7 mr-1 inline-flex " />{" "}
                Renewable Energy Certificate (REC):
              </span>{" "}
              A certificate representing proof that one megawatt-hour (MWh) of
              electricity was generated from a renewable energy resource.
            </p>
          </div>

          <div className="my-7 pl-7">
            <p className="text-lg opacity-85">
              {" "}
              <span className="font-bold">
                {" "}
                <MdPlayArrow className="-mt-1 -ml-7 mr-1 inline-flex " />{" "}
                Prepaid Meter (Smart Meter):
              </span>{" "}
              An advanced meter that records electricity consumption in
              intervals and communicates this information to the utility for
              monitoring and billing.
            </p>
          </div>

          <div className="my-7 pl-7">
            <p className="text-lg opacity-85">
              {" "}
              <span className="font-bold">
                {" "}
                <MdPlayArrow className="-mt-1 -ml-7 mr-1 inline-flex " />{" "}
                Transmission and Distribution Service Provider (TDSP): GENCO’s
                and DISCO’s.
              </span>{" "}
              Entities responsible for maintaining and operating the
              infrastructure that transmits and distributes electricity to
              consumers. GENCOS are DOSCOs are
            </p>
          </div>

          <div className="my-7 pl-7">
            <p className="text-lg opacity-85">
              {" "}
              <span className="font-bold">
                {" "}
                <MdPlayArrow className="-mt-1 -ml-7 mr-1 inline-flex " />{" "}
                Utility:{" "}
              </span>{" "}
              A company or entity that provides essential services, such as
              electricity, water, or gas, to consumers.
            </p>
          </div>

          <div className="my-7 pl-7">
            <p className="text-lg opacity-85">
              {" "}
              <span className="font-bold">
                {" "}
                <MdPlayArrow className="-mt-1 -ml-7 mr-1 inline-flex " /> Wind
                Energy:{" "}
              </span>{" "}
              Power derived from the kinetic energy of wind, typically harnessed
              using wind turbines. One of the forms of renewable energy: Solar,
              Wind, Hydrogen,
            </p>
          </div>

          <div className="my-7 pl-7">
            <p className="text-lg opacity-85">
              {" "}
              <span className="font-bold">
                {" "}
                <MdPlayArrow className="-mt-1 -ml-7 mr-1 inline-flex " /> Solar
                Inverter:{" "}
              </span>{" "}
              Part of a Solar Energy System. It is a device that takes direct
              current (DC) from the Sun which is generated by a Solar Panel, and
              converts it to Alternating Current (AC) which goes into homes.
            </p>
          </div>

          <div className="my-7 pl-7">
            <p className="text-lg opacity-85">
              {" "}
              <span className="font-bold">
                {" "}
                <MdPlayArrow className="-mt-1 -ml-7 mr-1 inline-flex " /> Solar
                Panel:{" "}
              </span>{" "}
              Solar Panel: A device that converts sunlight energy into
              electricity using photovoltaic cells.
            </p>
          </div>

          <div className="my-7 pl-7">
            <p className="text-lg opacity-85">
              {" "}
              <span className="font-bold">
                {" "}
                <MdPlayArrow className="-mt-1 -ml-7 mr-1 inline-flex " /> ESS:{" "}
              </span>{" "}
              Emergency Storage System refers to batteries used to store energy
              in Solar Power Systems.
            </p>
          </div>

          <div className="my-7 pl-7">
            <p className="text-lg opacity-85">
              {" "}
              <span className="font-bold">
                {" "}
                <MdPlayArrow className="-mt-1 -ml-7 mr-1 inline-flex " />{" "}
                Off-Grid:{" "}
              </span>{" "}
              A power system that is not connected to the National Grid hence,
              entirely independent of supply from local utility companies or
              electricity suppliers meaning complete reliance on battery storage
              systems..
            </p>
          </div>

          <div className="my-7 pl-7">
            <p className="text-lg opacity-85">
              {" "}
              <span className="font-bold">
                {" "}
                <MdPlayArrow className="-mt-1 -ml-7 mr-1 inline-flex " />{" "}
                On-Grid:{" "}
              </span>{" "}
              A power system that is able to utilise power supply from the
              National Grid while also having it’s own source of power.
            </p>
          </div>
        </main>
      </section>
    </>
  );
};

export default Glossary;
