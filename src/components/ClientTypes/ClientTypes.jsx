import React from "react";
import { HStack, Text, Box } from "@chakra-ui/react";
import colors from "../../config/colors";
import AppText from "../AppText/AppText";
import Marquee from "react-fast-marquee";
import "./ClientTypes.css";
import Logo from "./Logo";
import { logosToSlide } from "../../mockData/mockdata";

export default function ClientTypes() {
  return (
    <div className="client-types" style={{ backgroundColor: colors.black }}>
      <Text
        pt={65}
        pb={65}
        className="zen-antque-regular"
        color={colors.gray}
        fontSize={23}
      >
        Selected types of clients we have worked with
      </Text>
      <Box>
        <HStack justify="center" spacing="50px">
          <AppText classNameCustom="app-text-anim">
            Hospitality and Touarism
          </AppText>
          <AppText classNameCustom="app-text-anim">Startups</AppText>
        </HStack>
        <HStack justify="center" spacing="50px">
          <AppText classNameCustom="app-text-anim">Corporations</AppText>
          <AppText classNameCustom="app-text-anim">Food and Beverage</AppText>
        </HStack>
        <HStack justify="center" spacing="50px">
          <AppText classNameCustom="app-text-anim">Health</AppText>
          <AppText classNameCustom="app-text-anim"> Tech</AppText>
          <AppText classNameCustom="app-text-anim">NGOs</AppText>
        </HStack>
      </Box>
      <Marquee style={{ paddingTop: "200px" }} speed="100">
        {logosToSlide.map((logo, index) => (
          <Logo key={index} logoUrl={logo} />
        ))}
      </Marquee>
    </div>
  );
}
