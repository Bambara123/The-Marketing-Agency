import { Box, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import "./Process.css";

export default function Process() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".process-research, .process-strategy, .process-creative, .process-activation, .process-results"
    );

    const resetAnimation = () => {
      elements.forEach((element) => {
        element.style.animation = "none";
        // eslint-disable-next-line no-unused-expressions
        element.offsetHeight;
        element.style.animation = "";
      });
    };

    const intervalId = setInterval(() => {
      resetAnimation();
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="process-dev">
      <VStack>
        <div className="wrapper">
          <Text className="process-header zen-antque-regular">
            We Shape You ...
          </Text>
        </div>

        <Box className="process-container">
          <Box className="opacity-container"></Box>

          <HStack className="stack" gap={55}>
            <div className="process-research">
              <Text className="text">Research</Text>
            </div>
            <div className="process-strategy">
              <Text className="text">Strategy</Text>
            </div>
            <div className="process-creative">
              <Text className="text">Creative</Text>
            </div>
            <div className="process-activation">
              <Text className="text">Activation</Text>
            </div>
            <div className="process-results">
              <Text className="text">Results</Text>
            </div>
          </HStack>
        </Box>
      </VStack>
    </div>
  );
}
