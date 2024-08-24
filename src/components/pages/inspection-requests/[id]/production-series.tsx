import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import React from "react";

const ProductionSeriesInformationSection = () => {
  return (
    <Card>
      <Collapsible>
        <CollapsibleTrigger>
          <CardHeader>
            <CardTitle className="tw-text-base">Production series</CardTitle>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent>test</CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default ProductionSeriesInformationSection;
