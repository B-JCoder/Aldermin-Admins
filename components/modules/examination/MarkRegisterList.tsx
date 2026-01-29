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
import { Input } from "@/components/ui/input";
import { FaUserGraduate, FaCommentDots, FaSave } from "react-icons/fa";
import { cn } from "@/lib/utils";

export interface MarkRegisterStudent {
  id: number;
  admissionNo: string;
  rollNo: string;
  className: string;
  name: string;
  marks: number;
  remarks: string;
  isPresent: boolean;
}

interface MarkRegisterListProps {
  students: MarkRegisterStudent[];
  togglePresence: (id: number) => void;
}

export function MarkRegisterList({
  students,
  togglePresence,
}: MarkRegisterListProps) {
  return (
    <AdminCard className="p-0 overflow-hidden relative pb-8">
      

      <div className="relative overflow-x-auto p-4">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-gray-200 hover:bg-transparent">
              <TableHead className="px-6 py-8 text-left text-[10px] font-semibold   text-gray-500 w-16">
                SN
              </TableHead>
              <TableHead className="px-6 py-8 text-left text-[10px] font-semibold   text-gray-500">
                Patron Information
              </TableHead>
              <TableHead className="px-6 py-8 text-center text-[10px] font-semibold   text-gray-500">
                Roll/Nº
              </TableHead>
              <TableHead className="px-6 py-8 text-center text-[10px] font-semibold   text-gray-500">
                Evaluated Score
              </TableHead>
              <TableHead className="px-6 py-8 text-left text-[10px] font-semibold   text-gray-500">
                Instructional Remarks
              </TableHead>
              <TableHead className="px-6 py-8 text-center text-[10px] font-semibold   text-gray-500">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-white/20">
            {students.map((student, index) => (
              <TableRow
                key={student.id}
                className={cn(
                  "group transition-all text-sm",
                  !student.isPresent
                    ? "bg-rose-50/10 hover:bg-rose-50/20"
                    : "hover:bg-secondary/5"
                )}
              >
                <TableCell className="px-6 py-10 text-gray-500/50  text-xs ">
                  {index + 1}
                </TableCell>
                <TableCell className="px-6 py-10">
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center transition-all shadow-sm",
                        student.isPresent
                          ? "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white"
                          : "bg-rose-100/50 text-rose-500"
                      )}
                    >
                      <FaUserGraduate size={16} />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground tracking-tight text-base   mb-1  leading-none">
                        {student.name}
                      </div>
                      <div className="text-[9px]  text-gray-500  tracking-tighter ">
                        ID: {student.admissionNo}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-6 py-10 text-center  font-semibold text-gray-500/70">
                  #{student.rollNo}
                </TableCell>
                <TableCell className="px-6 py-10 text-center">
                  <Input
                    type="number"
                    disabled={!student.isPresent}
                    defaultValue={student.marks}
                    className={cn(
                      "w-20 text-center p-3 rounded-xl text-sm font-semibold  transition-all outline-none ring-1 border-0 h-12",
                      !student.isPresent
                        ? "bg-muted text-gray-500 ring-border"
                        : "bg-secondary/5 text-secondary ring-secondary/20 focus:ring-2 focus:ring-secondary/30 focus:bg-white"
                    )}
                  />
                  <div className="mt-2 text-[8px] font-semibold text-gray-500/50  ">
                    Mark Scored
                  </div>
                </TableCell>
                <TableCell className="px-6 py-10">
                  <div className="relative group/note">
                    <FaCommentDots
                      className={cn(
                        "absolute left-3 top-1/2 -translate-y-1/2 transition-colors",
                        student.isPresent
                          ? "text-gray-500/30 group-focus-within/note:text-secondary/60"
                          : "text-rose-200"
                      )}
                      size={12}
                    />
                    <Input
                      type="text"
                      disabled={!student.isPresent}
                      placeholder="Enter remark..."
                      defaultValue={student.remarks}
                      className={cn(
                        "w-full border-0 rounded-xl py-3 pl-9 text-[10px] font-bold outline-none ring-1 transition-all h-12",
                        !student.isPresent
                          ? "bg-muted text-gray-500 ring-border "
                          : "bg-secondary/5 text-gray-500 ring-secondary/20 focus:ring-secondary/30 focus:bg-white"
                      )}
                    />
                  </div>
                </TableCell>
                <TableCell className="px-6 py-10 text-center">
                  <button
                    onClick={() => togglePresence(student.id)}
                    className={cn(
                      "w-12 h-6 rounded-full relative transition-all duration-300 mx-auto",
                      student.isPresent ? "bg-emerald-500" : "bg-rose-400"
                    )}
                  >
                    <div
                      className={cn(
                        "absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 shadow-sm",
                        student.isPresent ? "left-7" : "left-1"
                      )}
                    ></div>
                  </button>
                  <div
                    className={cn(
                      "mt-2 text-[9px] font-semibold  ",
                      student.isPresent ? "text-emerald-500" : "text-rose-500"
                    )}
                  >
                    {student.isPresent ? "Present" : "Absent"}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-center mt-8">
        <Button className="px-14 py-6 bg-secondary text-white rounded-[2rem] text-xs font-semibold  tracking-[0.4em] shadow-xl hover:bg-secondary/90 active:translate-y-1 transition-all flex items-center gap-4 h-auto">
          <FaSave size={14} />
          Commit Record To Archive
        </Button>
      </div>
    </AdminCard>
  );
}
