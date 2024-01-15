import React from "react";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
import './Plans.css'
const Plans = () => {
  return (
    <div className="plans-container">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      
      <div className="programs-header" style={{ gap: "2rem" }}>
      </div>
    </div>
  );
};

export default Plans;