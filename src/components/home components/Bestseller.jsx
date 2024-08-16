import React from "react";
import { useState, useEffect } from "react";
import Cards from "../common-components/Cards";

const Bestseller = ({ dataUrl }) => {
  const [bestseller, setbestseller] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    const fetchbooks = async () => {
      try {
        const res = await fetch(dataUrl);
        const data = await res.json();
        setbestseller(data);
      } catch (error) {
        console.log("Error fetching the data", error);
      }
    };
    fetchbooks();
  }, [dataUrl]);

  const toggleShow = () => {
    setShowAll(!showAll);
  };
  return (
    <div className="mt-10">
      <h1 className="font-lobster font-semibold text-5xl sm:text-6xl md:text-7xl ml-4">
        BESTSELLER!
      </h1>
      <div className="bg-gray-200 w-full min-h-auto flex items-center justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">
          {bestseller.slice(0, showAll ? bestseller.length : 5).map((book) => (
            <Cards key={book.id} {...book} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <button onClick={toggleShow} className="text-black">
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Bestseller;
