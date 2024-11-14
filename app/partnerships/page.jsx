import Partners from "./components/partners";
import Showcase from "@/components/showcase";

const Partnerships = () => {
  const title = "Partnerships";
  const content =
    "Greatness is never achieved standing alone, but as a team of entities with shared values, focused on achieving common goals.";
  return (
    <>
      <Showcase
        title={title}
        content={content}
        img={"handshake.svg"}
        imgVisibility={"opacity-60"}
      />

      <main className="px-7 max-w-[800px] mx-auto my-16">
        <div className="">
          <p className="text-lg opacity-85">
            We are partnered with leading OEM's, Finance Houses and Technical
            Teams to provide qualitative solutions to our customers. Our
            commitment stretches beyond simply delivering clean and efficient
            energy to our clients.
            <br /> <br /> We also act as partners in progress, helping
            businesses, households and other establishments thrive better in a
            challenging economy where they are empowered to participate in
            economic and domestic activities in an atmosphere of optimism and
            peace of mind.
          </p>
        </div>
      </main>

      <div className="mb-20">
        <Partners />
      </div>
    </>
  );
};

export default Partnerships;
