// export type SensorData = {
// id: string;
// date: string;
// temperatureVal: number;
// humidityVal: number;
// smokeVal: number;
// alcoholVal: number;
// carbonDioxideVal: number;
// ammoniaVal: number;
// tempStatus: string;
// humidStatus: string;
// smokeStatus: string;
// alcoholStatus: string;
// carbonDioxideStatus: string;
// ammoniaStatus: string;
// };

// // Sample data
// const data: SensorData[] = [
// {
// id: "1",
// date: "2024-01-15 10:30:00",
// temperatureVal: 32,
// humidityVal: 65,
// smokeVal: 20,
// alcoholVal: 15,
// carbonDioxideVal: 450,
// ammoniaVal: 25,
// tempStatus: "Critical",
// humidStatus: "Warning",
// smokeStatus: "Critical",
// alcoholStatus: "Critical",
// carbonDioxideStatus: "Danger",
// ammoniaStatus: "Warning",
// },
// {
// id: "2",
// date: "2024-01-15 11:30:00",
// temperatureVal: 31,
// humidityVal: 67,
// smokeVal: 18,
// alcoholVal: 12,
// carbonDioxideVal: 420,
// ammoniaVal: 22,
// tempStatus: "Critical",
// humidStatus: "Warning",
// smokeStatus: "Critical",
// alcoholStatus: "Critical",
// carbonDioxideStatus: "Danger",
// ammoniaStatus: "Warning",
// },
// {
// id: "3",
// date: "2024-01-15 12:30:00",
// temperatureVal: 33,
// humidityVal: 63,
// smokeVal: 25,
// alcoholVal: 18,
// carbonDioxideVal: 480,
// ammoniaVal: 28,
// tempStatus: "Critical",
// humidStatus: "Warning",
// smokeStatus: "Critical",
// alcoholStatus: "Critical",
// carbonDioxideStatus: "Danger",
// ammoniaStatus: "Warning",
// },
// {
// id: "4",
// date: "2024-01-15 13:30:00",
// temperatureVal: 30,
// humidityVal: 70,
// smokeVal: 15,
// alcoholVal: 10,
// carbonDioxideVal: 400,
// ammoniaVal: 20,
// tempStatus: "Critical",
// humidStatus: "Warning",
// smokeStatus: "Critical",
// alcoholStatus: "Critical",
// carbonDioxideStatus: "Danger",
// ammoniaStatus: "Warning",
// },
// {
// id: "5",
// date: "2024-01-15 14:30:00",
// temperatureVal: 34,
// humidityVal: 62,
// smokeVal: 30,
// alcoholVal: 20,
// carbonDioxideVal: 500,
// ammoniaVal: 30,
// tempStatus: "Critical",
// humidStatus: "Warning",
// smokeStatus: "Critical",
// alcoholStatus: "Critical",
// carbonDioxideStatus: "Danger",
// ammoniaStatus: "Warning",
// },
// {
// id: "6",
// date: "2024-01-15 10:30:00",
// temperatureVal: 32,
// humidityVal: 65,
// smokeVal: 20,
// alcoholVal: 15,
// carbonDioxideVal: 450,
// ammoniaVal: 25,
// tempStatus: "Critical",
// humidStatus: "Warning",
// smokeStatus: "Critical",
// alcoholStatus: "Critical",
// carbonDioxideStatus: "Danger",
// ammoniaStatus: "Warning",
// },
// {
// id: "7",
// date: "2024-01-15 11:30:00",
// temperatureVal: 31,
// humidityVal: 67,
// smokeVal: 18,
// alcoholVal: 12,
// carbonDioxideVal: 420,
// ammoniaVal: 22,
// tempStatus: "Critical",
// humidStatus: "Warning",
// smokeStatus: "Critical",
// alcoholStatus: "Critical",
// carbonDioxideStatus: "Danger",
// ammoniaStatus: "Warning",
// },
// {
// id: "8",
// date: "2024-01-15 12:30:00",
// temperatureVal: 33,
// humidityVal: 63,
// smokeVal: 25,
// alcoholVal: 18,
// carbonDioxideVal: 480,
// ammoniaVal: 28,
// tempStatus: "Critical",
// humidStatus: "Warning",
// smokeStatus: "Critical",
// alcoholStatus: "Critical",
// carbonDioxideStatus: "Danger",
// ammoniaStatus: "Warning",
// },
// {
// id: "9",
// date: "2024-01-15 13:30:00",
// temperatureVal: 30,
// humidityVal: 70,
// smokeVal: 15,
// alcoholVal: 10,
// carbonDioxideVal: 400,
// ammoniaVal: 20,
// tempStatus: "Critical",
// humidStatus: "Warning",
// smokeStatus: "Critical",
// alcoholStatus: "Critical",
// carbonDioxideStatus: "Danger",
// ammoniaStatus: "Warning",
// },
// {
// id: "10",
// date: "2024-01-15 14:30:00",
// temperatureVal: 34,
// humidityVal: 62,
// smokeVal: 30,
// alcoholVal: 20,
// carbonDioxideVal: 500,
// ammoniaVal: 30,
// tempStatus: "Critical",
// humidStatus: "Warning",
// smokeStatus: "Critical",
// alcoholStatus: "Critical",
// carbonDioxideStatus: "Danger",
// ammoniaStatus: "Warning",
// },
// ];

// export const columns: ColumnDef<SensorData>[] = [
// {
// accessorKey: "date",
// header: () => <div className="text-center">Date</div>, // Center the header
// cell: ({ row }) => (
// <div className="text-center font-medium">{row.getValue("date")}°C</div>
// ),
// },
// {
// accessorKey: "temperatureVal",
// header: () => <div className="text-center">Temperature</div>, // Center the header
// cell: ({ row }) => (
// <div className="text-center">{row.getValue("temperatureVal")}°C</div>
// ),
// },

// {
// accessorKey: "tempStatus",
// header: () => <div className="text-center">Status</div>, // Center the header
// cell: ({ row }) => (
// <div className="text-center">
// <Badge
// variant="secondary"
// className="text-white px-1.5 bg-green-500 dark:bg-green-600"
// >
// <Skull className="text-white" />
// {row.getValue("tempStatus")}
// <span></span>
// </Badge>
// </div>
// ),
// },

// {
// accessorKey: "humidityVal",
// header: () => <div className="text-center">Humidity</div>, // Center the header
// cell: ({ row }) => (
// <div className="text-center">{row.getValue("humidityVal")}%</div>
// ),
// },

// {
// accessorKey: "humidStatus",
// header: () => <div className="text-center">Status</div>, // Center the header
// cell: ({ row }) => (
// <div className="text-center">{row.getValue("humidStatus")}</div>
// ),
// },
// {
// accessorKey: "smokeVal",
// header: () => <div className="text-center">Smoke</div>, // Center the header
// cell: ({ row }) => (
// <div className="text-center">{row.getValue("smokeVal")} ppm</div>
// ),
// },
// {
// accessorKey: "smokeStatus",
// header: () => <div className="text-center">Status</div>, // Center the header
// cell: ({ row }) => (
// <div className="text-center">{row.getValue("smokeStatus")} </div>
// ),
// },
// {
// accessorKey: "alcoholVal",
// header: () => <div className="text-center">Alcohol</div>, // Center the header
// cell: ({ row }) => (
// <div className="text-center">{row.getValue("alcoholVal")} ppm</div>
// ),
// },
// {
// accessorKey: "alcoholStatus",
// header: () => <div className="text-center">Status</div>, // Center the header
// cell: ({ row }) => (
// <div className="text-center">{row.getValue("alcoholStatus")}</div>
// ),
// },
// {
// accessorKey: "carbonDioxideVal",
// header: () => <div className="text-center">C02</div>, // Center the header
// cell: ({ row }) => (
// <div className="text-center">{row.getValue("carbonDioxideVal")} ppm</div>
// ),
// },
// {
// accessorKey: "carbonDioxideStatus",
// header: () => <div className="text-center">Status</div>, // Center the header
// cell: ({ row }) => (
// <div className="text-center">{row.getValue("carbonDioxideStatus")}</div>
// ),
// },
// {
// accessorKey: "ammoniaVal",
// header: () => <div className="text-center">Ammonia</div>, // Center the header
// cell: ({ row }) => (
// <div className="text-center">{row.getValue("ammoniaVal")} ppm</div>
// ),
// },

// {
// accessorKey: "ammoniaStatus",
// header: () => <div className="text-center">Status</div>, // Center the header
// cell: ({ row }) => (
// <div className="text-center">{row.getValue("ammoniaStatus")}</div>
// ),
// },
// ];
