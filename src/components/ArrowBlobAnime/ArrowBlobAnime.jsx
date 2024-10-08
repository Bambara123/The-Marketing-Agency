import React, { useEffect } from "react";
import KUTE from "kute.js";
import "./ArrowBlobAnime.css";

export default function ArrowBlobAnime({ idPrefix }) {
  useEffect(() => {
    const morphExample = document.getElementById("morph-example");
    if (morphExample) {
      const tween1 = KUTE.fromTo(
        `#${idPrefix}-blob1`,
        { path: `#${idPrefix}-blob1` },
        { path: `#${idPrefix}-blob2` },
        { delay: 500, duration: 3000, easing: "easingCubicOut" }
      );

      const tween2 = KUTE.fromTo(
        `#${idPrefix}-blob2`,
        { path: `#${idPrefix}-blob2` },
        { path: `#${idPrefix}-blob3` },
        { duration: 3000, easing: "easingCubicOut" }
      );

      const tween3 = KUTE.fromTo(
        `#${idPrefix}-blob3`,
        { path: `#${idPrefix}-blob3` },
        { path: `#${idPrefix}-blob1` },
        { duration: 3000, Infinity: true, yoyo: true, easing: "easingCubicOut" }
      );

      tween1.chain(tween2);
      tween2.chain(tween3);
      tween3.chain(tween1);

      tween1.start();

      return () => {
        tween1.stop();
        tween2.stop();
        tween3.stop();
      };
    }
  }, [idPrefix]);

  return (
    <div className="cute-container">
      <svg id="morph-example" viewBox="0 0 900 900" height={900} width={800}>
        <g transform="translate(492.3368195151679 437.5181743035896)">
          <path
            id={`${idPrefix}-blob1`}
            d="M151.7 -234.4C202 -203.7 252 -170.8 281.6 -123.5C311.2 -76.1 320.4 -14.4 316.6 48.9C312.7 112.1 295.8 176.9 257.8 226.7C219.8 276.6 160.8 311.5 99.9 320.3C39 329.1 -23.8 311.8 -90.7 297.4C-157.7 283 -228.9 271.5 -288.7 233.1C-348.5 194.7 -397 129.4 -401.7 61C-406.4 -7.3 -367.4 -78.6 -320.9 -132.5C-274.4 -186.3 -220.5 -222.7 -165.7 -251.4C-111 -280.1 -55.5 -301 -2.4 -297.3C50.7 -293.5 101.4 -265.1 151.7 -234.4"
            fill="#dd582d"
            stroke="#dd582d"
            strokeWidth="8"
            opacity={0.1}
          ></path>
        </g>
        <g transform="translate(401.5508270001441 469.4589265562388)">
          <path
            id={`${idPrefix}-blob2`}
            d="M195.8 -299.2C254.4 -267.1 302.7 -213.7 342.6 -149.6C382.6 -85.6 414 -10.8 410.1 63.3C406.3 137.4 367.1 210.8 308.3 252.6C249.5 294.4 170.9 304.5 102.5 304C34.1 303.5 -24.2 292.3 -95.1 287.9C-165.9 283.5 -249.2 285.8 -286.6 246.3C-324 206.8 -315.4 125.5 -302.6 58C-289.8 -9.5 -272.8 -63.2 -256.5 -124.7C-240.1 -186.1 -224.4 -255.4 -181.8 -294.8C-139.1 -334.1 -69.6 -343.6 -0.5 -342.9C68.7 -342.2 137.3 -331.3 195.8 -299.2"
            fill="#dd582d"
            stroke="#dd582d"
            strokeWidth="8"
            opacity={0.1}
          ></path>
        </g>
        <g transform="translate(479.2216150305812 289.1605579331862)">
          <path
            id={`${idPrefix}-blob3`}
            d="M110.8 -110.3C136.3 -85.3 144.7 -42.7 145.3 0.6C145.8 43.8 138.7 87.7 113.2 127.2C87.7 166.7 43.8 201.8 2.1 199.7C-39.6 197.6 -79.2 158.2 -113.7 118.7C-148.2 79.2 -177.6 39.6 -193.2 -15.6C-208.7 -70.7 -210.4 -141.4 -175.9 -166.4C-141.4 -191.4 -70.7 -170.7 -14 -156.7C42.7 -142.7 85.3 -135.3 110.8 -110.3"
            fill="#dd582d"
            stroke="#dd582d"
            strokeWidth="8"
            opacity={0.1}
          ></path>
        </g>
      </svg>
    </div>
  );
}
