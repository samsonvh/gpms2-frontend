import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cell, Column, Row, Table } from "@tanstack/react-table";
import Link from "next/link";

export const StatusCell = ({ getValue }: { getValue: <TValue>() => any }) => {
  const value: string = getValue();

  let className = "";

  switch (value.toLowerCase()) {
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

export const ActionCell = ({
  row,
  column,
  table,
}: {
  row: Row<any>;
  column: Column<any>;
  table: Table<any>;
}) => {
  const tableMeta = table.options.meta;
  const columnMeta = column.columnDef.meta;

  return (
    <Button variant={"link"}>
      <Link
        href={`${columnMeta?.detailsHref}/${tableMeta?.data[row.index].id}`}
      >
        details
      </Link>
    </Button>
  );
};
