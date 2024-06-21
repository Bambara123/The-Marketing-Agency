import { VStack, Text } from "@chakra-ui/react";
import React from "react";
import colors from "../../config/colors";
import AppText from "../AppText/AppText";

export default function ServiceMoreCard({
  title,
  subtitle,
  desc1,
  desc2,
  desc3,
}) {
  return (
    <div className="serviceMoreCard" style={{ width: "50%" }}>
      <VStack align="start">
        <Text
          textAlign="left"
          color={colors.white}
          fontSize={40}
          className="zen-antque-regular"
        >
          {title}
        </Text>

        <Text
          textAlign="left"
          color={colors.white}
          fontSize={15}
          className="red-hat-text-bold"
        >
          {subtitle}
        </Text>

        <Text
          textAlign="left"
          color={colors.dark_gray}
          className="red-hat-text"
          fontSize={16}
        >
          {desc1}
        </Text>
        <Text
          textAlign="left"
          color={colors.dark_gray}
          className="red-hat-text"
          fontSize={16}
        >
          {desc2}
        </Text>
        <Text
          textAlign="left"
          color={colors.dark_gray}
          className="red-hat-text"
          fontSize={16}
        >
          {desc3}
        </Text>
        <AppText>Learn More</AppText>
      </VStack>
    </div>
  );
}
