import React, { Component } from 'react';
import "./About.css";
import sam_profile_pic from "../assets/sam_profile_pic.jpeg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={sam_profile_pic}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Sam Capodicci</div>
            <div className="brief_description">
            <p>Computer science and programming are what I love to do. My favorite way to get practice is by writing software for my friends' passion projects! Ask me about my Unity games or fleet of Discord bots.</p>
            <p>I also enjoy the arts. I am currently Assistant Director for a theater program at my school, University of Notre Dame, and I have been a lead actor and finalist in speech contests. I am a hobbyist digital artist and occasionally sell my work online!</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}