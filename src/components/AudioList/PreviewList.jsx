import React from "react";
import PreviewItem from "../AudioItem/PreviewItem";

const PreviewList = ({ audios, userId }) => {
  const renderedList = audios.map(audio => {
    return <PreviewItem userId={userId} audio={audio} />;
  });

  return <div>{renderedList}</div>;
};

export default PreviewList;
