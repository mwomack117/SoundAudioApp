import React, { Component } from "react";
import { Input, FormBtn } from "../Form";
import "./SearchBar.css"

class SearchBar extends Component {
  state = {
    searchTerm: ""
  };

  onInputChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div>
        <form>
          <Input 
            className="searchBar"
            value={this.state.searchTerm}
            onChange={this.onInputChange}
            name="searchTerm"
            placeholder="Enter Sound (required)"
          />
          <FormBtn onClick={this.handleFormSubmit}>Search</FormBtn>
        </form>
      </div>
    );
  }
}

export default SearchBar;
