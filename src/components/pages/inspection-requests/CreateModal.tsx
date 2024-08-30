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
import React from "react";

const CreateModal = () => {
  return (
    <Dialog>
      <DialogTrigger className="tw-bg-black tw-text-white tw-px-4 tw-py-2 tw-rounded-md">
        <p>New +</p>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create new inspection request</DialogTitle>
          <DialogDescription>
            Request inspection for working production series
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="tw-w-full tw-flex tw-justify-between tw-items-center">
            <DialogClose>cancel</DialogClose>
            <DialogClose className="tw-bg-black tw-text-white tw-px-4 tw-py-2 tw-rounded-md">
              Done
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateModal;
