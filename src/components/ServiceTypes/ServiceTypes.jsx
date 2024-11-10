import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import { Button, Wrap, WrapItem, Text } from "@chakra-ui/react";
import colors from "../../config/colors";
import "./ServiceTypes.css";
import { serviceTypesList } from "../../mockData/mockdata";

export default function ServiceTypes() {
  return (
    <div
      className="service-types-dev"
      style={{ backgroundColor: colors.black }}
    >
      <Wrap
        spacingX={[20, 40, 40]}
        spacingY={[40, 40, 90]}
        align="center"
        justify="center"
        pt={[50, 100, 153]}
        pb={[60, 120, 190]}
      >
        {serviceTypesList.map((serviceType, index) => {
          return (
            <WrapItem key={index}>
              <ServiceCard
                imageUrl={serviceType.image}
                title_={serviceType.title}
                subtitle={serviceType.subtitle}
              ></ServiceCard>
            </WrapItem>
          );
        })}
      </Wrap>

      <Button
        borderRadius={["10px", "15px"]}
        size={"lg"}
        py={["20px", "25px"]}
        className="button-anime"
        colorScheme={colors.white}
        variant="outline"
        color={colors.white}
      >
        <Text className="zen-antque-regular" fontSize={16} fontWeight={100}>
          More
        </Text>
      </Button>
    </div>
  );
}
