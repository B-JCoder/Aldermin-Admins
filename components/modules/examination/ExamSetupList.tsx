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

export interface ExamSetup {
  id: number;
  title: string;
  className: string;
  section: string;
  subject: string;
  totalMark: number;
  distribution: string;
}

interface ExamSetupListProps {
  setups: ExamSetup[];
}

export function ExamSetupList({ setups }: ExamSetupListProps) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 5;

  const totalPages = Math.ceil(setups.length / pageSize);
  const paginatedSetups = setups.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <GlassCard className="flex-1 flex flex-col p-0 overflow-hidden relative h-full">
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

      <div className="p-8 pb-4 relative z-10 border-b border-white/20">
        <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
          Active Assessment Matrix
        </h4>
      </div>

      <div className="flex-1 overflow-x-auto p-8 pt-0 relative z-10">
        <div className="rounded-xl border border-white/20 bg-white/40 overflow-hidden">
          <Table>
            <TableHeader className="bg-white/50">
              <TableRow>
                <TableHead className="px-5 py-6 text-left w-12 uppercase tracking-tighter text-[10px] font-black text-muted-foreground">
                  SN
                </TableHead>
                <TableHead className="px-5 py-6 text-left uppercase tracking-tighter text-[10px] font-black text-muted-foreground">
                  Exam Context
                </TableHead>
                <TableHead className="px-5 py-6 text-center uppercase tracking-tighter text-[10px] font-black text-muted-foreground">
                  Total
                </TableHead>
                <TableHead className="px-5 py-6 text-left uppercase tracking-tighter text-[10px] font-black text-muted-foreground">
                  Distribution Logic
                </TableHead>
                <TableHead className="px-5 py-6 text-center uppercase tracking-tighter text-[10px] font-black text-muted-foreground">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedSetups.map((s, index) => (
                <TableRow
                  key={s.id}
                  className="hover:bg-secondary/5 transition-all group"
                >
                  <TableCell className="px-5 py-6 text-muted-foreground/50 font-mono italic text-xs">
                    {(currentPage - 1) * pageSize + index + 1}
                  </TableCell>
                  <TableCell className="px-5 py-6">
                    <div className="font-black text-foreground leading-tight text-xs uppercase italic tracking-tighter mb-1">
                      {s.title}
                    </div>
                    <div className="flex items-center gap-1 text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
                      {s.className}{" "}
                      <span className="text-muted-foreground/30">/</span>{" "}
                      {s.section}
                    </div>
                    <div className="mt-1.5 flex items-center gap-1.5">
                      <div className="w-1 h-1 bg-secondary rounded-full"></div>
                      <span className="text-[10px] font-black text-secondary italic tracking-tight">
                        {s.subject}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-5 py-6 text-center">
                    <div className="text-base font-black text-foreground italic font-mono tracking-tighter">
                      {s.totalMark}
                    </div>
                    <div className="text-[8px] font-black text-muted-foreground/50 uppercase tracking-widest mt-1">
                      Maximum
                    </div>
                  </TableCell>
                  <TableCell className="px-5 py-6">
                    <div className="bg-secondary/5 p-3 rounded-xl border border-secondary/10">
                      <div className="flex flex-wrap gap-2">
                        {s.distribution.split(", ").map((d, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 bg-white text-[9px] font-black text-muted-foreground rounded border border-border/50 shadow-sm lowercase italic"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-5 py-6 text-center">
                    <div className="flex justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 p-0 rounded-xl bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-all shadow-sm"
                      >
                        <FaEdit size={12} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 p-0 rounded-xl bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white transition-all shadow-sm"
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

      {setups.length > pageSize && (
        <div className="p-8 pt-0 relative z-10">
          <ListPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            totalRecords={setups.length}
            pageSize={pageSize}
          />
        </div>
      )}
    </GlassCard>
  );
}
