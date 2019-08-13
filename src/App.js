import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

const style = {
  backgroundColor: "white",
  font: "inherit",
  border: "1px solid blue",
  padding: "8px"
};
class App extends Component {
  state = {
    persons: [
      { name: "Anand", age: 24 },
      { name: "Manu", age: 26 },
      { name: "Test", age: 30 }
    ],
    showPersons: false
  };

  switchNameHandler = newValue => {
    console.log("was clicked");
    // this.state.persons[0].name="ANAND KUMAR" //Don't Do This React will not recognise it
    this.setState({
      persons: [
        { name: newValue, age: 24 },
        { name: "MAXIMILIAN", age: 30 },
        { name: "Test", age: 12 }
      ]
    });
  };

  //two way binding

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Anand", age: 24 },
        { name: event.target.value, age: 33 },
        { name: "Test", age: 12 }
      ]
    });
  };
  togglePersonHandler = () => {
    const oldState=this.state.showPersons;
    this.setState({showPersons:!oldState})
  };

  render() {
    return (
      <div className="App">
        <h1>hi this is my first app </h1>
        <button onClick={this.togglePersonHandler} style={style}>
          Toggle Person
        </button>
        {this.state.showPersons ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              // don't use annonyms inline function (it is in efficient)
              //because React can re-render certain things too often
              click={() => this.switchNameHandler("Change Anand!!")}
              changed={this.nameChangeHandler}
            >
              my hobby is playing Chess
            </Person>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler}
              changed={this.nameChangeHandler}
            />
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
              click={this.switchNameHandler}
              changed={this.nameChangeHandler}
            />
          </div>
        ) : null
        }
      </div>
    );
  }
}

export default App;
