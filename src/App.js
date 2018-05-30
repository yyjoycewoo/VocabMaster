import React from "react";
import "./styles/App.css";
import View from "./components/View";
var json = require('./dummy_data.json');

const App = () => {
  console.log(json)
  return (
    <div className="App">
      <View sets={json["sets"]} />
    </div>
  );
};

export default App;
