import React from "react";
import "../Component.css";
import file from './..\\img\\file.mp4';

export default function Carousel() {
  return (
    <>
      <div className="div_vid">
        <video  className="videoTag" autoPlay loop muted>
          <source src={file} type="video/mp4" />
        </video>
        <div className="carousel-content">
        <h4>Vasantdada Prathisthan College</h4>
        <h4>College Of Engineering</h4>
        <h1>Techathon</h1>
      </div>
      </div>
      
    </>
  );
}