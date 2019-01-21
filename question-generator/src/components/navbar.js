import React, { Component } from "react";


export default class Navbar extends Component {
 
  
  render() {
    return (
      <div className="ui inverted menu" id="nav">
        <div className="ui container">
          <a href="/" className="header item">
          <img src="https://photos.gograph.com/thumbs/CSP/CSP201/default-avatar-profile-icon-vector-art_k52979245.jpg" alt="no"/>
          </a>
          <div class="right menu">
    <div class="ui right aligned">
         
          <i class="rupee sign icon right-floated" id="iconrupee">33</i>
        </div>
        </div>
        </div>
      </div>
    );
  }
}
