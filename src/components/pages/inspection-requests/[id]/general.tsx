import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const GeneralInformationSection = () => {
  return (
    <div className="tw-grid tw-grid-cols-3">
      <div className="tw-col-span-2 tw-grid tw-grid-cols-2">
        <div className="tw-grid tw-grid-cols-2">
          <p>
            <span className="tw-font-semibold tw-mr-2">Creator:</span>
            <span>samson</span>
          </p>
          <p>
            <span className="tw-font-semibold tw-mr-2">Reviewer:</span>
            <span>samsonvh</span>
          </p>
          <p>
            <span className="tw-font-semibold tw-mr-2">Created:</span>
            <span>date</span>
          </p>
          <p>
            <span className="tw-font-semibold tw-mr-2">Reviewed:</span>
            <span>date</span>
          </p>
        </div>
        <div className="tw-grid tw-grid-cols-2">
          <p>
            <span className="tw-font-semibold tw-mr-2">Required:</span>
            <span>100</span>
          </p>
          <p>
            <span className="tw-font-semibold tw-mr-2">Inspected:</span>
            <span>100</span>
          </p>
          <p>
            <span className="tw-font-semibold tw-mr-2">Passed:</span>
            <span>100</span>
          </p>
          <p>
            <span className="tw-font-semibold tw-mr-2">Failed:</span>
            <span>100</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeneralInformationSection;
