import React from "react";
import "./AppText.css";

export default function AppText({
  children,
  fontSize,
  textAlign = "center",
  classNameCustom,
}) {
  if (classNameCustom) {
    classNameCustom = `zen-antque-regular app-text ${classNameCustom}`;
  } else {
    classNameCustom = `zen-antque-regular app-text app-text-anim-no-move`;
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
