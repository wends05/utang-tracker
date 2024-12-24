import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface DashboardInfopProps {
  info: string;
  amount: number;
  addDataLink: string;
  buttonRoute: string;
  routeLabel: string;
}

const DashboardInfo = ({
  info,
  amount,
  addDataLink,
  buttonRoute,
  routeLabel,
}: DashboardInfopProps) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-col items-center gap-10 bg-primary-400 p-10 blur-[0.6px]">
        <h2>{info}</h2>
        <p>{amount}</p>
        <Link href={addDataLink}>
          <PlusCircleIcon />
        </Link>
      </div>
      <Link href={buttonRoute}>
        <button>{routeLabel}</button>
      </Link>
    </div>
  );
};

export default DashboardInfo;
