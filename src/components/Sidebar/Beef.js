import React from "react";
import Current_Recipe from "../../App";

class BeefRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="BeefRecipes">
        <span className="header">Beef</span>
        <ul>
          <li>Fluffy Meat Loaf</li>
          <li>Korean BBQ</li>
          <li>Salisbury Steak</li>
          <li>Bloody Marry Chili</li>
        </ul>
      </div>
    );
  }
}

export default BeefRecipes;
