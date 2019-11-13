import React from "react";
import RecipeCard from "./components/RecipeCard/RecipeCard.js";
import "./App.css";

import recentIcon from "./icons/icons8-new-50.png";
import featuredIcon from "./icons/icons8-star-50.png";
import beefIcon from "./icons/icons8-cow-50.png";
import chickenIcon from "./icons/icons8-chicken-50.png";
import porkIcon from "./icons/icons8-pig-50.png";
import fishIcon from "./icons/icons8-whole-fish-50.png";
import veggiesIcon from "./icons/icons8-natural-food-50.png";
import bakingIcon from "./icons/icons8-cute-cake-50.png";
import leftIcon from "./icons/icons8-chevron-left-50.png";
import rightIcon from "./icons/icons8-chevron-right-50.png";
import { Stitch, AnonymousCredential } from "mongodb-stitch-browser-sdk";

class App extends React.Component {
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
        "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/cooking_with_mike-zkibw/service/http/incoming_webhook/getTriTip",
      isFeaturedShowing: true,
      isRecentShowing: false,
      isBeefShowing: false,
      isChickenShowing: false,
      isPorkShowing: false,
      isfishShowing: false,
      isVeggiesShowing: false,
      isBakingShowing: false
    };
  }
  componentDidMount() {
    fetch(this.state.recipe_path)
      .then(res => res.json())
      .then(current_recipe => this.setState({ current_recipe }));
  }

  getWebhook = event => {
    let url =
      "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/cooking_with_mike-zkibw/service/http/incoming_webhook/";
    let modifyer = event.target.id;
    let final = url + modifyer;
    fetch(final)
      .then(res => res.json())
      .then(current_recipe => this.setState({ current_recipe }));
  };

  render() {
    return (
      <div className="App">
        <div className="sidebar">
          <div className="sidebar__scroll-fix">
            <div className="sidebar__container">
              <div className="sidebar__logo">
                Cooking
                <br />
                with
                <br />
                mike
              </div>
              <div className="sidebar__dropdown__featured">
                <div
                  className="sidebar__header"
                  onClick={() =>
                    this.setState({
                      isFeaturedShowing: !this.state.isFeaturedShowing
                    })
                  }
                >
                  <span className="sidebar__heading">Featured</span>
                  <img className="sidebar__icon" src={featuredIcon} alt="" />
                </div>
                <ul
                  className={
                    this.state.isFeaturedShowing && "isFeaturedShowing"
                  }
                >
                  <li onClick={this.getWebhook} id={"getBloodyMaryChili"}>
                    Bloody Mary Chili
                  </li>
                </ul>
              </div>
              {/*--------------Recent------------------------*/}
              <div className="sidebar__dropdown__recent">
                <div
                  className="sidebar__header"
                  onClick={() =>
                    this.setState({
                      isRecentShowing: !this.state.isRecentShowing
                    })
                  }
                >
                  <span className="sidebar__heading">Recent</span>
                  <img className="sidebar__icon" src={recentIcon} alt="" />
                </div>
                <ul className={this.state.isRecentShowing && "isRecentShowing"}>
                  <li onClick={this.getWebhook} id={"getTritipMarinade"}>
                    Tri-tip Marinade
                  </li>
                  <li onClick={this.getWebhook} id={"getCowboyCaviar"}>
                    Cowboy Caviar
                  </li>
                  <li onClick={this.getWebhook} id={"getSweetGarlicSalmon"}>
                    Sweet Garlic Salmon
                  </li>
                  <li
                    onClick={this.getWebhook}
                    id={"getStickyThaiPeanutOrangeChicken"}
                  >
                    Sticky Peanut Orange Chicken
                  </li>
                </ul>
              </div>
              {/*--------------Beef------------------------*/}
              <div className="sidebar__dropdown__beef">
                <div
                  className="sidebar__header"
                  onClick={() =>
                    this.setState({
                      isBeefShowing: !this.state.isBeefShowing
                    })
                  }
                >
                  <span className="sidebar__heading">Beef</span>
                  <img className="sidebar__icon" src={beefIcon} alt="" />
                </div>
                <ul className={this.state.isBeefShowing && "isBeefShowing"}>
                  <li onClick={this.getWebhook} id={"getTritipMarinade"}>
                    Tri-tip Marinade
                  </li>

                  <li onClick={this.getWebhook} id={"getBloodyMaryChili"}>
                    Bloody Mary Chili
                  </li>
                  <li onClick={this.getWebhook} id={"getFluffyMeatLoaf"}>
                    Fluffy Meat Loaf
                  </li>
                </ul>
              </div>
              {/*--------------Chicken------------------------*/}
              <div className="sidebar__dropdown__chicken">
                <div
                  className="sidebar__header"
                  onClick={() =>
                    this.setState({
                      isChickenShowing: !this.state.isChickenShowing
                    })
                  }
                >
                  <span className="sidebar__heading">Chicken</span>
                  <img className="sidebar__icon" src={chickenIcon} alt="" />
                </div>
                <ul
                  className={this.state.isChickenShowing && "isChickenShowing"}
                >
                  <li onClick={this.getWebhook} id={"getCowboyCaviar"}>
                    Cowboy Caviar
                  </li>

                  <li
                    onClick={this.getWebhook}
                    id={"getStickyThaiPeanutOrangeChicken"}
                  >
                    Sticky Peanut Orange Chicken
                  </li>
                </ul>
              </div>
              {/*--------------Pork------------------------*/}
              <div className="sidebar__dropdown__pork">
                <div
                  className="sidebar__header"
                  onClick={() =>
                    this.setState({
                      isPorkShowing: !this.state.isPorkShowing
                    })
                  }
                >
                  <span className="sidebar__heading">Pork</span>
                  <img className="sidebar__icon" src={porkIcon} alt="" />
                </div>
                <ul
                  className={this.state.isPorkShowing && "isPorkShowing"}
                ></ul>
              </div>
              {/*--------------Fish------------------------*/}
              <div className="sidebar__dropdown__fish">
                <div
                  className="sidebar__header"
                  onClick={() =>
                    this.setState({
                      isFishShowing: !this.state.isFishShowing
                    })
                  }
                >
                  <span className="sidebar__heading">Fish</span>
                  <img className="sidebar__icon" src={fishIcon} alt="" />
                </div>
                <ul className={this.state.isFishShowing && "isFishShowing"}>
                  <li onClick={this.getWebhook} id={"getSweetGarlicSalmon"}>
                    Sweet Garlic Salmon
                  </li>
                </ul>
              </div>
              {/*--------------Veggies------------------------*/}
              <div className="sidebar__dropdown__veggies">
                <div
                  className="sidebar__header"
                  onClick={() =>
                    this.setState({
                      isVeggiesShowing: !this.state.isVeggiesShowing
                    })
                  }
                >
                  <span className="sidebar__heading">Veggies</span>
                  <img className="sidebar__icon" src={veggiesIcon} alt="" />
                </div>
                <ul
                  className={this.state.isVeggiesShowing && "isVeggiesShowing"}
                >
                  <li onClick={this.getWebhook} id={"getCowboyCaviar"}>
                    Cowboy Caviar
                  </li>
                </ul>
              </div>
              {/*--------------Baking------------------------*/}
              <div className="sidebar__dropdown__baking">
                <div
                  className="sidebar__header"
                  onClick={() =>
                    this.setState({
                      isBakingShowing: !this.state.isBakingShowing
                    })
                  }
                >
                  <span className="sidebar__heading">Baking</span>
                  <img className="sidebar__icon" src={bakingIcon} alt="" />
                </div>
                <ul className={this.state.isBakingShowing && "isBakingShowing"}>
                  <li onClick={this.getWebhook} id={"getMarbleBrownies"}>
                    Marble Brownies
                  </li>
                </ul>
              </div>
              <div className="icons8">
                App icons by&nbsp;
                <a href="https://icons8.com/" target="_blank">
                  icons8
                </a>
                .
              </div>
            </div>
            <div className="recipe-display">
              <RecipeCard Current_Recipe={this.state.current_recipe} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
