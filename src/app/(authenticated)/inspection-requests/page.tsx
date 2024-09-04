"use client";
import DataTable from "@/components/common/data-table";
import DefaultSearchBox from "@/components/common/search/box";
import CreateModal from "@/components/pages/inspection-requests/CreateModal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useEffect, useState } from "react";
import { inspectionRequestColumns } from "@/components/common/data-table/columns";
import inspectionRequestData from "@/lib/mock-data/inspection-requests.json";
import { getInspectionRequestList } from "@/lib/api-calls/inspection-request";

const InspectionRequestsPage = () => {
  const [list, setList] = useState([]);

  const a = async () => {
    const b = await getInspectionRequestList();
    setList(b);
  };

  useEffect(() => {
    a();
  }, []);

  return (
    <Card className="tw-mx-6 tw-h-full tw-flex tw-flex-col">
      <CardHeader>
        <div className="tw-flex tw-items-center tw-gap-4">
          <div className="tw-flex-grow">
            <CardTitle>Inspection requests</CardTitle>
            <CardDescription className="tw-mt-2">
              Inspection requests
            </CardDescription>
          </div>
          <DefaultSearchBox />
          <CreateModal />
        </div>
      </CardHeader>
      <CardContent className="tw-flex-grow">
        <Tabs defaultValue="all">
          <div className="tw-flex tw-justify-between">
            <TabsList className="tw-grid tw-grid-cols-6 tw-w-full">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="approved">Approved</TabsTrigger>
              <TabsTrigger value="inProgress">In progress</TabsTrigger>
              <TabsTrigger value="failed">Failed</TabsTrigger>
              <TabsTrigger value="passed">Passed</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="all">
            <DataTable
              columns={inspectionRequestColumns}
              data={list}
            />
          </TabsContent>
          <TabsContent value="pending">
            <DataTable
              columns={inspectionRequestColumns}
              data={list}
            />
          </TabsContent>
          <TabsContent value="approved">
            <DataTable
              columns={inspectionRequestColumns}
              data={list}
            />
          </TabsContent>
          <TabsContent value="inProgress">
            <DataTable
              columns={inspectionRequestColumns}
              data={list}
            />
          </TabsContent>
          <TabsContent value="failed">
            <DataTable
              columns={inspectionRequestColumns}
              data={list}
            />
          </TabsContent>
          <TabsContent value="passed">
            <DataTable
              columns={inspectionRequestColumns}
              data={list}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default InspectionRequestsPage;
