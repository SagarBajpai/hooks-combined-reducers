import React from "react";

function CrossButton({ color, width, height, onClick }) {
  return (
    <svg
      width={width}
      height={height}
      color={color}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={onClick}
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}

CrossButton.defaultProps = {
  width: "16px",
  height: "16px",
  color: "white"
};

export default CrossButton;
