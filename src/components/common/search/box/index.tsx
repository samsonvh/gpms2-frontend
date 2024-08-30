import { Input } from "@/components/ui/input";
import React from "react";

const DefaultSearchBox = () => {
  return (
    <div className="tw-relative">
      <Input className="tw-pl-10" placeholder="Search by code, name"/>
      <div className="tw-absolute tw-top-0 tw-bottom-0 tw-bg-slate-400 tw-content-center tw-aspect-square tw-rounded-md tw-m-2">
        +
      </div>
    </div>
  );
};

export default DefaultSearchBox;
