import * as React from "react";
import { SVGProps } from "./svg.types";

const Cone = ({
  fill = "#000000",
  width = "800px",
  height = "800px",
}: SVGProps) => {
  return (
    <svg
      fill={fill}
      width={width}
      height={height}
      viewBox="-10 0 60 60"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
    >
      <g id="cone" transform="matrix(0.788473,0,0,1.01384,1.07659,-109.311)">
        <g transform="matrix(1,0,0,1,-30.371,0)">
          <path
            d="M71.5,161L38.16,161L35.043,167L73.7,167L71.5,161Z"
            style={{
              fill: "rgb(168,109,81)",
              fillRule: "nonzero",
            }}
          />
        </g>
        <g transform="matrix(1,0,0,1,-30.371,0)">
          <path
            d="M51.11,120.547L41.662,160.999L67.5,160.999L58.421,119.398L51.11,120.547Z"
            style={{
              fill: "rgb(239,156,116)",
              fillRule: "nonzero",
            }}
          />
        </g>
        <g transform="matrix(1.61071,0,0,1.25267,4.67158,-43.448)">
          <path
            d="M8.3,140.142L16.316,140.611L17.954,150.267L6.291,151.203L8.3,140.142Z"
            style={{
              fill: "rgb(244,242,237)",
              fillRule: "nonzero",
            }}
          />
        </g>
      </g>
    </svg>
  );
};

export default Cone;
