import { Center, Text } from "@chakra-ui/react";

import "./TeamWriteup.css";

export default function TeamWriteup() {
  return (
    <div className="team-writup">
      <Text className="zen-antque-regular team-writeup-header">
        Our Mission
      </Text>

      <div className="team-writeup">
        <Center>
          <Text className="red-hat-text team-writeup-text">
            "We are a team of dedicated individuals who are passionate about
            creating innovative solutions that drive positive change. Our
            diverse backgrounds and unique perspectives allow us to tackle
            complex problems and deliver impactful results. We believe in
            collaboration, creativity, and continuous learning. Together, we
            strive to make a difference and leave a lasting impact on the
            world."
          </Text>
        </Center>
      </div>
    </div>
  );
}
