import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600">About Us</h1>
          <p className="mt-4 text-lg text-gray-700">
            Baltai Energy is a Solar Systems Solutions Provider based in Lagos, Nigeria; with an international team and
            exclusive partnerships with top European and Asian Engineering OEMs. We provide Off-grid and On-grid
            solutions that cover every capacity or scale: from residential, to commercial, to industrial projects.
          </p>
        </div>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            With a commitment to quality and service delivery, we strive to provide solutions-based services tailored to
            the specific needs of our clients. Our equipment is designed and manufactured with cutting-edge solar
            technology and innovative features that not only solve energy problems but also provide great experiences
            that elevate the utility for every use case.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-800">Core Values and Business Philosophy</h2>
          <div className="mt-6 space-y-8">
            <div>
              <h3 className="text-2xl font-medium text-blue-600">Solutions-Based Approach</h3>
              <p className="mt-2 text-gray-700">
              For every energy challenge, our aim is to provide permanent solutions that guarantee our clients peace of mind. 
              Taking great care to deliver the best, most efficient, tailor- made installations that meet the clients specific energy needs. 
              We take no short-cuts nor do we proffer palliative 
              solutions that do nothing to solve the underlying problem. We take a forensic approach to access you energy requirements and provide the 
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-blue-600">Customer Focus</h3>
              <p className="mt-2 text-gray-700">
                <span>“Great Service = Happy Customer = Happy Company.”</span><br></br>
                The above MO relays an ideal that guides our approach to business, and client relations. 
                Clients are our most important asset and we value the trust they place in us, in welcoming us into their homes through our services. 
                Hence, across our organization, from the simplest of workers to top C-Level executives, 
                the impetus of what works in the best interest of “the customer” is a daily inquiry.  
                We serve and take joy in serving and this keeps the wheels of business turning..
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-blue-600">Commitment to Integrity</h3>
              <p className="mt-2 text-gray-700">
              We believe this to be the foundation upon which strong institutions are built. Transparency,
               honesty and consistency in all our communications and actions are values we embrace through our services. 
               Only with this can we hope to expect trust and loyalty from clients and employees alike for relationships that stand te test of time.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-blue-600">Collaboration</h3>
              <p className="mt-2 text-gray-700">
              We collaborate with the best organizations within their given fields in business and service delivery. 
              Collaborations and Partnerships are the catalysts that make good companies great and the building 
              blocks that help perpetuate long term sustainability in any enterprise.
               Baltai Energy are in business for the long haul as we strive to deliver the best solutions and 
               services to our teeming customers wherever they are..
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-blue-600">Energy Sustainability</h3>
              <p className="mt-2 text-gray-700">
              As the use of fossil fuels continues to impact the environment, we are actively contributing
               towards the proliferation of renewable energy sources within our areas of influence via our services.
                The switch to Solar Energy we believe, is an ideal solution to protecting our environment
                 while delivering much needed power from the Sun to the people. It’s clean, it’s efficient, and inexhaustible,
               and it represents our best bet for long term energy sustainability across the continents of the world.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-800">Our Team</h2>
          <p className="mt-4 text-gray-700">
          We are progressive, seasoned professionals from the engineering, technology and business 
          domains with strong passion for excellence, and a desire to make significant impact in the
           proliferation of renewable energy sources for a greener and cleaner future for Nigeria, and the world at large. Meet the Team behind the dream
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {[
              { name: "Alamu Azeez", role: "Team Member" },
              { name: "Povilas Klimas", role: "Team Member" },
              { name: "Toyosi Jinadu", role: "Team Member" },
            ].map((member, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow rounded-lg flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
