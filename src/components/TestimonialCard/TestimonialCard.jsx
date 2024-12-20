import { VStack, Box, Text, Avatar, Image, Divider } from "@chakra-ui/react";
import React from "react";
import colors from "../../config/colors";

export default function TestimonialCard({
  feedback,
  name,
  position,
  imageUrl,
  brandImageUrl,
  since,
}) {
  return (
    <Box width={["200px", "240px", "320px"]} p={3}>
      <VStack align="left" spacing={1}>
        <Text
          className="red-hat-text"
          color={colors.dark_gray}
          fontWeight={500}
          textAlign="left"
          fontSize="1rem"
        >
          {feedback}
        </Text>

        <Avatar
          src={process.env.PUBLIC_URL + imageUrl}
          size={"lg"}
          name={name}
          mt={[5, 5, 5, 10]}
        ></Avatar>

        <Text
          className="zen-antque-regular"
          color={colors.white}
          textAlign="left"
          fontSize="1rem"
        >
          {name}
        </Text>
        <Text
          className="red-hat-text"
          color={colors.dark_gray}
          fontWeight={600}
          fontSize="1rem"
          textAlign="left"
        >
          {position}
        </Text>
        <Divider color={colors.dark_gray} mt={4}></Divider>
        <Image
          src={process.env.PUBLIC_URL + brandImageUrl}
          name={name + "brand-logo"}
          width={["30px", "50px"]}
          mt={2}
        ></Image>
        <Text
          className="red-hat-text"
          color={colors.dark_gray}
          fontSize="0.75rem"
          textAlign="left"
          mt={1}
        >
          {since}
        </Text>
      </VStack>
    </Box>
  );
}
