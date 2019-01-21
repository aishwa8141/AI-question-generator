import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import "../css/search.css";
import axios from "axios";
import Content from "./content";
import ReactDOM from "react-dom";

const API_URL = "http://localhost:3002/search";
const getSuggestionValue = suggestion => suggestion.name;
function renderSuggestion(suggestion) {
  return <span>{suggestion.name}</span>;
}
const renderInputComponent = inputProps => (
  <div className="ui category search">
    <div className="ui icon input">
      <input
        className="prompt"
        type="text"
        placeholder="Search"
        {...inputProps}
      />
      <i className="search icon" />
    </div>
    <div className="results" />
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
      results: ""
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
    this.displayContent();
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
    this.setState({ searchValue: suggestionValue });
    this.searchByName();
  };
  displayContent = () => {
    ReactDOM.render(<Content />, document.getElementById("content"));
  };
  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Search",
      value,
      onChange: this.onChange
    };
    return (
      <div>
        <div className="ui two column centered grid">
          <div className="column">
            {" "}
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
        <div id="content" />
      </div>
    );
  }
}
