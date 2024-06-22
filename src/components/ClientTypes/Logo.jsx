import React from "react";

export default function Logo({ logoUrl }) {
  return (
    <div className="slide">
      <img
        src={process.env.PUBLIC_URL + "/logos/" + logoUrl}
        alt=""
        height="100px"
        style={{ padding: "0px 20px" }}
      />
    </div>
  );
}
