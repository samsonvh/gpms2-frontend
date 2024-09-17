import { ExtractedInformationModel } from "./others";

export type InspectionResult = {
  id?: string;
  description?: string;
  inspectedQuantity: number;
  passedQuantity: number;
  failedQuantity: number;
  faultyProducts: FaultyProduct[];
  inspector: ExtractedInformationModel;
  createdDate: Date;
};

export type FaultyProduct = {
  id: string;
  ordinalNumberInSeries: number;
  description?: string;
  createdDate: Date;
  productFaults: ProductFault[];
};

export type ProductFault = {
  description?: string;
  qualityStandard: ExtractedInformationModel;
  productionStep: ExtractedInformationModel;
  productMeasurement?: ExtractedInformationModel;
};
