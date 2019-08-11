import React from "react";

const person = () => {
  return (
    <div>
      I am a Person
      {Math.floor(Math.random() * 30)} years Old
    </div>
  );
};

export default person;
