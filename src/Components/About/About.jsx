import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt='about-img' className='about-img' />
        <img src={play_icon} alt='play-icon' className='play-icon' onClick={()=>
          {setPlayState(true)}
        } />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomarrow's Leaders Today</h2>
        <p>Embark on a transformative educational journey with our
            university's comprehensive education programs.our cutting edge
            is designed to empower students with knowledge, skills, and
            experiences to excel in the dynamic field of education.
        </p>
        <p>
            With a focus on innovation ,hands-on learning, and personalized mentorship,
            our programs prepare aspiring educators to make a meaningful impact in classroom
            ,schools and community.
        </p>
        <p>
            Wheather you aspire to become a teacher,administartor,educator, or counselor
            our diverse range of program offers the perfect pathway to achieve
            your goals and unlock your full potential in shaping the future of education.
        </p>
      </div>
    </div>
  )
}

export default About
