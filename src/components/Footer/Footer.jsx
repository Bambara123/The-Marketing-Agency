import React from "react";
import { Box, Grid, GridItem, Text, Divider, VStack } from "@chakra-ui/react";
import colors from "../../config/colors";
import "./Footer.css";

export default function Footer() {
  const subsections = [
    "Portfolio",
    "Clients",
    "Services",
    "Culture",
    "Testimonials",
  ];
  return (
    <Box className="footer" bg={colors.black} px={"120px"}>
      <Divider color={colors.dark_gray}></Divider>
      <Grid
        mt={5}
        templateColumns="repeat(8,1fr)"
        templateRows="repeat(2, 1fr)"
        gap={4}
      >
        <GridItem colSpan={3}>
          <Text
            textAlign="left"
            fontSize={30}
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
          <VStack align="left">
            <Text
              textAlign="left"
              fontSize={22}
              className="zen-antque-regular"
              color={colors.white}
            >
              About
            </Text>
            {subsections.map((subsection) => {
              return (
                <Text
                  textAlign="left"
                  color={colors.dark_gray}
                  className="red-hat-text footer-subsection"
                  fontSize={18}
                  fontWeight={600}
                >
                  {subsection}
                </Text>
              );
            })}
          </VStack>
        </GridItem>
        <GridItem colSpan={1}>
          <VStack align="left">
            <Text
              textAlign="left"
              fontSize={22}
              className="zen-antque-regular"
              color={colors.white}
            >
              Clients
            </Text>
            {subsections.map((subsection) => {
              return (
                <Text
                  textAlign="left"
                  color={colors.dark_gray}
                  className="red-hat-text footer-subsection"
                  fontSize={18}
                  fontWeight={600}
                >
                  {subsection}
                </Text>
              );
            })}
          </VStack>
        </GridItem>
        <GridItem colSpan={1}>
          <VStack align="left">
            <Text
              textAlign="left"
              fontSize={22}
              className="zen-antque-regular"
              color={colors.white}
            >
              About
            </Text>
            {subsections.map((subsection) => {
              return (
                <Text
                  textAlign="left"
                  color={colors.dark_gray}
                  className="red-hat-text footer-subsection"
                  fontSize={18}
                  fontWeight={600}
                >
                  {subsection}
                </Text>
              );
            })}
          </VStack>
        </GridItem>
        <GridItem colSpan={2}></GridItem>
      </Grid>
    </Box>
  );
}
