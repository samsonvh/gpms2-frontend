import InspectionRequestListTable from "@/components/pages/inspection-requests/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const InspectionRequestPage = () => {
  return (
    <div className="tw-flex tw-flex-col tw-gap-4 tw-mt-4">
      <Card>
        <CardHeader>
          <CardTitle>Inspection Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <InspectionRequestListTable />
        </CardContent>
      </Card>
    </div>
  );
};

export default InspectionRequestPage;
