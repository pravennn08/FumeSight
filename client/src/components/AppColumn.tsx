// import { type ColumnDef } from "@tanstack/react-table";
// import { type SensorData } from "./AppTable";
// import { AppStatusBadge } from "./AppStatusBadge";

// export const columns: ColumnDef<SensorData>[] = [
//   {
//     accessorKey: "date",
//     header: () => <div className="text-center">Date</div>,
//     cell: ({ row }) => (
//       <div className="text-center font-medium">{row.getValue("date")}</div>
//     ),
//   },
//   {
//     accessorKey: "temperatureVal",
//     header: () => <div className="text-center">Temperature</div>,
//     cell: ({ row }) => (
//       <div className="text-center">{row.getValue("temperatureVal")}°C</div>
//     ),
//   },
//   {
//     id: "tempStatus",
//     header: () => <div className="text-center">Status</div>,
//     cell: ({ row }) => (
//       <div className="text-center">
//         <AppStatusBadge
//           value={row.getValue("temperatureVal")}
//           sensorType="temperature"
//         />
//       </div>
//     ),
//   },
//   {
//     accessorKey: "humidityVal",
//     header: () => <div className="text-center">Humidity</div>,
//     cell: ({ row }) => (
//       <div className="text-center">{row.getValue("humidityVal")}%</div>
//     ),
//   },
//   {
//     id: "humidStatus",
//     header: () => <div className="text-center">Status</div>,
//     cell: ({ row }) => (
//       <div className="text-center">
//         <AppStatusBadge
//           value={row.getValue("humidityVal")}
//           sensorType="humidity"
//         />
//       </div>
//     ),
//   },
//   {
//     accessorKey: "smokeVal",
//     header: () => <div className="text-center">Smoke</div>,
//     cell: ({ row }) => (
//       <div className="text-center">{row.getValue("smokeVal")} ppm</div>
//     ),
//   },
//   {
//     id: "smokeStatus",
//     header: () => <div className="text-center">Status</div>,
//     cell: ({ row }) => (
//       <div className="text-center">
//         <AppStatusBadge value={row.getValue("smokeVal")} sensorType="smoke" />
//       </div>
//     ),
//   },
//   {
//     accessorKey: "alcoholVal",
//     header: () => <div className="text-center">Alcohol</div>,
//     cell: ({ row }) => (
//       <div className="text-center">{row.getValue("alcoholVal")} ppm</div>
//     ),
//   },
//   {
//     id: "alcoholStatus",
//     header: () => <div className="text-center">Status</div>,
//     cell: ({ row }) => (
//       <div className="text-center">
//         <AppStatusBadge
//           value={row.getValue("alcoholVal")}
//           sensorType="alcohol"
//         />
//       </div>
//     ),
//   },
//   {
//     accessorKey: "carbonDioxideVal",
//     header: () => <div className="text-center">CO2</div>,
//     cell: ({ row }) => (
//       <div className="text-center">{row.getValue("carbonDioxideVal")} ppm</div>
//     ),
//   },
//   {
//     id: "carbonDioxideStatus",
//     header: () => <div className="text-center">Status</div>,
//     cell: ({ row }) => (
//       <div className="text-center">
//         <AppStatusBadge
//           value={row.getValue("carbonDioxideVal")}
//           sensorType="carbonDioxide"
//         />
//       </div>
//     ),
//   },
//   {
//     accessorKey: "ammoniaVal",
//     header: () => <div className="text-center">Ammonia</div>,
//     cell: ({ row }) => (
//       <div className="text-center">{row.getValue("ammoniaVal")} ppm</div>
//     ),
//   },
//   {
//     id: "ammoniaStatus",
//     header: () => <div className="text-center">Status</div>,
//     cell: ({ row }) => (
//       <div className="text-center">
//         <AppStatusBadge
//           value={row.getValue("ammoniaVal")}
//           sensorType="ammonia"
//         />
//       </div>
//     ),
//   },
// ];
