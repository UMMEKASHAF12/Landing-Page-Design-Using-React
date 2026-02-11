import React from "react";

const Promise = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <p className="text-sm text-teal-500 font-semibold mb-3">
            Tool built for people.
          </p>

          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Whether you want to edit your Google Docs, 
            access live music, or collaborate via Zoom.
          </h1>

          <p className="text-gray-600 mb-6">
            CollabHub 360 integrates with tools you already use and love.
          </p>

          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md transition duration-300">
            Get started free
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            alt="team"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
};

export default Promise;
