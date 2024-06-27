import React from "react";
import "./HeaderTop.css";
import { HStack, Text, Box, Image } from "@chakra-ui/react";
import colors from "../../config/colors";
import AppText from "../AppText/AppText";

export default function HeaderTop() {
  const headerTopData = ["Work", "Service", "Culture"];

  return (
    <div className="header-top">
      <HStack justify="space-between">
        <HStack className="logo-container">
          {["logo-icon", "logo-text"].map((data) => {
            return (
              <Image
                src={process.env.PUBLIC_URL + "/" + data + ".svg"}
                alt="logo"
                className={data}
              />
            );
          })}
        </HStack>
        <HStack
          w={500}
          justify="space-between"
          borderWidth={1}
          borderRadius={15}
          className="header-top-links"
          pl={10}
          borderRightWidth={0}
        >
          {headerTopData.map((data) => {
            return (
              <Box py={2} className="link-box">
                <AppText
                  fontSize={16}
                  fontName="red-hat-text"
                  dot="link-text-dot"
                >
                  {data}
                </AppText>
              </Box>
            );
          })}

          <Box
            className="say-hello-box"
            bg={colors.dark_gray}
            py={2}
            px={8}
            borderTopRightRadius={15}
            borderBottomRightRadius={15}
            borderWidth={1}
          >
            <Text className="red-hat-text " fontSize={16} color={colors.white}>
              Say Hello
            </Text>
          </Box>
        </HStack>
      </HStack>
    </div>
  );
}
