import { IconProps } from "../../types/icon-props";

export const DiscoverIcon = ({ selected, ...props }: IconProps) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={selected ? 1 : 0.4}
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12C2 6.478 6.477 2 12 2s10 4.478 10 10Z"
      fill="#fff"
    />
    <path
      d="m15.86 8.705-1.62 5.12c-.06.21-.23.38-.44.44l-5.1 1.6a.448.448 0 0 1-.56-.56l1.6-5.13c.06-.21.23-.37.44-.44l5.12-1.6c.35-.11.67.22.56.57Z"
      fill={`${selected ? "var(--gray800)" : "#fff"}`}
    />
  </svg>
);
