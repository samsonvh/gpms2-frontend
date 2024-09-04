import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import expandIcon from "@Public/icons/expand.svg";
import checkedDoneIcon from "@Public/icons/checked-done.svg";
import cancelIcon from "@Public/icons/cancel.svg";
import Image from "next/image";
import { getInspectionRequestDetails } from "@/lib/api-calls/inspection-request";
import { InspectionRequestDetails } from "@/lib/types/inspection-request";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ReviewRequestButton from "@/components/common/buttons/review-request";

const InspectionRequestDetailPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  let inspectionRequest: InspectionRequestDetails | null =
    await getInspectionRequestDetails(id);
  if (inspectionRequest != null) {
    inspectionRequest = inspectionRequest as InspectionRequestDetails;
  }

  let status =
    inspectionRequest != null
      ? (inspectionRequest as InspectionRequestDetails).status
      : "Pending";

  return (
    <div className="tw-mx-6 tw-flex tw-flex-col tw-gap-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/inspection-requests">
              Inspection Requests
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>
              {inspectionRequest == null
                ? "Inspection Request"
                : (inspectionRequest as InspectionRequestDetails).name}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card>
        <CardHeader>
          <div className="tw-flex tw-justify-between tw-items-center tw-gap-2">
            <CardTitle>
              {inspectionRequest != null &&
                (inspectionRequest as InspectionRequestDetails).name}
            </CardTitle>
            {status === "Pending" && (
              <div className="tw-flex tw-justify-between tw-gap-2">
                <ReviewRequestButton requestId={id} status="Declined">
                  Decline
                </ReviewRequestButton>
                <ReviewRequestButton requestId={id} status="Approved">
                  Approve
                </ReviewRequestButton>
              </div>
            )}
            {(status === "Declined" || status === "Failed") && (
              <Badge variant={"destructive"}>{status}</Badge>
            )}
            {(status === "Passed" || status === "Approved") && (
              <Badge variant={"default"}>{status}</Badge>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription>
            {inspectionRequest != null &&
              (inspectionRequest as InspectionRequestDetails).description}
          </CardDescription>
          <div className="tw-flex tw-justify-between tw-items-stretch tw-gap-8">
            <div className="tw-text-nowrap tw-pt-4">
              <Label>
                Created:
                <p>
                  {inspectionRequest?.createdDate.toString()} by{" "}
                  {inspectionRequest?.creatorName}
                </p>
              </Label>
              {inspectionRequest?.reviewedDate && (
                <Label>
                  Reviewed:
                  <p>
                    {inspectionRequest.reviewedDate.toString()} by{" "}
                    {inspectionRequest.reviewerName}
                  </p>
                </Label>
              )}
              {inspectionRequest?.inspectedDate && (
                <Label>
                  Inspected:
                  <p>
                    {inspectionRequest.inspectedDate.toString()} by{" "}
                    {inspectionRequest.inspectorName}
                  </p>
                </Label>
              )}
            </div>
            <div>
              <div className="tw-flex tw-justify-end">
                <Label>
                  Production series: {inspectionRequest?.productionSeriesCode}
                </Label>
              </div>
              <Table className="tw-text-center">
                <TableHeader>
                  <TableRow>
                    <TableHead>Required</TableHead>
                    <TableHead>Inspected</TableHead>
                    <TableHead>Failed</TableHead>
                    <TableHead>Passed</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <span>{inspectionRequest?.requiredQuantity}</span>
                    </TableCell>
                    <TableCell>
                      <span>
                        {inspectionRequest?.inspectionResult
                          ? inspectionRequest?.inspectionResult
                              .inspectedQuantity
                          : 0}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span>
                        {inspectionRequest?.inspectionResult
                          ? inspectionRequest?.inspectionResult.failedQuantity
                          : 0}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span>
                        {inspectionRequest?.inspectionResult
                          ? inspectionRequest?.inspectionResult.passedQuantity
                          : 0}
                      </span>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
          <Collapsible>
            <div className="tw-flex tw-justify-between tw-items-center tw-pl-2 tw-pr-4 tw-pb-2">
              <Label>
                {inspectionRequest?.inspectionResult
                  ? inspectionRequest.inspectionResult.faultyProducts.length
                  : 0}{" "}
                faulty products:
              </Label>
              <CollapsibleTrigger>
                <Image src={expandIcon} alt="expand" />
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent>
              {inspectionRequest?.inspectionResult &&
                inspectionRequest.inspectionResult.faultyProducts.map(
                  (product, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>Faulty product #{index + 1}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Label>
                          Ordinal number in series:{" "}
                          {product.ordinalNumberInSeries}
                        </Label>
                        <br />
                        <Label>
                          Description:
                          <p>{product.description}</p>
                        </Label>
                        <Collapsible>
                          <div className="tw-flex tw-justify-between tw-items-center tw-pl-2 tw-pr-4">
                            <Label>
                              {product.productFaults.length} faulty products:
                            </Label>
                            <CollapsibleTrigger>
                              <Image src={expandIcon} alt="expand" />
                            </CollapsibleTrigger>
                          </div>
                          <CollapsibleContent>
                            {product.productFaults.map((fault, index) => (
                              <Card key={index}>
                                <CardHeader>
                                  <CardTitle>Product fault #{index}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <Label>
                                    Violated quality standard:{" "}
                                    <p>{fault.qualityStandardName}</p>
                                  </Label>
                                  <Label>
                                    Fault at production step:{" "}
                                    <p>{fault.productionStepName}</p>
                                  </Label>
                                  <Label>
                                    Description:{" "}
                                    <p>{fault.description}</p>
                                  </Label>
                                </CardContent>
                              </Card>
                            ))}
                          </CollapsibleContent>
                        </Collapsible>
                      </CardContent>
                    </Card>
                  )
                )}
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>
    </div>
  );
};

export default InspectionRequestDetailPage;
