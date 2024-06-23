import React from "react";
import { Box, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import colors from "../../config/colors";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import "./WorkTogether.css";

export default function WorkTogether() {
  return (
    <Box className="worktogether-dev" bg={colors.black} pt={156} px={"120px"}>
      <VStack>
        <Divider></Divider>
        <Text
          className="red-hat-text"
          color={colors.dark_gray}
          fontSize={27}
          mt={155}
        >
          Tell Us About Your Project
        </Text>
        <Text
          mt={20}
          className="zen-antque-regular"
          color={colors.white}
          fontSize={80}
        >
          Let's work together.
        </Text>
        <HStack spacing={10}>
          <Text
            className="zen-antque-regular"
            color={colors.orange}
            fontSize={106}
          >
            Schedule a Call
          </Text>
          <div className="arrow-container">
            <ArrowForwardIcon
              className="arrow"
              color={colors.white}
              boxSize={"80px"}
            ></ArrowForwardIcon>
          </div>
        </HStack>
      </VStack>
    </Box>
  );
}
