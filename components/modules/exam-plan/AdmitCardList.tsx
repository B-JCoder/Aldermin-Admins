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
import { Checkbox } from "@/components/ui/checkbox";

export interface Student {
  id: number;
  name: string;
  admissionNo: string;
  className: string;
  fatherName: string;
  category: string;
  gender: string;
  selected: boolean;
}

interface AdmitCardListProps {
  students: Student[];
  handleSelectOne: (id: number) => void;
  handleSelectAll: (checked: boolean) => void;
}

export function AdmitCardList({
  students,
  handleSelectOne,
  handleSelectAll,
}: AdmitCardListProps) {
  return (
    <AdminCard className="p-8">
      <h4 className="mb-4 text-xs font-semibold text-gray-500   leading-none">
        Filtered Student Result
      </h4>
      <div className="overflow-x-auto rounded-xl border border-border/50">
        <Table>
          <TableHeader className="bg-secondary/5">
            <TableRow className="hover:bg-transparent">
              <TableHead className="px-5 py-4 text-left w-16 text-[10px] font-semibold   text-gray-500">
                SN
              </TableHead>
              <TableHead className="px-5 py-4 text-left text-[10px] font-semibold   text-gray-500">
                Student Name
              </TableHead>
              <TableHead className="px-5 py-4 text-left text-[10px] font-semibold   text-gray-500">
                Admission No
              </TableHead>
              <TableHead className="px-5 py-4 text-left text-[10px] font-semibold   text-gray-500">
                Class
              </TableHead>
              <TableHead className="px-5 py-4 text-left text-[10px] font-semibold   text-gray-500">
                Father's Name
              </TableHead>
              <TableHead className="px-5 py-4 text-left text-[10px] font-semibold   text-gray-500">
                Category
              </TableHead>
              <TableHead className="px-5 py-4 text-left text-[10px] font-semibold   text-gray-500">
                Gender
              </TableHead>
              <TableHead className="px-5 py-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-[10px]  tracking-tighter font-semibold text-gray-500">
                    Toggle All
                  </span>
                  <Checkbox
                    onCheckedChange={(checked) =>
                      handleSelectAll(checked as boolean)
                    }
                    className="border-secondary text-secondary focus:ring-secondary/20"
                  />
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-border/50">
            {students.map((item, index) => (
              <TableRow
                key={item.id}
                className={`hover:bg-secondary/5 transition-colors ${
                  item.selected ? "bg-secondary/10" : ""
                }`}
              >
                <TableCell className="px-5 py-4 text-gray-500/50  text-xs ">
                  {index + 1}
                </TableCell>
                <TableCell className="px-5 py-4 font-semibold text-foreground">
                  {item.name}
                </TableCell>
                <TableCell className="px-5 py-4">
                  <span className="text-xs font-semibold text-secondary bg-secondary/10 px-2 py-0.5 rounded tracking-tighter">
                    {item.admissionNo}
                  </span>
                </TableCell>
                <TableCell className="px-5 py-4 text-gray-500 font-medium">
                  {item.className}
                </TableCell>
                <TableCell className="px-5 py-4 text-gray-500 font-medium">
                  {item.fatherName}
                </TableCell>
                <TableCell className="px-5 py-4">
                  <span className="text-[10px] font-bold text-gray-500 px-2 py-0.5 rounded-full bg-secondary/5 ring-1 ring-secondary/10">
                    {item.category}
                  </span>
                </TableCell>
                <TableCell className="px-5 py-4 text-gray-500/70 text-xs font-bold ">
                  {item.gender}
                </TableCell>
                <TableCell className="px-5 py-4 text-center">
                  <Checkbox
                    checked={item.selected}
                    onCheckedChange={() => handleSelectOne(item.id)}
                    className="border-secondary text-secondary focus:ring-secondary/20 data-[state=checked]:bg-secondary data-[state=checked]:text-white"
                  />
                </TableCell>
              </TableRow>
            ))}
            {students.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={8}
                  className="px-5 py-12 text-center text-gray-500 font-bold   text-[10px]"
                >
                  Search to see eligible students.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </AdminCard>
  );
}
