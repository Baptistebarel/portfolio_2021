import React from "react"
import  "./home.scss"

import Header from "../../components/header/header"
import json from "../../projects.json"
import commerce from "../../assets/images/projects/commerce.png"
import culture from "../../assets/images/projects/culture.png"
import horror from "../../assets/images/projects/horror.png"
import webGL from "../../assets/images/projects/webGL.png"
import comEcole from "../../assets/images/projects/comEcole.png"
import coSafe from "../../assets/images/projects/coSafe.png"
import enki from "../../assets/images/projects/enki.png"
import wastic from "../../assets/images/projects/wastic.png"

const Home = () => {

  const data = json
  let imageUrl

  return(
    <>
      <Header />
      <div className="home">
        <div className="home__left-column">
          <div className="home__left__square"></div>
          <div className="home__left__square"></div>
          <div className="home__left__square"></div>
        </div>
        <div className="home__middle-column">
          {data.map((project, i) => {
            if(project.title === "E-commerce website"){
              imageUrl = commerce
            } else if(project.title === "Horror movies"){
              imageUrl = horror
            } else if(project.title === "WebGL Experience"){
              imageUrl = webGL
            } else if(project.title === "Immaterial culture"){
              imageUrl = culture
            } else if(project.title === "Com'école"){
              imageUrl = comEcole
            } else if(project.title === "CoSafe"){
              imageUrl = coSafe
            } else if(project.title === "Enki"){
              imageUrl = enki
            } else {
              imageUrl = wastic
            }
            return(
              <div className="home__project">
                <div className="home__project-left">
                  <h3 className="home__project-left__title">{project.title}</h3>
                  <p className="home__project-left__description">{project.description}</p>
                  <span className="home__project-left__subtitle">{project.expertise === "dev" ? "Technologies :" : "Themes :"}</span>
                  <div className="home__project-left__technologies">
                    {project.techno.map((techno, i) => 
                      <span className="home__project-left__technologie">{techno}</span>
                    )}
                  </div>
                  <a href={project.url} target="_blank" rel="noreferrer" className="home__project-left__button">{project.isUnderConstruction ? "Coming soon" : project.expertise === "dev" ? "Visit website" : "Prototype"}</a>
                </div>
                <div className="home__project-right">
                  <img className="home__project-left__img" src={imageUrl} alt="Project preview"/>
                </div>
              </div>
            )
          })}
        </div>
        <div className="home__right-column">
          <div className="home__right__square"></div>
          <div className="home__right__square"></div>
          <div className="home__right__square"></div>
          <div className="home__right__square"></div>
        </div>
      </div>
    </>
  )
}
 
export default Home;