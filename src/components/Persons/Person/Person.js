import React from "react";
import classes from "./Person.css";

const person = props => {
  return (
    <div className={classes.Person}>
      <h3 onClick={props.click}>
        I am a Person
        {` ${props.name}`} and
      </h3>
      <h5> I am {`${props.age}`} years Old</h5>
      {props.children}
      <br />
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
