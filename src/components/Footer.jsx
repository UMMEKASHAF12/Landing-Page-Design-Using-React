import React from "react";
import footer from "../assets/Footer.png";

const Footer = () => {

    return (
        <section className="bg-white flex justify-center items-start  mt-12">
            <img
                src={footer}
                alt="Footer"
                className="rounded-xl w-415 h-auto "
            />
        </section>


    );
};

export default Footer;