"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import GeneralInformationSection from "@/components/pages/inspection-requests/[id]/general";
import { useParams } from "next/navigation";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProductionSeriesInformationSection from "@/components/pages/inspection-requests/[id]/production-series";
import FaultyProductSection from "@/components/pages/inspection-requests/[id]/faulty-products";

const InspectionRequestDetailsPage = () => {
  const params = useParams();

  return (
    <div className="tw-flex tw-flex-col tw-gap-4">
      <Breadcrumb className="tw-mx-6 tw-mt-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/inspection-requests">
              Inspection Requests
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>ID - 1</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card>
        <CardHeader>
          <div className="tw-flex tw-gap-4 tw-items-center">
            <CardTitle className="tw-flex-grow">
              Inspection request name
            </CardTitle>
            <Button>Approve</Button>
            <Button>Decline</Button>
            <h4>Status</h4>
          </div>
        </CardHeader>
        <CardContent className="tw-flex tw-flex-col tw-gap-4">
          <GeneralInformationSection />
          <ProductionSeriesInformationSection />
          <FaultyProductSection />
        </CardContent>
      </Card>
    </div>
  );
};

export default InspectionRequestDetailsPage;
