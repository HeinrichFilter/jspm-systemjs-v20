import React from "react";
import ReactDOM from 'react-dom';

console.log("React", React);
console.log("Component", React.Component);

class HelloWorld extends React.Component {
  render() {
    return React.createElement('h1', null, 'Hello World');
  }
}

let container = document.getElementById('container');
let component = ReactDOM.render(React.createElement(HelloWorld), container);
