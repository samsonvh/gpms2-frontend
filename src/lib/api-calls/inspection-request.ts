import { useSession } from "next-auth/react";
import { auth } from "../../../auth";
import { InspectionRequestDetails } from "../types/inspection-request";

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

export const getInspectionRequestList = async () => {
  let list: any = [];

  await fetch(
    `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/v1/inspection-requests/filter`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
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
  let request: InspectionRequestDetails | null = null;

  await fetch(
    `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/v1/inspection-requests/${id}`,
    {
      headers: {
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
