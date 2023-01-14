import React from "react";
import "./Hotels.css";
import Hotel from "../../data/hotel_list.json";
const Hotels = () => {
  const SearchHotel = () => {
    window.location.replace("/detail");
  };
  return (
    <div className="class-list1">
      <h2 className="conten3a">Homes guests love</h2>
      <div className="conten3b">
        {Hotel.map((array3, index) => (
          <div className="conten3c">
            <img
              className="conten3d"
              src={array3.image_url}
              alt={Hotel.index}
            />
            <h4 className="conten3e" onClick={SearchHotel}>
              {array3.name}
            </h4>
            <h4 className="conten3f">{array3.city}</h4>
            <h4 className="conten3g">
              Starting from
              <>{""}</> <span>${array3.price}</span>
            </h4>
            <h5 className="conten3h">
              <span className="conten3s">{array3.rate}</span>
              <span> {array3.type}</span>
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Hotels;
