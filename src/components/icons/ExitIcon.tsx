import { PropsWithClassName, PropsWithSize } from "@/types";
import { FC } from "react";

export const ExitIcon: FC<PropsWithSize<PropsWithClassName>> = ({
  className,
  width = 20,
  height = 20,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.00008 1.66667H15.0001C16.841 1.66667 18.3334 3.15906 18.3334 5.00001V15C18.3334 16.841 16.841 18.3333 15.0001 18.3333H5.00008C3.15913 18.3333 1.66675 16.841 1.66675 15V5.00001C1.66675 3.15906 3.15913 1.66667 5.00008 1.66667ZM12.9001 12.9C13.1438 12.656 13.1438 12.2607 12.9001 12.0167L10.8834 10L12.9001 7.98334C13.1295 7.73708 13.1228 7.35333 12.8848 7.11532C12.6468 6.87731 12.263 6.87054 12.0167 7.10001L10.0001 9.11667L7.98341 7.10001C7.73716 6.87054 7.35341 6.87731 7.1154 7.11532C6.87739 7.35333 6.87062 7.73708 7.10008 7.98334L9.11675 10L7.10008 12.0167C6.85637 12.2607 6.85637 12.656 7.10008 12.9C7.21912 13.0143 7.37675 13.0797 7.54175 13.0833C7.70709 13.0814 7.86531 13.0157 7.98341 12.9L10.0001 10.8833L12.0167 12.9C12.1348 13.0157 12.2931 13.0814 12.4584 13.0833C12.6234 13.0797 12.781 13.0143 12.9001 12.9Z"
        fill="#58667E"
      />
    </svg>
  );
};
