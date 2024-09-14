import { Card, Image, Stack, Text, CardBody } from "@chakra-ui/react";
import colors from "../../config/colors";

export default function WriteUpCard() {
  return (
    <div class="writeup-card" style={{ backgroundColor: colors.card_black }}>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        style={{ backgroundColor: colors.card_black }}
        p={25}
      >
        <Stack align={"center"} mx={20}>
          <Text className="zen-antque-regular text-left-white-header">
            CarsBurg
          </Text>
          <Image
            src={process.env.PUBLIC_URL + "/logos/logo_1.svg"}
            alt="logo"
            width={140}
          />
          <Text className="text-left-normal" color={colors.dark_gray} pt={5}>
            Colombo, Sri Lanka
          </Text>
        </Stack>

        <Stack>
          <CardBody>
            <Text
              size="sm"
              textAlign="left"
              color={colors.white}
              className="red-hat-text-bold text-left-normal"
            >
               Consultancy | Branding | Content Creation Web and App Development
            </Text>

            <Text py="2" className="text-left-normal" color={colors.dark_gray}>
              December, 2024
            </Text>

            <Text
              py="2"
              className="red-hat-text text-left-normal"
              color={colors.dark_gray}
            >
              We started working with Dentzz Avenue in marketing consultancy
              service and Dentz wanted to be a premium dentistry. We began with
              research and business planning. Then we worked on the branding and
              visual identity as a premium brand. Adhering to the guidelines, we
              created content and published it through relevant marketing
              channels, including revamping their website, which led to doubled
              sales within a year.
            </Text>
          </CardBody>
        </Stack>
      </Card>
    </div>
  );
}
