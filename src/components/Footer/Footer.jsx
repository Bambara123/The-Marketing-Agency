import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Text,
  Divider,
  VStack,
  HStack,
} from "@chakra-ui/react";
import colors from "../../config/colors";
import "./Footer.css";
import WorkTogetherSmall from "./WorkTogetherSmall";

export default function Footer() {
  const subsections = [
    "Portfolio",
    "Clients",
    "Services",
    "Culture",
    "Testimonials",
  ];

  const subsectionTitles = ["About", "About", "About"];

  return (
    <Box className="footer" pt={160}>
      <Box>
        <Divider color={colors.dark_gray}></Divider>
        <Grid
          mt={"60px"}
          templateColumns="repeat(8,1fr)"
          templateRows="repeat(1,1fr)"
          gap={4}
          h={230}
        >
          <GridItem colSpan={3}>
            <Text
              textAlign="left"
              fontSize={27}
              className="zen-antque-regular"
              color={colors.white}
            >
              Full Service Agency
              <br />
              Branding, Marketing, <br />
              Advertising
            </Text>
          </GridItem>

          {subsectionTitles.map((subsectionTitle, index) => {
            return (
              <GridItem colSpan={1} key={index}>
                <VStack align="left" justify="space-between" h={"100%"}>
                  <Text
                    textAlign="left"
                    fontSize={22}
                    className="zen-antque-regular"
                    color={colors.white}
                    mb={3}
                  >
                    {subsectionTitle}
                  </Text>
                  <Box>
                    {subsections.map((subsection, index) => {
                      return (
                        <Text
                          key={index}
                          textAlign="left"
                          color={colors.dark_gray}
                          className="red-hat-text footer-subsection"
                          fontSize={18}
                          fontWeight={600}
                          mt={2}
                        >
                          {subsection}
                        </Text>
                      );
                    })}
                  </Box>
                </VStack>
              </GridItem>
            );
          })}

          <GridItem colSpan={2}>
            <WorkTogetherSmall></WorkTogetherSmall>
          </GridItem>
        </Grid>
      </Box>

      <Divider mt={120}></Divider>
      <HStack py={4} justify="space-between">
        <Text
          color={colors.white}
          className="red-hat-text footer-bottom-left"
          fontSize={18}
        >
          The Marketing Agency
        </Text>
        <Text
          color={colors.white}
          className="red-hat-text footer-bottom-right"
          fontSize={18}
        >
          Since 2019
        </Text>
      </HStack>
    </Box>
  );
}
