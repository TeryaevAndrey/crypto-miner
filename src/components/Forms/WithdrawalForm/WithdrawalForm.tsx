import { Button, FieldWrapper, TextField } from "@/components/ui";
import { PropsWithClassName, WithdrawalFormData } from "@/types";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import cn from "clsx";
import { useTranslation } from "react-i18next";
import { useGetWalletQuery, useWithdrawsMutation } from "@/redux/api/userApi";
import { toast } from "react-toastify";

export const WithdrawalForm: FC<PropsWithClassName> = ({ className }) => {
  const methods = useForm<WithdrawalFormData>();
  const { t } = useTranslation();
  const [withdraw, { isSuccess, isError }] = useWithdrawsMutation();
  const { data: walletData } = useGetWalletQuery(null, {
    refetchOnMountOrArgChange: true,
  });

  const formHandler = (data: WithdrawalFormData) => {
    if (!walletData) return;

    if (!data.amount || !data.wallet) {
      return toast.warning(t("fill in all the fields"));
    }

    if (walletData.data.balance.USDT === 0) {
      return toast.error(t("your balance is zero"));
    }

    return withdraw({
      type: "coin",
      amount: data.amount,
      wallet: data.wallet,
    });
  };

  useEffect(() => {
    if (!isSuccess) return;

    toast.success(t("withdrawal request requested"));
  }, [isSuccess, t]);

  useEffect(() => {
    if (!isError) return;

    toast.error(t("withdrawal request requested"));
  }, [isError, t]);

  return (
    <form
      className={cn(className)}
      onSubmit={methods.handleSubmit(formHandler)}
    >
      <div className="flex flex-wrap -m-4">
        <FieldWrapper
          className="w-full md:w-1/2 p-4"
          title={`${t("amount")}, USDT`}
        >
          <TextField
            type="number"
            methods={methods}
            registerName="amount"
            btn={{ title: "Все", onClick: () => console.log("click") }}
            options={{
              valueAsNumber: true,
            }}
          />
        </FieldWrapper>

        <FieldWrapper className="w-full md:w-1/2 p-4" title={t("wallet")}>
          <TextField methods={methods} registerName="wallet" />
        </FieldWrapper>
      </div>

      <Button
        className="mt-8"
        type="submit"
        color="primary"
        title={t("withdraw")}
      />
    </form>
  );
};
