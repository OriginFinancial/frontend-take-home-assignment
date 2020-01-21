import React from "react";

function Back(props) {
  return (
    <svg width={props.width} height={props.height} viewBox="0 0 19 20" {...props}>
      <g
        strokeWidth={3}
        stroke="#1D1E1F"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 10h14.5M10 18l-8-8 8-8" />
      </g>
    </svg>
  );
}

export { Back };

