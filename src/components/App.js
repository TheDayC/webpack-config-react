import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../scss/style.scss'; // Import styling and compile with JS.

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App class constructed!");
  }

  render() {
    return (
      <div id="app">
        <div className="container">
          <h1>Setup complete!</h1>
          <p>Check your console to see if Javascript has been transpiled correctly.</p>
        </div>   
      </div>
    );
  }
};

export default App;