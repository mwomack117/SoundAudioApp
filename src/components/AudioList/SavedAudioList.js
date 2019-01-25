import React from "react";
import SavedAudioItem from "../AudioItem/SavedAudioItem";


const SavedAudioList = ({ audios, userId, updateSounds }) => {

  const renderedList = audios.map(audio => {
    return <SavedAudioItem userId={userId} audio={audio} updateSounds={updateSounds} />;
  });

  return <div>{renderedList}</div>;
};

export default SavedAudioList;
