"use client";
import DefaultSearchBox from "@/components/common/search/box";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signOut } from "next-auth/react";
import React, { useEffect } from "react";

const InspectionRequestsPage = () => {
  return (
    <Card>
      <CardHeader>
        <div className="tw-flex tw-items-center tw-justify-between">
          <div>
            <CardTitle>Inspection requests</CardTitle>
            <CardDescription className="tw-mt-2">
              Inspection requests
            </CardDescription>
          </div>
          <DefaultSearchBox />
        </div>
      </CardHeader>
      <CardContent>t</CardContent>
    </Card>
  );
};

export default InspectionRequestsPage;
