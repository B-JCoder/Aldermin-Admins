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
import { FaUserGraduate, FaArrowRight } from "react-icons/fa";

import { ListToolbar } from "@/components/common/ListToolbar";
import { ListPagination } from "@/components/common/ListPagination";

interface Student {
  id: number;
  name: string;
  rollNo: string;
  currentClass: string;
  nextClass: string;
}

interface ProgressionRegistryProps {
  students: Student[];
}

export function ProgressionRegistry({ students }: ProgressionRegistryProps) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 5;

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(searchTerm.toLowerCase())
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
            Progression Registry
          </h4>
        </div>
        <div className="flex-1 overflow-x-auto p-8 pt-0 relative z-10">
          <div className="rounded-xl border border-white/20 bg-white/40 overflow-hidden">
            <Table>
              <TableHeader className="bg-white/50">
                <TableRow>
                  <TableHead className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-muted-foreground w-20">
                    SN
                  </TableHead>
                  <TableHead className="px-6 py-8 text-left text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Patron Information
                  </TableHead>
                  <TableHead className="px-6 py-8 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Roll/Nº
                  </TableHead>
                  <TableHead className="px-6 py-8 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Progression Path
                  </TableHead>
                  <TableHead className="px-6 py-8 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Interaction
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
                        <div className="w-10 h-10 rounded-xl bg-white/50 flex items-center justify-center text-muted-foreground group-hover:bg-secondary group-hover:text-white transition-all shadow-sm border border-white/40">
                          <FaUserGraduate size={16} />
                        </div>
                        <div className="font-black text-foreground tracking-tight text-base font-serif italic">
                          {student.name}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-8 text-center">
                      <Badge
                        variant="outline"
                        className="bg-white/50 text-muted-foreground border-white/60 font-black"
                      >
                        {student.rollNo}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-6 py-8">
                      <div className="flex items-center justify-center gap-6">
                        <div className="text-center">
                          <div className="text-[8px] font-black text-muted-foreground/50 uppercase tracking-widest mb-1">
                            From
                          </div>
                          <Badge
                            variant="secondary"
                            className="bg-secondary/10 text-secondary border-secondary/20 shadow-none px-3"
                          >
                            {student.currentClass}
                          </Badge>
                        </div>
                        <FaArrowRight
                          className="text-muted-foreground/30 animate-pulse"
                          size={12}
                        />
                        <div className="text-center">
                          <div className="text-[8px] font-black text-emerald-500/50 uppercase tracking-widest mb-1">
                            To
                          </div>
                          <Badge
                            variant="outline"
                            className="bg-emerald-50 text-emerald-600 border-emerald-100 shadow-none px-3"
                          >
                            {student.nextClass}
                          </Badge>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-8 text-center">
                      <Button
                        variant="secondary"
                        className="rounded-2xl text-[10px] font-black uppercase tracking-widest h-auto py-3 px-6 shadow-md hover:scale-105 transition-transform"
                      >
                        Promote & Update
                        <FaArrowRight
                          size={10}
                          className="ml-2 group-hover:translate-x-1 transition-transform"
                        />
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
