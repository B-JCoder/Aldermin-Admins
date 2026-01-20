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
import { FaUserGraduate, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { cn } from "@/lib/utils";

export interface AttendanceStudent {
  id: number;
  admissionNo: string;
  name: string;
  className: string;
  rollNo: string;
  attendance: string;
}

interface ExamAttendanceListProps {
  students: AttendanceStudent[];
  toggleAttendance: (id: number) => void;
}

export function ExamAttendanceList({
  students,
  toggleAttendance,
}: ExamAttendanceListProps) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 10; // Assuming attendance lists might be longer

  const totalPages = Math.ceil(students.length / pageSize);
  const paginatedStudents = students.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <GlassCard className="p-0 overflow-hidden relative">
      <div className="overflow-x-auto p-4">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-white/20 hover:bg-transparent">
              <TableHead className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-muted-foreground w-16">
                SN
              </TableHead>
              <TableHead className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                Patron Information
              </TableHead>
              <TableHead className="px-6 py-8 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                Sectional Unit
              </TableHead>
              <TableHead className="px-6 py-8 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                Roll/Nº
              </TableHead>
              <TableHead className="px-6 py-8 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                Presence Check
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-white/20">
            {paginatedStudents.map((student, index) => (
              <TableRow
                key={student.id}
                className="group hover:bg-secondary/5 transition-all text-sm"
              >
                <TableCell className="px-6 py-8 text-muted-foreground/50 font-mono text-xs italic">
                  {(currentPage - 1) * pageSize + index + 1}
                </TableCell>
                <TableCell className="px-6 py-8">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                      <FaUserGraduate size={16} />
                    </div>
                    <div>
                      <div className="font-black text-foreground tracking-tight text-base font-serif italic mb-1 uppercase group-hover:text-secondary transition-colors leading-none">
                        {student.name}
                      </div>
                      <div className="text-[9px] font-mono text-muted-foreground uppercase tracking-tighter italic">
                        Credential: {student.admissionNo}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-6 py-8 text-center">
                  <span className="px-3 py-1 bg-secondary/5 text-muted-foreground text-[10px] font-black rounded-lg uppercase tracking-tighter border border-secondary/10">
                    Class {student.className}
                  </span>
                </TableCell>
                <TableCell className="px-6 py-8 text-center">
                  <div className="text-lg font-black text-foreground italic font-mono tracking-tighter">
                    #{student.rollNo}
                  </div>
                  <div className="text-[8px] font-black text-muted-foreground/50 uppercase tracking-widest">
                    Desk Mark
                  </div>
                </TableCell>
                <TableCell className="px-6 py-8 text-center">
                  <Button
                    onClick={() => toggleAttendance(student.id)}
                    className={cn(
                      "inline-flex items-center gap-3 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg h-auto",
                      student.attendance === "Present"
                        ? "bg-secondary text-white shadow-secondary/20 hover:bg-secondary/90"
                        : "bg-rose-600 text-white shadow-rose-100 hover:bg-rose-700"
                    )}
                  >
                    {student.attendance === "Present" ? (
                      <FaCheckCircle />
                    ) : (
                      <FaTimesCircle />
                    )}
                    {student.attendance}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {students.length > pageSize && (
          <div className="p-4 pt-0">
            <ListPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalRecords={students.length}
              pageSize={pageSize}
            />
          </div>
        )}
      </div>
    </GlassCard>
  );
}
