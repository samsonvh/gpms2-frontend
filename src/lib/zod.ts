import { number, object, string } from "zod";

export const signInSchema = object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Email is invalid"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    // .min(8, "Password must be more than 8 characters"),
});

export const createInspectionRequestSchema = object({
  productionPlanId: string({
    required_error: "Must select a working production plan",
  }),
  productionRequirementId: string({
    required_error: "Must select a requirement",
  }),
  productionSeriesId: string({
    required_error: "Must request for a specific series",
  }),
  requiredQuantity: string({
    required_error: "Required quantity for inspection",
  }),
  description: string().optional(),
});
