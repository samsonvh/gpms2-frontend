import { Input } from "@/components/ui/input";
import React from "react";
import searchIcon from "@Public/icons/search.svg";
import Image from "next/image";

const DefaultSearchBox = () => {
  return (
    <div className="tw-relative">
      <Input className="tw-pl-9" placeholder="Search by code, name" />
      <div className="tw-absolute tw-top-0 tw-bottom-0 tw-content-center tw-p-2 tw-aspect-square tw-rounded-md tw-flex tw-justify-center">
        <Image src={searchIcon} alt="Search Icon" className="tw-w-full tw-h-auto"/>
      </div>
    </div>
  );
};

export default DefaultSearchBox;
