import { FaultyProduct, InspectionResult } from "./inspection-result";
import { ExtractedInformationModel } from "./others";

export type InspectionRequest = {
  id: string;
  name: string;
  requiredQuantity: number;
  inspectedQuantity: number | null;
  passedQuantity: number | null;
  description: string | null;
  createdDate: Date | string;
  reviewedDate: Date | string | null;
  inspectedDate: Date | string | null;
  creator: {
    id: string;
    code: string;
    fullname: string;
  };
  reviewer: {
    id: string;
    code: string;
    fullname: string;
  } | null;
  inspector: {
    id: string;
    code: string;
    fullname: string;
  } | null;
  productionSeries: {
    id: string;
    code: string;
  };
  productionPlan: {
    id: string;
    code: string;
  };
  status: string | number;
};

export type InspectionRequestDetails = {
  id: string;
  name: string;
  requiredQuantity: number;
  description?: string;
  reviewedDate?: Date;
  createdDate: Date;
  inspectionResult: InspectionResult;
  productionSeriesCode: string;
  creator: ExtractedInformationModel;
  reviewer?: ExtractedInformationModel;
  productionPlan?: ExtractedInformationModel;
  productionSeries?: ExtractedInformationModel;
  productionSpecification?: ExtractedInformationModel;
  status: string;
};

export type InspectionRequestListingItem = {
  id: string;
  name: string;
  requiredQuantity: number;
  inspectedQuantity: number;
  failedQuantity: number;
  passedQuantity: number;
  createdDate: Date;
  creator: ExtractedInformationModel;
  productionSeries: ExtractedInformationModel;
  status: "Pending" | "Approved" | "Declined" | "Failed" | "Passed";
};
