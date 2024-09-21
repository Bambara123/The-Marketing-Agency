import React from "react";
import "./ScrollDown.css";

export default function ScrollDown({ onClick }) {
  return (
    <div className="scroll-container" onClick={onClick}>
      <div className="arrow-container-scroll animated fadeInDown">
        <div className="arrow-inside">
          <i className="fa fa-angle-down"></i>
        </div>
        <div className="arrow-1-1 animated hinge infinite zoomIn"></div>
      </div>
    </div>
  );
}
