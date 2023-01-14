import React from "react";
import "./SearchPopup.css";
const SearchPopup = () => {
  return (
    <div className="class-Popup">
      <div className="Popup2 ">
        <h2>Search</h2>
      </div>
      <div className="Popup11">
        <label className="Popup111">Destination</label>
        <br></br>
        <input className="Popup122" placeholder="" type="text" />
      </div>
      <div className="Popup12">
        <label className="Popup1">Check-in Date</label>
        <br></br>
        <input className="Popup122" placeholder="dd/mm/yyyy"></input>
        {/* <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                /> */}
      </div>
      <div className="class-item">
        <div className="item1">
          <p className=" Popup3">Options</p>
        </div>
        <div className="class-item1">
          <div className="item2">
            <span className="item21">
              Min price <small>per night</small>
            </span>

            <input type="number" className="lsOptionInput" />
          </div>
          <div className="item2 item3">
            <span>
              Max price<small>per night</small>
            </span>
            <input type="number" className="lsOptionInput"></input>
          </div>
          <div className="item2 item4">
            <span>Adult</span>
            <input type="number" className="lsOptionInput1"></input>
          </div>
          <div className="item2 item5">
            <span>Children</span>
            <input type="number" className="lsOptionInput2"></input>
          </div>
          <div className="item2 item6">
            <span>Room</span>
            <input type="number" className="lsOptionInput3"></input>
          </div>
          <div>
            <button className="item7">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchPopup;
