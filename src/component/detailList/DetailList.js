import React from "react";
import Detail from "../../data/detail.json";
import "./ClassDetail.css";
const DelailList = () => {
  return (
    <div>
      <div className="class-detail" key={Detail.name}>
        <div>
          <h1>{Detail.name}</h1>
        </div>
        <div className="detaillist">
          <button className="detaillist1">Reserve or Book Now!</button>
        </div>
        <p>{Detail.address}</p>
        <h3 className="detaillist2">{Detail.distance}</h3>
        <h3 className="detaillist3">{Detail.price}</h3>

        <div>
          {Detail.photos.map((coll, index) => (
            <div className="details1">
              <img
                src={coll}
                alt={Detail.photos.index}
                className="details"
              ></img>
            </div>
          ))}
        </div>
      </div>
      <div className="detallist8">
        <div className="detallist7">
          <h1 className="detaillist4">{Detail.title}</h1>
          <p>{Detail.description}</p>
        </div>
        <div className="detallist6">
          <h2 className="detallist61">Perfect for a 9-night stay!</h2>
          <p className="detallist62">
            Located in the real heart of Krokow, this property has an excellent
            location score of 9.8!
          </p>
          <h1 className="detallist63">$945(9 nights)</h1>
          <button className="detallist64">
            <h3>Reserve or Book Now!</h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DelailList;
