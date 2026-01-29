"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AdminCard } from "@/components/common/AdminCard";
import { Badge } from "@/components/ui/badge";

export interface LeaveHistory {
  id: number;
  type: string;
  from: string;
  to: string;
  days: number;
  reason: string;
  status: string;
}

interface LeaveHistoryListProps {
  history: LeaveHistory[];
}

export function LeaveHistoryList({ history }: LeaveHistoryListProps) {
  return (
    <AdminCard className="h-full overflow-hidden p-0 relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-50/20 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

      <div className="p-8 pb-4 flex items-center justify-between relative">
        <h4 className="text-xs font-semibold text-gray-500   leading-none">
          My Leave History
        </h4>
        <div className="flex gap-2 text-[10px] font-semibold   text-gray-500">
          <span>
            Available: <span className="text-emerald-500">12 Days</span>
          </span>
        </div>
      </div>

      <div className="p-6 pt-0">
        <div className="rounded-xl border border-gray-200 overflow-hidden bg-white">
          <Table>
            <TableHeader className="bg-white">
              <TableRow>
                <TableHead className="px-6 py-4 text-left text-[10px]  font-semibold  text-gray-500">
                  Leave Type
                </TableHead>
                <TableHead className="px-6 py-4 text-center text-[10px]  font-semibold  text-gray-500">
                  Duration
                </TableHead>
                <TableHead className="px-6 py-4 text-center text-[10px]  font-semibold  text-gray-500">
                  Dates
                </TableHead>
                <TableHead className="px-6 py-4 text-center text-[10px]  font-semibold  text-gray-500">
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {history.map((l) => (
                <TableRow
                  key={l.id}
                  className="group hover:bg-white transition-colors"
                >
                  <TableCell className="px-6 py-4">
                    <div className="font-semibold text-foreground tracking-tight text-sm    leading-none mb-1">
                      {l.type}
                    </div>
                    <div className="text-[10px]  text-cyan-600 font-bold">
                      Reason: {l.reason}
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4 text-center">
                    <div className="text-[10px] font-semibold  text-gray-500 ">
                      {l.days} Day(s)
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4 text-center text-gray-500">
                    <div className="text-[10px] font-semibold  text-gray-500/70 ">
                      {l.from} - {l.to}
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4 text-center">
                    <Badge
                      variant={
                        l.status === "Approved" ? "default" : "secondary"
                      }
                      className={`text-[9px] font-semibold   shadow-none ${
                        l.status === "Approved"
                          ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                          : "bg-amber-100 text-amber-700 hover:bg-amber-200"
                      }`}
                    >
                      {l.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminCard>
  );
}
