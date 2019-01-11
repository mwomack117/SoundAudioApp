import React from "react";
import ReactAudioPlayer from "react-audio-player";

const AudioItem = ({ audio }) => {
  return (
    <div>
      <label>{audio.name}</label>
      <br />
      <ReactAudioPlayer src={audio.previews[`preview-hq-mp3`]} controls />
      <hr />
    </div>
  );
};

export default AudioItem;
