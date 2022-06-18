import { IconProps } from "../../types/icon-props";

export const RadioIcon = ({ selected, ...props }: IconProps) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={selected ? 1 : 0.4}
      d="M22 10v7c0 3-2 5-5 5H7c-3 0-5-2-5-5v-7c0-2.74 1.67-4.65 4.25-4.95.24-.04.49-.05.75-.05h10c3 0 5 2 5 5Z"
      fill="#fff"
    />
    <path
      d="M7.75 2v3H7c-.26 0-.51.01-.75.05V2c0-.41.34-.75.75-.75s.75.34.75.75ZM7.88 16a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM17.88 12.25h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM14.38 16.25h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.5c.41 0 .75.34.75.75s-.34.75-.75.75ZM17.88 16.25h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.5c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={`${selected ? "var(--gray800)" : "#fff"}`}
    />
  </svg>
);
