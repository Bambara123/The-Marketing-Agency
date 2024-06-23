import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import { Button, Wrap, WrapItem, Text } from "@chakra-ui/react";
import colors from "../../config/colors";
import "./ServiceTypes.css";
import { serviceTypesList } from "../../mockData/mockdata";

export default function ServiceTypes() {
  return (
    <div className="service-types" style={{ backgroundColor: colors.black }}>
      <Wrap spacing="120px" align="center" justify="center" p={30}>
        {serviceTypesList.map((serviceType) => {
          return (
            <WrapItem>
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
        borderRadius={15}
        size={"lg"}
        py={"30px"}
        className="button-anime"
        colorScheme={colors.white}
        variant="outline"
        color={colors.white}
      >
        <Text className="zen-antque-regular" fontSize={16}>
          More
        </Text>
      </Button>
    </div>
  );
}
