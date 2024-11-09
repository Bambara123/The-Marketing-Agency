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
      p={10}
      bg={colors.card_black}
      borderRadius={15}
      className="service-more-card"
    >
      <VStack align="start" spacing={8}>
        <Text
          className="zen-antque-regular text-left-white-header"
          lineHeight={1}
        >
          {title}
        </Text>

        <Text
          color={colors.white}
          className="red-hat-text-bold text-left-normal"
        >
          {subtitle}
        </Text>

        <Text
          className="red-hat-text text-left-normal"
          color={colors.dark_gray}
          fontSize={["1.2rem", "1rem"]}
        >
          {desc1}
        </Text>
        <Text
          textAlign="left"
          color={colors.dark_gray}
          className="red-hat-text"
          fontSize={["1.2rem", "1rem"]}
        >
          {desc2}
        </Text>
        <Text
          textAlign="left"
          color={colors.dark_gray}
          className="red-hat-text"
          fontSize={["1.2rem", "1rem"]}
        >
          {desc3}
        </Text>
        <AppText fontSize={["1.5rem","1.5rem"]}>Learn More</AppText>
      </VStack>
    </Box>
  );
}
