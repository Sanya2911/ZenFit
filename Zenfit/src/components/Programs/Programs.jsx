import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";
const Programs = () => {
  return (
    <div className="Programs" id="programs">
      {/* header */}
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>

      <div className="programs-categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            
            <p>{program.details}</p>

            {program.links && program.links.length > 0 && (
                    <ul>
                      {program.links.map((link, j) => (
                        <li key={j}>
                          <a href={link.to} target="_blank" rel="noopener noreferrer">
                            {link.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
            <div className="join-now">
            {program.scrollDownButton && (
                    <a href={program.scrollDownButton.to}>
                      <button className="scroll-down-button">{program.scrollDownButton.text}</button>
                    </a>
                  )}
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;