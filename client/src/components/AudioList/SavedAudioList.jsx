import React from "react";
import SavedAudioItem from "../AudioItem/SavedAudioItem";


const SavedAudioList = ({ audios, userId }) => {
  const renderedList = audios.map(audio => {
    return <SavedAudioItem userId={userId} audio={audio} />;
  });

  return <div>{renderedList}</div>;
};

export default SavedAudioList;
