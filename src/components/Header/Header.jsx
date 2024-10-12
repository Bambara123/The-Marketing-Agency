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

    const handleScroll = () => {
      if (window.scrollY < 300) {
        document.querySelector(".header").style.position = "fixed";
        const circle_radius =
          (window.scrollY / 300) *
            ((40 * window.innerWidth) / window.innerHeight) +
          45;
        document.querySelector(
          ".circle_mask"
        ).style = `clip-path:circle(${circle_radius}vh at 50% 50%) !important; animation:unset`;
        document.querySelector(
          ".invert"
        ).style = `clip-path:circle(${circle_radius}vh at 50% 50%) !important; animation:unset`;
        document.body.style.paddingTop = "0px";
      } else {
        document.querySelector(".header").style.position = "relative";
        // document.body.style.paddingTop = "300px";
      }
    };

    document.addEventListener("scroll", handleScroll);

    // Cleanup function to clear the timeout if the component unmounts before the timeout finishes
    return () => {
      clearTimeout(timer);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount
  return (
    <div className="header">
      <div className="bg_video">
        <img
          className="actual_file"
          src={process.env.PUBLIC_URL + "/background_video.png"}
          alt=""
        />
        <div className="filter-blur"></div>
      </div>
      <div className="bg_video_masked">
        <img
          src={process.env.PUBLIC_URL + "/background_video.png"}
          alt=""
          className="circle_mask actual_file"
        />
      </div>
      <h1 className="title">
        The <br />
        Marketing <br />
        Agency
      </h1>
      <div className="invert">
        <img
          src={process.env.PUBLIC_URL + "/background_video.png"}
          alt=""
          className="actual_file"
        />
        <h1 className="title">
          The <br />
          Marketing <br />
          Agency
        </h1>
      </div>
    </div>
  );
}
