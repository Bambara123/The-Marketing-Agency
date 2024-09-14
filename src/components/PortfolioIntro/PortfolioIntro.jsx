import React from "react";
import { Box, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import colors from "../../config/colors";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import "./PortfolioIntro.css";

export default function PortfolioIntro() {
  return (
    <Box className="worktogether-dev" bg={colors.black} pt={250} px={"120px"}>
      <VStack>
        <Text className="zen-antque-regular" color={colors.white} fontSize={70}>
          Delivering Impactful Solutions
        </Text>
        <HStack spacing={10}>
          <Text
            className="zen-antque-regular"
            color={colors.orange}
            fontSize={85}
          >
            See Our Work in Action
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
}
