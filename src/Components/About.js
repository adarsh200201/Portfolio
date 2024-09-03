import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

function About() {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Adarsh Sharma</b> and I am from Bihar, India.
            I'm a <b>MERN stack web developer</b> and a pre-final year college student pursuing <b>Bachelor of Engineering in CSE </b>from <b>Marwadi Education Foundation's Group Of Institutions Rajkot</b> Gujarat. <br /><br />
            I have done an internship as a <b>Web developer</b> at Acmagreade which is a Skill Acqisition Platfrom .
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br /><br />
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br />
            Apart from coding I love to <b>listening music</b> and <b>Play Cricket.</b>
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true} />
          </Tilt>
        </div>

      </div>

      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>


      
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='Java' />
        <Skills skill='Python' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap' />
        {/* <Skills skill='Css'/> */}

      </div>
    </>
  );
}

export default About