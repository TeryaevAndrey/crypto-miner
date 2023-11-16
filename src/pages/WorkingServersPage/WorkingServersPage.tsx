import { useRef } from "react";
import { Servers, ServersPlans, Title } from "@/components";
import { useGetMyServersQuery } from "@/redux/api/userApi";
import { useLoading } from "@/hooks";
import { useTranslation } from "react-i18next";

export const WorkingServersPage = () => {
  const plansRef = useRef<HTMLDivElement>(null);
  const {
    data: serversList,
    isLoading: serversListIsLoading,
    isFetching: serversListIsFetching,
  } = useGetMyServersQuery(null);

  const serversListLoading = useLoading(
    serversListIsLoading,
    serversListIsFetching,
  );
  const { t } = useTranslation();

  return (
    <div>
      <Title className="flex lg:hidden pb-6" title="Доступные планы" />

      <div>
        <Title title={t("servers involved")} />

        <Servers
          className="mt-6"
          plansRef={plansRef}
          servers={serversList}
          loading={serversListLoading}
        />
      </div>

      <div className="mt-16" ref={plansRef}>
        <ServersPlans />
      </div>
    </div>
  );
};
