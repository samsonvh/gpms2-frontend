import { ProductionPlanListFilter } from "../types/production-plan";
import {
  ProductionSeriesListDto,
  ProductionSeriesListFilter,
  ProductionSeriesListItem,
} from "../types/production-series";

export const getSeriesByRequirementId = async (requirementId: string) => {
  let productionSeries: ProductionSeriesListItem[] = [];
  const filter: ProductionSeriesListFilter = {
    code: "",
    dayNumber: 1,
    isAscending: true,
    orderBy: "id",
    pagination: {
      pageIndex: 0,
      pageSize: 50,
    },
    status: "",
  };

  await fetch(
    "http://localhost:5182/api/v1/requirements/" +
      requirementId +
      "/series/filter",
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filter),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      const series: ProductionSeriesListDto[] = data.data;
      series.map((seri) =>
        productionSeries.push({
          id: seri.id,
          code: seri.code,
          quantity: seri.quantity,
        } as ProductionSeriesListItem)
      );
    });

  return productionSeries;
};
