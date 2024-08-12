"use client";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { InspectionRequestListingDto } from "@/data/types/inspectionRequest";
import DataTable, { StatusCell } from "@/components/common/data-table";
import data from "@/data/mock-data/inspectionRequest.json"

const columns: ColumnDef<InspectionRequestListingDto>[] = [
  {
    accessorKey: "id",
    header: "ID",
    id: "id",
  },
  {
    accessorKey: "creatorName",
    header: "Creator",
    id: "creatorName",
  },
  {
    accessorKey: "reviewerName",
    header: "Reviewer",
    id: "reviewerName",
  },
  {
    accessorKey: "productionSeriesCode",
    header: "Production Series",
    id: "productionSeriesCode",
  },
  {
    accessorKey: "name",
    header: "Name",
    id: "name",
  },
  {
    accessorKey: "requiredQuantity",
    header: "Required",
    id: "requiredQuantity",
  },
  {
    accessorKey: "inspectedQuantity",
    header: "Inspected",
    id: "inspectedQuantity",
  },
  {
    accessorKey: "passedQuantity",
    header: "Passed",
    id: "passedQuantity",
  },
  {
    accessorKey: "createdDate",
    header: "Created",
    id: "createdDate",
  },
  {
    accessorKey: "status",
    header: "Status",
    id: "status",
    cell: StatusCell
  },
];

const InspectionRequestListTable = () => {
  return (
    <div>
      <DataTable columns={columns} data={data}/>
    </div>
  );
};

export default InspectionRequestListTable;
