import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import "../css/search.css";
import axios from "axios";
import Content from "./content";
import ReactDOM from "react-dom";
import { Card } from "semantic-ui-react";
const API_URL = "http://localhost:3002/search";
const getSuggestionValue = suggestion => suggestion.name;


function renderSuggestion(suggestion) {
  return <span>{suggestion.name}</span>;
}
const renderInputComponent = inputProps => (
  <div class="ui fluid icon input">
  <input type="text" placeholder="Search a very wide input..."   {...inputProps}/>
  <i class="search icon"></i>
</div>
);

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      searchValue: "",
      value: "",
      suggestions: [],
      searchResults: "",
      results: "",
      createContent: false,
      textbox: true,
      showContent: false
    };
  }
  componentDidMount() {
    axios
      .get(`${API_URL}`)
      .then(res => {
        console.log(res.data);
        this.setState({
          results: res.data
        });
      })
      .catch(err => {
        console.log("Error retreiving Info");
      });
  }
  searchByName = () => {
    console.log("searching");
    axios
      .get(`http://localhost:3002/${this.state.searchValue}`)
      .then(res => {
        console.log("searcgj", res);
        this.setState({
          searchResults: res.data
        });
      })
      .catch(err => {
        console.log("Error retreiving Info");
      });
    
  };
  getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : this.state.results.filter(
          lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  }
  onChange = (event, { newValue }) => {
    console.log("omsj", newValue);
    this.setState({
      value: newValue
    });
  };
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onSuggestionSelected = (event, { method, suggestionValue }) => {
    console.log("shah", suggestionValue);
    this.setState({ searchValue: suggestionValue, createContent: false, textbox: false,
      showContent: true });
    // this.displayContent();;
  };


  displayContent = () => {
   
    if(this.state.showContent===true)
    ReactDOM.render(<Content />, document.getElementById("content"));
  };

  createContent = () => {
    this.setState({
      createContent: true,
      textbox: false
    });
  };
  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Search for story",
      value,
      onChange: this.onChange
    };
    return (
      <div>
        
        <div className="ui two column centered grid">
        {/* <h1> Search </h1> */}
            <div className="column">

            <Autosuggest
              suggestions={suggestions}
              renderInputComponent={renderInputComponent}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
              onSuggestionSelected={this.onSuggestionSelected}
            />
          </div>
        </div>

        {this.state.textbox === true ? (
          // <Card className="ui two column centered grid" id="content">
          //   <div className="userEditStory">Do you have any story??</div>
          //   <button
          //     className="ui primary button right floated"
          //     onClick={this.createContent}
          //   >
          //     YES
          //   </button>
          // </Card>

<div class="ui vertical stripe segment">
<div class="ui middle aligned stackable grid container">
  <div class="row">
    <div class="eight wide column">
      <h3 class="ui header">
      Do you have any story??
      </h3>
      <p>
        We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs...through pure data analytics.
      </p>
      <h3 class="ui header">
        We Make Bananas That Can Dance
      </h3>
      <p>
        Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
      </p>
    </div>
    <div class="six wide right floated column">
      <img class="ui large bordered rounded image" src="https://ak7.picdn.net/shutterstock/videos/13351367/thumb/1.jpg" />
    </div>
  </div>
  <div class="row">
    <div class="center aligned column">
      <a class="ui huge button"   onClick={this.createContent}>Start creating story</a>
    </div>
  </div>
</div>
</div>


        ) : (
          ""
        )}

        <div id="content"/>
        {this.state.createContent === true ? (
          <Content createContent={this.state.createContent} />
        ) : (
          ""
        )}
        {this.state.showContent === true ? (
          <Content createContent={this.state.createContent} />
        ) : (
          ""
        )}
      </div>
    );
  }
}
