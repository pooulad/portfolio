import { SVGProps } from "react";

export default function AttentionIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g clipPath="url(#clip0_429_11086)">
          {" "}
          <circle
            cx="12"
            cy="11.9999"
            r="9"
            stroke={props.fill}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></circle>{" "}
          <rect
            x="12"
            y="16"
            width="0.01"
            height="0.01"
            stroke={props.fill}
            strokeWidth="3.75"
            strokeLinejoin="round"
          ></rect>{" "}
          <path
            d="M12 12L12 8"
            stroke={props.fill}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{" "}
        </g>{" "}
        <defs>
          {" "}
          <clipPath id="clip0_429_11086">
            {" "}
            <rect width="24" height="24" fill="white"></rect>{" "}
          </clipPath>{" "}
        </defs>{" "}
      </g>
    </svg>
  );
}
