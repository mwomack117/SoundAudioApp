import React from "react";
import SavedAudioItem from "../AudioItem/SavedAudioItem";


const SavedAudioList = ({ audios }) => {
  const renderedList = audios.map(audio => {
    return <SavedAudioItem audio={audio} />;
  });

  return <div>{renderedList}</div>;
};

export default SavedAudioList;
