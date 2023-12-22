import Category from "../../components/Category/Category";

import HeroSlider from "../../components/Hero/HeroSlider";
import TrendingProducts from "../../components/TrendingProducts/TrendingProducts";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <HeroSlider />
      <TrendingProducts />
      <Category />
    </div>
  );
};

export default Home;
