import React, { Component } from "react";
import classes from "./Person.css";

class Person extends Component {

  componentDidMount() {
    if (this.props.position === 0) {
      this.getFocus.focus();
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
          ref={inp => {
            this.getFocus = inp;
          }}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
