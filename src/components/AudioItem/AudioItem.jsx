import React, { Component } from "react";
import ReactAudioPlayer from "react-audio-player";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  CardText
} from "reactstrap";

const style = {
  marginTop: "25px",
  display: "inline-block",
  marginLeft: "25px"
};

class AudioItem extends Component {
  constructor(props) {
    super(props);
  }
  handleSavedSound = event => {
    console.log("Sound saved to DB");
    event.preventDefault();
    console.log(this.props.audio);

    //request to server to add a new username/password
    axios.post(`/user/sound/${this.props.userId}`, {
      soundId: this.props.audio.id,
      preview: this.props.audio.previews[`preview-hq-mp3`],
      name: this.props.audio.name
    });
  };

  render() {
    return (
      <div style={style}>
        <Card>
          <CardTitle>{this.props.audio.name}</CardTitle>
          <CardImg top src={this.props.audio.images["waveform_m"]} />
          <CardBody>
            <CardText>
              <ReactAudioPlayer
                src={this.props.audio.previews[`preview-hq-mp3`]}
                controls
              />
            </CardText>
            <Button value={this.props.audio.id} onClick={this.handleSavedSound}>
              Save Sound
            </Button>
            {console.log(this.props.audio.id)}
          </CardBody>
        </Card>
      </div>
    );
  }

}

export default AudioItem;
