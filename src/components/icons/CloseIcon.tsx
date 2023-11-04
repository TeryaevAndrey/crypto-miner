import { PropsWithClassName, PropsWithSize } from "@/types";
import { FC } from "react";

export const CloseIcon: FC<PropsWithSize<PropsWithClassName>> = ({
  className,
  width = 21,
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
        d="M10.972 10.0067L17.3017 3.69852C17.5661 3.43159 17.5661 2.99916 17.3017 2.73223C17.0419 2.46053 16.6129 2.45237 16.3432 2.714L10.0136 9.02219L3.76533 2.714C3.63723 2.5774 3.45899 2.5 3.27252 2.5C3.08605 2.5 2.90782 2.5774 2.77971 2.714C2.54525 2.9719 2.54525 3.3677 2.77971 3.62559L9.02795 9.92466L2.69833 16.2237C2.43389 16.4907 2.43389 16.9231 2.69833 17.19C2.82423 17.32 2.99737 17.3925 3.17758 17.3906C3.36125 17.4056 3.54335 17.3466 3.68395 17.2265L10.0136 10.9183L16.3432 17.2994C16.4691 17.4294 16.6422 17.5019 16.8224 17.5C17.0024 17.5008 17.1752 17.4285 17.3017 17.2994C17.5661 17.0325 17.5661 16.6001 17.3017 16.3331L10.972 10.0067Z"
        fill="black"
      />
    </svg>
  );
};