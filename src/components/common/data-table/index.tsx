import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  Table as TanstackTable,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";

declare module "@tanstack/react-table" {
  interface TableMeta<TData> {
    data: any[];
  }

  interface ColumnMeta<TData, TValue> {
    detailsHref?: string;
  }
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  table?: TanstackTable<TData>;
}

const DataTable = <TData, TValue>({
  columns,
  data,
  table,
}: DataTableProps<TData, TValue>) => {
  if (!table) {
    table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      initialState: {
        pagination: {
          pageIndex: 0,
          pageSize: 5,
        },
      },
      meta: {
        data,
      },
    });
  }

  return (
    <div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length}>No Results.</TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={columns.length}>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      className={
                        table.getCanPreviousPage()
                          ? "hover:tw-cursor-pointer"
                          : "tw-hidden"
                      }
                      onClick={() => table.previousPage()}
                    />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext
                      className={
                        table.getCanNextPage()
                          ? "hover:tw-cursor-pointer"
                          : "tw-hidden"
                      }
                      onClick={() => table.nextPage()}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default DataTable;
