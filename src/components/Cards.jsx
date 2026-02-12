import React from "react";
import card  from "../assets/card.png";

const Cards = () => {

    return (
        <section className="bg-white flex justify-center items-start py-20 mt-16">
            <img
                src={card}
                alt="Cards"
                className="rounded-xl w-500 h-auto -mt-20"
            />
        </section>


    );
};

export default Cards;