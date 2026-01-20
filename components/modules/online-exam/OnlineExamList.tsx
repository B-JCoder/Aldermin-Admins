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
import {
  FaEdit,
  FaTrash,
  FaLaptopCode,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { cn } from "@/lib/utils";

export interface OnlineExam {
  title: string;
  className: string;
  subject: string;
  date: string;
  endDate: string;
  duration: string;
  percentage: string;
  status: string;
}

interface OnlineExamListProps {
  exams: OnlineExam[];
  onRemove: (index: number) => void;
}

export function OnlineExamList({ exams, onRemove }: OnlineExamListProps) {
  return (
    <GlassCard className="p-0 overflow-hidden h-full flex flex-col">
      <div className="p-6 border-b border-border/50 flex items-center justify-between bg-white/40">
        <h3 className="text-sm font-black text-muted-foreground uppercase tracking-wider flex items-center gap-2">
          <FaLaptopCode className="text-muted-foreground/50" />
          Scheduled Exams
        </h3>
        <span className="text-[10px] font-black bg-secondary/10 text-secondary px-2 py-1 rounded-md">
          Total: {exams.length}
        </span>
      </div>

      <div className="flex-1 overflow-x-auto p-4">
        <div className="rounded-xl border border-border/50 overflow-hidden">
          <Table>
            <TableHeader className="bg-secondary/5">
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-16 px-6 py-4 text-left text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                  SN
                </TableHead>
                <TableHead className="px-6 py-4 text-left text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                  Title
                </TableHead>
                <TableHead className="px-6 py-4 text-left text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                  Class
                </TableHead>
                <TableHead className="px-6 py-4 text-left text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                  Subject
                </TableHead>
                <TableHead className="px-6 py-4 text-left text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                  Duration
                </TableHead>
                <TableHead className="px-6 py-4 text-left text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                  Dates
                </TableHead>
                <TableHead className="px-6 py-4 text-center text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                  Status
                </TableHead>
                <TableHead className="w-32 px-6 py-4 text-center text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-border/50">
              {exams.map((exam, i) => (
                <TableRow
                  key={i}
                  className="hover:bg-secondary/5 transition-colors group"
                >
                  <TableCell className="px-6 py-4 text-muted-foreground/50 font-mono text-xs italic">
                    {i + 1}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-xs font-bold text-foreground">
                    {exam.title}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-xs font-bold text-muted-foreground">
                    {exam.className}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-xs font-bold text-muted-foreground">
                    {exam.subject}
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-black text-foreground">
                        {exam.duration} Min
                      </span>
                      <span className="text-[9px] text-muted-foreground">
                        Pass: {exam.percentage}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-medium text-foreground">
                        Start: {exam.date}
                      </span>
                      <span className="text-[10px] font-medium text-foreground">
                        End: {exam.endDate}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4 text-center">
                    <span
                      className={cn(
                        "px-2 py-1 rounded-full text-[9px] font-black uppercase tracking-wider inline-flex items-center gap-1",
                        exam.status === "Active"
                          ? "bg-emerald-100/50 text-emerald-600"
                          : "bg-rose-100/50 text-rose-600"
                      )}
                    >
                      {exam.status === "Active" ? (
                        <FaCheckCircle size={8} />
                      ) : (
                        <FaTimesCircle size={8} />
                      )}
                      {exam.status}
                    </span>
                  </TableCell>
                  <TableCell className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-lg text-secondary hover:text-white hover:bg-secondary transition-colors"
                      >
                        <FaEdit size={12} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onRemove(i)}
                        className="h-8 w-8 rounded-lg text-rose-500 hover:text-white hover:bg-rose-500 transition-colors"
                      >
                        <FaTrash size={12} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {exams.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={8}
                    className="px-6 py-12 text-center text-muted-foreground font-bold uppercase tracking-widest text-[10px]"
                  >
                    No online exams scheduled.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </GlassCard>
  );
}
