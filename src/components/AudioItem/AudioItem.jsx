import React, { Component } from "react";
import ReactAudioPlayer from "react-audio-player";
import axios from "axios"; 

class AudioItem extends Component {
 constructor(props){
   super(props)
 }
 handleSavedSound = event => {
  console.log("Sound saved to DB");
  event.preventDefault();
  console.log(this.props.audio);


  //request to server to add a new username/password
  axios.post(`/user/sound/${this.props.userId}`, {
    soundId: this.props.audio.id,
    preview: this.props.audio.previews[`preview-hq-mp3`],
    name: this.props.audio.name
  });
};
  render (){
  return (
    <div>
      <label>{this.props.audio.name}</label>
      <br />
      <ReactAudioPlayer src={this.props.audio.previews[`preview-hq-mp3`]} controls />
      <button value={this.props.audio.id} onClick={this.handleSavedSound}>
        Save Sound
      </button>
     
      <hr />
    </div>
  );
};
}

export default AudioItem;
