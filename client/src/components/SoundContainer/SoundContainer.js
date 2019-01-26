import React, { Component } from "react";
import "./SoundContainer.css";
import ReactAudioPlayer from "react-audio-player";
import AudioItem from "../AudioItem";

//sample layout on landing/login
// const soundCard = {
//   imgSrc: "http://placehold.jp/200x100.png"
// };
// const soundCards = [
//   soundCard,
//   soundCard,
//   soundCard,
//   soundCard,
//   soundCard,
//   soundCard,
//   soundCard,
//   soundCard,
//   soundCard,
//   soundCard,
//   soundCard,
//   soundCard,
//   soundCard,
//   soundCard,
//   soundCard
// ];

// class Sound extends Component {
//   render() {
//     return (
//       <div className="sound">
//         <div className="sound-div">
//           {soundCards.map(soundCard => {
//             return <img src={soundCard.imageSrc} alt="placeholder" />;
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// class Sound extends Component {
//   loginList = ({ audios }) => {
//     const renderedList = audios.map(audio => {
//       return <AudioItem audio={audio} />;
//     });
//     return { renderedList };
//   };

//   render() {
//     return <div>{this.renderedList}</div>;
//   }
// }

// export default Sound;
