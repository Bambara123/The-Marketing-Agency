import { VStack, Box, Image, Text } from "@chakra-ui/react";
import "./MemberCard.css";

export default function MemberCard({ imageUrl, name, role, expertise }) {
  return (
    <Box className="member-card">
      <VStack>
        <Box className="image-container">
          <Image
            src={process.env.PUBLIC_URL + "/images/team/" + imageUrl}
            className="image"
          ></Image>
        </Box>
        <Text className="zen-antque-regular heading">{name}</Text>
        <Text className="red-hat-text subheading">{role}</Text>
        <Text className="red-hat-text sub-subheading">
          {expertise.join(" | ")}
        </Text>
      </VStack>
    </Box>
  );
}
