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
    this.state = {
      Recipe_Count: []
    };
  }
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <div className="recipe-display">
          <RecipeCard />
        </div>
        <div className="more-recipes"></div>
      </div>
    );
  }
}

export { client };
export default App;

serviceWorker.unregister();
