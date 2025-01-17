import { Map, Title } from "@/components";
import styles from "./PartnershipPage.module.css";
import { Button, FieldWrapper, TextField } from "@/components/ui";
import { useTranslation } from "react-i18next";

export const PartnershipPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Title className="flex lg:hidden pb-6" title="Партнёрство" />

      <div>
        <Map />

        <div className="mt-8 bg-base-200 border border-base-border-100 rounded-xl p-6">
          <div className="flex flex-wrap -m-5">
            <div className="w-full lg:w-1/2 p-5">
              <div className="flex flex-col gap-6">
                <h5 className="text-xl font-semibold">Why do we use it?</h5>

                <p className="text-base">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 p-5">
              <div className="flex flex-col gap-6">
                <h5 className="text-xl font-semibold">Why do we use it?</h5>

                <p className="text-base">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <Title title={t("invest")} />

          <div className={styles.invest}>
            <Title
              className="text-lg text-white !font-medium"
              title={t("enter the amount")}
              tag="h5"
            />

            <div className="flex flex-col sm:flex-row items-end gap-8">
              <FieldWrapper
                className="mt-8 w-full [&>p]:first:!text-white"
                title={`${t("amount")}, USDT`}
              >
                <TextField className="h-12 bg-black/40 border border-[#444E54] [&>input]:!text-white" />
              </FieldWrapper>

              <Button
                className={styles.investBtn}
                color="standart"
                title={t("enter invest")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
