import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

function Experience() {
  return (
    <section id="experience">
      <h5>Vilka Färdigheter Har Jag?</h5>
      <h2>Mina Erfarenheter</h2>

      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Frontend Utveckling</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Erfaren</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Erfaren</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Erfaren</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Erfaren</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Erfaren</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Material-UI</h4>
                <small className="text-light">Erfaren</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Typescript</h4>
                <small className="text-light">Mellanliggande</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Razor Pages</h4>
                <small className="text-light">Erfaren</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience-backend">
          <h3>Backend Utveckling</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>C#/.NET</h4>
                <small className="text-light">Erfaren</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>MSSQL</h4>
                <small className="text-light">Erfaren</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>SQLITE</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>Node.JS</h4>
                <small className="text-light">Mellanliggande</small>
              </div>
            </article>

            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Mellanliggande</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
