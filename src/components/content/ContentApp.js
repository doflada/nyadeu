import React, { Component } from 'react';
import SlideProjects from './SlideProjects';
import keyboardImg from '../../images/keyboard.png';
import './ContentApp.css';

let slideIndex = 0;
let vtime;

class ContentApp extends Component {

  showSlides = (n) => {
    clearTimeout(vtime);
    if ( isNaN(n) ) {
        n = slideIndex
      } else {
        slideIndex = n-1
      };
      let i;
      let slides = document.getElementsByClassName("slide-projects");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      slideIndex++;

      if (slideIndex > slides.length) {
        slideIndex = 1;
      };
      if (slideIndex < 1) {
        slideIndex = slides.length;
      };
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      };
      if (slides.length > 0) {
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        vtime = setTimeout(this.showSlides, 3000);
      };
  };

  componentDidMount() {
    this.showSlides(1);
  };

  render() {
      return (
        <div id='content-app-id' >
          <div id='left-content-id'>
          <img id='keyboard-id' src={keyboardImg} alt='keyboard' />
            <div id='firm-id' >
              <p>NYAD Enterprise</p>
            </div>
          </div>
          <div id='right-content-id'>
            <SlideProjects showSlides = {this.showSlides}/>
          </div>
    	  </div>
      )
  }
}

export default ContentApp;
