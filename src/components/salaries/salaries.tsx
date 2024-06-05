import { Box } from "@mui/material";
import SalariesScatterChart from "./salaries-scatter-chart";

export default function Salaries() {
  return (
    <div className="bg-white p-4 col-span-12 md:col-span-7 tablet:col-span-8 xl:col-span-6 overflow-x-hidden hide-scroll-bar">
      <SalariesScatterChart />
    </div>
  );
}
