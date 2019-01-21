import React, { Component } from "react";
import '../css/navbar.css';

export default class Navbar extends Component {
 
  
  render() {
    return (
      <div className="ui inverted menu" id="nav">
        <div className="ui container">
            <div className="ui two wide column center aligned ">
              <h2>AI Question Generator</h2>
            </div>
            </div>
      </div>
    );
  }
}
