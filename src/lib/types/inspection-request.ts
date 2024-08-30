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