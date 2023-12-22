import "./Lists.css";

import benz1 from "../../assets/images/benz2b.jpg";
import bmw1 from "../../assets/images/bmw2g.jpg";
import toyota from "../../assets/images/toyota2b.jpeg";
import Items from "../Items/Items";

export const cars = [
  {
    id: 1,
    img: benz1,
    title: "mercedes benz offers",
    price: 300,
  },
  {
    id: 1,
    img: bmw1,
    title: "bmw offers",
    price: 300,
  },

  {
    id: 1,
    img: toyota,
    title: "Toyota offers ",
    price: 300,
  },
];
const Lists = () => {
  return (
    <div className="lists">
      {cars?.map((item) => {
        return <Items key={item.key} {...item} />;
      })}
    </div>
  );
};

export default Lists;
