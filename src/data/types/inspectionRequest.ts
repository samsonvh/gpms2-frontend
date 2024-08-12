export type InspectionRequest = {
  id: string;
  creatorId: string;
  reviewerId: string;
  productionSeriesId: string;
  name: string;
  requiredQuantity: number;
  inspectedQuantity: number | null;
  passedQuantity: number | null;
  createdDate: Date;
  status: string;
};

export type InspectionRequestListingDto = {
  id: string;
  creatorName: string;
  reviewerName: string;
  productionSeriesCode: string;
  name: string;
  requiredQuantity: number;
  inspectedQuantity: number | null;
  passedQuantity: number | null;
  createdDate: Date;
  status: string;
};
