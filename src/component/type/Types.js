import React from "react";
import "./Types.css";
import Hotels from "./Hotels";
import Type from "../../data/type.json";
const Types = (props) => {
  return (
    <>
      <div className="conten2a">
        <h2 className="conten2b">Browse by property type</h2>
        <div className="conten2c">
          {Type.map((array2, index) => (
            <div className="conten2d">
              <img className="conten2e" src={array2.image} alt={Type.index} />
              <h3 className="conten2f">{array2.name}</h3>
              <h4 className="conten2h">{array2.count}</h4>
            </div>
          ))}
        </div>
      </div>
      <Hotels />
    </>
  );
};
export default Types;
