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
          fontSize={["1rem", "1.75rem"]}
        >
          Let's work together.
        </Text>
        <HStack spacing={4} justify="right">
          <Text
            className="zen-antque-regular"
            color={colors.orange}
            fontSize={["0.8rem", "1.75rem"]}
          >
            Schedule a Call
          </Text>
          <div className="arrow-container">
            <ArrowForwardIcon
              className="arrow"
              color={colors.white}
              boxSize={["10px", "24px"]}
            ></ArrowForwardIcon>
          </div>
        </HStack>
      </Box>

      <VStack w={"100%"} align={"right"}>
        <Divider mt={[3, 10]}></Divider>
        <Text
          textAlign="right"
          color={colors.white}
          className="red-hat-text"
          fontSize={["0.75rem", "1rem"]}
          mt={["0px", "6px"]}
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
