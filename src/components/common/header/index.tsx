"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import DigitalClock from "../clock/digital";
import { useSession } from "next-auth/react";
// import { auth, signOut } from "../../../../auth";
import LogoutButton from "../buttons/logout";

const DefaultHeader = () => {
  const session = useSession();

  return (
    <header className="tw-flex tw-justify-between tw-items-center tw-shadow-md tw-px-4 tw-rounded-md">
      <DigitalClock />
      <div className="tw-flex tw-items-center">
        <div className="tw-flex tw-items-center">
          <p>{session.data?.user?.name}, </p>
          <LogoutButton />
        </div>
        <Avatar></Avatar>
      </div>
    </header>
  );
};

export default DefaultHeader;
