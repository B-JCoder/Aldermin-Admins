"use client";

import React, { useState, useMemo } from "react";
import { AdminCard } from "@/components/common/AdminCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ListToolbar } from "@/components/common/ListToolbar";
import { ListPagination } from "@/components/common/ListPagination";

interface Column<T> {
  header: string;
  accessor: keyof T | ((item: T) => React.ReactNode);
  className?: string;
  headerClassName?: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  searchKey: keyof T;
  searchPlaceholder?: string;
  title?: string;
  pageSize?: number;
  onAdd?: () => void;
  addButtonText?: string;
  isLoading?: boolean;
}

export function DataTable<T extends { id: string | number }>({
  data,
  columns,
  searchKey,
  searchPlaceholder = "Search...",
  title,
  pageSize = 10,
  onAdd,
  addButtonText = "Add New",
  isLoading = false,
}: DataTableProps<T>) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = useMemo(() => {
    if (!searchTerm) return data;
    return data.filter((item) => {
      const value = item[searchKey];
      return String(value).toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [data, searchTerm, searchKey]);

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [filteredData, currentPage, pageSize]);

  return (
    <div className="space-y-6 flex flex-col h-full">
      <ListToolbar
        searchPlaceHolder={searchPlaceholder}
        onSearch={(val) => {
          setSearchTerm(val);
          setCurrentPage(1);
        }}
        showAddButton={!!onAdd}
        addButtonText={addButtonText}
        onAdd={onAdd || (() => {})}
      />

      <AdminCard className="flex-1 flex flex-col p-0 overflow-hidden relative">
        {title && (
          <div className="p-8 pb-4 relative z-10 border-b border-gray-200">
            <h4 className="text-xs font-semibold text-gray-500 leading-none">
              {title}
            </h4>
          </div>
        )}

        <div className="flex-1 overflow-x-auto p-8 pt-0 relative z-10">
          <div className="rounded-xl border border-gray-200 bg-white overflow-hidden mt-6">
            <Table>
              <TableHeader className="bg-white">
                <TableRow>
                  {columns.map((column, idx) => (
                    <TableHead
                      key={idx}
                      className={`px-6 py-8 text-left text-[10px] font-semibold text-gray-500 ${column.headerClassName || ""}`}
                    >
                      {column.header}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center text-sm text-gray-500"
                    >
                      Loading data...
                    </TableCell>
                  </TableRow>
                ) : paginatedData.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center text-sm text-gray-500"
                    >
                      No records found.
                    </TableCell>
                  </TableRow>
                ) : (
                  paginatedData.map((item) => (
                    <TableRow
                      key={item.id}
                      className="group hover:bg-white transition-all font-medium"
                    >
                      {columns.map((column, colIdx) => (
                        <TableCell
                          key={colIdx}
                          className={`px-6 py-8 ${column.className || ""}`}
                        >
                          {typeof column.accessor === "function"
                            ? column.accessor(item)
                            : (item[column.accessor] as React.ReactNode)}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>

        {!isLoading && filteredData.length > pageSize && (
          <div className="p-8 pt-0 relative z-10">
            <ListPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalRecords={filteredData.length}
              pageSize={pageSize}
            />
          </div>
        )}
      </AdminCard>
    </div>
  );
}
