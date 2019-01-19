import React, { Component } from "react";
import ReactAudioPlayer from "react-audio-player";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

const style = {
  marginTop: "25px",
  display: "inline-block",
  marginLeft: "25px"
};

class SavedAudioItem extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

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
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default SavedAudioItem;
