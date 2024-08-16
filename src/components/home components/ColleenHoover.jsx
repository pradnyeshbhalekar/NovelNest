import React from "react";
import Cards from "../common-components/Cards";
import { useState, useEffect } from "react";

const ColleenHoover = () => {
  const [authorBook, setAuthorBook] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchbooks = async () => {
      try {
        const res = await fetch("api/colleen-hoover");
        const data = await res.json();
        setAuthorBook(data);
      } catch (error) {
        console.log("Error fetching the data", error);
      }
    };
    fetchbooks();
  }, []);

  const ToggleShowMore = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="mt-10">
      <h3 className="font-lobster font-semibold text-xl ml-4">
        Author's Spotlight
      </h3>
      <h1 className="font-lobster font-semibold text-5xl sm:text-6xl md:text-7xl ml-4">
        COLLEEN HOOVER
      </h1>
      <div className="bg-gray-200 w-full min-h-auto flex items-center justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 p-6">
          {authorBook.slice(0, showAll ? authorBook.length : 4).map((book) => (
            <Cards key={book.id} {...book} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={ToggleShowMore}
          className="text-black mt-4  outline-none "
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default ColleenHoover;
