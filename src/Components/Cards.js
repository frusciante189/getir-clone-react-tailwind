import React, { useState, useEffect } from "react";
import data from "../API/Cards.json";

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(data);
  }, []);

  return (
    <div className="container mx-auto grid md:grid-cols-3 grid-cols-1 md:gap-x-4 gap-y-4 pt-14">
      {cards &&
        cards.map((card, index) => {
          return (
            <div className="bg-white p-14 rounded-lg shadow-md flex flex-col items-center text-center">
              <img
                src={card.image}
                alt=""
                className="w-[150px] h-[150px] mb-6"
              />
              <h6 className="text-lg font-semibold text-getir-secondary">
                {card.title}
              </h6>
              <p className="mt-2 text-sm text-gray-700">{card.description}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Cards;
