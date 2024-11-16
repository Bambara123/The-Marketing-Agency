import React from "react";
import "./HeaderTop.css";
import { HStack, Text, Box, Image } from "@chakra-ui/react";
import colors from "../../config/colors";
import AppText from "../AppText/AppText";
import { Link } from "react-router-dom";

export default function HeaderTop() {
  const headerTopData = ["Work", "Services", "Culture"];
  const theMarketingAgencyRoute = "/The-Marketing-Agency/";

  return (
    <div className="header-top">
      <HStack justify="space-between">
        <Link to={theMarketingAgencyRoute}>
          <HStack className="logo-container">
            {["logo-icon", "logo-text"].map((data, index) => {
              return (
                <Image
                  key={index}
                  src={process.env.PUBLIC_URL + "/" + data + ".svg"}
                  alt="logo"
                  className={data}
                />
              );
            })}
          </HStack>
        </Link>
        <HStack
          w={[200, 280, 300, 400, 500]}
          justify="space-between"
          borderWidth={1}
          borderRadius={15}
          className="header-top-links"
          pl={10}
          borderRightWidth={0}
        >
          {headerTopData.map((data, index) => {
            return (
              <Link to={theMarketingAgencyRoute + data} key={index}>
                <Box key={index} py={2} className="link-box">
                  <AppText
                    fontSize={16}
                    fontName="red-hat-text"
                    dot="link-text-dot"
                  >
                    {data}
                  </AppText>
                </Box>
              </Link>
            );
          })}

          <Box
            className="say-hello-box"
            bg={colors.dark_gray}
            py={2}
            px={[5, 8]}
            borderTopRightRadius={15}
            borderBottomRightRadius={15}
            borderWidth={1}
          >
            <nav>
              <Text
                className="red-hat-text "
                fontSize={"1rem"}
                color={colors.white}
              >
                Say Hello
              </Text>
            </nav>
          </Box>
        </HStack>
      </HStack>
    </div>
  );
}
