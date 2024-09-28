import { InspectionRequest, InspectionRequestListingItem } from "@/lib/types/inspection-request";
import { ColumnDef } from "@tanstack/react-table";
import { ActionCell, StatusCell } from "./cells";

export const inspectionRequestColumns: ColumnDef<InspectionRequestListingItem>[] = [
  // {
  //   accessorKey: "productionPlan.code",
  //   id: "productionPlan",
  //   header: "Plan",
  // },
  {
    accessorKey: "productionSeries.code",
    id: "productionSeries.code",
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
