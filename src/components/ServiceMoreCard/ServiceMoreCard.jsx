import { VStack, Text, Box } from "@chakra-ui/react";
import React from "react";
import colors from "../../config/colors";
import AppText from "../AppText/AppText";
import "./ServiceMoreCard.css";

export default function ServiceMoreCard({
  title,
  subtitle,
  desc1,
  desc2,
  desc3,
}) {
  return (
    <Box
      style={{ width: "550px" }}
      p={10}
      bg={colors.card_black}
      borderRadius={15}
      className="service-more-card"
    >
      <VStack align="start" spacing={8}>
        <Text
          textAlign="left"
          color={colors.white}
          fontSize={39}
          className="zen-antque-regular"
          lineHeight={1}
        >
          {title}
        </Text>

        <Text
          textAlign="left"
          color={colors.white}
          fontSize={16}
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
        <AppText fontSize={23}>Learn More</AppText>
      </VStack>
    </Box>
  );
}
