"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { InspectionRequestListingItem } from "@/lib/types/inspection-request";
import { getInspectionRequestList } from "@/lib/api-calls/inspection-request";
import { filterStatus } from "./filter";
import DataTable from "@/components/common/data-table";
import { inspectionRequestColumns } from "@/components/common/data-table/columns";
import CreateModal from "./CreateModal";
import { Search } from "lucide-react";

type TableProps = {
  data: InspectionRequestListingItem[];
};

const TableWithTabs = ({ data }: TableProps) => {
  const [list, setList] = useState<InspectionRequestListingItem[]>([]);
  const [searchString, setSearchString] = useState<string>("");
  const [status, setStatus] = useState<
    "" | "Pending" | "Approved" | "Declined" | "Failed" | "Passed"
  >("");

  const filter = async (value: string) => {
    const currentStatus =
      value === "all"
        ? ""
        : (value as
            | ""
            | "Pending"
            | "Approved"
            | "Declined"
            | "Failed"
            | "Passed");
    setStatus(currentStatus);
    const filteredList = await filterStatus(searchString, currentStatus);
    setList(filteredList);
  };

  const search = async () => {
    const filteredList = await filterStatus(searchString, status);
    setList(filteredList);
    setSearchString("");
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <Tabs
      defaultValue="all"
      onValueChange={filter}
      className="tw-flex-grow tw-flex tw-flex-col"
    >
      <Card className="tw-flex-grow">
        <CardHeader>
          <div className="tw-flex tw-justify-between">
            <TabsList className="tw-grid tw-grid-cols-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="Pending">Pending</TabsTrigger>
              <TabsTrigger value="Approved">Approved</TabsTrigger>
              <TabsTrigger value="Declined">Declined</TabsTrigger>
              <TabsTrigger value="Failed">Failed</TabsTrigger>
              <TabsTrigger value="Passed">Passed</TabsTrigger>
            </TabsList>
            <div className="tw-flex tw-gap-4">
              <div className="tw-flex tw-gap-2">
                <Input
                  value={searchString}
                  onChange={(event) =>
                    setSearchString(event.currentTarget.value)
                  }
                  placeholder="search by name or series code"
                  className="tw-w-64"
                />
                <Button variant={"outline"} size={"icon"} onClick={search}>
                  <Search className="tw-h-5 tw-w-auto" />
                </Button>
              </div>
              <CreateModal />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <DataTable data={list} columns={inspectionRequestColumns} />
        </CardContent>
      </Card>
    </Tabs>
  );
};

export default TableWithTabs;
