import react from "react";
import Filter from "../components/common-components/Filter";
import Trending from "../components/home components/Trending";
import Bestseller from "../components/home components/Bestseller";
import MoreBooks from "../components/common-components/MoreBooks";

const DramaPage = () => {
  return (
    <div>
      <Filter />
      <Trending dataUrl={"api/trendingDrama"} />
      <Bestseller dataUrl={"api/bestsellerDrama"} />
      <MoreBooks dataUrl={"api/moreDrama"} />
    </div>
  );
};

export default DramaPage;
