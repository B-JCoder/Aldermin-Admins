"use client";

import React from "react";
import { AdminCard } from "@/components/common/AdminCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ListPagination } from "@/components/common/ListPagination";
import { FaPercent, FaEdit, FaTrash } from "react-icons/fa";

export interface ExamType {
  id: number;
  name: string;
  isMandatory: boolean;
  avgPass: string;
  avgMark: string;
}

interface ExamTypeListProps {
  exams: ExamType[];
}

export function ExamTypeList({ exams }: ExamTypeListProps) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 5;

  const totalPages = Math.ceil(exams.length / pageSize);
  const paginatedExams = exams.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <AdminCard className="flex-1 flex flex-col p-0 overflow-hidden relative h-full">
      

      <div className="p-8 pb-4 relative z-10 border-b border-gray-200 flex items-center justify-between">
        <h4 className="text-xs font-semibold text-gray-500   leading-none">
          Assessment Catalog
        </h4>
        <div className="px-5 py-2 bg-secondary/10 text-secondary text-[10px] font-semibold rounded-full   ring-1 ring-secondary/20 shadow-sm">
          {exams.length} Frameworks Active
        </div>
      </div>

      <div className="flex-1 overflow-x-auto p-8 pt-0 relative z-10">
        <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
          <Table>
            <TableHeader className="bg-white">
              <TableRow>
                <TableHead className="px-6 py-6 text-left w-16 text-[10px]  font-semibold text-gray-500 ">
                  SN
                </TableHead>
                <TableHead className="px-6 py-6 text-left text-[10px]  font-semibold  text-gray-500">
                  Assessment Name
                </TableHead>
                <TableHead className="px-6 py-6 text-center text-[10px]  font-semibold  text-gray-500">
                  Pass Criteria
                </TableHead>
                <TableHead className="px-6 py-6 text-center text-[10px]  font-semibold  text-gray-500">
                  Cohort Avg
                </TableHead>
                <TableHead className="px-6 py-6 text-center text-[10px]  font-semibold  text-gray-500">
                  Interaction
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedExams.map((e, index) => (
                <TableRow
                  key={e.id}
                  className="hover:bg-secondary/5 transition-all group"
                >
                  <TableCell className="px-6 py-8 text-gray-500/50  text-xs ">
                    {(currentPage - 1) * pageSize + index + 1}
                  </TableCell>
                  <TableCell className="px-6 py-8">
                    <div className="font-semibold text-foreground tracking-tight text-base   group-hover:text-secondary transition-colors ">
                      {e.name}
                    </div>
                    <div className="flex items-center gap-1.5 mt-1.5 font-semibold text-[8px]  ">
                      <span
                        className={
                          e.isMandatory
                            ? "text-secondary bg-secondary/10 px-1.5 py-0.5 rounded"
                            : "text-gray-500"
                        }
                      >
                        {e.isMandatory ? "Mandatory" : "Optional"}
                      </span>
                      <span className="w-1 h-1 bg-muted-foreground/30 rounded-full"></span>
                      <span className="text-gray-500">
                        Active Framework
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-8 text-center">
                    <div className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 ">
                      <FaPercent size={8} className="text-secondary/50" />
                      {e.avgPass}
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-8 text-center">
                    <div className="text-sm font-semibold text-secondary ">
                      {e.avgMark}
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-8 text-center text-[10px] font-semibold text-secondary  ">
                    <div className="flex justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 p-0 rounded-xl bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-all shadow-sm"
                      >
                        <FaEdit size={14} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 p-0 rounded-xl bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white transition-all shadow-sm"
                      >
                        <FaTrash size={14} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {exams.length > pageSize && (
        <div className="p-8 pt-0 relative z-10">
          <ListPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            totalRecords={exams.length}
            pageSize={pageSize}
          />
        </div>
      )}
    </AdminCard>
  );
}
