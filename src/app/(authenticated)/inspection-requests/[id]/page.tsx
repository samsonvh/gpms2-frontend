import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Label } from "@/components/ui/label";
import React from "react";
import expandIcon from "@Public/icons/expand.svg";
import checkedDoneIcon from "@Public/icons/checked-done.svg";
import cancelIcon from "@Public/icons/cancel.svg";
import Image from "next/image";

const InspectionRequestDetailPage = () => {
  return (
    <div className="tw-mx-6 tw-flex tw-flex-col tw-gap-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/inspection-requests">
              Inspection Requests
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card>
        <CardHeader>
          <div className="tw-flex tw-justify-between tw-items-center tw-pr-4">
            <div>
              <CardTitle>Inspection request name</CardTitle>
            </div>
            {/* <div className="tw-flex tw-gap-2">
              <Button className="tw-bg-transparent tw-text-black hover:tw-text-white">
                Decline
              </Button>
              <Button className="hover:tw-text-black hover:tw-bg-transparent hover:tw-border-2">
                Approve
              </Button>
            </div> */}
            {/* <div className="tw-flex tw-gap-2">
              <Label className="tw-flex tw-items-center tw-gap-2">
                Status:<Badge>Approved</Badge>
              </Label>
            </div> */}
            {/* <div className="tw-flex tw-gap-2">
              <Label className="tw-flex tw-items-center tw-gap-0">
                <Image src={checkedDoneIcon} alt="Check done icon" />
                <span>Approve</span>
              </Label>
            </div> */}
            <div className="tw-flex tw-gap-2">
              <Label className="tw-flex tw-items-center tw-gap-0">
                <Badge>
                  <Image src={cancelIcon} alt="Cancel icon" />
                  Declined
                </Badge>
              </Label>
            </div>
          </div>
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque elementum arcu vel lectus malesuada tempor. Sed ipsum
            lorem, ultricies nec dolor vel, auctor lacinia odio. Donec non
            tellus ut eros ultrices dictum in vel tortor.
          </CardDescription>
        </CardHeader>
        <CardContent className="tw-flex tw-flex-col tw-gap-4">
          <h3 className="tw-text-lg tw-font-semibold">
            Inspection result information:
          </h3>
          <div className="tw-flex tw-justify-between tw-px-2">
            <div className="tw-flex tw-flex-col tw-gap-2">
              <Label>
                <span>Required to inspect:</span> 0
              </Label>
              <Label>
                <span>Number of inspected product:</span> 0
              </Label>
              <Label>
                <span>Number of passed product:</span> 0
              </Label>
            </div>
            <div className="tw-flex tw-flex-col tw-items-end tw-gap-2">
              <Label>
                <span>Created at</span> Dec 01 2021 12:00AM by Vo Hoang Son
              </Label>
              <Label>
                <span>Reviewed at</span> Dec 01 2021 12:00AM by Vo Hoang Son
              </Label>
              <Label>
                <span>Inspected at</span> Dec 01 2021 12:00AM by Vo Hoang Son
              </Label>
            </div>
          </div>
          <div>
            <Collapsible>
              <div className="tw-flex tw-justify-between tw-items-center tw-mb-2 tw-mx-2">
                <Label>There are 3 products found faulty</Label>
                <CollapsibleTrigger className="hover:tw-bg-slate-100 tw-rounded-sm tw-flex tw-gap-1 tw-pl-2 tw-pr-1">
                  <span className="tw-text-sm tw-font-semibold">expand</span>
                  <Image src={expandIcon} alt="Expand Icon" />
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent>
                <Card>
                  <CardHeader>
                    <CardDescription className="tw-mb-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque elementum arcu vel lectus malesuada tempor.
                      Sed ipsum lorem, ultricies nec dolor vel, auctor lacinia
                      odio. Donec non tellus ut eros ultrices dictum in vel
                      tortor.
                    </CardDescription>
                    <div className="tw-flex tw-flex-col tw-gap-1">
                      <Label className="tw-mx-2">
                        <span>Ordinal number in series:</span> 0
                      </Label>
                      <Collapsible>
                        <div className="tw-flex tw-justify-between tw-items-center tw-mb-2 tw-mx-2">
                          <Label>
                            <span>Fault inspected:</span> 2
                          </Label>
                          <CollapsibleTrigger className="hover:tw-bg-slate-100 tw-rounded-sm tw-flex tw-gap-1 tw-pl-2 tw-pr-1">
                            <span className="tw-text-sm tw-font-semibold">
                              expand
                            </span>
                            <Image src={expandIcon} alt="Expand Icon" />
                          </CollapsibleTrigger>
                        </div>
                        <CollapsibleContent>
                          <Card>
                            <CardHeader>
                              <CardDescription className="tw-mb-3">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Pellentesque elementum arcu vel
                                lectus malesuada tempor. Sed ipsum lorem,
                                ultricies nec dolor vel, auctor lacinia odio.
                                Donec non tellus ut eros ultrices dictum in vel
                                tortor.
                              </CardDescription>
                              <div className="tw-flex tw-flex-col tw-gap-2">
                                <Label>
                                  <span>Violated quality standard:</span> 0
                                </Label>
                                <Label>
                                  <span>Fault at production step:</span> 0
                                </Label>
                                <Label>
                                  <span>Correct measurement:</span> 0
                                </Label>
                              </div>
                            </CardHeader>
                          </Card>
                        </CollapsibleContent>
                      </Collapsible>
                    </div>
                  </CardHeader>
                </Card>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InspectionRequestDetailPage;
