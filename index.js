import React, { Component } from "react"
import ReactDOM from 'react-dom';
//import React from "react"
//const { Component } = React

console.log("React", React)
console.log("Component", Component)

class HelloWorld extends Component {
  render() {
    return React.createElement('h1', null, 'Hello World');
  }
}

let container = document.getElementById('container');
let component = ReactDOM.render(React.createElement(HelloWorld), container);
