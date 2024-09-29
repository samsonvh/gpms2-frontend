"use client";
import FaultyProductSection from "@/components/pages/inspection-requests/[id]/FaultyProductSection";
import GeneralInformationSection from "@/components/pages/inspection-requests/[id]/GeneralInformationSection";
import QuantityTable from "@/components/pages/inspection-requests/[id]/QuantityTable";
import TitleSection from "@/components/pages/inspection-requests/[id]/TitleSection";
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
import { getInspectionRequestDetails } from "@/lib/api-calls/inspection-request";
import { InspectionRequestDetails } from "@/lib/types/inspection-request";
// @ts-ignore
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const InspectionRequestDetailPage = ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const searchParams = useSearchParams();

  const [inspectionRequest, setInspectionRequest] =
    useState<InspectionRequestDetails>();

  const getDetails = async () => {
    await fetch(
      `${
        process.env.NEXT_PUBLIC_API_DOMAIN
      }/api/v1/inspection-requests/${id}?token=${encodeURIComponent(searchParams.get("token")!)}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setInspectionRequest(data));
  };

  useEffect(() => {
    getDetails();
  }, []);
  // let inspectionRequest: InspectionRequestDetails | null =
  //   await getInspectionRequestDetails(id);

  if (inspectionRequest == null) {
    return <div></div>;
  } else {
    // inspectionRequest = inspectionRequest as InspectionRequestDetails;
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
            <TitleSection inspectionRequest={inspectionRequest} />
          </CardHeader>
          <CardContent>
            <GeneralInformationSection inspectionRequest={inspectionRequest} />
            <FaultyProductSection
              inspectionResult={inspectionRequest.inspectionResult}
            />
          </CardContent>
        </Card>
      </div>
    );
  }
};

export default InspectionRequestDetailPage;
