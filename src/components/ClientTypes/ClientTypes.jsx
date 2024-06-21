import React from "react";
import { HStack, Text, Box } from "@chakra-ui/react";
import colors from "../../config/colors";
import AppText from "../AppText/AppText";

export default function ClientTypes() {
  return (
    <div className="client-types" style={{ backgroundColor: colors.black }}>
      <Text
        pt={65}
        pb={65}
        className="zen-antque-regular"
        color={colors.gray}
        fontSize={20}
      >
        Selected types of clients we have worked with
      </Text>
      <Box>
        <HStack justify="center" spacing="50px">
          <AppText>Hospitality and Touarism</AppText>
          <AppText>Startups</AppText>
        </HStack>
        <HStack justify="center" spacing="50px">
          <AppText>Corporations</AppText>
          <AppText>Food and Beverage</AppText>
        </HStack>
        <HStack justify="center" spacing="50px">
          <AppText>Health</AppText>
          <AppText>Tech</AppText>
          <AppText>NGOs</AppText>
        </HStack>
      </Box>
    </div>
  );
}
