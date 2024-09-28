"use client";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

const ReviewRequestButton = ({
  children,
  requestId,
  status,
}: {
  children: ReactNode;
  requestId: string;
  status: string;
}) => {
  const session = useSession();
  const router = useRouter();

  

  const changeStatus = async () => {
    await fetch(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/v1/inspection-requests/${requestId}?status=${status}`,
      {
        method: "PATCH",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization: "Bearer " + session.data?.user?.id,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data == true) {
          router.refresh();
        } else {
        }
      });
  };

  return <Button onClick={changeStatus}>{children}</Button>;
};

export default ReviewRequestButton;
