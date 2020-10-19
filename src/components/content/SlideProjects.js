import React, { Component } from 'react';
import Sliders from './Sliders';
import { slidesDetails } from './slidesDetails';

import './SlideProjects.css';

class SlideProjects extends Component {

  render() {

    const currentSlide = (n) => {
      this.props.showSlides(n);
    }

    let slideDots = [];

    const cardSlider = slidesDetails.map((slide, i) => {
        slideDots.push(
          <span key = {i+1} className='dot' onClick = {() => {currentSlide(i+1)}}> {i+1} </span>
        );
     return (
        <Sliders
            key =  {slidesDetails[i].id}
            slideNr = {slidesDetails[i].id}
            slideName= {slidesDetails[i].slideName}
            slideLink= {slidesDetails[i].slideLink}
            title = {slidesDetails[i].title}
            description =  {slidesDetails[i].description}
          /> )
    });

    return (
      <div id='slide-id'>
        { cardSlider }
        <div className='slide-position'>
          {slideDots}
        </div>
      </div>
    )
  }
}

export default SlideProjects;
