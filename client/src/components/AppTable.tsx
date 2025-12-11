import * as React from "react";
import { Loader } from "lucide-react";
import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useLogStore, type SensorData } from "@/store/userLogStore.ts";
import { AppStatusBadge } from "./AppStatusBadge";
import { exportToExcel, exportToPDF } from "@/utils/ExportData";
import { useRef, useEffect } from "react";

interface SensorMessage {
  type: string;
  temperatureVal: number;
  humidityVal: number;
  smokeVal: number;
  alcoholVal: number;
  carbonDioxideVal: number;
  ammoniaVal: number;
}

export function AppTable() {
  const { logs, getUserLogs, isLoading, setUserLogs } = useLogStore();
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const handleExportToExcel = async () => {
    try {
      await exportToExcel(logs);
      console.log("Excel export successful!");
    } catch (error) {
      console.error("Error exporting to Excel:", error);
      alert("Failed to export to Excel. Please try again.");
    }
  };

  const handleExportToPDF = async () => {
    try {
      await exportToPDF(logs);
      console.log("PDF export successful!");
    } catch (error) {
      console.error("Error exporting to PDF:", error);
      alert("Failed to export to PDF. Please try again.");
    }
  };

  useEffect(() => {
    const fetchLogs = async () => {
      await getUserLogs();
    };
    fetchLogs();
  }, [getUserLogs]);

  if (isLoading) {
    return <Loader className="w-6 h-6 animate-spin  mx-auto" />;
  }

  // Ref to keep the latest sensor readings
  const latestReadings = useRef<SensorMessage>({
    type: "sensor",
    temperatureVal: 0,
    humidityVal: 0,
    smokeVal: 0,
    alcoholVal: 0,
    carbonDioxideVal: 0,
    ammoniaVal: 0,
  });

  const columns: ColumnDef<SensorData>[] = [
    {
      accessorKey: "date",
      header: () => <div className="text-center">Date</div>,
      cell: ({ row }) => (
        <div className="text-center font-medium">{row.getValue("date")}</div>
      ),
    },
    {
      accessorKey: "temperatureVal",
      header: () => <div className="text-center">Temperature</div>,
      cell: () => (
        <div className="text-center">
          {latestReadings.current.temperatureVal}°C
        </div>
      ),
    },
    {
      id: "tempStatus",
      header: () => <div className="text-center">Status</div>,
      cell: () => (
        <div className="text-center">
          <AppStatusBadge
            value={latestReadings.current.temperatureVal}
            sensorType="temperature"
          />
        </div>
      ),
    },
    {
      accessorKey: "humidityVal",
      header: () => <div className="text-center">Humidity</div>,
      cell: () => (
        <div className="text-center">{latestReadings.current.humidityVal}%</div>
      ),
    },
    {
      id: "humidStatus",
      header: () => <div className="text-center">Status</div>,
      cell: () => (
        <div className="text-center">
          <AppStatusBadge
            value={latestReadings.current.humidityVal}
            sensorType="humidity"
          />
        </div>
      ),
    },
    {
      accessorKey: "smokeVal",
      header: () => <div className="text-center">Smoke</div>,
      cell: () => (
        <div className="text-center">{latestReadings.current.smokeVal} ppm</div>
      ),
    },
    {
      id: "smokeStatus",
      header: () => <div className="text-center">Status</div>,
      cell: () => (
        <div className="text-center">
          <AppStatusBadge
            value={latestReadings.current.smokeVal}
            sensorType="smoke"
          />
        </div>
      ),
    },
    {
      accessorKey: "alcoholVal",
      header: () => <div className="text-center">Alcohol</div>,
      cell: () => (
        <div className="text-center">
          {latestReadings.current.alcoholVal} ppm
        </div>
      ),
    },
    {
      id: "alcoholStatus",
      header: () => <div className="text-center">Status</div>,
      cell: () => (
        <div className="text-center">
          <AppStatusBadge
            value={latestReadings.current.alcoholVal}
            sensorType="alcohol"
          />
        </div>
      ),
    },
    {
      accessorKey: "carbonDioxideVal",
      header: () => <div className="text-center">CO2</div>,
      cell: () => (
        <div className="text-center">
          {latestReadings.current.carbonDioxideVal} ppm
        </div>
      ),
    },
    {
      id: "carbonDioxideStatus",
      header: () => <div className="text-center">Status</div>,
      cell: () => (
        <div className="text-center">
          <AppStatusBadge
            value={latestReadings.current.carbonDioxideVal}
            sensorType="carbonDioxide"
          />
        </div>
      ),
    },
    {
      accessorKey: "ammoniaVal",
      header: () => <div className="text-center">Ammonia</div>,
      cell: () => (
        <div className="text-center">
          {latestReadings.current.ammoniaVal} ppm
        </div>
      ),
    },
    {
      id: "ammoniaStatus",
      header: () => <div className="text-center">Status</div>,
      cell: () => (
        <div className="text-center">
          <AppStatusBadge
            value={latestReadings.current.ammoniaVal}
            sensorType="ammonia"
          />
        </div>
      ),
    },
  ];
  const formattedLogs = React.useMemo(() => {
    return logs.map((log) => ({
      ...log,
      date: log.date ? new Date(log.date).toLocaleString() : "No date",
    }));
  }, [logs]);

  const table = useReactTable({
    data: formattedLogs,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");

    ws.onopen = () => {
      ws.send(JSON.stringify({ type: "identify", client: "dashboard" }));
    };

    ws.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data);
        if (msg.type === "sensor" && msg.data) {
          latestReadings.current = msg.data; // store the actual sensor values
        }
      } catch (err) {
        console.error("WS JSON ERROR:", err);
      }
    };

    const interval = setInterval(async () => {
      // const r = latestReadings.current;
      try {
        const r = latestReadings.current;
        await setUserLogs(
          r.temperatureVal,
          r.humidityVal,
          r.smokeVal,
          r.alcoholVal,
          r.carbonDioxideVal,
          r.ammoniaVal
        );

        console.log("Saved to database", r);
      } catch (err) {
        console.error("Failed to save logs:", err);
      }
    }, 600000);

    return () => {
      clearInterval(interval);
      ws.close();
    };
  }, [setUserLogs]);

  return (
    <div className="w-full p-2 md:p-4 lg:p-4">
      <div className="flex flex-col  sm:flex-row items-start sm:items-center sm:gap-4 py-4">
        <div className="flex w-full items-center justify-between sm:justify-center gap-1">
          <Input
            placeholder="Filter by date..."
            value={(table.getColumn("date")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("date")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Export <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleExportToExcel}>
                Excel
                <DropdownMenuShortcut>
                  <img
                    src="/excel.png"
                    alt="E"
                    width={25}
                    height={25}
                    className="rounded-md"
                  />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleExportToPDF}>
                PDF
                <DropdownMenuShortcut>
                  <img
                    src="/pdf.png"
                    alt="P"
                    width={25}
                    height={25}
                    className="rounded-md"
                  />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="overflow-hidden overflow-x-hidden scrollbar-hide hover:scrollbar-default rounded-lg border ">
        <Table>
          <TableHeader className="bg-muted sticky top-0 z-10">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="p-4">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="**:data-[slot=table-cell]:first:w-8">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="p-3">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
