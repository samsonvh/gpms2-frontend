import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import DigitalClock from "../clock/digital";
import { useSession } from "next-auth/react";
import { auth } from "../../../../auth";

const DefaultHeader = async () => {
  const session = await auth();

  return (
    <header className="tw-shadow-lg tw-px-6 tw-pt-6 tw-pb-4 tw-mx-6 tw-rounded-xl tw-flex tw-items-center tw-justify-between">
      <DigitalClock />
      <div className="tw-flex tw-items-center tw-gap-2">
        <p className="tw-text-right">
          {session?.user?.name} <br />{" "}
          <span className="tw-text-sm">logout</span>
        </p>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default DefaultHeader;
