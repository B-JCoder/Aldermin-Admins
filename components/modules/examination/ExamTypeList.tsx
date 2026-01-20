"use client";

import React from "react";
import { GlassCard } from "@/components/cards/GlassCard";
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
    <GlassCard className="flex-1 flex flex-col p-0 overflow-hidden relative h-full">
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

      <div className="p-8 pb-4 relative z-10 border-b border-white/20 flex items-center justify-between">
        <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
          Assessment Catalog
        </h4>
        <div className="px-5 py-2 bg-secondary/10 text-secondary text-[10px] font-black rounded-full uppercase tracking-widest ring-1 ring-secondary/20 shadow-sm">
          {exams.length} Frameworks Active
        </div>
      </div>

      <div className="flex-1 overflow-x-auto p-8 pt-0 relative z-10">
        <div className="rounded-xl border border-white/20 bg-white/40 overflow-hidden">
          <Table>
            <TableHeader className="bg-white/50">
              <TableRow>
                <TableHead className="px-6 py-6 text-left w-16 text-[10px] uppercase font-black text-muted-foreground tracking-widest">
                  SN
                </TableHead>
                <TableHead className="px-6 py-6 text-left text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                  Assessment Name
                </TableHead>
                <TableHead className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                  Pass Criteria
                </TableHead>
                <TableHead className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                  Cohort Avg
                </TableHead>
                <TableHead className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest text-muted-foreground">
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
                  <TableCell className="px-6 py-8 text-muted-foreground/50 font-mono text-xs italic">
                    {(currentPage - 1) * pageSize + index + 1}
                  </TableCell>
                  <TableCell className="px-6 py-8">
                    <div className="font-black text-foreground tracking-tight text-base font-serif italic group-hover:text-secondary transition-colors uppercase">
                      {e.name}
                    </div>
                    <div className="flex items-center gap-1.5 mt-1.5 font-black text-[8px] uppercase tracking-widest">
                      <span
                        className={
                          e.isMandatory
                            ? "text-secondary bg-secondary/10 px-1.5 py-0.5 rounded"
                            : "text-muted-foreground"
                        }
                      >
                        {e.isMandatory ? "Mandatory" : "Optional"}
                      </span>
                      <span className="w-1 h-1 bg-muted-foreground/30 rounded-full"></span>
                      <span className="text-muted-foreground">
                        Active Framework
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-8 text-center">
                    <div className="inline-flex items-center gap-1 text-xs font-black text-muted-foreground italic">
                      <FaPercent size={8} className="text-secondary/50" />
                      {e.avgPass}
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-8 text-center">
                    <div className="text-sm font-black text-secondary italic">
                      {e.avgMark}
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-8 text-center text-[10px] font-black text-secondary uppercase tracking-widest">
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
    </GlassCard>
  );
}
