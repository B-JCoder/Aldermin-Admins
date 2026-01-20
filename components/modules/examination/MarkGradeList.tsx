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
import { FaEdit, FaTrash } from "react-icons/fa";

export interface MarkGrade {
  id: number;
  name: string;
  gpa: string;
  percentRange: string;
  gpaRange: string;
  description: string;
}

interface MarkGradeListProps {
  grades: MarkGrade[];
}

export function MarkGradeList({ grades }: MarkGradeListProps) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 5;

  const totalPages = Math.ceil(grades.length / pageSize);
  const paginatedGrades = grades.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <GlassCard className="flex-1 flex flex-col p-0 overflow-hidden relative h-full">
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>

      <div className="p-8 pb-4 relative z-10 border-b border-white/20 flex items-center justify-between">
        <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none flex items-center gap-2">
          Institutional Grade Index
          <div className="h-[1px] w-12 bg-border/50"></div>
        </h4>
      </div>

      <div className="flex-1 overflow-x-auto p-8 pt-0 relative z-10">
        <div className="rounded-xl border border-white/20 bg-white/40 overflow-hidden">
          <Table>
            <TableHeader className="bg-white/50">
              <TableRow>
                <TableHead className="px-6 py-6 text-left w-12 text-[10px] uppercase tracking-widest font-black text-muted-foreground">
                  SN
                </TableHead>
                <TableHead className="px-6 py-6 text-left text-[10px] uppercase tracking-widest font-black text-muted-foreground">
                  Standard
                </TableHead>
                <TableHead className="px-6 py-6 text-center text-[10px] uppercase tracking-widest font-black text-muted-foreground">
                  Base GPA
                </TableHead>
                <TableHead className="px-6 py-6 text-center text-[10px] uppercase tracking-widest font-black text-muted-foreground">
                  Percentage Map
                </TableHead>
                <TableHead className="px-6 py-6 text-center text-[10px] uppercase tracking-widest font-black text-muted-foreground">
                  GPA Span
                </TableHead>
                <TableHead className="px-6 py-6 text-center text-[10px] uppercase tracking-widest font-black text-muted-foreground">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedGrades.map((g, index) => (
                <TableRow
                  key={g.id}
                  className="hover:bg-secondary/5 transition-all group"
                >
                  <TableCell className="px-6 py-8 text-muted-foreground/50 font-mono text-xs italic">
                    {(currentPage - 1) * pageSize + index + 1}
                  </TableCell>
                  <TableCell className="px-6 py-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary font-black text-sm border border-secondary/10 shadow-sm group-hover:bg-secondary group-hover:text-white transition-all">
                        {g.name}
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest group-hover:text-secondary transition-colors">
                          Class Standard
                        </div>
                        <div className="text-[9px] font-bold text-muted-foreground/70 italic max-w-[120px] truncate">
                          {g.description}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-8 text-center">
                    <div className="text-base font-black text-foreground font-mono italic tracking-tighter group-hover:scale-110 transition-transform inline-block">
                      {g.gpa}
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-8 text-center">
                    <span className="px-3 py-1 bg-secondary/5 text-secondary text-[10px] font-black rounded-lg border border-secondary/10 shadow-sm italic">
                      {g.percentRange}
                    </span>
                  </TableCell>
                  <TableCell className="px-6 py-8 text-center">
                    <div className="inline-flex items-center gap-2 text-[10px] font-black text-muted-foreground bg-secondary/5 px-3 py-1 rounded-lg border border-secondary/10 font-mono">
                      {g.gpaRange}
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-8 text-center">
                    <div className="flex justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 p-0 rounded-xl bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-all shadow-sm"
                      >
                        <FaEdit size={12} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 p-0 rounded-xl bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white transition-all shadow-sm"
                      >
                        <FaTrash size={12} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {grades.length > pageSize && (
        <div className="p-8 pt-0 relative z-10">
          <ListPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            totalRecords={grades.length}
            pageSize={pageSize}
          />
        </div>
      )}
    </GlassCard>
  );
}
