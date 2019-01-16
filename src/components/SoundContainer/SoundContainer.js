import React, { Component } from "react";
import "./SoundContainer.css";

//sample layout on landing/login
const soundCard = {
  imgSrc: "http://placehold.jp/200x100.png"
};
const soundCards = [
  soundCard,
  soundCard,
  soundCard,
  soundCard,
  soundCard,
  soundCard,
  soundCard,
  soundCard,
  soundCard,
  soundCard,
  soundCard,
  soundCard,
  soundCard,
  soundCard,
  soundCard
];

class Sound extends Component {
  render() {
    return (
      <div className="sound">
        <div className="sound-div">
          {soundCards.map(soundCard => {
            return <img src={soundCard.imageSrc} alt="placeholder" />;
          })}
        </div>
      </div>
    );
  }
}

export default Sound;
