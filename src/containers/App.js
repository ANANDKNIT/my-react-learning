import React, { PureComponent } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends PureComponent {
  constructor(props) {
    console.log("[App] Constructore",props)

    super();
    //this is old style of using state in constructor
    // because in old style we don't have state initialization outside of constructure
    this.state = {
      persons: [
        { id: 1, name: "Anand", age: 24 },
        { id: 2, name: "Manu", age: 26 },
        { id: 3, name: "Test", age: 30 }
      ],
      showPersons: false
    };
  }

  componentDidMount() {
    console.log("[App] componentDidMount");
  }

  componentWillMount() {
    console.log("[App] componentWillMount");
  }

  componentWillUnmount() {
    console.log("[App] componentWillUnmount");
  }

  componentWillReceiveProps(nextProps) {
    //get upcomming props initialize state with props
    console.log(nextProps, "[App.js] componentWillReceiveProps");
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // it can cancel updating the dom
  // // it  removed because class extends PureComponents 
  //   console.log(nextProps, nextState, "[App.js] shouldComponentUpdate");
  //   return (nextState.persons===this.state.persons);
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log(nextProps, nextState, "[Persons.js] componentWillUpdate");
  }
  componentDidUpdate() {
      console.log("[Persons.js] componentDidUpdate");
  }


  nameChangeHandler = (event, id) => {
    console.log(id, event.target.value, "name change handler");
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
    console.log("[App] render method")

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
        <button onClick={() =>this.setState({showPersons:true})}>Show Person</button>
        <Cockpit
          appTitle={this.props.appTitle}
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
