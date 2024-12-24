import DashboardInfo from "@/components/DashboardInfo";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex h-full w-full items-center justify-center gap-2">
        <DashboardInfo
          info="total debt"
          addDataLink="/addDebt"
          amount={100}
          buttonRoute="/debts"
          routeLabel="all debts"
        />
        <DashboardInfo
          info="total debt"
          addDataLink="/addDebt"
          amount={100}
          buttonRoute="/debts"
          routeLabel="all debts"
        />
      </div>
    </div>
  );
};

export default Dashboard;
