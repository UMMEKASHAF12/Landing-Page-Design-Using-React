import React from "react";
import testimonials from "../assets/testimonials.png";

const Testimonials = () => {

    return (
        <section className="bg-white flex justify-center items-start py-20 mt-16">
            <img
                src={testimonials}
                alt="Testimonials"
                className="rounded-xl w-215 h-auto -mt-20"
            />
        </section>


    );
};

export default Testimonials;
