import React from "react";
import { Text, Divider, Grid, Box, VStack, Wrap, Flex } from "@chakra-ui/react";
import colors from "../../config/colors";
import "./ServicesMore.css";

import { serviceMoreCardData } from "../../mockData/mockdata";
import ServiceMoreCard from "../ServiceMoreCard/ServiceMoreCard";

export default function () {
  const textList = ["More than", "your average", "marketing", "agency"];
  const textDescription =
    "We are a full-service agency offering a complete suite of solutions, including strategic marketing consultancy, branding and rebranding, commercial photography and video production, digital marketing and management, and web design and development, all tailored to elevate and distinguish your brand.";

  return (
    <div
      className="services-more-div"
      style={{ backgroundColor: colors.black }}
    >
      <Text
        color={colors.dark_gray}
        fontSize={20}
        className="zen-antque-regular"
        my={40}
      >
        Customer Feedback and Portfolio
      </Text>
      <Divider orientation="horizontal" />

      <Grid templateColumns="2fr 3fr" gap={6} my={10}>
        <VStack justify="start" align="start">
          {textList.map((text) => {
            return (
              <Text
                fontSize={60}
                textAlign="left"
                color={colors.white}
                className="zen-antque-regular"
                lineHeight={1.2}
              >
                {text}
              </Text>
            );
          })}
        </VStack>
        <Grid templaterows="1fr 1fr" gap={6}>
          <Flex alignItems="center" justifyContent="flex-start">
            <Text
              fontSize={14}
              textAlign="left"
              color={colors.gray}
              className="red-hat-text"
              fontWeight="bold"
              pr={20}
            >
              {textDescription}
            </Text>
          </Flex>
          <Box>
            <Text
              fontSize={40}
              textAlign="left"
              color={colors.white}
              className="zen-antque-regular"
            >
              Learn More
            </Text>
          </Box>
        </Grid>
      </Grid>
      <Wrap spacing={10} align="center" justify="center" p={30}>
        {serviceMoreCardData.map((data) => {
          return (
            <ServiceMoreCard
              title={data.title}
              subtitle={data.subtitle}
              desc1={data.desc1}
              desc2={data.desc2}
              desc3={data.desc3}
            />
          );
        })}
      </Wrap>
    </div>
  );
}

// {serviceMoreCardData.map((data) => {
//   return (
// <ServiceMoreCard
//   title={data.title}
//   subtitle={data.subtitle}
//   desc1={data.desc1}
//   desc2={data.desc2}
//   desc3={data.desc3}
// />
//   );
// })}
