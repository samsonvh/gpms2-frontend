import { Input } from "@/components/ui/input";
import React from "react";

const DefaultSearchBox = () => {
  return (
    <div className="tw-relative">
      <Input className=""/>
      <div className="tw-absolute tw-top-0 tw-bottom-0 tw-m-auto tw-bg-slate-400 tw-content-center tw-aspect-square">
        +
      </div>
    </div>
  );
};

export default DefaultSearchBox;
