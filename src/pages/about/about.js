import React from "react"
import { useMediaQuery } from 'react-responsive'
import  "./about.scss"

import Header from "../../components/header/header"
import resume from "../../assets/images/about/CV2021.pdf"
import baptistePhoto from "../../assets/images/about/baptiste.jpg"


const About = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  return(
    <>
      { isMobile ?
        <>
          <Header/>
          <div className="aboutMobile">
            <div className="aboutMobile__presentation-wrapper">
              <p className="aboutMobile__presentation">Hi i’m Baptiste Barel, a fourth year student at Hetic (High Technologies Studies on Information and Communication) in the Grande Ecole program. I'm studying development, design, marketing and communication.</p>
            </div>
            <div className="aboutMobile__photo-wrapper">
              <img className="aboutMobile__photo" src={baptistePhoto} alt="Baptiste Barel" />
            </div>
            <div className="aboutMobile__resume-wrapper">
              <a className="aboutMobile__resume" href={resume} target="_blank" rel="noreferrer">Resume</a>
            </div>
            <div className="aboutMobile__socials">
              <div className="aboutMobile__socials-line">
                <a href="https://www.linkedin.com/in/baptiste-barel-2089b3151/" target="_blank" rel="noreferrer" className="aboutMobile__socials-link">Linkedin</a>
                <a href="mailto:baptiste.barel@outlook.fr" target="_blank" rel="noreferrer" className="aboutMobile__socials-link">Mail</a>
              </div>
              <div className="aboutMobile__socials-line">
                <a href="https://www.behance.net/baptistebarel" target="_blank" rel="noreferrer" className="aboutMobile__socials-link">Behance</a>
                <a href="https://github.com/Baptistebarel" target="_blank" rel="noreferrer" className="aboutMobile__socials-link">Github</a>
              </div>
            </div>
          </div>
        </>
      :
      <>
        <Header />
        <div className="about">
          <div className="about__top">
            <div className="about__top__firstSection">
              <div className="top__firstSection-wrapper">
                <p className="firstSection-left-presentation">Hi i’m Baptiste Barel, a fourth year student at Hetic (High Technologies Studies on Information and Communication) in the Grande Ecole program. I'm studying development, design, marketing and communication.</p>
              </div>
            </div>
            <div className="about__top__secondSection">
              <div className="top__secondSection-firstLine">
                <div className="placeholderDiv"></div>
              </div>
              <div className="top__secondSection-secondLine">
                <div className="placeholderDiv"></div>
              </div>
            </div>
            <div className="about__top__thirdSection"></div>
          </div>
          <div className="about__bottom">
            <div className="about__bottom__firstSection">
              <div className="bottom__firstSection-wrapper">
                <div className="bottom__firstSection__socials">
                  <div className="bottom__firstSection__socials-Line">
                    <a href="https://www.linkedin.com/in/baptiste-barel-2089b3151/" target="_blank" rel="noreferrer" className="bottom__firstSection__socials-link">Linkedin</a>
                    <a href="mailto:baptiste.barel@outlook.fr" target="_blank" rel="noreferrer" className="bottom__firstSection__socials-link">Mail</a>
                  </div>
                  <div className="bottom__firstSection__socials-Line">
                    <a href="https://www.behance.net/baptistebarel" target="_blank" rel="noreferrer" className="bottom__firstSection__socials-link">Behance</a>
                    <a href="https://github.com/Baptistebarel" target="_blank" rel="noreferrer" className="bottom__firstSection__socials-link">Github</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="about__bottom__secondSection">
              <div className="bottom__secondSection__wrapper">
                <div className="bottom__secondSection__imgWrapper"></div>
              </div>
            </div>
            <div className="about__bottom__thirdSection">
              <div className="bottom__thirdSection__wrapper">
                <div className="bottom__thirdSection__linkWrapper">
                  <a href={resume} target="_blank" rel="noreferrer" className="bottom__thirdSection__resume">Resume</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      }
    </>
  )
}
 
export default About;