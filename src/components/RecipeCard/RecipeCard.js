import React from "react";
import "./RecipeCard.css";
import { client } from "../../App";

import IngredientList from "./IngredientList";

function lineThrough() {
  this.setState({ lineThrough: !this.state.lineThrough });
}

function Instructions(props) {
  if (props.instructions_array !== undefined) {
    return (
      <ol id="Instructions">
        {props.instructions_array.map(instruction => (
          <li strikethrough="false" className={lineThrough}>
            {instruction}
          </li>
        ))}
      </ol>
    );
  } else {
    return <div>loading...</div>;
  }
}

let currentRecipeNumber = 2;

class RecipeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_recipe: [
        {
          _id: {
            $oid: "5d03fdd41c9d44000006233f"
          },
          owner_id: "5cdb4b8a03501840d5fc94ad",
          recipe_number: {
            $numberInt: "2"
          },
          recipe_title: "temp",
          ingredients_array: [
            {
              quantity: "5 temp",
              ingredient: "salmon"
            },
            {
              quantity: "5 temp",
              ingredient: "olive oil"
            },
            {
              quantity: "1/4 cup",
              ingredient: "brown sugar"
            }
          ],
          instructions_array: [
            "temp. Line a baking sheet with aluminum foil. Lay the salmon on top and sprinkle with salt and pepper. Fold up the sides of the aluminum foil around the salmon.",
            "In a small bowl whisk together the olive oil, brown sugar, soy sauce, garlic, lemon juice, salt, and pepper. Pour the glaze over the salmon. Top the salmon with aluminum foil and seal.",
            "  Bake for 20-25 minutes or until salmon is cooked throughout. Take the foil off of the top and baste the salmon with the sauce in the foil. Broil for 3-5 minutes or until brown and caramelized. Garnish with lemon slices and chopped parsley if desired."
          ]
        }
      ],
      currentRecipeNumber: 2
    };
  }

  componentDidMount() {
    /*fetch(
      "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/cooking_with_mike-zkibw/service/http/incoming_webhook/Get_Recipe?3"
    )
      .then(res => res.json())
      .then(current_recipe => this.setState({ current_recipe }));*/

    client
      .callFunction("testfunction", 2)
      .then(current_recipe => this.setState({ current_recipe }));
  }

  onRecipeUpdate = newRecipeNumber => {
    client
      .callFunction("testfunction", 2)
      .then(current_recipe => this.setState({ current_recipe }));
  };

  render() {
    return (
      <div className="recipe-card-container">
        <div className="recipe-heading">
          {this.state.current_recipe[0].recipe_title}
        </div>
        <div className="recipe-contents">
          <IngredientList
            ingredients_array={this.state.current_recipe[0].ingredients_array}
          />
          <Instructions
            instructions_array={this.state.current_recipe[0].instructions_array}
          />
        </div>
        <span>tester</span>
      </div>
    );
  }
}

export default RecipeCard;
