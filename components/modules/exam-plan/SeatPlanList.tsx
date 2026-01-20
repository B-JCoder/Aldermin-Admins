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
import { Checkbox } from "@/components/ui/checkbox";

export interface SeatPlanStudent {
  id: number;
  name: string;
  admissionNo: string;
  className: string;
  fatherName: string;
  category: string;
  gender: string;
  selected: boolean;
}

interface SeatPlanListProps {
  students: SeatPlanStudent[];
  handleSelectOne: (id: number) => void;
  handleSelectAll: (checked: boolean) => void;
}

export function SeatPlanList({
  students,
  handleSelectOne,
  handleSelectAll,
}: SeatPlanListProps) {
  return (
    <GlassCard className="p-8">
      <h4 className="mb-4 text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
        Candidate Allotment List
      </h4>
      <div className="overflow-x-auto rounded-xl border border-border/50">
        <Table>
          <TableHeader className="bg-secondary/5">
            <TableRow className="hover:bg-transparent">
              <TableHead className="px-5 py-4 text-left w-16 text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                SN
              </TableHead>
              <TableHead className="px-5 py-4 text-left text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                Student Name
              </TableHead>
              <TableHead className="px-5 py-4 text-left text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                Admission No
              </TableHead>
              <TableHead className="px-5 py-4 text-left text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                Class
              </TableHead>
              <TableHead className="px-5 py-4 text-left text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                Father's Name
              </TableHead>
              <TableHead className="px-5 py-4 text-left text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                Category
              </TableHead>
              <TableHead className="px-5 py-4 text-left text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                Gender
              </TableHead>
              <TableHead className="px-5 py-4 text-center">
                <div className="flex flex-col items-center justify-center gap-1">
                  <span className="text-[8px] font-black text-secondary uppercase tracking-widest">
                    Allot All
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
                <TableCell className="px-5 py-4 text-muted-foreground/50 font-mono text-xs italic">
                  {index + 1}
                </TableCell>
                <TableCell className="px-5 py-4 font-bold text-foreground line-clamp-1">
                  {item.name}
                </TableCell>
                <TableCell className="px-5 py-4">
                  <span className="text-xs font-black text-secondary bg-secondary/10 px-2 py-0.5 rounded border border-secondary/20 tabular-nums">
                    {item.admissionNo}
                  </span>
                </TableCell>
                <TableCell className="px-5 py-4 text-muted-foreground font-medium">
                  {item.className}
                </TableCell>
                <TableCell className="px-5 py-4 text-muted-foreground italic text-xs">
                  {item.fatherName}
                </TableCell>
                <TableCell className="px-5 py-4">
                  <span className="text-[10px] font-black tracking-widest text-muted-foreground/50">
                    {item.category}
                  </span>
                </TableCell>
                <TableCell className="px-5 py-4 text-muted-foreground text-xs font-black">
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
                  className="px-5 py-12 text-center text-muted-foreground font-bold uppercase tracking-widest text-[10px]"
                >
                  No students matching the criteria.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </GlassCard>
  );
}
