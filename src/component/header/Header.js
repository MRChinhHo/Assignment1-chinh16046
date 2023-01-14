import React from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "./Header.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Header = () => {
  const gotoSearch = () => {
    window.location.replace("/search");
  };
  const [openDate, setOpenDate] = useState(false);
  const openCalendar = () => {
    setOpenDate(!openDate);
  };
  // State sử dụng trong daterange
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  // Hàm dẫn link đến trang Search

  return (
    <>
      <div className="list">
        <div className="list-content">
          <h1 className="list-content1">
            A lifetime of discounts? It's Genius
          </h1>
          <p className="list-content2">
            Get rewarded for your travels-unlock instant savings of 100% or more
            with a free account
          </p>
          <button className="sign">Sign in/Register</button>
        </div>

        <div className="headerSearch">
          <div className="headerSearchItem">
            <input
              className="color: lightgray;
            cursor: pointer;"
              placeholder="Where are you going?"
              type="text"
            />
          </div>
          <div className="headerSearchItem">
            <span className="headerSearchText" onClick={openCalendar}>
              {`${format(date[0].startDate, "MM/dd/yyy")} 
            to ${format(date[0].endDate, "MM/dd/yyy")}`}{" "}
            </span>
            <div className="timeClick">
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                />
              )}
            </div>
          </div>
          <div className="headerSearchItem">
            <span className="headerSearchText">1 adults 0 children 1 room</span>
          </div>
          <button className="SearchBtn" onClick={gotoSearch}>
            Search
          </button>
        </div>
      </div>
    </>
  );
};
export default Header;
