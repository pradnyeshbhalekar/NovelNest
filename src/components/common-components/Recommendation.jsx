import React from "react";
import { useState, useEffect } from "react";
import Cards from "./Cards";

const Recommendation = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchbooks = async () => {
      try {
        const res = await fetch(`/detailapi`);
        const data = await res.json();
        setSeries(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchbooks();
  }, []);
  return (
    <div className=" mt-10">
      <h1 className="uppercase font-lobster text-3xl ml-12  font-semibold fonts">
        recommendation
      </h1>
      <div className="bg-gray-200 w-full min-h-auto flex items-center justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">
          {series.slice(0, 9).map((book) => (
            <Cards key={book.id} {...book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
