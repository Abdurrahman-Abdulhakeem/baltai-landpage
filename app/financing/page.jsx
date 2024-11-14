import Showcase from "@/components/showcase";

const Financing = () => {
  const title = "Financing";
  const content =
    "We are happy to provide great payment options to finance the switch to Solar Power.";

  return (
    <>
      <Showcase
        title={title}
        content={content}
        img={"finance.svg"}
        imgVisibility={"opacity-60"}
      />

      <main className="px-7 max-w-[800px] mx-auto my-16">
        <div className="">
          <p className="text-lg opacity-85">
            As an extension of our services to meet our clients at their point
            of need, with the goal to improve energy supply, and achieve energy
            sufficiency, we are happy to provide great payment options to
            finance the switch to Solar Power.
            <br /> <br />
            If you are a proud business or homeowner who has done a holistic
            analysis on the real cost saving benefits of investing in a solar
            solution, we can make your transition quick and painless with a
            finance plan that’s just right for you. We've made the process as
            seamless as possible.
            <br /> <br />
            Go through the various home and business solutions available and
            proceed by choosing any of the solutions most suited to your
            situation to get started.
          </p>
        </div>
      </main>
    </>
  );
};

export default Financing;
