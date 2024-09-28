import ReviewRequestButton from "@/components/common/buttons/review-request";
import { Badge } from "@/components/ui/badge";
import { CardTitle } from "@/components/ui/card";
import { InspectionRequestDetails } from "@/lib/types/inspection-request";
import React from "react";

type SectionProps = {
  inspectionRequest: InspectionRequestDetails;
};

const TitleSection = ({ inspectionRequest }: SectionProps) => {
  return (
    <div className="tw-flex tw-justify-between tw-items-center">
      <div className="tw-flex tw-flex-col tw-gap-2">
        <CardTitle>{inspectionRequest.name}</CardTitle>
      </div>
      {inspectionRequest.status == "Pending" && (
        <div className="tw-flex tw-gap-2">
          <ReviewRequestButton
            requestId={inspectionRequest.id}
            status="Declined"
          >
            Decline
          </ReviewRequestButton>
          <ReviewRequestButton
            requestId={inspectionRequest.id}
            status="Approved"
          >
            Approve
          </ReviewRequestButton>
        </div>
      )}
      {inspectionRequest.status == "Approved" && <Badge>Approved</Badge>}
      {inspectionRequest.status == "Declined" && (
        <Badge variant={"destructive"}>Declined</Badge>
      )}
      {inspectionRequest.status == "Failed" && (
        <Badge variant={"destructive"}>Failed</Badge>
      )}
      {inspectionRequest.status == "Passed" && <Badge>Passed</Badge>}
    </div>
  );
};

export default TitleSection;
