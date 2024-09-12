import ReviewRequestButton from "@/components/common/buttons/review-request";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getInspectionRequestDetails } from "@/lib/api-calls/inspection-request";
import { InspectionRequestDetails } from "@/lib/types/inspection-request";

const InspectionRequestDetailPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  let inspectionRequest: InspectionRequestDetails | null =
    await getInspectionRequestDetails(id);

  if (inspectionRequest == null) {
    return <div>Not found</div>;
  } else {
    inspectionRequest = inspectionRequest as InspectionRequestDetails;
    return (
      <div className="tw-flex-grow tw-flex tw-flex-col tw-gap-2 tw-px-4">
        <Breadcrumb className="tw-px-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Inspection requests</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="tw-font-bold">
              {inspectionRequest.name}
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Card>
          <CardHeader>
            <div className="tw-flex tw-justify-between tw-items-center">
              <div className="tw-flex tw-flex-col tw-gap-2">
                <CardTitle>{inspectionRequest.name}</CardTitle>
                <CardDescription>
                  <span className="tw-font-semibold">Description: </span>{inspectionRequest.description}
                </CardDescription>
              </div>
              {inspectionRequest.status == "Pending" && (
                <div className="tw-flex tw-gap-2">
                  <ReviewRequestButton requestId={id} status="Declined">
                    Decline
                  </ReviewRequestButton>
                  <ReviewRequestButton requestId={id} status="Approved">
                    Approve
                  </ReviewRequestButton>
                </div>
              )}
              {inspectionRequest.status == "Approved" && (
                <Badge>Approved</Badge>
              )}
              {inspectionRequest.status == "Declined" && (
                <Badge variant={"destructive"}>Declined</Badge>
              )}
              {inspectionRequest.status == "Failed" && (
                <Badge variant={"destructive"}>Failed</Badge>
              )}
              {inspectionRequest.status == "Passed" && <Badge>Passed</Badge>}
            </div>
          </CardHeader>
          <CardContent className="tw-flex tw-justify-between tw-items-end">
            <div className="tw-text-nowrap tw-flex-grow tw-py-4">
              <p>
                Created at{" "}
                <span className="tw-font-semibold">
                  {inspectionRequest.createdDate.toString()}
                </span>{" "}
                by{" "}
                <span className="tw-font-semibold">
                  {inspectionRequest.creator.name}
                </span>
              </p>
              {inspectionRequest.reviewer == null ? null : (
                <p>
                  {inspectionRequest.status == "Declined"
                    ? "Declined"
                    : "Approved"}{" "}
                  at{" "}
                  <span className="tw-font-semibold">
                    {inspectionRequest.reviewedDate!.toString()}
                  </span>{" "}
                  by{" "}
                  <span className="tw-font-semibold">
                    {inspectionRequest.reviewer.name}
                  </span>
                </p>
              )}
              {inspectionRequest.inspectionResult.inspector == null ? null : (
                <p>
                  Created at{" "}
                  <span className="tw-font-semibold">
                    {inspectionRequest.inspectionResult.createdDate!.toString()}
                  </span>{" "}
                  by{" "}
                  <span className="tw-font-semibold">
                    {inspectionRequest.inspectionResult.inspector.name}
                  </span>
                </p>
              )}
            </div>
            <div>
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
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
};

export default InspectionRequestDetailPage;
