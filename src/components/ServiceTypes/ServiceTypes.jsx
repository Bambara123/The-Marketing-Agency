import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import { Wrap, WrapItem } from "@chakra-ui/react";
import colors from "../../config/colors";
import "./ServiceTypes.css";
import { serviceTypesList } from "../../mockData/mockdata";

export default function ServiceTypes() {
  return (
    <div className="service-types" style={{ backgroundColor: colors.black }}>
      <Wrap
        color={colors.black}
        spacing="120px"
        align="center"
        justify="center"
        p={30} // this means 30px
      >
        {serviceTypesList.map((serviceType) => {
          return (
            <WrapItem>
              <ServiceCard
                imageUrl={serviceType.image}
                title={serviceType.title}
                subtitle={serviceType.subtitle}
              ></ServiceCard>
            </WrapItem>
          );
        })}
      </Wrap>
    </div>
  );
}
