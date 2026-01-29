"use client";

import React, { useState } from "react";
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
import { ListActionButtons } from "@/components/common/ListActionButtons";
import { FaGraduationCap } from "react-icons/fa";

interface ClassItem {
  id: number;
  name: string;
  passingMarks: number;
  averageMarks: number;
}

interface ClassListProps {
  classList: ClassItem[];
}

export function ClassList({ classList: initialClassList }: ClassListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const filteredClassList = initialClassList.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredClassList.length / pageSize);
  const paginatedClassList = filteredClassList.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="space-y-6 flex flex-col h-full">
      <ListToolbar
        searchPlaceHolder="Search grades..."
        onSearch={setSearchTerm}
        showAddButton={false}
      />

      <AdminCard className="flex-1 flex flex-col">
        <div className="p-8 border-b border-gray-200">
          <h4 className="text-xs font-semibold text-gray-500   leading-none">
            Grade Matrix
          </h4>
        </div>

        <div className="flex-1 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-20">SN</TableHead>
                <TableHead>Grade Entity</TableHead>
                <TableHead className="text-center">Metrics</TableHead>
                <TableHead className="text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedClassList.map((c, index) => (
                <TableRow key={c.id} className="group">
                  <TableCell className=" text-xs text-gray-500 ">
                    {(currentPage - 1) * pageSize + index + 1}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-sidebar/5 flex items-center justify-center text-gray-500 group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                        <FaGraduationCap size={16} />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm   tracking-tight">
                          {c.name}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex flex-col gap-1 items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-semibold text-gray-500  tracking-tighter">
                          Pass:
                        </span>
                        <span className=" font-bold text-secondary">
                          {c.passingMarks}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-semibold text-gray-500  tracking-tighter">
                          Avg:
                        </span>
                        <span className=" font-bold text-blue-500">
                          {c.averageMarks}%
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <ListActionButtons
                      onEdit={() => console.log("Edit")}
                      onDelete={() => console.log("Delete")}
                    />
                  </TableCell>
                </TableRow>
              ))}
              {paginatedClassList.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="h-40 text-center text-gray-500   text-[10px] font-semibold"
                  >
                    No matching grades found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {filteredClassList.length > pageSize && (
          <ListPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            totalRecords={filteredClassList.length}
            pageSize={pageSize}
          />
        )}
      </AdminCard>
    </div>
  );
}
