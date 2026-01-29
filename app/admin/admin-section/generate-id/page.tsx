"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { ListToolbar } from "@/components/common/ListToolbar";
import { ListPagination } from "@/components/common/ListPagination";
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
import {
  FaPrint,
  FaSearch,
  FaIdCard,
  FaUsers,
  FaGripVertical,
  FaUserGraduate,
} from "react-icons/fa";

export default function GenerateIDPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const [students, setStudents] = useState([
    {
      id: 1,
      admissionNo: "ADM-2024-001",
      name: "Alice Johnson",
      class: "Grade 10",
      section: "Alpha",
      selected: false,
    },
    {
      id: 2,
      admissionNo: "ADM-2024-005",
      name: "Bob Smith",
      class: "Grade 10",
      section: "Alpha",
      selected: false,
    },
    {
      id: 3,
      admissionNo: "ADM-2024-012",
      name: "Charlie Davis",
      class: "Grade 10",
      section: "Beta",
      selected: false,
    },
  ]);

  const filteredStudents = students.filter(
    (s: any) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.admissionNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredStudents.length / pageSize);
  const paginatedStudents = filteredStudents.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const toggleSelect = (id: number) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, selected: !s.selected } : s))
    );
  };

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="ID Issuance Matrix"
        subtitle="Batch Identification Token Generation & Processing"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Issuance Parameters */}
        <div className="lg:col-span-4 h-full">
          <AdminCard className="p-10 flex flex-col h-full bg-gradient-to-br from-white to-secondary/5">
            <h4 className="mb-8 text-xs font-semibold text-gray-500   leading-none">
              Issuance Configuration
            </h4>

            <form className="space-y-6 flex-1">
              <div className="space-y-5">
                <div>
                  <label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1">
                    Institutional Tier <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaUsers
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/40"
                      size={12}
                    />
                    <select className="w-full rounded-2xl border-gray-200 bg-white p-4 pl-10 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm appearance-none cursor-pointer">
                      <option>Student Body</option>
                      <option>Faculty Staff</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1">
                      Academic Grade
                    </label>
                    <select className="w-full rounded-2xl border-gray-200 bg-white p-4 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm appearance-none cursor-pointer">
                      <option>All Grades</option>
                      <option>Grade 10</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1">
                      Sectional Unit
                    </label>
                    <select className="w-full rounded-2xl border-gray-200 bg-white p-4 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm appearance-none cursor-pointer">
                      <option>All Sections</option>
                      <option>Alpha</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1">
                    Active Blueprint <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaIdCard
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/40"
                      size={12}
                    />
                    <select className="w-full rounded-2xl border-gray-200 bg-white p-4 pl-10 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm appearance-none cursor-pointer text-secondary">
                      <option>Standard Principal Pass</option>
                      <option>Matte Executive</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1">
                    Print Grip Gap (px)
                  </label>
                  <div className="relative">
                    <FaGripVertical
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/40"
                      size={12}
                    />
                    <input
                      type="number"
                      className="w-full rounded-2xl border-gray-200 bg-white p-4 pl-10 text-xs  font-bold focus:bg-white outline-none transition-all shadow-sm"
                      placeholder="20"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button className="w-full h-16 bg-secondary hover:bg-secondary/90 text-white rounded-2xl font-semibold  text-[10px]  shadow-xl shadow-secondary/20 transition-all active:scale-95">
                  <FaSearch className="mr-2 " /> Fetch Candidates Stream
                </Button>
              </div>
            </form>
          </AdminCard>
        </div>

        {/* Candidate List */}
        <div className="lg:col-span-8 space-y-6 flex flex-col h-full">
          <ListToolbar
            searchPlaceHolder="Search issuance stream..."
            onSearch={setSearchTerm}
            showAddButton={false}
          />

          <AdminCard className="flex-1 flex flex-col">
            <div className="p-8 border-b border-gray-200 flex items-center justify-between">
              <h4 className="text-xs font-semibold text-gray-500   leading-none">
                Qualified Issuance Stream
              </h4>
              <Button className="h-10 px-6 bg-secondary hover:bg-secondary/90 text-white text-[10px] font-semibold rounded-xl   transition-all gap-2 shadow-lg shadow-secondary/10 active:scale-95">
                <FaPrint /> Batch Execute
              </Button>
            </div>

            <div className="flex-1 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">
                      <input
                        type="checkbox"
                        className="rounded border-secondary/30 text-secondary focus:ring-secondary accent-secondary"
                      />
                    </TableHead>
                    <TableHead>Candidate Profile</TableHead>
                    <TableHead className="text-center">Grade Unit</TableHead>
                    <TableHead className="text-center">
                      Admission Node
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedStudents.map((s: any) => (
                    <TableRow key={s.id} className="group">
                      <TableCell>
                        <input
                          type="checkbox"
                          checked={s.selected}
                          onChange={() => toggleSelect(s.id)}
                          className="rounded border-secondary/30 text-secondary focus:ring-secondary accent-secondary cursor-pointer"
                        />
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary ring-4 ring-secondary/5 group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                            <FaUserGraduate size={14} />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground tracking-tight text-sm   leading-none mb-1">
                              {s.name}
                            </div>
                            <div className="text-[10px] font-bold text-gray-500  ">
                              Verified Institutional Member
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="text-[10px] font-semibold  text-secondary  mb-1">
                          {s.class}
                        </div>
                        <div className="text-[9px] font-semibold text-gray-500   opacity-60">
                          Section {s.section}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="px-3 py-1.5 bg-secondary/10 text-secondary text-[10px]  font-semibold rounded border border-secondary/20  ">
                          {s.admissionNo}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                  {paginatedStudents.length === 0 && (
                    <TableRow>
                      <TableCell
                        colSpan={4}
                        className="h-40 text-center text-gray-500   text-[10px] font-semibold"
                      >
                        No matches found in issuance stream.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            {filteredStudents.length > pageSize && (
              <ListPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                totalRecords={filteredStudents.length}
                pageSize={pageSize}
              />
            )}
          </AdminCard>
        </div>
      </div>
    </div>
  );
}

