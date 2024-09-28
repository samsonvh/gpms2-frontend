import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CardDescription } from "@/components/ui/card";
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Label } from "@/components/ui/label";
import { InspectionResult } from "@/lib/types/inspection-result";
import { BadgeMinus, SquareChartGantt } from "lucide-react";
import React from "react";

type SectionProps = {
  inspectionResult: InspectionResult;
};

const FaultyProductSection = ({ inspectionResult }: SectionProps) => {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value={inspectionResult.id ?? "result"}>
          <AccordionTrigger>
            Faulty products: {inspectionResult?.faultyProducts?.length ?? 0}
          </AccordionTrigger>
          <AccordionContent>
            {inspectionResult.faultyProducts.map((product, index) => (
              <div
                key={index}
                className="tw-border tw-px-6 tw-py-4 tw-rounded-md"
              >
                <Label>
                  <p className="tw-text-sm tw-font-semibold">
                    Ordinal number in series:{" "}
                    <span className="tw-font-medium">
                      {product.ordinalNumberInSeries}
                    </span>
                  </p>
                </Label>
                <Label>
                  <p className="tw-text-sm tw-font-semibold">Description: </p>
                  <p className="tw-text-sm">
                    {product.description ?? "No description"}
                  </p>
                </Label>
                <Accordion type="single" collapsible>
                  <AccordionTrigger>
                    Product faults: {product.productFaults.length}
                  </AccordionTrigger>
                  <AccordionContent>
                    {product.productFaults.map((fault, index) => (
                      <div
                        key={index}
                        className="tw-flex tw-justify-between tw-border tw-px-6 tw-py-4 tw-rounded-md"
                      >
                        <Label>
                          <p className="tw-text-sm tw-font-semibold">
                            Description:{" "}
                          </p>
                          <CardDescription>
                            {fault.description ?? "No description"}
                          </CardDescription>
                        </Label>
                        <div className="tw-flex tw-flex-col tw-gap-2">
                          <div className="tw-flex tw-items-center tw-gap-2 tw-border tw-p-4 tw-text-sm tw-rounded-lg">
                            <BadgeMinus />
                            <p>
                              Violated quality standard:{" "}
                              {fault.qualityStandard.name}
                            </p>
                          </div>
                          <div className="tw-flex tw-items-center tw-gap-2 tw-border tw-p-4 tw-text-sm tw-rounded-lg">
                            <SquareChartGantt />
                            <p>
                              Fault at production step:{" "}
                              {fault.productionStep.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </AccordionContent>
                </Accordion>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FaultyProductSection;
