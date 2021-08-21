import { observer } from "mobx-react-lite";
import fullAdder from "../../store/FullAdder";

const FullAdderCirctuitSvg = observer(() => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="550"
      height="350"
      version="1"
    >
      <g strokeOpacity="1">
        <path
          fill="none"
          fillOpacity="0.75"
          fillRule="evenodd"
          stroke={fullAdder.B ? "blue" : "#000"}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="3.125"
          d="M89.111 80.14v196.544h177.452"
        ></path>
        <path
          fill="none"
          fillOpacity="0.75"
          fillRule="evenodd"
          stroke={fullAdder.A ? "blue" : "#000"}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="3.125"
          d="M67.175 38.405v260.922h200.111"
        ></path>
        <path
          fill="none"
          fillOpacity="0.75"
          fillRule="evenodd"
          stroke={fullAdder.A ^ fullAdder.B && fullAdder.Cin ? "blue" : "#000"}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="3.125"
          d="M317.49 197.858h16.264v25.102h72.125"
        ></path>
        <path
          fill="none"
          fillOpacity="0.75"
          fillRule="evenodd"
          stroke={fullAdder.A && fullAdder.B ? "blue" : "#000"}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="3.125"
          d="M317.49 289.781h16.264V265.74h70.711"
        ></path>
        <path
          fill="none"
          fillOpacity="0.75"
          fillRule="evenodd"
          stroke={fullAdder.A ? "blue" : "#000"}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="3.125"
          d="M49 39h105"
        ></path>
        <path
          fill="none"
          fillOpacity="0.75"
          fillRule="evenodd"
          stroke={fullAdder.B ? "blue" : "#000"}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="3.125"
          d="M49 80.5h105"
        ></path>
        <path
          fill="none"
          fillOpacity="0.75"
          fillRule="evenodd"
          stroke={fullAdder.A ^ fullAdder.B ? "blue" : "#000"}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="3.125"
          d="M196.84 61.253h97.582"
        ></path>
        <path
          fill="none"
          fillOpacity="0.75"
          fillRule="evenodd"
          stroke={fullAdder.A ^ fullAdder.B ? "blue" : "#000"}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="3.125"
          d="M206.475 62.447v153.442h59.397"
        ></path>
        <path
          fill="none"
          fillOpacity="0.75"
          fillRule="evenodd"
          stroke={fullAdder.Cin ? "blue" : "#000"}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="3.125"
          d="M48.79 122.55h175.363V97.096h69.296"
        ></path>
        <path
          fill="none"
          fillOpacity="0.75"
          fillRule="evenodd"
          stroke={fullAdder.Cin ? "blue" : "#000"}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="3.125"
          d="M224.153 122.5v60.104h40.305"
        ></path>
        <g
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeWidth="3.125"
          transform="translate(-44 6)"
        >
          <path
            fill="#fff"
            strokeLinecap="butt"
            d="M156.616 98.465c-.075.003 22.306-4.044 22.306-43.103 0-39.443-22.308-43.103-22.306-43.103 36.034 3.95 59.502-1.644 84.303 43.103-18.493 39.566-42.745 41.444-84.303 43.103z"
          ></path>
          <path
            fill="none"
            strokeLinecap="round"
            d="M143.036 97.427c-.075.003 22.306-3.947 22.306-42.065 0-38.493-22.308-42.065-22.306-42.064"
          ></path>
        </g>
        <text
          xmlSpace="preserve"
          style={{
            WebkitTextAlign: "start",
            textAlign: "start",
            lineHeight: "125%",
          }}
          x="24.756"
          y="47.791"
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
          <tspan x="24.756" y="47.791">
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
          x="26.452"
          y="89.934"
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
          <tspan x="26.452" y="89.934">
            B
          </tspan>
        </text>
        <g
          fillOpacity="1"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeWidth="3.125"
          transform="translate(99.338 21.738)"
        >
          <path
            fill="#fff"
            strokeLinecap="butt"
            d="M156.616 98.465c-.075.003 22.306-4.044 22.306-43.103 0-39.443-22.308-43.103-22.306-43.103 36.034 3.95 59.502-1.644 84.303 43.103-18.493 39.566-42.745 41.444-84.303 43.103z"
          ></path>
          <path
            fill="none"
            strokeLinecap="round"
            d="M143.036 97.427c-.075.003 22.306-3.947 22.306-42.065 0-38.493-22.308-42.065-22.306-42.064"
          ></path>
        </g>
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
          d="M279.856 236.663h-37.482v-76.659h37.724c20.449 0 37.241 17.172 37.241 38.33 0 21.157-16.792 38.329-37.483 38.329z"
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
          d="M279.856 328.158h-37.482v-76.659h37.724c20.449 0 37.241 17.172 37.241 38.33 0 21.157-16.792 38.329-37.483 38.329z"
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
          d="M369.4 286.255c-.075.003 22.306-4.044 22.306-43.103 0-39.444-22.308-43.103-22.306-43.103 36.034 3.95 59.502-1.645 84.302 43.103-18.492 39.566-42.744 41.444-84.302 43.103z"
        ></path>
        <text
          xmlSpace="preserve"
          style={{
            WebkitTextAlign: "start",
            textAlign: "start",
            lineHeight: "100%",
          }}
          x="7.577"
          y="130.206"
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
          <tspan x="7.577" y="130.206">
            C
            <tspan
              style={{
                WebkitTextAlign: "start",
                textAlign: "start",
                lineHeight: "100%",
              }}
              fontFamily="Bitstream Vera Sans"
              fontSize="20"
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="normal"
              textAnchor="start"
              writingMode="lr-tb"
            >
              in
            </tspan>
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
          d="M228.086 122.55a4.066 4.066 0 11-8.132 0 4.066 4.066 0 118.132 0z"
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
          d="M210.63 61.298a4.066 4.066 0 11-8.132 0 4.066 4.066 0 118.131 0z"
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
          d="M71.241 39.112a4.066 4.066 0 11-8.132 0 4.066 4.066 0 118.132 0z"
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
          d="M93.161 80.478a4.066 4.066 0 11-8.131 0 4.066 4.066 0 118.131 0z"
          opacity="1"
        ></path>
        <path
          fill="none"
          fillOpacity="0.75"
          fillRule="evenodd"
          stroke={fullAdder.sum ? "blue" : "#000"}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="3.125"
          d="M340 77.5h142.5"
        ></path>
        <path
          fill="none"
          fillOpacity="0.75"
          fillRule="evenodd"
          stroke={fullAdder.Cout ? "blue" : "#000"}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeWidth="3.125"
          d="M453.5 243.5H482"
        ></path>
        <text
          xmlSpace="preserve"
          style={{ lineHeight: "125%" }}
          x="486"
          y="254"
          fill="#000"
          fillOpacity="1"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="1"
          fontFamily="Bitstream Vera Sans"
          fontSize="12"
          fontStyle="normal"
          fontWeight="normal"
        >
          <tspan x="486" y="254">
            <tspan
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
            <tspan
              style={{
                WebkitTextAlign: "start",
                textAlign: "start",
                lineHeight: "125%",
              }}
              fontFamily="Bitstream Vera Sans"
              fontSize="20"
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="normal"
              textAnchor="start"
              writingMode="lr-tb"
            >
              out
            </tspan>
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{ lineHeight: "125%" }}
          x="485.727"
          y="85"
          fill="#000"
          fillOpacity="1"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="1"
          fontFamily="Bitstream Vera Sans"
          fontSize="12"
          fontStyle="normal"
          fontWeight="normal"
        >
          <tspan
            x="485.727"
            y="85"
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
      </g>
    </svg>
  );
});

export default FullAdderCirctuitSvg;
