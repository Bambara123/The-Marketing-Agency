import React from "react";
import { Box, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import colors from "../../config/colors";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import "./PortfolioIntro.css";
import ScrollDown from "./ScrollDown/ScrollDown";

export default function PortfolioIntro() {
  return (
    <Box className="worktogether-dev" pt={250} px={"120px"}>
      <VStack spacing={10}>
        <Text className="zen-antque-regular" color={colors.white} fontSize={70}>
          Delivering Impactful Solutions
        </Text>
        <Text
          className="zen-antque-regular"
          color={colors.orange}
          fontSize={85}
        >
          See Our Work in Action
        </Text>

        <ScrollDown></ScrollDown>
      </VStack>
    </Box>
  );
}
