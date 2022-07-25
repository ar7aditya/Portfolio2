import React from 'react'
import { Link } from 'react-router-dom'
import AboutSrc from './img/ar7/aboutme.jpeg'

const ShortAbout = () => {
  window.onload=function(){
    const mainCard = document.querySelector('#AboutImage')
  mainCard.addEventListener('mouseover', (event) => {
    const xAxis = (window.innerWidth / 2 - event.pageX) / 15
    const yAxis = (window.innerHeight / 2 - event.pageY) / 15
    mainCard.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`
  })
  mainCard.addEventListener('mouseleave', () => {
    mainCard.style.transform = 'rotateX(0deg) rotateY(0deg)'
  })
  }
 
  const year = new Date().getFullYear()
  const myExperience = year - 2021
  return (
    <>
      <section id="About">
        <div id="Container">
          <div id="AboutCOntentWrapper">
            <div id="AboutDesc" data-aos="fade-up">
              <h2>Few Words About Me</h2>
              <p>
                Hi there, Hope you are doing well. I am Aditya rana. I am a Junior Full Stack
                web developer. I love developing web applications. I
                have more than {myExperience} years of experinece as a web
                developer. I have Designed and Developed many website.
              </p>
              <p>
              Always excited to learn new thing and latest technology & currently have a curiosity to take a deep dive into making of computers(hardware , software , operating system , networking , GUI etc.)
              And Love to explore new domains like AI, ML
              </p>
              <Link to="/about">Read More</Link>
            </div>
            <div id="AboutImage" data-aos="fade-down">
              <img src={AboutSrc} alt="Error" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default ShortAbout