"use server";
import { getInspectionRequestList } from "@/lib/api-calls/inspection-request";

export const filterStatus = async (
  searchString: string,
  status?: "" | "Pending" | "Approved" | "Declined" | "Failed" | "Passed"
) => {
  console.log(status);

  return await getInspectionRequestList({
    isAscending: false,
    orderBy: "CreatedDate",
    status: status ?? "",
    searchString,
    pagination: { pageIndex: 0, pageSize: 100 },
  });
};
