import React, { Component } from "react";
import API from "../../utils/API";
import SearchBar from "../SearchBar";
import AudioList from "../AudioList";
import "./Home.css";

class Home extends Component {
  // constructor(props) {
  //   super(props);
  state = {
    audios: []
  };
  // }

  onTermSubmit = async searchTerm => {
    const response = await API.getSounds(searchTerm);
    console.log(response);

    this.setState({
      audios: response.data.results
    });
  };

  render() {
    return (
      <div>
        {this.props.loggedIn ? <p>User Logged In</p> : <p>No User Logged In</p>}
        <p>It's good to be home</p>

        <div>
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <AudioList audios={this.state.audios} userId={this.props.userId} />
        </div>
      </div>
    );
  }
}
export default Home;
