import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import DigitalClock from "../clock/digital";

const DefaultHeader = () => {
  return (
    <header className="tw-shadow-lg tw-px-4 tw-pt-6 tw-pb-4 tw-rounded-xl tw-flex tw-items-center tw-justify-between">
      <DigitalClock />
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </header>
  );
};

export default DefaultHeader;
