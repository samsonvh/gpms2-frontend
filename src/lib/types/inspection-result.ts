export type FaultyProduct = {
  id: string;
  ordinalNumberInSeries: number;
  description: string;
  createdDate: Date | string;
  productFaults: ProductFault[];
};

export type ProductFault = {
  qualityStandardName: string;
  productionStepName: string;
  measurementName?: string;
  description?: string;
};
