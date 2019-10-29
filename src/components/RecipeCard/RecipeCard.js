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
          recipe_title: "",
          ingredients_array: [
            {
              quantity: "",
              ingredient: ""
            },
            {
              quantity: "",
              ingredient: ""
            },
            {
              quantity: "",
              ingredient: ""
            }
          ],
          instructions_array: ["", "", ""]
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
      .callFunction("testfunction", [2])
      .then(current_recipe => this.setState({ current_recipe }));
  }

  onRecipeChange = newRecipeNumber => {
    client
      .callFunction("testfunction", [newRecipeNumber])
      .then(current_recipe => this.setState({ current_recipe }));
  };

  render() {
    return (
      <div className="container">
        <div className="sidebar">
          <div className="sidebar__logo">
            <span>Cooking</span>
            <span>With</span>
            <span>Mike</span>
          </div>
          <div className="sidebar__recent">
            <div className="sidebar__recent__label">Recently added</div>

            <div className="sidebar__recent__list">
              <span onClick={this.onRecipeChange.bind(this, 5)}>
                Bloody Mary Mix
              </span>
            </div>
          </div>
          <div className="sidebar__recipe__list">
            <div className="sidebar__recipe__list__label">Recipe list</div>
            <span onClick={this.onRecipeChange.bind(this, 1)}>
              Sweet Garlic Salmon
            </span>
            <span onClick={this.onRecipeChange.bind(this, 3)}>
              Tri-Tip Marinade
            </span>
            <span onClick={this.onRecipeChange.bind(this, 2)}>
              Cowboy Caviar
            </span>
            <span onClick={this.onRecipeChange.bind(this, 4)}>
              Sticky Thai Peanut Orange Chicken
            </span>
          </div>
        </div>
        <div className="recipe-card-container">
          <div className="recipe-heading">
            {this.state.current_recipe[0].recipe_title}
          </div>
          <div className="recipe-contents">
            <IngredientList
              ingredients_array={this.state.current_recipe[0].ingredients_array}
            />
            <Instructions
              instructions_array={
                this.state.current_recipe[0].instructions_array
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeCard;
