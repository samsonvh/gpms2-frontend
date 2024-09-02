import { useSession } from "next-auth/react";
import { auth } from "../../../auth";

export const createInspectionRequest = async (token: any, value: any) => {
  let isSucceed = false;

  await fetch("http://localhost:5182/api/v1/inspection-requests", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  })
    .then((response) => response.json())
    .then((data) => (data ? (isSucceed = true) : (isSucceed = false)));

  return isSucceed;
};

export const getInspectionRequestList = async () => {
  let list : any = [];

  await fetch("http://localhost:5182/api/v1/inspection-requests/filter", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
  }).then(response => response.json()).then(data => list = data.data);

  return list;
};
