import React from "react";

import { testimonials } from "../../mockData/mockdata";
import TestimonialCard from "../../TestimonialCard/TestimonialCard";
import { Divider, Wrap, Text } from "@chakra-ui/react";
import colors from "../../config/colors";
import "./Testimonial.css";

export default function Testimonial() {
  return (
    <div className="testimonial-dev" style={{ backgroundColor: colors.black }}>
      <Divider></Divider>
      <Text
        py={10}
        fontSize={60}
        className="zen-antque-regular"
        color={colors.white}
      >
        They Love Us
      </Text>
      <Wrap spacing={16} justify={"center"}>
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
    </div>
  );
}
