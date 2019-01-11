import React from "react";
import ReactAudioPlayer from "react-audio-player";
import axios from "axios";

const handleSavedSound = event => {
  console.log("Sound saved to DB");
  event.preventDefault();

  //request to server to add a new username/password
  axios.post("/user/sound", {
    soundId: event.target.value
  });
};

const AudioItem = ({ audio }) => {
  return (
    <div>
      <label>{audio.name}</label>
      <br />
      <ReactAudioPlayer src={audio.previews[`preview-hq-mp3`]} controls />
      <button value={audio.id} onClick={handleSavedSound}>
        Save Sound
      </button>
      {console.log(audio.id)}
      <hr />
    </div>
  );
};

export default AudioItem;
