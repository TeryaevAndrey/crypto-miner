import { PropsWithClassName, PropsWithSize } from "@/types";
import { FC } from "react";

export const AddIcon: FC<PropsWithSize<PropsWithClassName>> = ({
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
        d="M9.53341 1.66669H10.4667C14.8114 1.66669 18.3334 5.18871 18.3334 9.53335V10.4667C18.3334 14.8113 14.8114 18.3334 10.4667 18.3334H9.53341C5.18877 18.3334 1.66675 14.8113 1.66675 10.4667V9.53335C1.66675 5.18871 5.18877 1.66669 9.53341 1.66669ZM10.4667 17.0834C14.1097 17.0561 17.0562 14.1096 17.0834 10.4667V9.53335C17.0562 5.8904 14.1097 2.94391 10.4667 2.91669H9.53341C5.89047 2.94391 2.94397 5.8904 2.91675 9.53335V10.4667C2.94397 14.1096 5.89047 17.0561 9.53341 17.0834H10.4667Z"
        fill="white"
      />
      <path
        d="M13.3334 9.37502H10.6251V6.66669C10.6251 6.32151 10.3453 6.04169 10.0001 6.04169C9.6549 6.04169 9.37508 6.32151 9.37508 6.66669V9.37502H6.66675C6.32157 9.37502 6.04175 9.65484 6.04175 10C6.04175 10.3452 6.32157 10.625 6.66675 10.625H9.37508V13.3334C9.37508 13.6785 9.6549 13.9584 10.0001 13.9584C10.3453 13.9584 10.6251 13.6785 10.6251 13.3334V10.625H13.3334C13.6786 10.625 13.9584 10.3452 13.9584 10C13.9584 9.65484 13.6786 9.37502 13.3334 9.37502Z"
        fill="white"
      />
    </svg>
  );
};