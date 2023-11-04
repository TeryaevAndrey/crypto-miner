import { FC } from "react";
import { ExportIcon } from "@/components/icons";
import { Button } from "@/components/ui";
import styles from "./NftItem.module.css";
import { useAppDispatch } from "@/redux/store";
import { setOpenModal } from "@/redux/slices/modalsOpensSlice";
import { NamesModals, Nft } from "@/types";

type Props = {
  data: Nft;
};

export const NftItem: FC<Props> = ({ data }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.wrapper}>
      <div className="relative w-full">
        <img
          className="rounded-lg w-full h-full"
          src={data.image_url}
          alt="nft"
        />

        <Button
          className={styles.btn}
          title="Вывести"
          color="standart"
          icon={<ExportIcon width={20} height={20} />}
          onClick={() => {
            dispatch(
              setOpenModal({
                stateNameModal: NamesModals.isOpenNftWithdrawModal,
                isOpen: true,
              }),
            );
          }}
        />
      </div>
      <p className="text-center py-4 font-semibold text-xl">{data.price} BTC</p>
    </div>
  );
};