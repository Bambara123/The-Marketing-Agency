import React from "react";
import "./ServiceCard.css";
import { Box, Center, Image, Text, VStack } from "@chakra-ui/react";
import colors from "../../config/colors";

export default function ServiceCard({ imageUrl, title_, subtitle }) {
  return (
    <div className="service-card">
      <Center color="white">
        <VStack>
          <Box className="service-type-image">
            <Image src={process.env.PUBLIC_URL + imageUrl}></Image>
          </Box>
          <Text
            fontSize={23}
            color={colors.white}
            className="zen-antque-regular"
          >
            {title_}
          </Text>
          <Text
            color={colors.dark_gray}
            className="red-hat-text-bold"
            fontSize={19}
          >
            {subtitle}
          </Text>
        </VStack>
      </Center>
    </div>
  );
}
