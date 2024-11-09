import React from "react";

import { testimonials } from "../../mockData/mockdata";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import { Divider, Wrap, Text, Box} from "@chakra-ui/react";
import colors from "../../config/colors";
import "./Testimonial.css";

export default function Testimonial() {
  return (
    <Box
      className="testimonial-dev"
      pt={["0px", "160px"]}
      style={{ backgroundColor: colors.black}}
    >
      <Divider></Divider>
      <Text
        mt={["60px", "160px"]}
        fontSize="5.4rem"
        className="zen-antque-regular"
        color={colors.white}
      >
        They Love Us
      </Text>
      <Wrap spacing={[16, 20]} justify={"center"} pt={[40, 160]}>
        {testimonials.map((testimonial, index) => {
          return (
            <TestimonialCard
              key={index}
              feedback={testimonial.feedback}
              imageUrl={testimonial.image}
              name={testimonial.name}
              position={testimonial.post}
              brandImageUrl={testimonial.brandlogo}
              since={testimonial.since}
            />
          );
        })}
      </Wrap>
    </Box>
  );
}
