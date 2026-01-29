"use client";

import React from "react";
import { FaSchool } from "react-icons/fa";
import { AdminCard } from "@/components/common/AdminCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export interface ReportItem {
  id: number;
  name: string;
  admissionNo: string;
  rollNo: string;
  position: string;
  totalMark: string;
  passMark: string;
  obtainedMark: string;
  result: string;
  grade: string;
}

interface MarksheetReportProps {
  searchParams: any;
  reportData: ReportItem[];
}

export function MarksheetReport({
  searchParams,
  reportData,
}: MarksheetReportProps) {
  return (
    <div className="space-y-6">
      {/* Header Ribbon */}
      <AdminCard className="p-0 overflow-hidden bg-gradient-to-r from-secondary/80 to-secondary text-white border-0">
        <div className="p-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-white/20  rounded-2xl flex items-center justify-center border border-white/30 shadow-inner">
                <FaSchool size={48} className="text-white drop-shadow-md" />
              </div>
              <div>
                <h1 className="text-4xl font-semibold tracking-tighter mb-1 text-white">
                  ALDERMIN
                </h1>
                <p className="text-white/80 font-medium ">
                  Empowering Excellence in Education
                </p>
              </div>
            </div>
            <div className="bg-black/20 backdrop-blur-lg p-4 rounded-xl border border-white/10 text-sm space-y-2 min-w-[200px]">
              <div className="flex justify-between border-b border-white/10 pb-1">
                <span className="opacity-60 text-[10px] font-semibold  text-white">
                  Examination
                </span>
                <span className="font-bold text-white">
                  {searchParams.exam || "N/A"}
                </span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1">
                <span className="opacity-60 text-[10px] font-semibold  text-white">
                  Subject
                </span>
                <span className="font-bold text-white">
                  {searchParams.subject || "N/A"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-60 text-[10px] font-semibold  text-white">
                  Class
                </span>
                <span className="font-bold text-white">
                  {searchParams.className || "N/A"} -{" "}
                  {searchParams.section || ""}
                </span>
              </div>
            </div>
            <div className="text-right hidden md:block text-white">
              <h4 className="text-xl font-bold mb-1">Academic Registry</h4>
              <p className="text-[10px] font-medium opacity-70 leading-relaxed   text-white">
                89/2 Panthapath, Dhaka Dhaka 1215,
                <br />
                Bangladesh • +8801841412141
              </p>
            </div>
          </div>
        </div>
      </AdminCard>

      {/* Table View */}
      <AdminCard className="p-8">
        <h4 className="text-center font-semibold text-2xl text-foreground mb-8  tracking-[0.2em] border-b border-border/50 pb-4">
          Detailed Marksheet Report
        </h4>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-secondary/5 border-y border-border/50">
              <TableRow className="hover:bg-transparent">
                <TableHead className="px-6 py-4 text-left text-[10px] font-semibold   text-gray-500 w-64">
                  Student Information
                </TableHead>
                <TableHead className="px-6 py-4 text-center text-[10px] font-semibold   text-gray-500">
                  Admission #
                </TableHead>
                <TableHead className="px-6 py-4 text-center text-[10px] font-semibold   text-gray-500">
                  Roll
                </TableHead>
                <TableHead className="px-6 py-4 text-center text-[10px] font-semibold   text-gray-500">
                  Rank
                </TableHead>
                <TableHead className="px-6 py-4 text-center text-[10px] font-semibold   text-gray-500">
                  Full Marks
                </TableHead>
                <TableHead className="px-6 py-4 text-center text-[10px] font-semibold   text-rose-500">
                  Min Pass
                </TableHead>
                <TableHead className="px-6 py-4 text-center text-[10px] font-semibold   text-secondary">
                  Obtained
                </TableHead>
                <TableHead className="px-6 py-4 text-center text-[10px] font-semibold   text-gray-500">
                  Result
                </TableHead>
                <TableHead className="px-6 py-4 text-center text-[10px] font-semibold   text-gray-500">
                  Grade
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-border/50">
              {reportData.map((item) => (
                <TableRow
                  key={item.id}
                  className="hover:bg-secondary/5 transition-colors"
                >
                  <TableCell className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold text-xs ring-2 ring-secondary/5">
                        {item.name.charAt(0)}
                      </div>
                      <span className="font-bold text-foreground tracking-tight text-base  ">
                        {item.name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-5 text-center  text-xs font-bold text-gray-500">
                    {item.admissionNo}
                  </TableCell>
                  <TableCell className="px-6 py-5 text-center font-bold text-foreground tabular-nums">
                    {item.rollNo}
                  </TableCell>
                  <TableCell className="px-6 py-5 text-center">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-secondary/10 text-secondary ring-1 ring-secondary/20 ">
                      {item.position}
                    </span>
                  </TableCell>
                  <TableCell className="px-6 py-5 text-center font-semibold text-foreground">
                    {item.totalMark}
                  </TableCell>
                  <TableCell className="px-6 py-5 text-center font-bold text-rose-500/80 tabular-nums">
                    {item.passMark}
                  </TableCell>
                  <TableCell className="px-6 py-5 text-center font-semibold text-secondary text-lg tabular-nums ">
                    {item.obtainedMark}
                  </TableCell>
                  <TableCell className="px-6 py-5 text-center">
                    <span
                      className={cn(
                        "px-3 py-1 rounded-full text-[10px] font-semibold  tracking-tighter",
                        item.result === "Pass"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-red-100 text-red-700"
                      )}
                    >
                      {item.result}
                    </span>
                  </TableCell>
                  <TableCell className="px-6 py-5 text-center font-semibold text-secondary  text-xl drop-shadow-sm">
                    {item.grade}
                  </TableCell>
                </TableRow>
              ))}
              {reportData.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={9}
                    className="px-6 py-20 text-center text-gray-500 font-semibold   text-xs"
                  >
                    No report data available for this selection.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </AdminCard>
    </div>
  );
}
