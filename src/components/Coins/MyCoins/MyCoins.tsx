import { FC } from "react";
import { CoinBlock } from "../CoinBlock/CoinBlock";
import { PropsWithClassName } from "@/types";
import cn from "clsx";
import { Buy } from "@/components/ui";

export const MyCoins: FC<PropsWithClassName> = ({ className }) => {
  return (
    <div className={cn(className, "flex flex-wrap -m-2")}>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
        <Buy title="Купить монеты" onClick={() => console.log("click")} />
      </div>

      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
        <CoinBlock type="my" />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
        <CoinBlock type="my" />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
        <CoinBlock type="my" />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
        <CoinBlock type="my" />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
        <CoinBlock type="my" />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
        <CoinBlock type="my" />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
        <CoinBlock type="my" />
      </div>
    </div>
  );
};
