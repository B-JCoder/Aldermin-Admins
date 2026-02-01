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
import { Button } from "@/components/ui/button";
import { FaEdit, FaTrash } from "react-icons/fa";

export interface LeaveType {
  id: number;
  name: string;
  code: string;
  description: string;
}

interface LeaveTypeListProps {
  types: LeaveType[];
}

export function LeaveTypeList({ types }: LeaveTypeListProps) {
  return (
    <AdminCard className="h-full overflow-hidden p-0 relative">
      <div className="p-8 pb-4 flex items-center justify-between relative">
        <h4 className="text-xs font-semibold text-gray-500   leading-none">
          Active Types
        </h4>
      </div>

      <div className="p-6 pt-0">
        <div className="rounded-xl border border-gray-200 overflow-hidden bg-white">
          <Table>
            <TableHeader className="bg-white">
              <TableRow>
                <TableHead className="px-6 py-4 text-left w-16 text-[10px]  font-semibold text-gray-500">
                  SN
                </TableHead>
                <TableHead className="px-6 py-4 text-left text-[10px]  font-semibold  text-gray-500">
                  Classification
                </TableHead>
                <TableHead className="px-6 py-4 text-center text-[10px]  font-semibold  text-gray-500">
                  Code
                </TableHead>
                <TableHead className="px-6 py-4 text-center text-[10px]  font-semibold  text-gray-500">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {types.map((t, index) => (
                <TableRow
                  key={t.id}
                  className="group hover:bg-white transition-colors"
                >
                  <TableCell className="px-6 py-4 text-gray-500/50  text-xs ">
                    {index + 1}
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <div className="font-semibold text-foreground tracking-tight text-sm    leading-none mb-1">
                      {t.name}
                    </div>
                    <div className="text-[10px] font-bold text-gray-500">
                      {t.description}
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4 text-center text-primary  font-bold text-xs">
                    {t.code}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-1">
                      <Button
                        variant="secondary"
                        size="icon"
                        className="h-8 w-8 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary hover:text-white"
                      >
                        <FaEdit size={12} />
                      </Button>
                      <Button
                        variant="destructive"
                        size="icon"
                        className="h-8 w-8 rounded-lg bg-red-100 text-red-600 hover:bg-red-600 hover:text-white shadow-none"
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
    </AdminCard>
  );
}
