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
import { createInspectionRequestSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const CreateModal = () => {
  const form = useForm<z.infer<typeof createInspectionRequestSchema>>({
    resolver: zodResolver(createInspectionRequestSchema),
    defaultValues: {
      productionSeriesId: "",
    },
  });

  async function onSubmit(
    values: z.infer<typeof createInspectionRequestSchema>
  ) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger className="tw-bg-black tw-text-white tw-px-4 tw-py-2 tw-rounded-md">
        <p>New +</p>
      </DialogTrigger>
      <DialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="tw-flex tw-flex-col tw-gap-2">
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
                    <Select {...field}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select working production plan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
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
              name="productionSeriesId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Production series:</FormLabel>
                  <FormControl>
                    <Select {...field}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select working production series" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
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
                    <Input type="number" placeholder="0" {...field} />
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
                <DialogClose>cancel</DialogClose>
                <DialogClose
                  onClick={() => console.log("first")}
                  className="tw-bg-black tw-text-white tw-px-4 tw-py-2 tw-rounded-md"
                >
                  Done
                </DialogClose>
              </div>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateModal;
