import \* as React from "react";
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

// Updated data type
export type SensorData = {
id: string;
date: string;
temperature: number;
humidity: number;
smoke: number;
alcohol: number;
co2: number;
ammonia: number;
};

// Sample data
const data: SensorData[] = [
{
id: "1",
date: "2024-01-15 10:30:00",
temperature: 32,
humidity: 65,
smoke: 20,
alcohol: 15,
co2: 450,
ammonia: 25,
},
{
id: "2",
date: "2024-01-15 11:30:00",
temperature: 31,
humidity: 67,
smoke: 18,
alcohol: 12,
co2: 420,
ammonia: 22,
},
{
id: "3",
date: "2024-01-15 12:30:00",
temperature: 33,
humidity: 63,
smoke: 25,
alcohol: 18,
co2: 480,
ammonia: 28,
},
{
id: "4",
date: "2024-01-15 13:30:00",
temperature: 30,
humidity: 70,
smoke: 15,
alcohol: 10,
co2: 400,
ammonia: 20,
},
{
id: "5",
date: "2024-01-15 14:30:00",
temperature: 34,
humidity: 62,
smoke: 30,
alcohol: 20,
co2: 500,
ammonia: 30,
},
{
id: "6",
date: "2024-01-15 10:30:00",
temperature: 32,
humidity: 65,
smoke: 20,
alcohol: 15,
co2: 450,
ammonia: 25,
},
{
id: "7",
date: "2024-01-15 11:30:00",
temperature: 31,
humidity: 67,
smoke: 18,
alcohol: 12,
co2: 420,
ammonia: 22,
},
{
id: "8",
date: "2024-01-15 12:30:00",
temperature: 33,
humidity: 63,
smoke: 25,
alcohol: 18,
co2: 480,
ammonia: 28,
},
{
id: "9",
date: "2024-01-15 13:30:00",
temperature: 30,
humidity: 70,
smoke: 15,
alcohol: 10,
co2: 400,
ammonia: 20,
},
{
id: "10",
date: "2024-01-15 14:30:00",
temperature: 34,
humidity: 62,
smoke: 30,
alcohol: 20,
co2: 500,
ammonia: 30,
},
];

export const columns: ColumnDef<SensorData>[] = [
{
accessorKey: "date",
header: "Date",
cell: ({ row }) => (

<div className="font-medium">{row.getValue("date")}</div>
),
},
{
accessorKey: "temperature",
header: () => <div className="text-center">Temperature</div>, // Center the header
cell: ({ row }) => (
<div className="text-center">{row.getValue("temperature")}°C</div>
),
},
{
accessorKey: "humidity",
header: () => <div className="text-center">Humidity</div>, // Center the header
cell: ({ row }) => (
<div className="text-center">{row.getValue("humidity")}%</div>
),
},
{
accessorKey: "smoke",
header: () => <div className="text-center">Smoke</div>, // Center the header
cell: ({ row }) => (
<div className="text-center">{row.getValue("smoke")} ppm</div>
),
},
{
accessorKey: "alcohol",
header: () => <div className="text-center">Alcohol</div>, // Center the header
cell: ({ row }) => (
<div className="text-center">{row.getValue("alcohol")} ppm</div>
),
},
{
accessorKey: "co2",
header: () => <div className="text-center">CO2</div>, // Center the header
cell: ({ row }) => (
<div className="text-center">{row.getValue("co2")} ppm</div>
),
},
{
accessorKey: "ammonia",
header: () => <div className="text-center">Ammonia</div>, // Center the header
cell: ({ row }) => (
<div className="text-center">{row.getValue("ammonia")} ppm</div>
),
},
];

export function DataTableDemo() {
const [sorting, setSorting] = React.useState<SortingState>([]);
const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
[]
);
const [columnVisibility, setColumnVisibility] =
React.useState<VisibilityState>({});
const [rowSelection, setRowSelection] = React.useState({});

const table = useReactTable({
data,
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

return (

<div className="w-full">
<div className="flex items-center py-4">
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
<DropdownMenuItem>
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
<DropdownMenuItem>
PDF
{/_ <DropdownMenuShortcut>⌘B</DropdownMenuShortcut> _/}
</DropdownMenuItem>
{/_ {table
.getAllColumns()
.filter((column) => column.getCanHide())
.map((column) => {
return (
<DropdownMenuCheckboxItem
key={column.id}
className="capitalize"
checked={column.getIsVisible()}
onCheckedChange={(value) =>
column.toggleVisibility(!!value)
} >
{column.id}
</DropdownMenuCheckboxItem>
);
})} _/}
</DropdownMenuContent>
</DropdownMenu>
</div>
<div className="overflow-hidden rounded-md border">
<Table>
<TableHeader>
{table.getHeaderGroups().map((headerGroup) => (
<TableRow key={headerGroup.id}>
{headerGroup.headers.map((header) => {
return (
<TableHead key={header.id}>
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
<TableBody>
{table.getRowModel().rows?.length ? (
table.getRowModel().rows.map((row) => (
<TableRow key={row.id}>
{row.getVisibleCells().map((cell) => (
<TableCell key={cell.id}>
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
disabled={!table.getCanPreviousPage()} >
Previous
</Button>
<Button
variant="outline"
size="sm"
onClick={() => table.nextPage()}
disabled={!table.getCanNextPage()} >
Next
</Button>
</div>
</div>
</div>
);
}
