import React from "react";

class ChickenRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    };
  }

  render() {
    return (
      <div id="ChickenRecipes">
        <span className="header">Chicken</span>
        <ul>
          <li>Sticky Thai Peanut Orange Chicken</li>
        </ul>
      </div>
    );
  }
}

export default ChickenRecipes;
