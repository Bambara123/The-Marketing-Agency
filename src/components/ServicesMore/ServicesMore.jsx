import React from "react";
import { Text, Divider, Grid, Box, VStack, Wrap, Flex } from "@chakra-ui/react";
import colors from "../../config/colors";
import "./ServicesMore.css";

import { serviceMoreCardData } from "../../mockData/mockdata";
import ServiceMoreCard from "../ServiceMoreCard/ServiceMoreCard";
import AppText from "../AppText/AppText";

export default function () {
  const textDescription =
    "We are a full-service agency offering a complete suite of solutions, including strategic marketing consultancy, branding and rebranding, commercial photography and video production, digital marketing and management, and web design and development, all tailored to elevate and distinguish your brand.";

  return (
    <Box
      className="services-more-div"
      style={{ backgroundColor: colors.black }}
    >
      <Text
        color={colors.dark_gray}
        fontSize={23}
        paddingY={120}
        className="zen-antque-regular"
      >
        Customer Feedback and Portfolio
      </Text>
      <Divider orientation="horizontal" />

      <Grid templateColumns="2fr 3fr" gap={6} mt={120}>
        <VStack justify="start" align="start">
          <Text
            fontSize={69}
            textAlign="left"
            color={colors.dark_gray}
            className="zen-antque-regular"
            lineHeight={1.2}
          >
            More than
          </Text>
          <Text
            fontSize={69}
            textAlign="left"
            color={colors.white}
            className="zen-antque-regular"
            lineHeight={1.2}
          >
            your average <br />
            marketing <br />
            agency
          </Text>
        </VStack>
        <Grid templaterows="1fr 1fr" gap={6}>
          <Flex alignItems="center" justifyContent="flex-start">
            <Text
              fontSize={16}
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
            <AppText fontSize={33} textAlign="left">
              Learn More
            </AppText>
          </Box>
        </Grid>
      </Grid>
      <Wrap spacing={10} align="center" justify="center" py={30} mt={106}>
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
    </Box>
  );
}
