"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import DigitalClock from "../clock/digital";
import { useSession } from "next-auth/react";
// import { auth, signOut } from "../../../../auth";
import LogoutButton from "../buttons/logout";
import NotificationSection from "../notification";

const DefaultHeader = () => {
  const session = useSession();

  return (
    <header className="tw-flex tw-justify-between tw-items-center tw-shadow-sm tw-border tw-rounded-md tw-p-4 tw-pt-4 tw-pb-2">
      <DigitalClock />
      <div className="tw-flex tw-items-center">
        {/* <div className="tw-flex tw-items-center">
          <p>{session.data?.user?.name}, </p>
          <LogoutButton />
        </div> */}
        <NotificationSection />
        <p className="tw-px-2">{session.data?.user?.name}</p>
        {/* <Avatar className="tw-h-8 tw-w-auto">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar> */}
        <LogoutButton />
      </div>
    </header>
  );
};

export default DefaultHeader;
