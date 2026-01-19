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
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { FaUserGraduate, FaPlus, FaEye } from "react-icons/fa";

import { ListToolbar } from "@/components/common/ListToolbar";
import { ListPagination } from "@/components/common/ListPagination";

interface StudentScore {
  id: number;
  admissionNo: string;
  name: string;
  gender: string;
  class: string;
  points: number;
  incidents: number;
}

interface AssignIncidentTableProps {
  students: StudentScore[];
}

export function AssignIncidentTable({ students }: AssignIncidentTableProps) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 5;

  const filteredStudents = students.filter(
    (std) =>
      std.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      std.admissionNo.toLowerCase().includes(searchTerm.toLowerCase())
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
        action={
          <Button className="rounded-xl bg-secondary text-white hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20 text-[10px] font-black uppercase tracking-widest px-6 h-10">
            <FaPlus className="mr-2" /> Attribute Incident
          </Button>
        }
      />

      <GlassCard className="flex-1 flex flex-col p-0 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

        <div className="p-8 pb-4 relative z-10 border-b border-white/20">
          <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
            Conduct Evaluation Matrix
          </h4>
        </div>

        <div className="flex-1 overflow-x-auto p-8 pt-0 relative z-10">
          <div className="rounded-xl border border-white/20 bg-white/40 overflow-hidden">
            <Table>
              <TableHeader className="bg-white/50">
                <TableRow>
                  <TableHead className="px-8 py-6 text-left w-16 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    SN
                  </TableHead>
                  <TableHead className="px-8 py-6 text-left text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Student Profile
                  </TableHead>
                  <TableHead className="px-8 py-6 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Enrollment Node
                  </TableHead>
                  <TableHead className="px-8 py-6 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Aggregate Merit
                  </TableHead>
                  <TableHead className="px-8 py-6 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Log Count
                  </TableHead>
                  <TableHead className="px-8 py-6 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Intervention
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedStudents.map((student, index) => (
                  <TableRow
                    key={student.id}
                    className="group hover:bg-white/60 transition-all"
                  >
                    <TableCell className="px-8 py-8 text-muted-foreground/50 font-mono text-xs italic">
                      {(currentPage - 1) * pageSize + index + 1}
                    </TableCell>
                    <TableCell className="px-8 py-8">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary ring-4 ring-secondary/5">
                          <FaUserGraduate size={16} />
                        </div>
                        <div>
                          <div className="font-black text-foreground tracking-tight text-base font-serif italic uppercase leading-none mb-1 group-hover:text-secondary transition-colors">
                            {student.name}
                          </div>
                          <div className="text-[9px] font-black text-muted-foreground uppercase tracking-widest">
                            {student.gender} • {student.class}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="px-8 py-8 text-center">
                      <span className="px-3 py-1 bg-secondary/5 text-secondary text-[10px] font-mono font-black rounded border border-secondary/10 italic">
                        {student.admissionNo}
                      </span>
                    </TableCell>
                    <TableCell className="px-8 py-8 text-center">
                      <div
                        className={`text-lg font-black font-mono ${
                          student.points >= 0
                            ? "text-emerald-500"
                            : "text-rose-500"
                        }`}
                      >
                        {student.points >= 0
                          ? `+${student.points}`
                          : student.points}
                      </div>
                    </TableCell>
                    <TableCell className="px-8 py-8 text-center text-muted-foreground font-bold italic text-xs">
                      {student.incidents} Entries
                    </TableCell>
                    <TableCell className="px-8 py-8 text-center">
                      <Button
                        variant="ghost"
                        className="rounded-xl bg-muted/50 text-foreground hover:bg-secondary hover:text-white transition-all shadow-sm text-[9px] font-black uppercase tracking-widest h-9 px-4"
                      >
                        <FaEye className="mr-2" /> View Dossier
                      </Button>
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
