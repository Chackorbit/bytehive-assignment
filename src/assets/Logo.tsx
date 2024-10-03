import React from "react";

interface LogoProps {
  width?: string;
  height?: string;
}

export const Logo: React.FC<LogoProps> = ({ width = "25", height = "25" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" stroke="#384250" />
      <g clipPath="url(#clip0_2019_686)">
        <path
          opacity="0.16"
          d="M15.3744 19.0827C15.8104 17.4091 17.483 15.6888 19.1101 15.2402L29.2542 12.444C30.8814 11.9955 31.8469 12.9887 31.4109 14.6623L28.6923 25.0963C28.2563 26.7699 26.5837 28.4902 24.9566 28.9387L14.8125 31.7349C13.1854 32.1834 12.2198 31.1903 12.6559 29.5167L15.3744 19.0827Z"
          fill="#6366F1"
        />
        <path
          d="M11.3077 14.8996C11.7437 13.226 13.4163 11.5057 15.0434 11.0572L25.1875 8.26101C26.8146 7.81251 27.7802 8.80564 27.3441 10.4792L24.6256 20.9132C24.1896 22.5868 22.517 24.3071 20.8899 24.7557L10.7458 27.5519C9.11865 28.0004 8.1531 27.0072 8.58915 25.3336L11.3077 14.8996Z"
          fill="#6366F1"
        />
      </g>
      <defs>
        <clipPath id="clip0_2019_686">
          <rect
            width="35"
            height="35"
            fill="white"
            transform="translate(2.5 2.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
