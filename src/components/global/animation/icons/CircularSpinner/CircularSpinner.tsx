import { SVGProps } from "react";

export default function CircularSpinner(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={props.width}
      height={props.height}
      aria-label="Loading"
    >
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke={props.stroke}
        strokeWidth="10"
        fill="none"
        strokeDasharray="283"
        strokeDashoffset="280"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="strokeDashoffset"
          from="280"
          to="0"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}
