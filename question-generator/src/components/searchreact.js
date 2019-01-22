import React, { Component } from "react";

export default class SearchReact extends Component {
//   constructor() {
//     // this.state = {
//     //   isLoading: false,
//     //   results: [],
//     //   value: ""
//     // };
//   }

  render() {
    return (
      <div class="ui grid">
        <div class="six wide column">
          <div class="ui search">
            <div class="ui left icon input">
              <input
                type="text"
                value=""
                tabindex="0"
                class="prompt"
                autoComplete="off"
              />
              <i aria-hidden="true" class="search icon" />
            </div>
            <div class="results transition">
              <div class="message empty">
                <div class="header">No results found.</div>
              </div>
            </div>
          </div>
        </div>
        <div class="ten wide column">
          <div class="ui segment">
            <div class="ui header">State</div>
            {/* <pre style="overflow-x:auto" /> */}
            <div class="ui header">Options</div>
            {/* <pre style="overflow-x:auto" /> */}
          </div>
        </div>
      </div>
    );
  }
}
