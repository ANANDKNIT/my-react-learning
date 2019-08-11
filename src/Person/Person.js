import React from "react";

const person = (props) => {
  return (
    <div>
      <h3>I am a Person 
      { ` ${props.name}`} and</h3>
      <h5> I am {`${props.age}`} years Old</h5>
      {props.children}
    </div>
  );
};

export default person;
