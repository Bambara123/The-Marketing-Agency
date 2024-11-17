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
    <Box className="footer">
      <Box>
        <Divider color={colors.dark_gray}></Divider>
        <Grid
          mt={["30px", "40px", "50px", "50px", "60px"]}
          templateColumns="repeat(8,1fr)"
          templateRows="repeat(1,1fr)"
          gap={[2, 2, 3, 4]}
          h={["80px", "80px", "100px", "150px", "230px"]}
        >
          <GridItem colSpan={3}>
            <Text
              textAlign="left"
              fontSize={["1.10rem", "1.20rem", "1.40rem", "1.60rem", "1.75rem"]}
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
                    fontSize={[
                      "1.1rem",
                      "1.1rem",
                      "1.2rem",
                      "1.2rem",
                      "1.375rem",
                    ]}
                    className="zen-antque-regular"
                    color={colors.white}
                    mb={[0, 3]}
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
                          fontSize={[
                            "0.80rem",
                            "0.8rem",
                            "1rem",
                            "1.2rem",
                            "1.125rem",
                          ]}
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

      <Divider mt={[30, 40, 40, 100, 120]}></Divider>
      <HStack py={[2, 3, 4]} justify="space-between">
        <Text
          color={colors.white}
          className="red-hat-text footer-bottom-left"
          fontSize="1.125rem"
        >
          The Marketing Agency
        </Text>
        <Text
          color={colors.white}
          className="red-hat-text footer-bottom-right"
          fontSize="1.125rem"
        >
          Since 2019
        </Text>
      </HStack>
    </Box>
  );
}
