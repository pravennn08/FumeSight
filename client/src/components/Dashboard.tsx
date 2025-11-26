import { AppListCharts } from "./AppListCharts";
import { AppTemperatureChart } from "./AppTemperatureChart";
const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 gap-4 auto-rows-min">
      <AppTemperatureChart />
      <AppTemperatureChart />
      <AppTemperatureChart />
      <AppTemperatureChart />
      <AppTemperatureChart />
      <AppListCharts />
    </div>
  );
};

export default Dashboard;
