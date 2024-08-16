import react from "react";
import Filter from "../components/common-components/Filter";
import Trending from "../components/home components/Trending";
import Bestseller from "../components/home components/Bestseller";
import MoreBooks from "../components/common-components/MoreBooks";

const FantasyPage = () => {
  return (
    <div>
      <Filter />
      <Trending dataUrl={"/api/trendingFantasy"} />
      <Bestseller dataUrl={"api/bestsellerFantasy"} />
      <MoreBooks dataUrl={"api/moreFantasy"} />
    </div>
  );
};

export default FantasyPage;
