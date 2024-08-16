import React from "react";
import Cards from "../common-components/Cards";
import { useState, useEffect } from "react";

const TwistedSeries = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchbooks = async () => {
      try {
        const res = await fetch("/api/twisted-series");
        const data = await res.json();
        setSeries(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchbooks();
  }, []);

  return (
    <div className="mt-10">
      <h1 className="font-lobster font-semibold text-5xl sm:text-6xl md:text-7xl ml-4">
        TWISTED SERIES BY ANA HUANG!
      </h1>
      <div className="bg-gray-200 w-full min-h-auto flex items-center justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 p-6">
          {series.map((book) => (
            <Cards key={book.id} {...book} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <button className="mt-8 border w-auto sm:w-[16rem] h-[3rem] outline-none bg-slate-300 rounded-lg transition-transform hover:-translate-y-1 duration-300">
          Add to collection to the cart
        </button>
      </div>
    </div>
  );
};

export default TwistedSeries;
