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

      <AdminCard className="flex-1 flex flex-col p-0 overflow-hidden relative">
        

        <div className="p-8 pb-4 relative z-10 border-b border-gray-200">
          <h4 className="text-xs font-semibold text-gray-500   leading-none">
            Progression Registry
          </h4>
        </div>
        <div className="flex-1 overflow-x-auto p-8 pt-0 relative z-10">
          <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
            <Table>
              <TableHeader className="bg-white">
                <TableRow>
                  <TableHead className="px-6 py-8 text-left text-[10px] font-semibold   text-gray-500 w-20">
                    SN
                  </TableHead>
                  <TableHead className="px-6 py-8 text-left text-[10px] font-semibold   text-gray-500">
                    Patron Information
                  </TableHead>
                  <TableHead className="px-6 py-8 text-center text-[10px] font-semibold   text-gray-500">
                    Roll/Nº
                  </TableHead>
                  <TableHead className="px-6 py-8 text-center text-[10px] font-semibold   text-gray-500">
                    Progression Path
                  </TableHead>
                  <TableHead className="px-6 py-8 text-center text-[10px] font-semibold   text-gray-500">
                    Interaction
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedStudents.map((student, index) => (
                  <TableRow
                    key={student.id}
                    className="group hover:bg-white transition-all font-medium"
                  >
                    <TableCell className="px-6 py-8 text-gray-500  text-xs ">
                      {(currentPage - 1) * pageSize + index + 1}
                    </TableCell>
                    <TableCell className="px-6 py-8">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-gray-500 group-hover:bg-secondary group-hover:text-white transition-all shadow-sm border border-gray-200">
                          <FaUserGraduate size={16} />
                        </div>
                        <div className="font-semibold text-foreground tracking-tight text-base  ">
                          {student.name}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-8 text-center">
                      <Badge
                        variant="outline"
                        className="bg-white text-gray-500 border-white/60 font-semibold"
                      >
                        {student.rollNo}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-6 py-8">
                      <div className="flex items-center justify-center gap-6">
                        <div className="text-center">
                          <div className="text-[8px] font-semibold text-gray-500/50   mb-1">
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
                          className="text-gray-500/30 animate-pulse"
                          size={12}
                        />
                        <div className="text-center">
                          <div className="text-[8px] font-semibold text-emerald-500/50   mb-1">
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
                        className="rounded-2xl text-[10px] font-semibold   h-auto py-3 px-6 shadow-md hover:scale-105 transition-transform"
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
      </AdminCard>
    </div>
  );
}
