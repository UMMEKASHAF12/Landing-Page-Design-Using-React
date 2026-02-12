import React from "react";
import awardImage from "../assets/award.png"; // file path check karo

const AwardsSection = () => {
  return (
    <section className="bg-white min-h-screen flex justify-center items-center mt-25">
      <img
        src={awardImage}
        alt="Awards"
        className="rounded-xl w-full max-w-5xl"
      />
    </section>
  );
};

export default AwardsSection;


