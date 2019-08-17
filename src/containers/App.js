import React, { PureComponent } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import Aux from "../hoc/Aux";
import withClass from "../hoc/WithClass";

export const AuthContext = React.createContext();
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: 1, name: "Anand", age: 24 },
        { id: 2, name: "Manu", age: 26 },
        { id: 3, name: "Test", age: 30 }
      ],
      showPersons: false,
      toggleCounter: 0,
      authenticated: false
    };
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

  loginHandler = () => {
  this.setState({authenticated:true});  
  }

  togglePersonHandler = () => {
    const oldState = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !oldState,
        toggleCounter: prevState.toggleCounter + 1
      };
    });
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
    console.log("[App] render method");

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
      <Aux>
        <Cockpit
          appTitle={this.props.appTitle}
          persons={this.state.persons}
          toggle={this.togglePersonHandler}
          showPersons={this.state.showPersons}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {person}
        </AuthContext.Provider>
        <button onClick={this.loginHandler}>Login</button>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
