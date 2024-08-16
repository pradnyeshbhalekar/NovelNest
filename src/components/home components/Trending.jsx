import React from "react";
import Cards from "../common-components/Cards";
import { useState, useEffect } from "react";
const Trending = ({ dataUrl }) => {
  const [trending, setTrending] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(dataUrl);
        const data = await res.json();
        setTrending(data);
      } catch (error) {
        console.log("There was an error fetching the data", error);
      }
    };

    fetchBooks();
  }, [dataUrl]);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <div className="mt-10">
        <h1 className="font-lobster font-semibold text-5xl sm:text-6xl md:text-7xl ml-4">
          TRENDING!
        </h1>
      </div>
      <div className="bg-gray-200 w-full min-h-auto flex items-center justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">
          {trending.slice(0, showAll ? trending.length : 5).map((book) => (
            <Cards key={book.id} {...book} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <button onClick={toggleShowAll}>
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </>
  );
};

export default Trending;
