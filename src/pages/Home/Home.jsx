import HeroSlider from "../../components/Hero/HeroSlider";
import "./Home.css";
import Products from "../../pages/Products/Products";

const Home = () => {
  return (
    <div className="home">
      <HeroSlider />
      <Products />
    </div>
  );
};

export default Home;
