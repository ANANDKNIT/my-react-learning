import React, { Component } from "react";
import classes from "./Person.css";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    if (this.props.position === 0) {
      this.inputRef.current.focus();
    }
  }
  render() {
    return (
      <div className={classes.Person}>
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
      </div>
    );
  }
}

export default Person;
