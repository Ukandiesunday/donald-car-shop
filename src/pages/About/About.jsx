import prince from "../../assets/images/prince.jpg";
import team2 from "../../assets/images/user-01.png";
import team3 from "../../assets/images/user-02.png";

import "./About.css";
const About = () => {
  return (
    <div className="about">
      <div className="abt">
        <div className="abt-img">
          <h4>about us</h4>
          <img
            className="abt-img"
            src="https://cars.usnews.com/pics/size/390x290/images/Auto/custom/14033/2019_Mercedes-Benz_A-Class_19.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="about-left">
        <div className="div1">
          <p>
            <b>carStore</b> is known for excellent car sales and services. We've
            recorded great success adventures in our business for more than
            decades, our clients/customers are placed at high esteem as we meet
            their desires accordingly. Moreover our cars are best described with
            seamless and fantastic drive experience, durability and
            affordability. We are internationally recognized and licensed for
            any sort of car deals. Reliability is one of our watch-words that
            fetched us great firmness in the competitive global and local
            markets.
          </p>
          <p className="p">
            <span style={{ color: "gold" }}>
              <i className="ri-cellphone-fill"></i> HAS A QUESTION?
            </span>
            :+2348156678435
          </p>
        </div>
        <div className="div">
          <img src="slider/bmw.png" alt="" />
        </div>
      </div>
      <div className="about-right">
        <h3>Meet Our Team</h3>
        <p>Our team are always committed to your services </p>
        <div className="abt-imgs">
          <div className="abt-items">
            <img className="review-img" src={prince} alt="" />
            <p>Mr. prince</p>
            <p>Chief Engineer</p>
            <p>Cars Inspection</p>
          </div>
          <div className="abt-items">
            <img className="review-img" src={team3} alt="" />
            <i className="ri-customer-service-2-line"></i>
            <p>Miss. Aliya</p>
            <p>Customer Care officer</p>
          </div>
          <div className="abt-items">
            <img className="review-img" src={team2} alt="" />
            <p>Mr. Smith</p>
            <p>Sales and delivery manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
