import React from "react";
import "./Header.css";
import { useEffect, useRef } from "react";

export default function () {
  const isScrollBlockedRef = useRef(true);
  const circleRadiusRef = useRef(45);
  const goingDownRef = useRef(true);

  const currentDevice =
    window.innerWidth < 480
      ? "less_than_480"
      : window.innerWidth < 768
      ? "less_than_768"
      : window.innerWidth < 992
      ? "less_than_992"
      : "more_than_992";

  const circlePositionInDevices = {
    less_than_480: [50, 60],
    less_than_768: [50, 50],
    less_than_992: [50, 50],
    more_than_992: [50, 50],
  };

  const circleSizes = {
    less_than_480: [12, 20],
    less_than_768: [45, 110],
    less_than_992: [45, 110],
    more_than_992: [45, 110],
  };

  console.log(currentDevice);

  // measue the speed and calculate the radius.
  useEffect(() => {
    let lastEvent = null;

    const handleWheel = (e) => {
      const now = performance.now();
      if (lastEvent) {
        const deltaTime = now - lastEvent.timestamp;
        const speed = e.deltaY / deltaTime;

        if (
          circleRadiusRef.current < circleSizes[currentDevice][1] &&
          goingDownRef.current
        ) {
          if (circleRadiusRef.current <= circleSizes[currentDevice][0]) {
            circleRadiusRef.current = circleSizes[currentDevice][0];
          }
          const newRadius = circleRadiusRef.current + speed * 4;
          circleRadiusRef.current = newRadius;
          if (circleRadiusRef.current > circleSizes[currentDevice][1]) {
            isScrollBlockedRef.current = false;
            goingDownRef.current = false;
            circleRadiusRef.current = 111;
          }
        }

        if (window.scrollY <= 1 && !goingDownRef.current) {
          const newRadius = circleRadiusRef.current + speed * 4;
          circleRadiusRef.current = newRadius;

          if (circleRadiusRef.current < circleSizes[currentDevice][1]) {
            isScrollBlockedRef.current = true;
          }

          if (circleRadiusRef.current <= circleSizes[currentDevice][0]) {
            goingDownRef.current = true;
          }
        }
      }

      lastEvent = {
        timestamp: now,
        delta: e.deltaY,
      };
    };
    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // prvent scroll when the isScrollBlockedRef = true
  useEffect(() => {
    const preventScroll = (e) => {
      if (isScrollBlockedRef.current) {
        e.preventDefault();
      }
    };

    // Prevent both wheel and touch scrolling
    document.addEventListener("wheel", preventScroll, { passive: false });
    document.addEventListener("touchmove", preventScroll, { passive: false });

    return () => {
      document.removeEventListener("wheel", preventScroll);
      document.removeEventListener("touchmove", preventScroll);
    };
  }, []);

  // add classes with given radius
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
      document.querySelector(".circle_mask").style = `clip-path:circle(${
        circleRadiusRef.current > circleSizes[currentDevice][0]
          ? circleRadiusRef.current
          : circleSizes[currentDevice][0]
      }vh at ${circlePositionInDevices[currentDevice][0]}% ${
        circlePositionInDevices[currentDevice][1]
      }%) !important; animation:unset`;
      document.querySelector(".invert").style = `clip-path:circle(${
        circleRadiusRef.current > circleSizes[currentDevice][0]
          ? circleRadiusRef.current
          : circleSizes[currentDevice][0]
      }vh at ${circlePositionInDevices[currentDevice][0]}% ${
        circlePositionInDevices[currentDevice][1]
      }%) !important; animation:unset`;
      document.body.style.paddingTop = "0px";
    };

    document.addEventListener("wheel", handleScroll);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("wheel", handleScroll);
    };
  });

  return (
    <div className="header-main">
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
