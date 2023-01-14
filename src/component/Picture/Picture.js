import React from "react";
import "./Picture.css";
import City from "../../data/city.json";

const Picture = () => {
  return (
    <div className="img3">
      {City.map((array1, index) => (
        <div className="img1">
          <h1 className="conten">{array1.name}</h1>
          <h3 className="conten1">{array1.subText}</h3>
          <img className="img2" src={array1.image} alt={City.index} />
        </div>
      ))}
    </div>
  );
};
export default Picture;
