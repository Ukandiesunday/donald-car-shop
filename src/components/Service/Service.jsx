import { Link } from "react-router-dom";
import "./Service.css";

const Service = () => {
  return (
    <div>
      <div className="service-container">
        <div className="serv-first-item-cont">
          <div className="serv-desc1">
            Become <b>carStore</b> Dealer Partner. Buy used and new cars below
            the market price and increase your margin up to 30%
            <Link className="learnMore" to={"/about"}>
              learn More
            </Link>
          </div>
          <div className="serv-img-cont">
            <img
              src="https://media.gettyimages.com/id/671685380/photo/driver-assisting-businessman-into-cab.jpg?s=612x612&w=gi&k=20&c=V7NQPgC48Xp4MX5KeNFOObt8E57cIibc805BIvpj3xE="
              alt=""
            />
          </div>
        </div>
        <h2>How It Works</h2>

        <div className="serv-item">
          <div className="serv-second-item-cont">
            <div className="serv-img-cont2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvw-YK89VGO74aiuR7eVCEkTrmlTSTV6CZRA&usqp=CAU"
                alt=""
              />
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
              <img
                src="https://www.cars45.com/_ipx/_/how-it-works/how-it-works-2.png"
                alt=""
              />
              <div className="serv-desc3">
                Check the inspection report. <br /> It helps to understand the
                true <br />
                condition of a car.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
