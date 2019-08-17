import React, { Component } from "react";
import classes from "./Person.css";
import withClass from "../../../hoc/WithClass"
import Aux from "../../../hoc/Aux"
import {AuthContext} from "../../../containers/App"
class Person extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  focus() {
      this.inputRef.current.focus();
  }

  render() {
    return (
      <Aux>
        <AuthContext.Consumer>
          {auth => auth ?<p>I a'm Authenticated</p>:null
          }
        </AuthContext.Consumer>
        <h3 onClick={this.props.click}>
          I am a Person
          {` ${this.props.name}`} and
        </h3>
        <h5> I am {`${this.props.age}`} years Old</h5>
        {this.props.children}
        <br />
        <input
          ref={this.inputRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

export default withClass(Person,classes.Person);
