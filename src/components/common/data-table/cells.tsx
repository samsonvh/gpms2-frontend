import { Badge } from "@/components/ui/badge";
import { Cell } from "@tanstack/react-table";

export const StatusCell = ({ getValue }: { getValue: <TValue>() => any }) => {
  const value: string = getValue();
  let className = "";

  switch (value) {
    case "pending":
      return <Badge variant={"outline"}>{value}</Badge>;
    case "passed":
      className = "tw-bg-lime-600";
      break;
    case "declined":
    case "failed":
      className = "tw-bg-rose-600";
      break;
  }

  return <Badge className={className}>{value}</Badge>;
};

export const ActionCell = () => {}