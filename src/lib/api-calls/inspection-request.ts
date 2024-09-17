import { useSession } from "next-auth/react";
import { auth } from "../../../auth";
import {
  InspectionRequestDetails,
  InspectionRequestListingItem,
} from "../types/inspection-request";
import { BaseFilterModel } from "../types/others";

type InspectionRequestFilterModel = BaseFilterModel & {
  status: "" | "Pending" | "Approved" | "Declined" | "Failed" | "Passed"| "InProgress";
  searchString: string;
};

export const createInspectionRequest = async (token: any, value: any) => {
  let isSucceed = false;

  await fetch(
    `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/v1/inspection-requests`,
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    }
  )
    .then((response) => response.json())
    .then((data) => (data ? (isSucceed = true) : (isSucceed = false)));

  return isSucceed;
};

export const getInspectionRequestList = async (
  filter: InspectionRequestFilterModel
) => {
  const session = await auth();

  let list: InspectionRequestListingItem[] = [];

  await fetch(
    `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/v1/inspection-requests/filter`,
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + session?.user?.id,
        "content-type": "application/json",
      },
      body: JSON.stringify(filter),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      list = data.data;
      console.log(list);
    });

  return list;
};

export const getInspectionRequestDetails = async (id: string) => {
  const session = await auth();
  let request: InspectionRequestDetails | null = null;

  await fetch(
    `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/v1/inspection-requests/${id}`,
    {
      headers: {
        "Authorization": "Bearer " + session?.user?.id,
        "content-type": "application/json",
      },
      cache: "no-cache",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      request = data as InspectionRequestDetails;
    });

  return request;
};
