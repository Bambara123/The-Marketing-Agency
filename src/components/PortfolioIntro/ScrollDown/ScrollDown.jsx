import React from "react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { useEffect, useRef } from "react";
import "./ScrollDown.css"; // Ensure you have your CSS file

export default function ScrollDown() {
  return (
    <div className="scroll-container">
      <div className="scroll-container-outer">
        <div className="arrow-container-inner">
          <ArrowDownIcon boxSize={12} color="white" />
        </div>
      </div>
    </div>
  );
}
