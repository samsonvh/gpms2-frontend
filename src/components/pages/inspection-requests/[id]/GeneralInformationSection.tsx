import { CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { InspectionRequestDetails } from "@/lib/types/inspection-request";
import React from "react";
import QuantityTable from "./QuantityTable";
import { UserCheck, UserPlus, UserSearch, UserX } from "lucide-react";

type SectionProps = {
  inspectionRequest: InspectionRequestDetails;
};

const GeneralInformationSection = ({ inspectionRequest }: SectionProps) => {
  return (
    <div className="tw-flex tw-justify-between">
      <div className="tw-flex tw-flex-col tw-gap-4">
        <Label>
          <p className="tw-text-base tw-font-semibold">Description:</p>
          <CardDescription className="tw-text-sm">
            {inspectionRequest.description ?? "No description"}
          </CardDescription>
        </Label>
        <Label>
          <p className="tw-text-base tw-font-semibold">
            Inspection result summary:
          </p>
          <QuantityTable inspectionRequest={inspectionRequest} />
        </Label>
      </div>
      <div className="tw-flex tw-gap-4">
        <div className="tw-flex tw-flex-col tw-gap-2">
          <div className="tw-flex tw-items-center tw-gap-2 tw-border tw-p-4 tw-text-sm tw-rounded-lg">
            <UserPlus />
            <p>Creator: {inspectionRequest.creator.name}</p>
          </div>
          {inspectionRequest.reviewer && (
            <div className="tw-flex tw-items-center tw-gap-2 tw-border tw-p-4 tw-text-sm tw-rounded-lg">
              {inspectionRequest.status === "Passed" ||
              inspectionRequest.status === "Failed" ||
              inspectionRequest.status === "InProgress" ? (
                <UserCheck />
              ) : (
                <UserX />
              )}
              <p>Reviewer: {inspectionRequest.reviewer.name}</p>
            </div>
          )}
          {inspectionRequest.inspectionResult.inspector && (
            <div className="tw-flex tw-items-center tw-gap-2 tw-border tw-p-4 tw-text-sm tw-rounded-lg">
              <UserSearch />
              <p>
                Inspector: {inspectionRequest.inspectionResult.inspector.name}
              </p>
            </div>
          )}
        </div>
        <div className="tw-flex tw-flex-col tw-gap-2">
          <div className="tw-flex tw-items-center tw-gap-2 tw-border tw-p-4 tw-text-sm tw-rounded-lg">
            <p className="tw-leading-6">Created Date: {inspectionRequest.createdDate.toString()}</p>
          </div>
          {inspectionRequest.reviewedDate && (
            <div className="tw-flex tw-items-center tw-gap-2 tw-border tw-p-4 tw-text-sm tw-rounded-lg ">
              <p className="tw-leading-6">
                {inspectionRequest.status === "Passed" ||
                inspectionRequest.status === "Failed" ||
                inspectionRequest.status === "InProgress"
                  ? "Approved"
                  : inspectionRequest.status}{" "}
                Date: {inspectionRequest.reviewedDate.toString()}
              </p>
            </div>
          )}
          {inspectionRequest.inspectionResult.inspector && (
            <div className="tw-flex tw-items-center tw-gap-2 tw-border tw-p-4 tw-text-sm tw-rounded-lg">
              <p className="tw-leading-6">
                Inspected Date:{" "}
                {inspectionRequest.inspectionResult.createdDate.toString()}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeneralInformationSection;
