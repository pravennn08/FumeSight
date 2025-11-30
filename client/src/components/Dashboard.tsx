import { AppListCharts } from "./AppListCharts";
import { AppTemperatureChart } from "./AppTemperatureChart";
import { AppGasChart } from "./AppGasChart";
const Dashboard = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 2xl:grid-cols-6 gap-2 auto-rows-min">
      {/* <AppGasChart /> */}
      <AppTemperatureChart />
      {/* <AppGasChart /> */}
      <AppGasChart maxValue={10000} label={"Smoke"} />
      <AppGasChart maxValue={500} label={"Alcohol"} />
      <AppGasChart maxValue={1000} label={"CO2"} />
      <AppGasChart maxValue={500} label={"Ammonia"} />
      {/* <AppGasChart /> */}
    </div>
  );
};

export default Dashboard;
