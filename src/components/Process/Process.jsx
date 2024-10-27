import { Box, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import "./Process.css";

export default function Process() {
  return (
    <div className="process-dev">
      <VStack>
        <Text className="process-header red-hat-text">We Shape You ...</Text>
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
