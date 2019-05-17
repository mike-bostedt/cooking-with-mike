import React from "react";
import TopBar from "./components/topBar/TopBar.js";
import RecipeCard from "./components/RecipeCard/RecipeCard.js";
import "./App.css";
import * as serviceWorker from "./serviceWorker";

const {
  Stitch,
  RemoteMongoClient,
  AnonymousCredential
} = require("mongodb-stitch-browser-sdk");

const stitchClient = Stitch.initializeDefaultAppClient(
  "cooking_with_mike-zkibw"
);

const client = Stitch.defaultAppClient;
let activeRecipe;

client.callFunction("function0").then(result => {
  console.log(result); // Output: 7
  activeRecipe = result;
  console.log(activeRecipe.recipeName);
});

const db = stitchClient
  .getServiceClient(RemoteMongoClient.factory, "myRecipeDB")
  .db("RecipeDB");

stitchClient.auth
  .loginWithCredential(new AnonymousCredential())
  .then(user => {
    console.log(stitchClient);
  })
  .catch(err => {
    console.error(err);
  });

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeRecipe };
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <TopBar />
          <RecipeCard />
        </div>
      </div>
    );
  }
}
export default App;

serviceWorker.unregister();
