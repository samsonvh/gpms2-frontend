import { InspectionRequest } from "@/lib/types/inspection-request";
import { ColumnDef } from "@tanstack/react-table";
import { ActionCell, StatusCell } from "./cells";

export const inspectionRequestColumns: ColumnDef<InspectionRequest>[] = [
  // {
  //   accessorKey: "productionPlan.code",
  //   id: "productionPlan",
  //   header: "Plan",
  // },
  {
    accessorKey: "productionSeriesCode",
    id: "productionSeriesCode",
    header: "Series",
  },
  {
    accessorKey: "name",
    id: "name",
    header: "Name",
  },
  {
    accessorKey: "requiredQuantity",
    id: "requiredQuantity",
    header: "Required",
  },
  {
    accessorKey: "failedQuantity",
    id: "failedQuantity",
    header: "Failed",
  },
  // {
  //   accessorKey: "inspectedQuantity",
  //   id: "inspectedQuantity",
  //   header: "Inspected",
  // },
  {
    accessorKey: "passedQuantity",
    id: "passedQuantity",
    header: "Passed",
  },
  {
    accessorKey: "createdDate",
    id: "createdDate",
    header: "Created",
  },
  // {
  //   accessorKey: "creator.fullname",
  //   id: "creator",
  //   header: "Creator",
  // },
  {
    accessorKey: "status",
    id: "status",
    header: "Status",
    cell: StatusCell,
  },
  {
    id: "action",
    header: "Actions",
    cell: ActionCell,
    meta: {
      detailsHref: "/inspection-requests",
    },
  },
];
