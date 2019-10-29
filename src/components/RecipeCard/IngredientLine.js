import React from "react";
import "./RecipeCard.css";

function IngredientWhole(props) {
  if (props.whole === "") {
    let nodisplay = {
      display: "none"
    };
    return <span style={nodisplay}></span>;
  } else {
    return <span className="ingredient_whole">{props.whole}</span>;
  }
}

function IngredientFraction(props) {
  if (props.numerator === "") {
    let nodisplay = {
      display: "none"
    };
    return <span style={nodisplay}></span>;
  } else {
    return (
      <div className="fraction_container">
        <span className="ingredient_numerator">{props.numerator}</span>
        <span className="ingredient_slash">/</span>
        <span className="ingredient_denominator">{props.denominator}</span>
      </div>
    );
  }
}

function IngredientMeasurement(props) {
  if (props.measurement === "tsp") {
    return (
      <span className="ingredient_measurement-tsp">{props.measurement}</span>
    );
  }
  if (props.measurement === "Tbsp") {
    return (
      <span className="ingredient_measurement-Tbsp">{props.measurement}</span>
    );
  }
  if (props.measurement === "cup") {
    return (
      <span className="ingredient_measurement-cup">{props.measurement}</span>
    );
  }
  if (props.measurement === "oz") {
    return (
      <span className="ingredient_measurement-oz">{props.measurement}</span>
    );
  } else {
    return (
      <span className="ingredient_measurement-other">{props.measurement}</span>
    );
  }
}

class IngredientLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lineThrough: false
    };
  }
  render() {
    return (
      <li
        onClick={() => this.setState({ lineThrough: !this.state.lineThrough })}
        className={"Line-Through-" + this.state.lineThrough}
      >
        <IngredientWhole whole={this.props.whole} />
        <IngredientFraction
          numerator={this.props.numerator}
          denominator={this.props.denominator}
        />
        <IngredientMeasurement measurement={this.props.measurement} />
        <span className="ingredient_ingredient">{this.props.ingredient}</span>
        <span className="ingredient_descriptor">{this.props.descriptor}</span>
      </li>
    );
  }
}

export default IngredientLine;
