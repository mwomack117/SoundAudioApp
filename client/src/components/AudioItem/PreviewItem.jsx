import React, { Component } from "react";
import ReactAudioPlayer from "react-audio-player";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import "./AudioItem.css";

const style = {
  marginTop: "25px",
  display: "inline-block",
  marginLeft: "25px"
};

class PreviewItem extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div style={style}>
        <Card className="audio-card">
          <CardTitle className="title">{this.props.audio.name}</CardTitle>
          <CardImg top src={this.props.audio.images["waveform_m"]} />
          <CardBody>
            <CardText>
              <ReactAudioPlayer
                className="player"
                src={this.props.audio.previews[`preview-hq-mp3`]}
                controls
              />
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default PreviewItem;
