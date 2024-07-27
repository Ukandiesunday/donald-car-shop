import { Link } from "react-router-dom";
import "./Service.css";
import openCar from "../../assets/images/openCar.jpg";
import browse from "../../assets/images/browseCar.jpeg";
import howItWorks from "../../assets/images/how-it-works-2.png";
const Service = () => {
  return (
    <div>
      <div className="service-container">
        <div className="serv-first-item-cont">
          <div className="serv-desc1">
            Become <b>DonCars</b> Dealer Partner. Buy used and new cars below
            the market price and increase your margin up to 30%
            <Link className="learnMore" to={"/about"}>
              learn More
            </Link>
          </div>
          <div className="serv-img-cont">
            <img src={openCar} alt="" />
          </div>
        </div>
        <h2>How It Works</h2>

        <div className="serv-item">
          <div className="serv-second-item-cont">
            <div className="serv-img-cont2">
              <img src={browse} alt="" />
              <div className="serv-desc2">
                <i className="ri-search-line"></i>
                Browse through thousands of <br /> inspected cars. Find the one
                that
                <br />
                meets your expectations.
              </div>
            </div>
          </div>

          <div className="serv-third-item-cont">
            <div className="serv-img-cont2">
              <img src={howItWorks} alt="" />
              <div className="serv-desc3">
                Check the inspection report. <br /> It helps to understand the
                true <br />
                condition of our cars.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
