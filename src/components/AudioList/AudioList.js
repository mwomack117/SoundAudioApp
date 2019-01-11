import React from "react";
import AudioItem from "../AudioItem";

const AudioList = ({ audios }) => {
  const renderedList = audios.map(audio => {
    return <AudioItem audio={audio} />;
  });

  return <div>{renderedList}</div>;
};

export default AudioList;
