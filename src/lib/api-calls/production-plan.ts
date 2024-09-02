import {
  ProductionPlanListDto,
  ProductionPlanListFilter,
  ProductionPlanSelectListItem,
} from "../types/production-plan";

export const getWorkingProductionPlan = async () => {
  let productionPlans: ProductionPlanSelectListItem[] = [];

  const filter: ProductionPlanListFilter = {
    code: "",
    dueDate: null,
    expectedStartingDate: null,
    isAscending: true,
    name: "",
    orderBy: "id",
    pagination: { pageIndex: 0, pageSize: 50 },
    status: "InProgress",
    type: "Batch",
  };

  await fetch("http://localhost:5182/api/v1/production-plans/filter", {
    method: "POST",
    headers: { accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(filter),
  })
    .then((response) => response.json())
    .then((data) => {
      const plans: ProductionPlanListDto[] = data.data;
      plans.map((plan) =>
        productionPlans.push({
          id: plan.id,
          code: plan.code,
          name: plan.name,
        } as ProductionPlanSelectListItem)
      );
    });

  return productionPlans;
};
