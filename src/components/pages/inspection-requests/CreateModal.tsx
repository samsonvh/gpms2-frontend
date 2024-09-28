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
  return (
    <Dialog>
      <DialogTrigger className="tw-px-4 tw-py-2 tw-rounded-md" asChild>
        <Button>New +</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New inspection request</DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"ghost"}>cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button>Done</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateModal;
