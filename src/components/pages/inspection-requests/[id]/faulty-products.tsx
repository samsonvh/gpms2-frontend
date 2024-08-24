import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import React from "react";

const FaultyProductItem = () => {
  return (
    <Card>
      <Collapsible>
        <CollapsibleTrigger>
          <CardHeader className="tw-py-4">
            <div className="tw-flex tw-gap-8">
              <p>
                <span className="tw-font-semibold tw-mr-2">
                  Order in series:
                </span>
                <span>1</span>
              </p>
              <p>
                <span className="tw-font-semibold tw-mr-2">
                  Current process:
                </span>
                <span>process name</span>
              </p>
              <p>
                <span className="tw-font-semibold tw-mr-2">Modified:</span>
                <span>date</span>
              </p>
              <p>
                <span className="tw-font-semibold tw-mr-2">Status:</span>
                <span>state</span>
              </p>
            </div>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent>testsetes</CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

const FaultyProductSection = () => {
  return (
    <Card>
      <Collapsible>
        <CollapsibleTrigger>
          <CardHeader>
            <CardTitle className="tw-text-base">Faulty products</CardTitle>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent>
            <ol className="tw-flex tw-flex-col tw-gap-2">
              <li>
                <FaultyProductItem />
              </li>
              <li>
                <FaultyProductItem />
              </li>
              <li>
                <FaultyProductItem />
              </li>
            </ol>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default FaultyProductSection;
