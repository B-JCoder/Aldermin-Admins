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
import { Input } from "@/components/ui/input";
import { FaUserGraduate, FaCommentDots } from "react-icons/fa";

import { ListToolbar } from "@/components/common/ListToolbar";
import { ListPagination } from "@/components/common/ListPagination";

interface Student {
  id: number;
  admissionNo: string;
  name: string;
  rollNo: string;
  status: string;
  note: string;
}

interface WiseAttendanceTableProps {
  students: Student[];
  toggleStatus: (id: number, nextStatus: string) => void;
}

export function WiseAttendanceTable({
  students,
  toggleStatus,
}: WiseAttendanceTableProps) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 5;

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.admissionNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredStudents.length / pageSize);
  const paginatedStudents = filteredStudents.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="space-y-6 flex flex-col h-full">
      <ListToolbar
        searchPlaceHolder="Search students..."
        onSearch={setSearchTerm}
        showAddButton={false}
      />

      <GlassCard className="flex-1 flex flex-col p-0 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

        <div className="p-8 pb-4 relative z-10 border-b border-white/20">
          <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
            Attendance Registry
          </h4>
        </div>
        <div className="flex-1 overflow-x-auto p-8 pt-0 relative z-10">
          <div className="rounded-xl border border-white/20 bg-white/40 overflow-hidden">
            <Table>
              <TableHeader className="bg-white/50">
                <TableRow>
                  <TableHead className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    SN
                  </TableHead>
                  <TableHead className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Patron Information
                  </TableHead>
                  <TableHead className="px-6 py-8 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Lecture Nº
                  </TableHead>
                  <TableHead className="px-6 py-8 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Engagement Status
                  </TableHead>
                  <TableHead className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Session Remarks
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedStudents.map((student, index) => (
                  <TableRow
                    key={student.id}
                    className="group hover:bg-white/60 transition-all font-medium"
                  >
                    <TableCell className="px-6 py-8 text-muted-foreground font-mono text-xs italic">
                      {(currentPage - 1) * pageSize + index + 1}
                    </TableCell>
                    <TableCell className="px-6 py-8">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/50 flex items-center justify-center text-muted-foreground group-hover:bg-secondary/10 group-hover:text-secondary transition-colors border border-white/40 shadow-sm">
                          <FaUserGraduate size={16} />
                        </div>
                        <div>
                          <div className="font-black text-foreground tracking-tight text-base font-serif italic leading-none">
                            {student.name}
                          </div>
                          <div className="text-[9px] font-mono text-muted-foreground uppercase mt-1.5 tracking-tighter">
                            Credential: {student.admissionNo}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-8 text-center">
                      <div className="text-lg font-black text-muted-foreground font-mono italic">
                        #{student.rollNo}
                      </div>
                      <div className="text-[8px] font-black text-muted-foreground/50 uppercase tracking-widest">
                        Desk Mark
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-8">
                      <div className="flex items-center justify-center gap-1.5">
                        <Button
                          variant="ghost"
                          onClick={() => toggleStatus(student.id, "Present")}
                          className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all h-auto hover:text-white ${
                            student.status === "Present"
                              ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200 hover:bg-emerald-700"
                              : "bg-white/50 text-muted-foreground hover:bg-emerald-500"
                          }`}
                        >
                          Present
                        </Button>
                        <Button
                          variant="ghost"
                          onClick={() => toggleStatus(student.id, "Late")}
                          className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all h-auto hover:text-white ${
                            student.status === "Late"
                              ? "bg-amber-500 text-white shadow-lg shadow-amber-200 hover:bg-amber-600"
                              : "bg-white/50 text-muted-foreground hover:bg-amber-500"
                          }`}
                        >
                          Late
                        </Button>
                        <Button
                          variant="ghost"
                          onClick={() => toggleStatus(student.id, "Absent")}
                          className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all h-auto hover:text-white ${
                            student.status === "Absent"
                              ? "bg-rose-600 text-white shadow-lg shadow-rose-200 hover:bg-rose-700"
                              : "bg-white/50 text-muted-foreground hover:bg-rose-500"
                          }`}
                        >
                          Absent
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-8">
                      <div className="relative group/note">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within/note:text-secondary transition-colors">
                          <FaCommentDots size={12} />
                        </div>
                        <Input
                          type="text"
                          placeholder="Enter observation..."
                          defaultValue={student.note}
                          className="w-full bg-white/50 border-white/40 py-5 pl-9 text-[10px] font-bold outline-none focus:bg-white transition-all shadow-sm"
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {filteredStudents.length > pageSize && (
          <div className="p-8 pt-0 relative z-10">
            <ListPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalRecords={filteredStudents.length}
              pageSize={pageSize}
            />
          </div>
        )}
      </GlassCard>
    </div>
  );
}
