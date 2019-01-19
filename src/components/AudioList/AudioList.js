import React from "react";
import AudioItem from "../AudioItem/AudioItem";


const AudioList = ({ audios, userId }) => {
  const renderedList = audios.map(audio => {
    return <AudioItem userId={userId} audio={audio} />;
  });

  return <div>{renderedList}</div>;
};

export default AudioList;
