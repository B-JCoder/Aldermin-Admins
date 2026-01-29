"use client";

import React from "react";
import { AdminCard } from "@/components/common/AdminCard";
import { Button } from "@/components/ui/button";
import { ListPagination } from "@/components/common/ListPagination";
import { ListToolbar } from "@/components/common/ListToolbar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaPrint } from "react-icons/fa";

interface StudentID {
  id: number;
  name: string;
  admissionNo: string;
  class: string;
  section: string;
  layout: string;
}

interface IDQueueProps {
  students: StudentID[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  pageSize: number;
}

export function IDQueue({
  students,
  searchTerm,
  setSearchTerm,
  currentPage,
  setCurrentPage,
  pageSize,
}: IDQueueProps) {
  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.admissionNo.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredStudents.length / pageSize);
  const paginatedStudents = filteredStudents.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  return (
    <div className="space-y-6 flex flex-col h-full">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex-1 w-full">
          <ListToolbar
            searchPlaceHolder="Search production queue..."
            onSearch={setSearchTerm}
            showAddButton={false}
          />
        </div>
        <Button className="h-14 px-8 bg-secondary hover:bg-secondary/90 text-white rounded-2xl font-semibold  text-[10px]  shadow-xl shadow-secondary/20 transition-all active:scale-95 flex items-center gap-2">
          <FaPrint className="text-secondary-foreground/80" /> Execute Primary
          Print
        </Button>
      </div>

      <AdminCard className="flex-1 flex flex-col">
        <div className="p-8 border-b border-gray-200">
          <h4 className="text-xs font-semibold text-gray-500   leading-none">
            Card Production Queue
          </h4>
        </div>

        <div className="flex-1 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <input
                    type="checkbox"
                    className="rounded-lg border-gray-200 bg-white text-secondary focus:ring-secondary/20 transition-all cursor-pointer w-4 h-4"
                  />
                </TableHead>
                <TableHead>Member Profile</TableHead>
                <TableHead className="text-center">Draft Layout</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedStudents.map((s) => (
                <TableRow key={s.id} className="group">
                  <TableCell>
                    <input
                      type="checkbox"
                      className="rounded-lg border-gray-200 bg-white text-secondary focus:ring-secondary/20 transition-all cursor-pointer w-4 h-4"
                    />
                  </TableCell>
                  <TableCell>
                    <div className="font-semibold text-foreground text-sm   tracking-tight leading-none mb-1 group-hover:text-secondary group-hover:underline cursor-pointer transition-all">
                      {s.name}
                    </div>
                    <div className="text-[10px]  font-bold text-secondary  ">
                      {s.admissionNo} <span className="opacity-20 mx-1">|</span>{" "}
                      {s.class} {s.section}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="text-[10px] font-semibold  text-secondary/60    opacity-60">
                      {s.layout}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {paginatedStudents.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={3}
                    className="h-40 text-center text-gray-500   text-[10px] font-semibold"
                  >
                    No matches found in production queue.
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
  );
}
