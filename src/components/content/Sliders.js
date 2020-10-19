import React, { Component } from 'react';
import './Sliders.css';

class Sliders extends Component {

  render() {
    const { ids, slideNr, slideName, slideLink, title, description } = this.props;
    return (
        <div id = {ids} className='slide-projects fade'>
            <a className = 'linked-none' href = {slideLink}> <div className='title-projects'>{slideNr} - {title}</div></a>
            <a className = 'linked-none' href = {slideLink}>
              <img className='slide-images' src={slideName} alt='slides' />
            </a>
            <div className='descr-projects'>{description}</div>
        </div>
    )
  }
}

export default Sliders;
