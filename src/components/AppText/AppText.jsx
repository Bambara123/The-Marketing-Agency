import React from "react";
import "./AppText.css";

export default function AppText({ children, fontSize }) {
  return (
    <p className="zen-antque-regular app-text" style={{ fontSize: fontSize }}>
      {children}
    </p>
  );
}
