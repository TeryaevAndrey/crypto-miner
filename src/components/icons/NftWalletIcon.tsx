import { PropsWithClassName, PropsWithSize } from "@/types";
import { FC } from "react";

export const NftWalletIcon: FC<PropsWithSize<PropsWithClassName>> = ({
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
        d="M11.8584 1.66667H8.33341C4.65152 1.66667 1.66675 4.65144 1.66675 8.33333V11.8667C1.66675 15.5486 4.65152 18.5333 8.33341 18.5333H11.8584C15.5403 18.5333 18.5251 15.5486 18.5251 11.8667V8.33333C18.5251 4.65144 15.5403 1.66667 11.8584 1.66667ZM6.76675 5.1C7.68722 5.1 8.43341 5.84619 8.43341 6.76667C8.43341 7.68714 7.68722 8.43333 6.76675 8.43333C5.84627 8.43333 5.10008 7.68714 5.10008 6.76667C5.10008 5.84619 5.84627 5.1 6.76675 5.1ZM12.9251 16.7667C15.2844 15.8856 16.8511 13.6351 16.8584 11.1167L16.8334 9.68334C16.8334 9.34167 16.7667 8.7 16.7667 8.7H15.4084C12.2637 8.70955 9.39222 10.4885 7.98341 13.3C6.96084 12.3859 5.63834 11.8788 4.26675 11.875H3.25841C3.18403 13.8123 4.23626 15.618 5.95841 16.5083C6.57407 16.8363 7.26086 17.008 7.95841 17.0083H11.4334C11.9409 17.0156 12.4458 16.9338 12.9251 16.7667Z"
        fill="#58667E"
      />
    </svg>
  );
};
