import React from "react";
import "./Header.css";
import { useEffect } from "react";

export default function () {
  useEffect(() => {
    const image = document.querySelectorAll(".actual_file");
    const timer = setTimeout(() => {
      image.forEach((element) => {
        element.setAttribute(
          "src",
          process.env.PUBLIC_URL + "/background_video.gif"
        );
      });
    }, 1000);

    // Cleanup function to clear the timeout if the component unmounts before the timeout finishes
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount
  return (
    <div class="header">
      <div class="bg_video">
        <img
          class="actual_file"
          src={process.env.PUBLIC_URL + "/background_video.png"}
          alt=""
        />
        <div class="filter-blur"></div>
      </div>
      <div class="bg_video_masked">
        <img
          src={process.env.PUBLIC_URL + "/background_video.png"}
          alt=""
          class="circle_mask actual_file"
        />
      </div>
      <h1 class="title">
        The <br />
        Marketing <br />
        Agency
      </h1>
      <div class="invert">
        <img
          src={process.env.PUBLIC_URL + "/background_video.png"}
          alt=""
          class="actual_file"
        />
        <h1 class="title">
          The <br />
          Marketing <br />
          Agency
        </h1>
      </div>
    </div>
  );
}
