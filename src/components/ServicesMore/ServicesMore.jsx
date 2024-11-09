import React from "react";
import {
  Text,
  Divider,
  Grid,
  Box,
  VStack,
  Wrap,
  Flex,
  WrapItem,
  GridItem,
} from "@chakra-ui/react";
import colors from "../../config/colors";
import "./ServicesMore.css";

import { serviceMoreCardData } from "../../mockData/mockdata";
import ServiceMoreCard from "../ServiceMoreCard/ServiceMoreCard";
import AppText from "../AppText/AppText";

export default function ServicesMore({ shouldHaveTop = true }) {
  const textDescription =
    "We are a full-service agency offering a complete suite of solutions, including strategic marketing consultancy, branding and rebranding, commercial photography and video production, digital marketing and management, and web design and development, all tailored to elevate and distinguish your brand.";

  return (
    <Box
      className="services-more-div"
      style={{ backgroundColor: colors.black }}
    >
      {shouldHaveTop ? (
        <div>
          {" "}
          <Text
            color={colors.dark_gray}
            fontSize="1.5rem"
            paddingY={["60px", "120px"]}
            className="zen-antque-regular"
          >
            Customer Feedback and Portfolio
          </Text>
          <Divider orientation="horizontal" />
          <Grid templateColumns="3fr 1fr 4fr"  mt={["80px", "120px"]}>
            <VStack justify="start" align="start">
              <Text
                fontSize={["2.5rem", "4.3rem"]}
                textAlign="left"
                color={colors.white}
                className="zen-antque-regular"
                lineHeight={1.2}
              >
                More than
              </Text>
              
              <Text
                fontSize={["2.5rem", "4.3rem"]}
                textAlign="left"
                color={colors.dark_gray}
                className="zen-antque-regular"
                lineHeight={1.2}
              >
                your average <br/>
                marketing <br/>
                agency
              </Text>
            </VStack>
            <div></div>

            <Grid templaterows="1fr 1fr" gap={6}>
              <Flex alignItems="flex-start" justifyContent="flex-start" >
                <Text
                  fontSize="1rem"
                  textAlign="justify"
                  color={colors.gray}
                  className="red-hat-text"
                  fontWeight="bold"
                >
                  {textDescription}
                </Text>
              </Flex>
              <Box>
                <AppText fontSize={["1.75rem", "2rem"]} textAlign="left">
                  Learn More
                </AppText>
              </Box>
            </Grid>
          </Grid>
        </div>
      ) : (
        ""
      )}

      <Grid
        templateColumns={["1fr", "1fr 1fr"]}
        py={30}
        mt={[30,  106]}
        rowGap={10}
        columnGap={10}
      >
        {serviceMoreCardData.map((data, index) => {
          return (
            <GridItem style={{ display: "flex", justifyContent: "center" }}
              key={index}>
              <ServiceMoreCard

                title={data.title}
                subtitle={data.subtitle}
                desc1={data.desc1}
                desc2={data.desc2}
                desc3={data.desc3}
              />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
}
