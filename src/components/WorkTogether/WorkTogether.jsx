import React from "react";
import { Box, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import colors from "../../config/colors";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import "./WorkTogether.css";

export default function WorkTogether() {
  return (
    <Box
      className="worktogether-dev"
      bg={colors.black}
      pt={[40, 40, 40, 40, 156]}
      px={[0, 0, 0, 0, 0, 120]}
    >
      <VStack>
        <Divider></Divider>
        <Text
          className="red-hat-text"
          color={colors.dark_gray}
          fontSize="1.75rem"
          mt={[40, 40, 100, 155]}
          fontWeight={600}
        >
          Tell Us About Your Project
        </Text>
        <Text
          className="zen-antque-regular"
          color={colors.white}
          fontSize={["3rem", "3.5rem", "4rem", "3.75rem", "4.5rem", "5rem"]}
        >
          Let's work together.
        </Text>
        <HStack spacing={10}>
          <Text
            className="zen-antque-regular"
            color={colors.orange}
            fontSize={["4rem", "4.25rem", "5rem", "5rem", "6.2rem", "6.645rem"]}
          >
            Schedule a Call
          </Text>
          <div className="arrow-container">
            <ArrowForwardIcon
              className="arrow"
              color={colors.white}
              boxSize={["30px", "40px", "40px", "80px"]}
            ></ArrowForwardIcon>
          </div>
        </HStack>
      </VStack>
    </Box>
  );
}
