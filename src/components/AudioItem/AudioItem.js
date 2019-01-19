import React from "react";
import ReactAudioPlayer from "react-audio-player";
import axios from "axios";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  CardText,
  Row,
  Col
} from "reactstrap";

const handleSavedSound = event => {
  console.log("Sound saved to DB");
  event.preventDefault();

  //request to server to add a new username/password
  axios.post("/user/sound", {
    soundId: event.target.value
  });
};

const style = {
  marginTop: "25px",
  display: "inline-block",
  marginLeft: "25px"
};

const AudioItem = ({ audio }) => {
  return (
    <div style={style}>
      <Card>
        <CardTitle>{audio.name}</CardTitle>
        <CardImg top src={audio.images["waveform_m"]} />
        <CardBody>
          <CardText>
            <ReactAudioPlayer src={audio.previews[`preview-hq-mp3`]} controls />
          </CardText>
          <Button value={audio.id} onClick={handleSavedSound}>
            Save Sound
          </Button>
          {console.log(audio.id)}
        </CardBody>
      </Card>
    </div>
  );
};

export default AudioItem;
