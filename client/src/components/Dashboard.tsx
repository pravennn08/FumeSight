import { AppTemperatureChart } from "./AppTemperatureChart";
import { AppSmokeChart } from "./AppSmokeChart";
import { AppAlcohololChart } from "./AppAlcoholChart";
import { AppCarbonDioxideChart } from "./AppCarbonDioxideChart";
import { AppAmmoniaChart } from "./AppAmmoniaChart";
import { AppTable } from "./AppTable";

const Dashboard = () => {
  return (
    <main className="mt-5 flex flex-col">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 auto-rows-max">
        <AppTemperatureChart />
        <AppSmokeChart maxValue={300} label={"Smoke"} />
        <div className="justify-center">
          <AppAlcohololChart maxValue={100} label={"Alcohol"} />
        </div>
        <div className="justify-center">
          <AppCarbonDioxideChart maxValue={1000} label={"CO2"} />
        </div>
        <div className="justify-center">
          <AppAmmoniaChart maxValue={200} label={"Ammonia"} />
        </div>
      </div>
      <div className="mt-3 md:mt-0 lg:mt-0">
        <AppTable />
      </div>
    </main>
  );
};

export default Dashboard;
