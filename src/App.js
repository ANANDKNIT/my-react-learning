import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Anand", age: 24 },
      { id: 2, name: "Manu", age: 26 },
      { id: 3, name: "Test", age: 30 }
    ],
    showPersons: false
  };

  switchNameHandler = newValue => {
    console.log("was clicked");
    this.setState({
      persons: [
        { name: newValue, age: 24 },
        { name: "MAXIMILIAN", age: 30 },
        { name: "Test", age: 12 }
      ]
    });
  };

  //two way binding
  nameChangeHandler = (event, id) => {
    console.log(id, event.target.value);
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    console.log(personIndex, "from changwed handler");
    // const person={...this.state.persons[personIndex]};
    const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  togglePersonHandler = () => {
    const oldState = this.state.showPersons;
    this.setState({ showPersons: !oldState });
  };

  deletePersonHandler = personIndex => {
    //  const persons=this.state.persons.slice();
    const persons = [...this.state.persons]; //ES6: better approach
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
    console.log("delete handler");
  };
  render() {
    let person = null;
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    if (this.state.showPersons) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                // don't use annonyms inline function (it is in efficient)
                //because React can re-render certain things too often
                click={() => this.deletePersonHandler("Change Anand!!")}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style["backgroundColor"] = "red";
    }
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); // classes = [red]
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); //classes =[red, bold]
    }

    return (
      <div className="App">
        <h1>H i this is my first app </h1>
        <p className={classes.join(" ")}>This is really working</p>
        <button onClick={this.togglePersonHandler} style={style}>
          Toggle Person
        </button>
        {person}
      </div>
    );
  }
}

export default App;
