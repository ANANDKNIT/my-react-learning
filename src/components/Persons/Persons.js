import React from "react";
import Person from "./Person/Person";
import Aux from "../../hoc/Aux";
import withClass from "../../hoc/WithClass";

class Persons extends React.PureComponent {
  constructor(props) {
    console.log("[Persons] Constructore", props);
    super();
  }

  componentDidMount() {
    console.log("[Persons] componentDidMount");
  }

  componentWillMount() {
    console.log("[Persons] componentWillMount");
  }

  componentWillUnmount() {
    console.log("[Persons] componentWillUnmount");
  }

  componentWillReceiveProps(nextProps) {
    //get upcomming props initialize state with props
    console.log(nextProps, "[Persons.js] componentWillReceiveProps");
  }
  shouldComponentUpdate(nextProps, nextState) {
    // it can cancel updating the dom
    console.log(nextProps, nextState, "[Persons.js] shouldComponentUpdate");
    
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log(nextProps, nextState, "[Persons.js] componentWillUpdate");
    return(nextProps.persons===this.props.persons)
  }
  componentDidUpdate() {
      console.log("[Persons.js] componentDidUpdate");
  }

  render() {
    console.log("[Prsons.js] inside render");
    return (
      <Aux>
        {this.props.persons.map((person, index) => {
          return (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => this.props.clicked(index)}
              changed={event => this.props.changed(event, person.id)}
            />
          );
        })}
      </Aux>
    );
  }
}
export default withClass(Persons);
