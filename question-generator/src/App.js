import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Search from './components/search';
import Content from './components/content';


class App extends Component {
  render() {
    return (
     <Fragment>
<Navbar></Navbar>
<div >
<Search></Search>
</div>
<Content></Content>
     </Fragment>
    );
  }
}

export default App;
