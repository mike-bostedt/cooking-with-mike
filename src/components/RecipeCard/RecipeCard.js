import React from "react";
import "./RecipeCard.css";

class RecipeCard extends React.Component {
  render() {
    return (
      <div className="RecipeCard-container">
        <div className="recipe-heading">{this.props.title}</div>
        <div className="recipe-contents">
          <div className="recipe-ingredients">
            <span>Ingredients</span>
            <div className="recipe-ingredients-grid">
              <span>2 pounds</span>
              <span>salmon</span>
              <span>2 Tbs</span>
              <span>olive oil</span>
              <span>1/4 cup</span>
              <span>brown sugar</span>
              <span>3 </span>
              <span>garlic cloves - minced</span>
              <span>juice</span>
              <span>of one lemon</span>
              <span>1 tsp</span>
              <span>Salmon</span>
              <span>1/2 tsp</span>
              <span>pepper</span>
              <span>garnish</span>
              <span>lemons - sliced</span>
              <span>garnish</span>
              <span>parsley - chopped</span>
            </div>
            <div className="recipe-instuctions-list">
              <ol>
                <li>
                  Preheat oven to 350 degrees. Line a baking sheet with aluminum
                  foil. Lay the salmon on top and sprinkle with salt and pepper.
                  Fold up the sides of the aluminum foil around the salmon.
                </li>
                <li>
                  In a small bowl whisk together the olive oil, brown sugar, soy
                  sauce, garlic, lemon juice, salt, and pepper. Pour the glaze
                  over the salmon. Top the salmon with aluminum foil and seal.
                </li>
                <li>
                  Bake for 20-25 minutes or until salmon is cooked throughout.
                  Take the foil off of the top and baste the salmon with the
                  sauce in the foil. Broil for 3-5 minutes or until brown and
                  caramelized. Garnish with lemon slices and chopped parsley if
                  desired.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeCard;
