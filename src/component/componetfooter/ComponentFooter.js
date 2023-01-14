import React from "react";
import "./ComponentFooter.css";
import Footer from "../../data/footer.json";

const ComponentFooter = () => {
  return (
    <div className="footer">
      <div className="fLists">
        {Footer.map((col) => (
          <ul className="fList" key={col.col_number}>
            {col.col_values.map((val) => (
              <li className="fListItem">{val}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};
export default ComponentFooter;
