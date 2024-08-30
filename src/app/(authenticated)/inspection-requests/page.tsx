"use client";
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

const InspectionRequestsPage = () => {
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
        <Tabs>
          <div className="tw-flex tw-justify-between">
            <TabsList className="tw-grid tw-grid-cols-6 tw-w-full">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="approved">Approved</TabsTrigger>
              <TabsTrigger value="inProgress">InProgess</TabsTrigger>
              <TabsTrigger value="failed">Failed</TabsTrigger>
              <TabsTrigger value="passed">Passed</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="all" className="tw-h-full">
            ALL
          </TabsContent>
          <TabsContent value="pending">Pending</TabsContent>
          <TabsContent value="approved">Approved</TabsContent>
          <TabsContent value="inProgress">In Progress</TabsContent>
          <TabsContent value="failed">Failed</TabsContent>
          <TabsContent value="passed">Passed</TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardFooter>
    </Card>
  );
};

export default InspectionRequestsPage;
