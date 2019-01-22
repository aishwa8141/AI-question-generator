import React from "react";
import '../css/navbar.css';
class Navbar extends React.Component {
  render() {
    return (
      <div className="ui container" id="nav">
        <h2 className="ui center aligned header" id="textdec">AI Question Generator</h2>
      </div>
    );
  }
}

export default Navbar;
