import { observer } from "mobx-react-lite";
import React from "react";
import halfAdder from "../../store/HalfAdder";

const HalfAdderBoxSvg = observer(() => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="280"
      height="200"
      version="1"
    >
      <g
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        transform="translate(-118.5 -130.862)"
      >
        <path
          fill="none"
          fillOpacity="0.75"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeWidth="3"
          d="M223.5 180.862v100h70v-100h-70z"
        ></path>
        <text
          x="258.5"
          y="210.862"
          fill="#000"
          fillOpacity="1"
          stroke="none"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeWidth="3"
          fontFamily="Arial"
          fontSize="12"
          fontStyle="normal"
          fontWeight="normal"
          xmlSpace="preserve"
        >
          <tspan
            x="258.5"
            y="210.862"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeWidth="3"
            fontFamily="Arial"
            fontSize="32"
          >
            S
          </tspan>
        </text>
        <text
          x="258.5"
          y="270.862"
          fill="#000"
          fillOpacity="1"
          stroke="none"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeWidth="3"
          fontFamily="Arial"
          fontSize="12"
          fontStyle="normal"
          fontWeight="normal"
          xmlSpace="preserve"
        >
          <tspan
            x="258.5"
            y="270.862"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeWidth="3"
            fontFamily="Arial"
            fontSize="32"
          >
            C
          </tspan>
        </text>
        <path
          fill="none"
          fillOpacity="0.75"
          fillRule="evenodd"
          stroke={halfAdder.A ? "blue" : "#000"}
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeWidth="3"
          d="M223.5 200.862h-70"
        ></path>
        <path
          fill="none"
          fillOpacity="0.75"
          fillRule="evenodd"
          stroke={halfAdder.B ? "blue" : "#000"}
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeWidth="3"
          d="M223.5 260.862h-70"
        ></path>
        <text
          xmlSpace="preserve"
          style={{
            WebkitTextAlign: "start",
            textAlign: "start",
            lineHeight: "100%",
          }}
          x="153.5"
          y="195.862"
          fill="#000"
          fillOpacity="1"
          stroke="none"
          strokeWidth="1"
          fontFamily="Bitstream Vera Sans"
          fontSize="32"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          textAnchor="start"
        >
          <tspan x="153.5" y="195.862" fontSize="24">
            A
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            WebkitTextAlign: "start",
            textAlign: "start",
            lineHeight: "100%",
          }}
          x="153.5"
          y="255.862"
          fill="#000"
          fillOpacity="1"
          stroke="none"
          strokeWidth="1"
          fontFamily="Bitstream Vera Sans"
          fontSize="32"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          textAnchor="start"
        >
          <tspan x="153.5" y="255.862" fontSize="24">
            B
          </tspan>
        </text>
        <path
          fill="none"
          fillOpacity="0.75"
          fillRule="evenodd"
          stroke={halfAdder.sum ? "blue" : "#000"}
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeWidth="3"
          d="M363.5 200.862h-70"
        ></path>
        <path
          fill="none"
          fillOpacity="0.75"
          fillRule="evenodd"
          stroke={halfAdder.carry ? "blue" : "#000"}
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeWidth="3"
          d="M363.5 260.862h-70"
        ></path>
      </g>
    </svg>
  );
});

export default HalfAdderBoxSvg;
