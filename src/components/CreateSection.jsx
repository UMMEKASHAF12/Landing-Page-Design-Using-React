import React from "react";
import laptopImage from "../assets/laptop.png"; // file path check karo



const CreateSection = () => {
  return (
    <section className="w-full bg-[#e6f2f3] py-16 mt-15">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Top Heading */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest text-teal-500 font-semibold uppercase">
            Built for people
          </p>
          <h2 className="text-3xl md:text-4xl font-light mt-2">
            Easy <span className="font-semibold">for beginners.</span>{" "}
            <span className="font-semibold">Powerful</span> for experts.
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-10  mb-12">
          <button className="pb-3 text-teal-600 font-medium">
            Create
          </button>
          <button className="pb-3 text-gray-400">Distribute</button>
          <button className="pb-3 text-gray-400">Collect</button>
          <button className="pb-3 text-gray-400">Analyze</button>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Create</h3>
            <h4 className="font-medium text-gray-700 mb-4">
              Advanced research software
            </h4>
            <p className="text-gray-600 leading-relaxed mb-6">
              Ask the right questions and get the answers you need with the
              most secure and collaborative survey platform on the market
              featuring powerful logic, sophisticated analytics, and built-in
              automation and integration.
            </p>

            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md transition duration-300">
              Get started for free
            </button>
          </div>

          {/* Right Image */}
          <div>
<img src={laptopImage} alt="laptop" className="rounded-lg shadow-lg w-full" />

             
                      </div>

        </div>
      </div>
    </section>
  );
};

export default CreateSection;
