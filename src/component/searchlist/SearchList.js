import React from "react";
import Search from "../../data/search.json";
import "./SearchList.css";
import SearchPopup from "./SearchPopup";
const SearchList = () => {
  const onClickDetail = () => {
    window.location.replace("/detail");
  };

  return (
    <div className="class-cotrol">
      <div className="class-coler">
        <SearchPopup />
      </div>
      <div className="class-search">
        {Search.map((col, index) => (
          <div className="class-search1">
            <div className="class-search2">
              <div className="class-search20">
                <img
                  className="class-search21"
                  src={col.image_url}
                  alt={Search.index}
                />
              </div>
              <div className="class-search200">
                <h3 className="class-search22" onClick={onClickDetail}>
                  {col.name}
                </h3>
                <p className="class-search23">{col.distance} form center</p>
                <p className="class-search24">{col.tag}</p>
                <h4 className="class-search25">{col.description}</h4>
                <p className="class-search26">{col.type}</p>
                <h4 className="class-search27">Free cancellation</h4>
                <p className="class-search28">
                  You can cancel later,so lock in this great price today
                </p>
              </div>
            </div>
            <div className="class-search3">
              <div className="class-search30">
                <h3 className="class-search31">{col.rate_text}</h3>
                <span className="class-search32"> {col.rate}</span>
              </div>
              <h1 className="class-search33">${col.price}</h1>
              <p className="class-search34">Includes taxes and fees</p>
              <button className="class-search35">See Availability</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SearchList;
