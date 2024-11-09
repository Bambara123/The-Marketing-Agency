import React from "react";
import "./AppText.css";
import {Text} from "@chakra-ui/react";

export default function AppText({
  children,
  fontSize = [],
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
    <Text
      className={classNameCustom}
      fontSize={[fontSize[0], fontSize[1]]}
      style={{ textAlign: textAlign }}
    >
      {children}
    </Text>
  );
}
