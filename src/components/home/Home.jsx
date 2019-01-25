import React, { Component } from "react";
import API from "../../utils/API";
import SearchBar from "../SearchBar";
import AudioList from "../AudioList/AudioList";
import SavedAudioList from "../AudioList/SavedAudioList";
import "./Home.css";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audios: [],
      saved: []
    };
  }

  onTermSubmit = async searchTerm => {
    const response = await API.getSounds(searchTerm);
    console.log(response);

    this.setState({
      audios: response.data.results
    });
  };

  componentDidMount = () => {
    console.log(this.state.saved);
    console.log(this.state.audios);
    axios.get(`/user/saved/${this.props.userId}`).then(response => {
      // console.log(response)
      this.setState({
        saved: response.data
      });
    });
  }


  updateSavedSounds = (saved) => {
    this.setState({
      saved
    })
  }



  render() {
    return (
      <div className="background">
        <div className="jumbotron">
          <div className="jumboTitle">Welcome Back {this.props.name}!
          </div>
          <div className="SearchBar">

            <SearchBar onFormSubmit={this.onTermSubmit} />

          </div>
          {this.props.loggedIn ? null : <p>No User Logged In</p>}
        </div>

        <div className="searchResults">
          <h1>Search Results</h1>
          <AudioList audios={this.state.audios} userId={this.props.userId} updateSounds={this.updateSavedSounds} />
          <br />
          <hr />
          <br />
        </div>
        <div className="savedResults">
          <h1>Saved Sounds</h1>
          <SavedAudioList audios={this.state.saved} userId={this.props.userId} updateSounds={this.updateSavedSounds} />
        </div>
      </div>
    );
  }
}
export default Home;
