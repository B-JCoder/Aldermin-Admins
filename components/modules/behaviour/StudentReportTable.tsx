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
import { ListToolbar } from "@/components/common/ListToolbar";
import { ListPagination } from "@/components/common/ListPagination";
import { ListActionButtons } from "@/components/common/ListActionButtons";
import { FaUserGraduate } from "react-icons/fa";

interface StudentIncident {
  id: number;
  admissionNo: string;
  name: string;
  gender: string;
  class: string;
  points: number;
  incidents: number;
}

interface StudentReportTableProps {
  students: StudentIncident[];
}

export function StudentReportTable({ students }: StudentReportTableProps) {
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
      />

      <AdminCard className="flex-1 flex flex-col p-0 overflow-hidden relative">
        

        <div className="p-8 pb-4 relative z-10 border-b border-gray-200">
          <h4 className="text-xs font-semibold text-gray-500   leading-none">
            Subject Behavioural Dossier
          </h4>
        </div>

        <div className="flex-1 overflow-x-auto p-8 pt-0 relative z-10">
          <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
            <Table>
              <TableHeader className="bg-white">
                <TableRow>
                  <TableHead className="px-8 py-6 text-left w-16 text-[10px] font-semibold   text-gray-500">
                    SN
                  </TableHead>
                  <TableHead className="px-8 py-6 text-left text-[10px] font-semibold   text-gray-500">
                    Subject Profile
                  </TableHead>
                  <TableHead className="px-8 py-6 text-center text-[10px] font-semibold   text-gray-500">
                    Enrollment Node
                  </TableHead>
                  <TableHead className="px-8 py-6 text-center text-[10px] font-semibold   text-gray-500">
                    Aggregate Merit
                  </TableHead>
                  <TableHead className="px-8 py-6 text-center text-[10px] font-semibold   text-gray-500">
                    Interaction
                  </TableHead>
                  <TableHead className="px-8 py-6 text-center text-[10px] font-semibold   text-gray-500">
                    Governance
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedStudents.map((student, index) => (
                  <TableRow
                    key={student.id}
                    className="group hover:bg-white transition-all font-medium"
                  >
                    <TableCell className="px-8 py-8 text-gray-500/50  text-xs ">
                      {(currentPage - 1) * pageSize + index + 1}
                    </TableCell>
                    <TableCell className="px-8 py-8">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary ring-4 ring-secondary/5">
                          <FaUserGraduate size={16} />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground tracking-tight text-base    leading-none mb-1 group-hover:text-secondary transition-colors">
                            {student.name}
                          </div>
                          <div className="text-[9px] font-semibold text-gray-500  ">
                            {student.gender} • {student.class}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="px-8 py-8 text-center text-gray-500  text-[10px]">
                      {student.admissionNo}
                    </TableCell>
                    <TableCell className="px-8 py-8 text-center">
                      <span
                        className={`inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-semibold   shadow-sm ring-1 ring-inset ${
                          student.points >= 0
                            ? "bg-emerald-50 text-emerald-700 ring-emerald-100"
                            : "bg-rose-50 text-rose-700 ring-rose-100"
                        }`}
                      >
                        {student.points >= 0
                          ? `+${student.points}`
                          : student.points}{" "}
                        Merit
                      </span>
                    </TableCell>
                    <TableCell className="px-8 py-8 text-center text-gray-500 font-bold ">
                      {student.incidents} Entries
                    </TableCell>
                    <TableCell className="px-8 py-8 text-center">
                      <ListActionButtons
                        onView={() => console.log("View")}
                        onEdit={() => console.log("Edit")}
                        onDelete={() => console.log("Delete")}
                      />
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
