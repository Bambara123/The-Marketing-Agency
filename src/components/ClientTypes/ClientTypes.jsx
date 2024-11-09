import React from "react";
import { HStack, Text, VStack } from "@chakra-ui/react";
import colors from "../../config/colors";
import AppText from "../AppText/AppText";
import Marquee from "react-fast-marquee";
import "./ClientTypes.css";
import Logo from "./Logo";
import { logosToSlide } from "../../mockData/mockdata";

export default function ClientTypes() {
  return (
    <div
      className="client-types"
      style={{ backgroundColor: colors.black, paddingTop: "160px" }}
    >
      <Text
        pb={[60, 157]}
        className="zen-antque-regular client-types-header"
        color={colors.gray}
        fontSize={["1.5rem","2rem"]}
      >
        Selected types of clients we have worked with
      </Text>
      <VStack spacing={["15px","40px"]}>
        <HStack justify="center" spacing={["20px","50px"]}>
          <AppText classNameCustom="app-text-anim" fontSize={["2rem", "4rem"]}>
            Hospitality and Touarism
          </AppText>
          <AppText classNameCustom="app-text-anim" fontSize={["2rem","4rem"]}>Startups</AppText>
        </HStack>
        <HStack justify="center" spacing={["20px","50px"]}>
          <AppText classNameCustom="app-text-anim" fontSize={["2rem","4rem"]}>Corporations</AppText>
          <AppText classNameCustom="app-text-anim" fontSize={["2rem","4rem"]}>Food and Beverage</AppText>
        </HStack>
        <HStack justify="center" spacing={["20px","50px"]}>
          <AppText classNameCustom="app-text-anim" fontSize={["2rem", "4rem"]}>Health</AppText>
          <AppText classNameCustom="app-text-anim" fontSize={["2rem","4rem"]}> Tech</AppText>
          <AppText classNameCustom="app-text-anim" fontSize={["2rem","4rem"]}>NGOs</AppText>
        </HStack>
      </VStack>
      <Marquee className="marquee"  speed="100">
        {logosToSlide.map((logo, index) => (
          <Logo key={index} logoUrl={logo} />
        ))}
      </Marquee>
    </div>
  );
}
