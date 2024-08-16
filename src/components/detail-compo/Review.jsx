import React from "react";

const Review = () => {
  return (
    <div>
      <div className="mt-6">
        <span>Reviews</span>
      </div>
      <div>
        <input
          type="text"
          className="border w-full border-b-black border-t-transparent border-r-transparent border-l-transparent outline-none "
          placeholder="Write a review"
          name="enter text"
          id=""
        />
      </div>
    </div>
  );
};

export default Review;
