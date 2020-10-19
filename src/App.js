import React, { Component } from 'react';
import HeaderApp from './components/header/HeaderApp';
import ContentApp from './components/content/ContentApp';
import About from './components/about/About';
import FooterApp from './components/footer/FooterApp';

import sunImage from './images/sun.png';
import moonImage from './images/moon.png';
import cloudImage from './images/cloud.png';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      aboutState: false
    };
  };

  handleMouseMove = (e) => {
    let appEl = document.getElementById('app-id');
    let mouseSunEl = document.getElementById('mouse-sun');
    let mouseMoonEl = document.getElementById('mouse-moon');
    let navBarEl = document.getElementById('nav-bar-id');
    let cloudEl = document.getElementById('cloud-id');

    if ( e.clientY > 10 && e.clientY < (appEl.clientHeight - 55) && e.clientX > 10 && e.clientX < (appEl.clientWidth - 40)) {
      if ( e.clientY < appEl.clientHeight / 2 ) {
        mouseSunEl.style.display = 'block';
        mouseSunEl.style.top = e.clientY+10+'px';
        mouseSunEl.style.left = e.clientX+10+'px';
        mouseMoonEl.style.display = 'none';
        if ( e.clientY < 100 && (e.clientX > appEl.clientWidth - navBarEl.clientWidth) ) {
          cloudEl.style.display = 'block';
          cloudEl.style.left = e.clientX-70+'px';
        } else {
          cloudEl.style.display = 'none';
        }
      } else {
        mouseSunEl.style.display = 'none';
        mouseMoonEl.style.display = 'block';
        mouseMoonEl.style.top = e.clientY+10+'px';
        mouseMoonEl.style.left = e.clientX+10+'px';
      }
    } else {
      mouseSunEl.style.display = 'none';
      mouseMoonEl.style.display = 'none';
    }
  };

  changeAboutState = (aboutState) => {
    this.setState({
      aboutState: aboutState
    })
  };

  render() {
    return (
      <div id='app-id' onMouseMove = {this.handleMouseMove}>
        <HeaderApp changeAboutState = {this.changeAboutState} />
        { this.state.aboutState
           ? <About />
           : <ContentApp />
        }
        <FooterApp />
        <img id = 'mouse-sun' src = {sunImage} alt = 'mouse-sun'></img>
        <img id = 'mouse-moon' src = {moonImage} alt = 'mouse-moon'></img>
        <img id = 'cloud-id' src = {cloudImage} alt = 'cloud'></img>
      </div>
    );
  }
}

export default App;
