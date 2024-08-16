import Filter from "../components/common-components/Filter";
import Bestseller from "../components/home components/Bestseller";
import Trending from "../components/home components/Trending";
import MoreBooks from "../components/common-components/MoreBooks";

const DarkComedyPage = () => {
  return (
    <div>
      <Filter />
      <Trending dataUrl={"/api/trendingDarkBook"} />
      <Bestseller dataUrl={"/api/bestsellerDarkcomedy"} />
      <MoreBooks dataUrl={"api/moreDarkComedy"} />
    </div>
  );
};

export default DarkComedyPage;
