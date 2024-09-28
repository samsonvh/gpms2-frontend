import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { InspectionRequestDetails } from "@/lib/types/inspection-request";

type TableProps = {
  inspectionRequest: InspectionRequestDetails;
};

const QuantityTable = ({ inspectionRequest }: TableProps) => {
  return (
    <Table className="tw-text-center tw-w-min">
      <TableHeader>
        <TableRow>
          <TableHead className="tw-text-center">Required</TableHead>
          <TableHead className="tw-text-center">Inspected</TableHead>
          <TableHead className="tw-text-center">Failed</TableHead>
          <TableHead className="tw-text-center">Passed</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>{inspectionRequest.requiredQuantity}</TableCell>
          <TableCell>
            {inspectionRequest.inspectionResult.inspectedQuantity}
          </TableCell>
          <TableCell>
            {inspectionRequest.inspectionResult.failedQuantity}
          </TableCell>
          <TableCell>
            {inspectionRequest.inspectionResult.passedQuantity}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default QuantityTable;
