import {
  ProductionRequirementListFilter,
  ProductionRequirmentItem,
} from "../types/production-requirement";

export const getProductionRequirementsByPlanId = async (
  productionPlanId: string
) => {
  let requirements: ProductionRequirmentItem[] = [];
  const filter: ProductionRequirementListFilter = {
    orderBy: "id",
    isAscending: true,
    pagination: {
      pageIndex: 0,
      pageSize: 50,
    },
  };

  await fetch(
    "http://localhost:5182/api/v1/production-plans/" +
      productionPlanId +
      "/requirements/filter",
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
      const list: ProductionRequirmentItem[] = data.data;
      list.map((item) =>
        requirements.push({
          id: item.id,
          quantity: item.quantity,
        } as ProductionRequirmentItem)
      );
    });

  return requirements;
};
