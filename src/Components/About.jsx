import React, { useEffect } from 'react'
import Footer from './Footer'
import AboutPageImg from './img/AboutPage.png'
import AboutWevDev from './img/AboutWebDev.png'
import WebDes from './img/AboutWebDes.png'
import ResDes from './img/AboutResDes.png'
import BugFix from './img/AboutBugFix.png'
// import InstagramIcon from '@mui/icons-material/Instagram';
// import GitHubIcon from '@mui/icons-material/GitHub';

const AboutImg = () => {
  return (
    <>
      <div id="AboutPageImage" data-aos="fade-in">
        <img src={AboutPageImg} alt="Error" />
      </div>
    </>
  )
}
const About = () => {
  useEffect(() => {
    document.title = ' AR7 - about'
    window.scrollTo(0, 0)
  }, [])
  const year = new Date().getFullYear()
  const myExperience = year - 2021
  const myAge = year - 2001
  return (
    <>
      <section id="AboutPage">
        <div id="Container">
          <div id="AboutPageContentWrapper">
            <AboutImg />
            <div id="AboutPageDesc">
              <div id="Desc" data-aos="fade-right">
                <h2>About Me <span id='logo'></span></h2>
                <p>
                  Hi there, Hope you are doing well. I am Aditya. I am a Junior Full
                  stack web developer. I love developing web Site. I have more than {myExperience} years of
                  experinece as a Junior Full stack web developer. I have Designed and Developed
                  many websites. I am
                  pretty much comfortable doing these things.
                </p>
              </div>
              <div data-aos="fade-left" id="AboutTable">
                <table border="0">
                  <tbody>
                    <tr>
                      <th>
                        <img draggable="false" src={AboutWevDev} alt="Error" />
                      </th>
                    </tr>
                    <tr>
                      <th>
                        <img draggable="false" src={WebDes} alt="Error" />
                      </th>
                    </tr>
                    <tr>
                      <th>
                        <img draggable="false" src={ResDes} alt="Error" />
                      </th>
                    </tr>
                    <tr>
                      <th>
                        <img draggable="false" src={BugFix} alt="Error" />
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div><a href='https://ar7-personal-blog.herokuapp.com/about'>Some educational ans co-curricular achievements</a></div>
        </div>
      </section>
      <Footer />
    </>
  )
}
export default About
// export { AboutImg }
