import React from "react";
import MarvelImg from "../../assets/img/marvel.png";
import Cards from "../common-components/Cards";
import { useState, useEffect } from "react";
import { Await } from "react-router-dom";

const Marvel = ({ dataUrl }) => {
  const [marvel, setMarvel] = useState([]);
  useEffect(() => {
    const fetchComic = async () => {
      try {
        const res = await fetch(dataUrl);
        const data = await res.json();
        setMarvel(data);
      } catch (error) {
        console.log("error fetching data", error);
      }
    };

    fetchComic();
  }, [dataUrl]);

  return (
    <>
      <div className="flex mt-[4rem] ml-4">
        <img src={MarvelImg} alt="Marvel Img" className="w-[10rem]" />
        <h1 className="font-lobster  font-semibold text-2xl sm:text-3xl md:text-4xl ml-10 mt-10">
          Marvel Universe: Heroes,<br></br> Villains, and Epic Stories
        </h1>
      </div>
      <div className="bg-marvelred w-full min-h-screen flex items-center justify-center">
        <div className="hidden lg:grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">
          {marvel.slice(0, 5).map((book) => (
            <Cards key={book.id} {...book} />
          ))}
        </div>
        <div className="grid lg:hidden grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">
          {marvel.slice(0, 6).map((book) => (
            <Cards key={book.id} {...book} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Marvel;
