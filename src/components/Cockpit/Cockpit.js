import React from "react";
import classes from "./Cockpit.css";


const Cockpit = props => {
  let assignedClasses = [];
  let btnClass=[];
  btnClass.push(classes.Button);
//   if(props.showPersons) {
//       btnClass.push(classes.red);
//   }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = [red]
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); //classes =[red, bold]
  }
  return (
    <div className={classes.Cockpit}>
        <h1>Apps Props: {props.appTitle}</h1>
      <h3>Hi this is my first app </h3>
      <p className={assignedClasses.join(" ")}>This is really working</p>
      <button onClick={props.toggle} className={btnClass.join(" ")}>
        Toggle Person
      </button>
    </div>
  );
};

export default Cockpit;
