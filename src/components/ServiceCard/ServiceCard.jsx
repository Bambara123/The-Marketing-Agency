import React from "react";
import "./ServiceCard.css";
import { Box, Center, Image, Text, VStack } from "@chakra-ui/react";
import colors from "../../config/colors";

export default function ServiceCard({ imageUrl, title, subtitle }) {
  return (
    <div className="service-card">
      <Center color="white">
        <VStack>
          <Box>
            <Image src={process.env.PUBLIC_URL + imageUrl}></Image>
          </Box>
          <Text
            fontSize="xl"
            color={colors.white}
            className="zen-antque-regular"
          >
            {title}
          </Text>
          <Text color={colors.dark_gray} className="red-hat-text-bold">
            {subtitle}
          </Text>
        </VStack>
      </Center>
    </div>
  );
}
