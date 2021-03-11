/* eslint-disable react/prop-types */
import React from "react";
import { FaGithub, FaHome } from "react-icons/fa";
import CottonImg from "../../assets/Cotton.png";
import HoBImg from "../../assets/HouseOfBooks.png";
import EUImg from "../../assets/EUflag.png";
import AlgradeImg from "../../assets/AlGrade.png";
import "./Projects.scss";

const Projects = props => {
  const { mode } = props;
  return (
    <>
      <h1 className={`projects_title-${mode}`}>MY PROJECTS</h1>
      <div className={`projects-${mode}`}>
        <div className={`project-${mode}`}>
          <div className="image-container">
            <img className="project-img" src={CottonImg} alt="cotton" />
          </div>
          <div className="info-container">
            <div className="info-text">
              <h1 className="title">COTTON</h1>
              <p className="about">
                Cotton is online fashion web store made with traditional
                React.js, Redux and firebase authentication
              </p>
            </div>
            <div className="info-icons">
              <FaHome className="info-icon" />
              <FaGithub className="info-icon " />
            </div>
          </div>
        </div>
        <div className={`project-${mode}`}>
          <div className="image-container">
            <img className="project-img" src={HoBImg} alt="cotton" />
          </div>
          <div className="info-container">
            <div className="info-text">
              <h1 className="title">House of Books</h1>
              <p className="about">
                House of books is web store made with modern React.js, Context
                API and firebase authentication
              </p>
            </div>
            <div className="info-icons">
              <FaHome className="info-icon" />
              <FaGithub className="info-icon " />
            </div>
          </div>
        </div>
        <div className={`project-${mode}`}>
          <div className="image-container">
            <img className="project-img" src={EUImg} alt="cotton" />
          </div>
          <div className="info-container">
            <div className="info-text">
              <h1 className="title">Balkan C19 (demo)</h1>
              <p className="about">
                Covid-19 data for western Balkans, data provided by
                corona-api.com/countries (still unfinished)
              </p>
            </div>
            <div className="info-icons">
              <FaHome className="info-icon" />
              <FaGithub className="info-icon " />
            </div>
          </div>
        </div>
        <div className={`project-${mode}`}>
          <div className="image-container">
            <img className="project-img" src={AlgradeImg} alt="cotton" />
          </div>
          <div className="info-container">
            <div className="info-text">
              <h1 className="title">Al-Grade</h1>
              <p className="about">
                Al-Grade is fictional hotel&apos;s website with simple booking
                options made with React.js
              </p>
            </div>
            <div className="info-icons">
              <FaHome className="info-icon" />
              <FaGithub className="info-icon " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
