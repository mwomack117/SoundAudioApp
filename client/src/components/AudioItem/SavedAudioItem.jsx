import React, { Component } from "react";
import ReactAudioPlayer from "react-audio-player";
import "./AudioItem.css";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button
} from "reactstrap";
import axios from "axios";

const style = {
  marginTop: "25px",
  display: "inline-block",
  marginLeft: "25px"
};

class SavedAudioItem extends Component {
  constructor(props) {
    super(props);
    // debugger;
  }

  componentDidMount() {}

  handleDeleteSound = event => {
    event.preventDefault();

    //request to server to add a new username/password
    axios.get(`user/sound/delete/${this.props.audio._id}`).then(data => {
      axios.get(`/user/saved/${this.props.userId}`).then(response => {
        console.log(response);
        this.props.updateSounds(response.data);
      });
    });
  };

  render() {
    return (
      <div style={style}>
        <Card className="audio-card">
          <CardTitle className="title">{this.props.audio.name}</CardTitle>
          <CardImg top src={this.props.audio.image} />
          <CardBody>
            <div>
              <ReactAudioPlayer src={this.props.audio.preview} controls 
              className="player" />
            </div>
            <Button
              value={this.props.audio._id}
              onClick={this.handleDeleteSound}
              className="preview-button btn-warning border-dark"
            >
              Delete Sound
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default SavedAudioItem;
