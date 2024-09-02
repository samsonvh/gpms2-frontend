import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { createInspectionRequest } from "@/lib/api-calls/inspection-request";
import { getWorkingProductionPlan } from "@/lib/api-calls/production-plan";
import { getProductionRequirementsByPlanId } from "@/lib/api-calls/production-requirement";
import { getSeriesByRequirementId } from "@/lib/api-calls/production-series";
import { ProductionPlanSelectListItem } from "@/lib/types/production-plan";
import { ProductionRequirmentItem } from "@/lib/types/production-requirement";
import { ProductionSeriesListItem } from "@/lib/types/production-series";
import { createInspectionRequestSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const CreateModal = () => {
  const session = useSession();

  const form = useForm<z.infer<typeof createInspectionRequestSchema>>({
    resolver: zodResolver(createInspectionRequestSchema),
    defaultValues: {
      productionPlanId: "",
      productionRequirementId: "",
      productionSeriesId: "",
      description: "",
    },
  });

  const [productionPlans, setProductionPlans] = useState<
    ProductionPlanSelectListItem[]
  >([]);
  const [selectedPlan, setSelectedPlan] = useState<string>();

  const [productionRequirements, setProductionRequirements] = useState<
    ProductionRequirmentItem[]
  >([]);
  const [selectedRequirement, setSelectedRequirement] = useState<string>();

  const [productionSeries, setProductionSeries] = useState<
    ProductionSeriesListItem[]
  >([]);
  const [selectedSeries, setSelectedSeries] =
    useState<string>();

  const getPlans = async () => {
    const list = await getWorkingProductionPlan();
    setProductionPlans(list);
  };
  const getRequirements = async (selectedPlanId: string) => {
    const list = await getProductionRequirementsByPlanId(selectedPlanId);
    setProductionRequirements(list);
  };
  const getSeries = async (selectedRequirementId: string) => {
    const list = await getSeriesByRequirementId(selectedRequirementId);
    setProductionSeries(list);
  };

  const closeModal = () => {
    setSelectedPlan(undefined);
    setSelectedRequirement(undefined);
    setSelectedSeries(undefined);
  };

  useEffect(() => {
    getPlans();
    if (selectedPlan) {
      getRequirements(selectedPlan);
    }
    if (selectedRequirement) {
      getSeries(selectedRequirement);
    }
  }, [selectedPlan, selectedRequirement]);

  async function onSubmit(
    values: z.infer<typeof createInspectionRequestSchema>
  ) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values);

    let a = await createInspectionRequest(session.data?.user?.id, {
      name: "testtest",
      productionSeriesId: selectedSeries,
      requiredQuantity: values.requiredQuantity,
      description: values.description,
    });
    if (a) {
      closeModal();
    }
  }

  return (
    <Dialog>
      <DialogTrigger className="tw-bg-black tw-text-white tw-px-4 tw-py-2 tw-rounded-md">
        <p>New +</p>
      </DialogTrigger>
      <DialogContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="tw-flex tw-flex-col tw-gap-2"
          >
            <DialogHeader>
              <DialogTitle>Create new inspection request</DialogTitle>
              <DialogDescription>
                Request inspection for working production series
              </DialogDescription>
            </DialogHeader>
            <FormField
              control={form.control}
              name="productionPlanId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Production plan:</FormLabel>
                  <FormControl>
                    <Select
                      // {...field}
                      onValueChange={(value) => setSelectedPlan(value)}
                    >
                      <SelectTrigger {...field}>
                        <SelectValue placeholder="Select working production plan" />
                      </SelectTrigger>
                      <SelectContent>
                        {productionPlans.map((plan) => (
                          <SelectItem key={plan.id} value={plan.id}>
                            {plan.code} - {plan.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled={selectedPlan ? false : true}
              control={form.control}
              name="productionRequirementId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Production requirement:</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) => setSelectedRequirement(value)}
                    >
                      <SelectTrigger {...field}>
                        <SelectValue placeholder="Select a production requirement" />
                      </SelectTrigger>
                      <SelectContent>
                        {productionRequirements.map((requirement) => (
                          <SelectItem
                            key={requirement.id}
                            value={requirement.id}
                          >
                            {requirement.quantity}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled={selectedRequirement ? false : true}
              control={form.control}
              name="productionSeriesId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Production series:</FormLabel>
                  <FormControl>
                    <Select onValueChange={value => setSelectedSeries(value)}>
                      <SelectTrigger {...field}>
                        <SelectValue placeholder="Select working production series" />
                      </SelectTrigger>
                      <SelectContent>
                        {productionSeries.map((seri) => (
                          <SelectItem key={seri.id} value={seri.id}>
                            {seri.code} - {seri.quantity}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="requiredQuantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Required quantity:</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="0"
                      {...field}
                      // defaultValue={
                      //   selectedSeries ? selectedSeries.quantity : 1
                      // }
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description:</FormLabel>
                  <FormControl>
                    <Textarea className="tw-resize-none" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <div className="tw-w-full tw-flex tw-justify-between tw-items-center">
                <DialogClose onClick={() => closeModal()}>cancel</DialogClose>
                {/* <DialogClose
                  onClick={() => closeModal()}
                  className="tw-bg-black tw-text-white tw-px-4 tw-py-2 tw-rounded-md"
                >
                  Done
                </DialogClose> */}
                <Button type="submit">Done</Button>
              </div>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateModal;
