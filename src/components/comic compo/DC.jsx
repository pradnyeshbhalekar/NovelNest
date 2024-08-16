import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import DcImg from "../../assets/img/dc.png";
import Cards from "../common-components/Cards";

const DC = ({ dataUrl }) => {
  const [dcComics, setDcComics] = useState([]);
  useEffect(() => {
    const fetchComics = async () => {
      try {
        const res = await fetch(dataUrl);
        const data = await res.json();
        setDcComics(data);
      } catch (error) {
        console.log("There was an error fetching the data", error);
      }
    };
    fetchComics();
  }, [dataUrl]);
  return (
    <div>
      <div className="flex mt-[4rem] mb-4 ml-4">
        <img src={DcImg} alt="Dc image" className="w-[8rem]" />
        <h1 className="font-lobster font-semibold text-2xl sm:text-3xl md:text-4xl ml-10 mt-8">
          DC Legends: Iconic Heroes, <br />
          Dark Knights, and Epic Tales
        </h1>
      </div>
      <div className="bg-dcblue w-full min-h-screen flex items-center justify-center ">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">
          {dcComics.slice(0, 5).map((book) => (
            <Cards key={book.id} {...book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DC;
