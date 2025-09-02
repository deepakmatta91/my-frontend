import React from "react";
import H2 from "./bodyimg.module.css";

const Body = () => {
  return (
    <>
      <div className={H2.maincontainer}>
        <div className={H2.main1}>
          <h1 className={H2.matter}>It's hard to beat</h1>
          <p>A person who never gives up</p>
          <ul>
            <li className={H2.list}>
              It's not about the number of hours you practice, it's about the
              number of hours your mind is present during the practice.
            </li>
            <li className={H2.list}>
              This is the best academy, developing your skills and life goals
              to achieve your dreams successfully.
            </li>
          </ul>
          <button className={H2.b1}>Learn More</button>
        </div>
        <div className={H2.main2}>
          <div className={H2.img}></div>
        </div>
      </div>
    </>
  );
};

export default Body;