import React from "react";
import AudioItem from "../AudioItem/AudioItem";


const AudioList = ({ audios, userId, updateSounds }) => {
  const renderedList = audios.map(audio => {
    return <AudioItem userId={userId} audio={audio} updateSounds={updateSounds} />;
  });

  return <div>{renderedList}</div>;
};

export default AudioList;
