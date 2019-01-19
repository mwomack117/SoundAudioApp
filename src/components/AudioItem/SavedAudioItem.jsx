import React, { Component } from "react";
import ReactAudioPlayer from "react-audio-player";

class SavedAudioItem extends Component {
 constructor(props){
   super(props)
 } 

 componentDidMount () {
  
 
 }
 
 
  render (){
  return (
    <div>
      <label>{this.props.audio.name}</label>
      <br />
      <ReactAudioPlayer src={this.props.audio.preview} controls />
      
      <hr />
    </div>
  );
};
}

export default SavedAudioItem;
