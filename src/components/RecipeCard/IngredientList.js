import React from "react";
import "./RecipeCard.css";
import IngredientLine from "./IngredientLine";

function IngredientList(props) {
  if (props.ingredients_array !== undefined) {
    let ingredient_props = props;

    return (
      <ul id="Ingredients">
        {ingredient_props.ingredients_array.map(ingredient => (
          <IngredientLine
            className="ingredient"
            whole={ingredient.whole}
            numerator={ingredient.numerator}
            denominator={ingredient.denominator}
            measurement={ingredient.measurement}
            ingredient={ingredient.ingredient}
            descriptor={ingredient.descriptor}
          />
        ))}
      </ul>
    );
  } else {
    return <div>loading...</div>;
  }
}

export default IngredientList;
