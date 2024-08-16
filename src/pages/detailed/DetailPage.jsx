import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Review from "../../components/detail-compo/Review";
import Recommendation from "../../components/common-components/Recommendation";
import Delivery from "../../components/detail-compo/Delivery";
import Filter from "../../components/common-components/Filter";

const DetailPage = () => {
  const { id } = useParams();
  const book = useLoaderData();

  const [quantity, setQuantity] = useState(1);

  const counter = () => {};

  if (!book) {
    return <div>Loading...</div>;
  }
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <>
      <Filter />
      <div className="ml-4 mr-4 mt-3  ">
        <div className="grid grid-cols-12 ">
          <div className="grid col-span-12 justify-center items-center lg:ml-12 lg:row-span-12 lg:row-start-1 lg:mt-12 lg:justify-start lg:col-span-5">
            <img
              width={150}
              src={book.img}
              alt="{book.name}"
              className="md:w-[15rem] lg:w-[20rem]"
            />
          </div>
          <div className="grid col-span-12 lg:col-span-5 lg:mt-11 mt-7 ">
            <h1 className="text-2xl font-semibold break-words">{book.name}</h1>
          </div>
          <div className="p-[0.19rem] rounded-md  col-start-1   max-w-fit grid col-span-10 lg:col-span-4 lg:col-start-6 lg:row-start-2">
            <span className="">{book.genre}</span>
          </div>
          <div className="grid col-span-8 col-start-1 lg:col-span-3 lg:row-start-3">
            <p className="text-lg font-medium whitespace-normal">
              {book.author_name}
            </p>
          </div>
          <div className="grid col-span-4 col-start-10 sm:col-start-11 lg:col-span-3 lg:row-start-3">
            <p className="text-xl font-semibold">${book.price}</p>
          </div>
          <div className=" col-span-12 mt-6 lg:col-span-6">
            <span>Description</span>
            <div className="grid col-span-12 ">
              {showFullDescription ? (
                <p>
                  {book.description}
                  <button
                    className="text-blue-500 hover:text-blue-900"
                    onClick={() => setShowFullDescription(false)}
                  >
                    Less
                  </button>
                </p>
              ) : (
                <p className="">
                  {book.description.substring(0, 120)} ...
                  <button
                    className="text-blue-500 hover:text-blue-900"
                    onClick={() => setShowFullDescription(true)}
                  >
                    More
                  </button>
                </p>
              )}
            </div>
            <Delivery />
            <div class="grid grid-cols-12 place-items-center mt-8">
              <button
                onClick={counter}
                class="col-span-6 border border-black p-2 rounded"
              >
                Add to Cart
              </button>
              <button class="border-black border col-span-6 p-2 rounded ">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <Recommendation />
        <div className="mt-8 mb-8">
          <Review />
        </div>
      </div>
    </>
  );
};

const BookLoader = async ({ params }) => {
  try {
    const bookRes = await fetch(`/detailapi/${params.id}`);
    if (!bookRes.ok) {
      throw new Error("Failed to fetch book data");
    }
    const bookData = await bookRes.json();
    return bookData;
  } catch (error) {
    console.error("Error fetching book data:", error);
    return null;
  }
};

export { DetailPage as default, BookLoader };
