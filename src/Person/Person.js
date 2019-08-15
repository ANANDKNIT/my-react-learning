import React from "react";
import classes from "./Person.css";

const person = props => {

  const randomNuber = Math.random();
  if(randomNuber>0.7) {
    throw new Error('Something went wrong');
  }
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
