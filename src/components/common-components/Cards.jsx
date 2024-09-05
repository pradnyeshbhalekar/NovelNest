import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cards = ({ id, name, author_name, img, genre, price }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div key={id} className="flex flex-col items-center focus:outline-none">
      <Link to={`/books/${id}`}>
        <div className="bg-white focus:outline-none p-1">
          <div className="bg-white w-[10rem] h-[10rem] md:w-[12rem] md:h-[12rem] lg:w-[15rem] lg:h-[15rem] border-none flex items-center justify-center outline-none">
            <div className="flex justify-center items-center">
              <img
                className="h-[7rem] md:h-[10rem] lg:h-[12rem] hover:scale-125 transform transition-transform duration-500 ease-in-out overflow-hidden"
                src={img}
                alt={name}
              />
            </div>
          </div>
          <div className="mt-2 w-full text-center">
            <span className="block w-[10rem] md:w-[12rem] lg:w-[15rem] truncate hover:scale-105 transform transition-transform duration-300 ease-in-out overflow-hidden">
              {name}
            </span>
          </div>
          <div className="font-light text-center hover:scale-105 transform transition-transform duration-300 ease-in-out overflow-hidden pb-3">
            {author_name}
          </div>
        </div>
      </Link>

      <div className="flex justify-center items-center">
        {quantity === 0 ? (
          <button
            onClick={() => setQuantity(1)}
            className="mt-8 border w-[8rem] sm:w-[8.25rem] h-[3rem] outline-none bg-slate-300 rounded-lg transition-transform hover:-translate-y-1 duration-300 flex justify-center items-center"
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center">
            <button
              onClick={() => setQuantity(Math.max(0, quantity - 1))}
              className="mt-8 border w-8 outline-none bg-slate-300 rounded-lg transition-transform hover:-translate-y-1 duration-300"
            >
              -
            </button>
            <span className="px-2">{quantity}</span>
            <button
              onClick={() => setQuantity(Math.min(12, quantity + 1))}
              className="mt-8 border w-8 outline-none bg-slate-300 rounded-lg transition-transform hover:-translate-y-1 duration-300"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
