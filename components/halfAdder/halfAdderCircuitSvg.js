import { observer } from "mobx-react-lite";
import React from "react";
import halfAdder from "../../store/HalfAdder";

const HalfAdderCircuitSvg = observer(() => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="325"
      height="210"
      version="1"
    >
      <g strokeOpacity="1">
        <path
          fill="none"
          fillOpacity="0.75"
          fillRule="evenodd"
          stroke={halfAdder.A ? "blue" : "#000"}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="3.125"
          d="M192.036 35.161H33.946"
        ></path>
        <path
          fill="none"
          fillOpacity="0.75"
          fillRule="evenodd"
          stroke={halfAdder.B ? "blue" : "#000"}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="3.125"
          d="M194.056 73.042H33.946"
        ></path>
        <path
          fill="none"
          fillOpacity="0.75"
          fillRule="evenodd"
          stroke={halfAdder.A ? "blue" : "#000"}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="3.125"
          d="M168.802 141.227h-47.477V35.161"
        ></path>
        <path
          fill="none"
          fillOpacity="0.75"
          fillRule="evenodd"
          stroke={halfAdder.B ? "blue" : "#000"}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="3.125"
          d="M170.317 176.078H92.031V73.042"
        ></path>
        <path
          fill="none"
          fillOpacity="0.75"
          fillRule="evenodd"
          stroke={halfAdder.carry ? "blue" : "#000"}
          strokeDasharray="none"
          strokeLinecap="round"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="2.877"
          d="M211.065 157.505h78.938"
        ></path>
        <path
          fill="#fff"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeWidth="3.125"
          d="M189.19 195.834h-37.482v-76.658h37.724c20.449 0 37.241 17.171 37.241 38.329s-16.792 38.33-37.482 38.33z"
        ></path>
        <path
          fill="none"
          fillOpacity="0.75"
          fillRule="evenodd"
          stroke={halfAdder.sum ? "blue" : "#000"}
          strokeDasharray="none"
          strokeLinecap="round"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="2.949"
          d="M240.744 54.902h50.673"
        ></path>
        <path
          fill="#fff"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeWidth="3.125"
          d="M156.616 98.465c-.075.003 22.306-4.044 22.306-43.103 0-39.443-22.308-43.103-22.306-43.103 36.034 3.95 59.502-1.644 84.303 43.103-18.493 39.566-42.745 41.444-84.303 43.103z"
        ></path>
        <path
          fill="none"
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeWidth="3.125"
          d="M143.036 97.427c-.075.003 22.306-3.947 22.306-42.065 0-38.493-22.308-42.065-22.306-42.064"
        ></path>
        <text
          xmlSpace="preserve"
          style={{
            WebkitTextAlign: "start",
            textAlign: "start",
            lineHeight: "125%",
          }}
          x="295.74"
          y="64.673"
          fill="#000"
          fillOpacity="1"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="1"
          fontFamily="Bitstream Vera Sans"
          fontSize="28"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          textAnchor="start"
          writingMode="lr-tb"
        >
          <tspan
            x="295.74"
            y="64.673"
            style={{
              WebkitTextAlign: "start",
              textAlign: "start",
              lineHeight: "125%",
            }}
            fontFamily="Bitstream Vera Sans"
            fontSize="28"
            fontStretch="normal"
            fontStyle="normal"
            fontVariant="normal"
            fontWeight="normal"
            textAnchor="start"
            writingMode="lr-tb"
          >
            S
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            WebkitTextAlign: "start",
            textAlign: "start",
            lineHeight: "125%",
          }}
          x="296.901"
          y="165.943"
          fill="#000"
          fillOpacity="1"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="1"
          fontFamily="Bitstream Vera Sans"
          fontSize="28"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          textAnchor="start"
          writingMode="lr-tb"
        >
          <tspan
            x="296.901"
            y="165.943"
            style={{
              WebkitTextAlign: "start",
              textAlign: "start",
              lineHeight: "125%",
            }}
            fontFamily="Bitstream Vera Sans"
            fontSize="28"
            fontStretch="normal"
            fontStyle="normal"
            fontVariant="normal"
            fontWeight="normal"
            textAnchor="start"
            writingMode="lr-tb"
          >
            C
          </tspan>
        </text>
        <path
          fill="#000"
          fillOpacity="1"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="square"
          strokeLinejoin="bevel"
          strokeMiterlimit="4"
          strokeWidth="3.125"
          d="M97.334 73.547a5.43 5.43 0 11-10.86 0 5.43 5.43 0 1110.86 0z"
          opacity="1"
        ></path>
        <path
          fill="#000"
          fillOpacity="1"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="square"
          strokeLinejoin="bevel"
          strokeMiterlimit="4"
          strokeWidth="3.125"
          d="M126.628 35.035a5.43 5.43 0 11-10.859 0 5.43 5.43 0 1110.86 0z"
          opacity="1"
        ></path>
        <text
          xmlSpace="preserve"
          style={{
            WebkitTextAlign: "start",
            textAlign: "start",
            lineHeight: "125%",
          }}
          x="9.494"
          y="41.791"
          fill="#000"
          fillOpacity="1"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="1"
          fontFamily="Bitstream Vera Sans"
          fontSize="28"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          textAnchor="start"
          writingMode="lr-tb"
        >
          <tspan x="9.494" y="41.791">
            A
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            WebkitTextAlign: "start",
            textAlign: "start",
            lineHeight: "125%",
          }}
          x="9.077"
          y="83.934"
          fill="#000"
          fillOpacity="1"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="1"
          fontFamily="Bitstream Vera Sans"
          fontSize="28"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          textAnchor="start"
          writingMode="lr-tb"
        >
          <tspan x="9.077" y="83.934">
            B
          </tspan>
        </text>
      </g>
    </svg>
  );
});

export default HalfAdderCircuitSvg;
