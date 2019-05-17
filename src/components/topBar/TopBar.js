import React from "react";
import "./TopBar.css";

class TopBar extends React.Component {
  render() {
    return (
      <div className="TopBar-container">
        <div className="heading">
          <h1>cooking with mike</h1>
        </div>
        <div className="subheading">
          <a>
            <span>Recipe of the day</span>
          </a>
          <input type="search" placeholder="Search" />
        </div>
      </div>
    );
  }
}

export default TopBar;
