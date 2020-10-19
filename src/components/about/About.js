import React, { Component } from 'react';
import meImg from '../../images/me.jpeg';
import blocksImg from '../../images/blocks.png';
import emailImg from '../../images/email.png';
import linkedinImg from '../../images/linkedin.svg';
import githubImg from '../../images/github.svg';
import keyboardImg from '../../images/keyboard.png';
import './About.css';

class About extends Component {

  render() {
    return (
    <div id='about-id' >
      <div id='details-id'>
        <img id='meImg' src = {meImg} alt='me'/>
        <adress id='adress'>
          <div className='adressPlace'>
            <img src={blocksImg} alt='adress'/>
              <a href='https://www.google.com/maps/@?api=1&map_action=map&center=46.770439%2c23.591423&zoom=13'>
                Cluj-Napoca, Romania
              </a>
          </div>
          <div className='adressPlace'>
            <img src={emailImg} alt='email'/><a href='mailto: doflada@gmail.com'>doflada@gmail.com</a>
          </div>
          <div className='adressPlace'>
            <img src={linkedinImg} alt='linkedin'/><a href='https://www.linkedin.com/in/dan-ilea-04b45a40'>linkedin.com/doflada</a>
          </div>
          <div className='adressPlace'>
            <img src={githubImg} alt='github'/><a href='https://github.com/doflada'>github.com/doflada</a>
          </div>
        </adress>
        <div id='meTitle'> Full Stack Developer</div>
      </div>

      <div id='train-id'>
        <table><thead><tr><th colSpan='2'>Developer trainning:</th></tr></thead>
          <tbody>
            <tr><td rowSpan='2'>At Udemy.com:</td><td>- Complete WEB Developer 2020</td></tr>
            <tr><td>- Learn to Code in Python 3: <br/> Programming beginner to advanced</td></tr>
          </tbody>
        </table>

        <table><thead><tr><th>Education:</th></tr></thead>
          <tbody>
            <tr><td>- Faculty of Electrotechnics</td></tr>
            <tr><td>- High School of Informatics</td></tr>
          </tbody>
        </table>
      </div>

      <div id='bott-id'>
          <table>
            <thead>
              <tr><th> Front End technologies: </th><th> Back End technologies: </th></tr>
            </thead>
            <tbody>
              <tr><td> - HTML, CSS, Javascript </td><td> - Node.js, Express.js  </td></tr>
              <tr><td> - React, Redux          </td><td> - PostreSQL, MariaDB   </td></tr>
              <tr><td> - NPM, Node.js          </td><td> - API, Postman         </td></tr>
              <tr><td> - Http, Ajax, JSON      </td><td>                        </td></tr>
            </tbody>
          </table>
          <img id='kbd-id' src={keyboardImg} alt='keyboard' />
          <div id='cv-id'>
            - I have worked for more than 30 years, a few of them as a programmer ( Python, Java, FoxPro, Dbase, Cobol )<br/>
            - I worked in many IT releated fields<br/>
            - I have experience in organizational and executive functions as well as in leadership and management functions;
            I have organizational skills, attention to detail, the desire to learn continuously and I am open to new challenges
          </div>
      </div>
	  </div>
    )
  }
}

export default About;
