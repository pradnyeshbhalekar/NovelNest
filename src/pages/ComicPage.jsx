import React from "react";
import Filter from "../components/common-components/Filter";
import Trending from "../components/home components/Trending";
import Bestseller from "../components/home components/Bestseller";
import Marvel from "../components/comic compo/Marvel";
import DC from "../components/comic compo/DC";
const ComicPage = () => {
  return (
    <div>
      <Filter />
      <Trending dataUrl="/api/trendingComics" />
      <Bestseller dataUrl="/api/bestsellerComics" />
      <Marvel dataUrl="/api/marvelcomics" />
      <DC dataUrl="/api/dcComics" />
    </div>
  );
};

export default ComicPage;
