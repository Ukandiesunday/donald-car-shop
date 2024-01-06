import HeroSlider from "../../components/Hero/HeroSlider";
import "./Home.css";
import Products from "../../pages/Products/Products";
import Reviews from "../../components/Reviews/Reviews";
import Subscription from "../../components/Subscription";

const Home = () => {
  return (
    <div className="home">
      <HeroSlider />
      <Products />
      <Reviews />
      <Subscription />
    </div>
  );
};

export default Home;
