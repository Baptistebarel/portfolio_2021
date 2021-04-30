import React from "react"
import { useMediaQuery } from 'react-responsive'
import  "./home.scss"

import Header from "../../components/header/header"
import json from "../../projects.json"
import commerce from "../../assets/images/projects/commerce.png"
import culture from "../../assets/images/projects/culture.png"
import horror from "../../assets/images/projects/horror.png"
import webGL from "../../assets/images/projects/webGL.png"

const Home = () => {

  const data = json
  let imageUrl

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return(
    <>
      {isTabletOrMobile ? 
        <div className="messageWrapper">
          <p className="responsiveMessage" >Responsive is under development, please open the website in a desktop</p>
        </div>
      :
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
                } else {
                  imageUrl = culture
                }
                return(
                  <div className="home__project">
                    <div className="home__project-left">
                      <h3 className="home__project-left__title">{project.title}</h3>
                      <p className="home__project-left__description">{project.description}</p>
                      <span className="home__project-left__subtitle">Technologies :</span>
                      <div className="home__project-left__technologies">
                        {project.techno.map((techno, i) => 
                          <span className="home__project-left__technologie">{techno}</span>
                        )}
                      </div>
                      <a href={project.url} target="_blank" rel="noreferrer" className="home__project-left__button">{project.isUnderConstruction ? "Coming soon" : "Visit website"}</a>
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
      }
    </>
  )
}
 
export default Home;