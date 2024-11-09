import React from "react";
import { Image } from "@chakra-ui/react";

export default function Logo({ logoUrl }) {
  return (
    <div className="slide">
      <Image
        src={process.env.PUBLIC_URL + "/logos/" + logoUrl}
        alt=""
        height={["60px", "100px"]}
        style={{ padding: "0px 20px" }}
      />
    </div>
  );
}
