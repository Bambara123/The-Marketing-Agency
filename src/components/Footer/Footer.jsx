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
  return (
    <Box className="footer" pt={160}>
      <Box px={"120px"}>
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
          <GridItem colSpan={1}>
            <VStack align="left" justify="space-between" h={"100%"}>
              <Text
                textAlign="left"
                fontSize={22}
                className="zen-antque-regular"
                color={colors.white}
                mb={3}
              >
                About
              </Text>
              <Box>
                {subsections.map((subsection) => {
                  return (
                    <Text
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
          <GridItem colSpan={1}>
            <VStack align="left" justify="space-between" h={"100%"}>
              <Text
                textAlign="left"
                fontSize={23}
                className="zen-antque-regular"
                color={colors.white}
                mb={3}
              >
                About
              </Text>
              <Box>
                {subsections.map((subsection) => {
                  return (
                    <Text
                      textAlign="left"
                      color={colors.dark_gray}
                      className="red-hat-text footer-subsection"
                      fontSize={16}
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
          <GridItem colSpan={1}>
            <VStack align="left" justify="space-between" h={"100%"}>
              <Text
                textAlign="left"
                fontSize={22}
                className="zen-antque-regular"
                color={colors.white}
                mb={3}
              >
                About
              </Text>
              <Box>
                {subsections.map((subsection) => {
                  return (
                    <Text
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
          <GridItem colSpan={2}>
            <WorkTogetherSmall></WorkTogetherSmall>
          </GridItem>
        </Grid>
      </Box>
      <Divider mt={120}></Divider>
      <HStack py={4} px={"80px"} justify="space-between">
        <Text color={colors.white} className="red-hat-text" fontSize={18}>
          The Marketing Agency
        </Text>
        <Text color={colors.white} className="red-hat-text" fontSize={18}>
          Since 2019
        </Text>
      </HStack>
    </Box>
  );
}
