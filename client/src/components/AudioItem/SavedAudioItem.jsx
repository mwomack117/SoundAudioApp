import React, { Component } from "react";
import ReactAudioPlayer from "react-audio-player";
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from "reactstrap";
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

  componentDidMount() { }

  handleDeleteSound = event => {
    event.preventDefault();

    //request to server to add a new username/password
    axios.get(`user/sound/delete/${this.props.audio._id}`)
      .then(data => {
        axios.get(`/user/saved/${this.props.userId}`)
        .then(response => {
          console.log(response)
          this.props.updateSounds(
            response.data
          );
        });
      })
  }

  render() {
    return (
      <div style={style}>
        <Card>
          <CardTitle>{this.props.audio.name}</CardTitle>
          <CardImg top src={this.props.audio.image} />
          <CardBody>
            <CardText>
              <ReactAudioPlayer src={this.props.audio.preview} controls />
            </CardText>
            <Button value={this.props.audio._id} onClick={this.handleDeleteSound}>
              Delete Sound
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default SavedAudioItem;
