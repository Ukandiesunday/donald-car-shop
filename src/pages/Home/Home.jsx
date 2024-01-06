import HeroSlider from "../../components/Hero/HeroSlider";
import "./Home.css";
import Products from "../../pages/Products/Products";
import Reviews from "../../components/Reviews/Reviews";
import Subscription from "../../components/Subscription";
import { useRef } from "react";

const Home = () => {
  //to scroll down
  const myElementRef = useRef(null);
  const handleScrollBottom = () => {
    myElementRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="home">
      <HeroSlider handleScrollBottom={handleScrollBottom} />
      <Products myElementRef={myElementRef} />
      <Reviews />
      <Subscription />
    </div>
  );
};

export default Home;
