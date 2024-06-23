import React from "react";
import "./AppText.css";

export default function AppText({
  children,
  fontSize = 69,
  textAlign = "center",
  classNameCustom,
  fontName = "zen-antque-regular",
  dot,
}) {
  if (classNameCustom) {
    classNameCustom = `${fontName} app-text ${classNameCustom} ${dot}`;
  } else {
    classNameCustom = `${fontName} app-text app-text-anim-no-move  ${dot}`;
  }

  return (
    <p
      className={classNameCustom}
      style={{ fontSize: fontSize, textAlign: textAlign }}
    >
      {children}
    </p>
  );
}
