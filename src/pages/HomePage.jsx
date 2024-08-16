import React from "react";
import Trending from "../components/home components/Trending";
import Filter from "../components/common-components/Filter";
import Bestseller from "../components/home components/Bestseller";
import TwistedSeries from "../components/home components/TwistedSeries";
import ColleenHoover from "../components/home components/ColleenHoover";

const HomePage = () => {
  return (
    <>
      <Filter />
      <Trending dataUrl="api/trending/" />
      <Bestseller dataUrl="api/bestsellers" />
      <TwistedSeries dataUrl="api/twisted-series" />
      <ColleenHoover dataUrl="api/colleen-hoover" />
    </>
  );
};

export default HomePage;
