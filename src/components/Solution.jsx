import React from "react";
import solution from "../assets/solution.png";

const Solution = () => {

    return (
        <section className="bg-white flex justify-center items-start py-20 mt-16">
            <img
                src={solution}
                alt="Solution"
                className="rounded-xl w-215 h-auto -mt-20"
            />
        </section>


    );
};

export default Solution;