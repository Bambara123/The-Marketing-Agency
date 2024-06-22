import React from "react";
import { Box, Flex, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import colors from "../../config/colors";
import "./WorkTogetherSmall.css";

export default function WorkTogetherSmall() {
  return (
    <Flex
      flexDirection="column"
      align="flex-end"
      justify="space-between"
      h={"100%"}
    >
      <Box>
        <Text
          textAlign="right"
          className="zen-antque-regular"
          color={colors.white}
          fontSize={23}
        >
          Let's work together.
        </Text>
        <HStack spacing={4} justify="right">
          <Text
            className="zen-antque-regular"
            color={colors.orange}
            fontSize={23}
          >
            Schedule a Call
          </Text>
          <div className="arrow-container">
            <ArrowForwardIcon
              className="arrow"
              color={colors.white}
              boxSize={"23px"}
            ></ArrowForwardIcon>
          </div>
        </HStack>
      </Box>

      <VStack w={200} align={"right"}>
        <Divider mt={10}></Divider>
        <Text
          textAlign="right"
          color={colors.white}
          className="red-hat-text"
          mt={6}
          lineHeight={1.2}
          mb={2}
        >
          The Marketing Agency
          <br /> 77/2 Cinnamon Terrace <br />
          Hettiyawatte, Elapitiwela
          <br />
          Colombo, 11010, LK
        </Text>
      </VStack>
    </Flex>
  );
}
