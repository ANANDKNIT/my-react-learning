import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hi this is my first app </h1>
        <Person name="Anand" age="24">
          my hobby is playing Chess
        </Person>
        <Person name="Manu" age="26" />
        <Person />
      </div>
    );
  }
}

export default App;
