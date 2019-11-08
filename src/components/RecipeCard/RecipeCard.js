import React from "react";
import "./RecipeCard.css";
import * as serviceWorker from "../../serviceWorker";
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
      recipe_path:
        "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/cooking_with_mike-zkibw/service/http/incoming_webhook/getTriTip"
    };
  }

  render() {
    return (
      <div className="container">
        <div className="recipe-card-container">
          <div className="recipe-heading">
            {this.props.Current_Recipe[0].recipe_title}
          </div>
          <div className="recipe-contents">
            <IngredientList
              ingredients_array={this.props.Current_Recipe[0].ingredients_array}
            />
            <Instructions
              instructions_array={
                this.props.Current_Recipe[0].instructions_array
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeCard;

serviceWorker.unregister();
