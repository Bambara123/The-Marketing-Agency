import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";

import "./PortfolioIntro.css";
import ScrollDown from "./ScrollDown/ScrollDown";

import colors from "../../config/colors";
import ArrowBlobAnime from "../ArrowBlobAnime/ArrowBlobAnime";

export default function PortfolioIntro() {
  const handleScrollDown = () => {
    window.scrollBy({
      top: 500,
      behavior: "smooth",
    });
  };

  return (
    <div className="portfolio-intro-1">
      <Box className="worktogether-dev" pt={220} px={"120px"}>
        <div className="blob-with-text">
          <VStack spacing={10}>
            <div className="portfolio-intro-title"></div>
            <Text
              className="zen-antque-regular"
              color={colors.white}
              fontSize={60}
            >
              Delivering Impactful Solutions
            </Text>
            <Text
              className="zen-antque-regular"
              color={colors.orange}
              fontSize={75}
            >
              See Our Work in Action
            </Text>
          </VStack>
        </div>

        <div className="scroll-container-intro">
          <ScrollDown onClick={handleScrollDown}></ScrollDown>
        </div>
      </Box>

      <div className="blob-container-1">
        <ArrowBlobAnime idPrefix={"a"}></ArrowBlobAnime>
      </div>
    </div>
  );
}
