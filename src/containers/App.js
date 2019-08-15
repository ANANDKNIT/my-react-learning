import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Anand", age: 24 },
      { id: 2, name: "Manu", age: 26 },
      { id: 3, name: "Test", age: 30 }
    ],
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    console.log(id, event.target.value,"name change handler");
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
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

    if (this.state.showPersons) {
      person = (
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit 
        persons={this.state.persons}
        toggle={this.togglePersonHandler}
        showPersons={this.state.showPersons}
        />
        {person}
      </div>
    );
  }
}

export default App;
