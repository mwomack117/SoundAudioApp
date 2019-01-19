import React, { Component } from "react";
import API from "../../utils/API";
import SearchBar from "../SearchBar";
import AudioList from "../AudioList/AudioList";
import SavedAudioList from "../AudioList/SavedAudioList";
import "./Home.css";
import axios from 'axios';

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


  componentDidMount () {
    console.log(this.state.saved);
    console.log(this.state.audios);
    
  }

  loadPlaylist = () => {
    axios.get(`/user/saved/${this.props.userId}`)
    .then(response => {
      // console.log(response)
      this.setState({
        saved: response.data
      })
    })
  }

  render() {
    return (
      <div>
        {this.props.loggedIn ? <p>User Logged In</p> : <p>No User Logged In</p>}
        <p>It's good to be home</p>
        <button onClick={this.loadPlaylist}>load sounds</button>

        <div>
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <AudioList audios={this.state.audios} userId={this.props.userId} />
          <br />
          <br />
          <br />
          <br />
          <br />

          <SavedAudioList audios={this.state.saved}/>


        </div>
      </div>
    );
  }
}
export default Home;
