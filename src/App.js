import React, { Component } from 'react';
import './App.css';

class App extends Component {
   render() {
    // return (
    //   <div className="App">
    //   <h1>hi this is my first app </h1>
    //   </div>
    // );
return React.createElement('p',{className:'App'},React.createElement('h1',null,'hi i am create element method'));  
}
}

export default App;
