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

      <AdminCard className="flex-1 flex flex-col p-0 overflow-hidden relative">
        

        <div className="p-8 pb-4 relative z-10 border-b border-gray-200">
          <h4 className="text-xs font-semibold text-gray-500   leading-none">
            Attendance Registry
          </h4>
        </div>
        <div className="flex-1 overflow-x-auto p-8 pt-0 relative z-10">
          <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
            <Table>
              <TableHeader className="bg-white">
                <TableRow>
                  <TableHead className="px-6 py-8 text-left text-[10px] font-semibold   text-gray-500">
                    SN
                  </TableHead>
                  <TableHead className="px-6 py-8 text-left text-[10px] font-semibold   text-gray-500">
                    Patron Information
                  </TableHead>
                  <TableHead className="px-6 py-8 text-center text-[10px] font-semibold   text-gray-500">
                    Lecture Nº
                  </TableHead>
                  <TableHead className="px-6 py-8 text-center text-[10px] font-semibold   text-gray-500">
                    Engagement Status
                  </TableHead>
                  <TableHead className="px-6 py-8 text-left text-[10px] font-semibold   text-gray-500">
                    Session Remarks
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
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-gray-500 group-hover:bg-secondary/10 group-hover:text-secondary transition-colors border border-gray-200 shadow-sm">
                          <FaUserGraduate size={16} />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground tracking-tight text-base   leading-none">
                            {student.name}
                          </div>
                          <div className="text-[9px]  text-gray-500  mt-1.5 tracking-tighter">
                            Credential: {student.admissionNo}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-8 text-center">
                      <div className="text-lg font-semibold text-gray-500  ">
                        #{student.rollNo}
                      </div>
                      <div className="text-[8px] font-semibold text-gray-500/50  ">
                        Desk Mark
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-8">
                      <div className="flex items-center justify-center gap-1.5">
                        <Button
                          variant="ghost"
                          onClick={() => toggleStatus(student.id, "Present")}
                          className={`px-4 py-2 rounded-xl text-[9px] font-semibold   transition-all h-auto hover:text-white ${
                            student.status === "Present"
                              ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200 hover:bg-emerald-700"
                              : "bg-white text-gray-500 hover:bg-emerald-500"
                          }`}
                        >
                          Present
                        </Button>
                        <Button
                          variant="ghost"
                          onClick={() => toggleStatus(student.id, "Late")}
                          className={`px-4 py-2 rounded-xl text-[9px] font-semibold   transition-all h-auto hover:text-white ${
                            student.status === "Late"
                              ? "bg-amber-500 text-white shadow-lg shadow-amber-200 hover:bg-amber-600"
                              : "bg-white text-gray-500 hover:bg-amber-500"
                          }`}
                        >
                          Late
                        </Button>
                        <Button
                          variant="ghost"
                          onClick={() => toggleStatus(student.id, "Absent")}
                          className={`px-4 py-2 rounded-xl text-[9px] font-semibold   transition-all h-auto hover:text-white ${
                            student.status === "Absent"
                              ? "bg-rose-600 text-white shadow-lg shadow-rose-200 hover:bg-rose-700"
                              : "bg-white text-gray-500 hover:bg-rose-500"
                          }`}
                        >
                          Absent
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-8">
                      <div className="relative group/note">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within/note:text-secondary transition-colors">
                          <FaCommentDots size={12} />
                        </div>
                        <Input
                          type="text"
                          placeholder="Enter observation..."
                          defaultValue={student.note}
                          className="w-full bg-white border-gray-200 py-5 pl-9 text-[10px] font-bold outline-none focus:bg-white transition-all shadow-sm"
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
      </AdminCard>
    </div>
  );
}
