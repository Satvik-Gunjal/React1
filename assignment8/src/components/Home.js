import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [isLight, setIsLight] = useState(true);
  return (
    <div id="main" className={isLight == true ? "light-bg" : "dark-bg"}>
      <div className={isLight == true ? "light-text" : "dark-text"}>
        <h2>Overreacted</h2>
      </div>
      <br />
      <br />
      <div>
        <h3>Goodby, Clean code</h3>
        <p className={isLight == true ? "light-text" : "dark-text"}>
          Sunday 4th 2020, 4min read
        </p>
      </div>
      <div>
      <h3>My Decade in review</h3>
        <p className={isLight == true ? "light-text" : "dark-text"}>
          Sunday 4th 2020, 4min read
        </p>
      </div>
      <div>
      <h3>What are the react team principle</h3>
        <p className={isLight == true ? "light-text" : "dark-text"}>
          Sunday 4th 2020, 4min read
        </p>
      </div>
      <button className={isLight == true ? "lightbtn" : "darkbtn"}
        onClick={() =>
          setIsLight((prevValue) => {
            return !prevValue;
          })
        }
      >
        Toggle
      </button>
    </div>
  );
};

export default Home;
