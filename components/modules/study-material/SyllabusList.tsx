"use client";

import React, { useState } from "react";
import { AdminCard } from "@/components/common/AdminCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ListToolbar } from "@/components/common/ListToolbar";
import { ListPagination } from "@/components/common/ListPagination";
import { ListActionButtons } from "@/components/common/ListActionButtons";
import { FaCloudDownloadAlt, FaGraduationCap } from "react-icons/fa";

interface Syllabus {
  id: number;
  title: string;
  class: string;
  type: string;
  date: string;
  file: string;
}

interface SyllabusListProps {
  syllabusList: Syllabus[];
}

export function SyllabusList({
  syllabusList: initialSyllabusList,
}: SyllabusListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const filteredSyllabusList = initialSyllabusList.filter(
    (s) =>
      s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.class.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredSyllabusList.length / pageSize);
  const paginatedSyllabusList = filteredSyllabusList.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="space-y-6 flex flex-col h-full">
      <ListToolbar
        searchPlaceHolder="Search syllabus..."
        onSearch={setSearchTerm}
        showAddButton={false}
      />

      <AdminCard className="flex-1 flex flex-col">
        <div className="p-8 border-b border-gray-200">
          <h4 className="text-xs font-semibold text-gray-500   leading-none">
            Authorized Curriculum
          </h4>
        </div>

        <div className="flex-1 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-20">SN</TableHead>
                <TableHead>Metadata</TableHead>
                <TableHead className="text-center">Classification</TableHead>
                <TableHead className="text-center">Date</TableHead>
                <TableHead className="text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedSyllabusList.map((s, index) => (
                <TableRow key={s.id} className="group">
                  <TableCell className=" text-xs text-gray-500 ">
                    {(currentPage - 1) * pageSize + index + 1}
                  </TableCell>
                  <TableCell>
                    <div className="font-semibold text-foreground text-sm   tracking-tight mb-1">
                      {s.title}
                    </div>
                    <div className="text-[10px] font-semibold text-secondary flex items-center gap-1  ">
                      <FaGraduationCap size={10} /> {s.class}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <span className="px-3 py-1 bg-secondary/10 text-secondary text-[9px] font-semibold rounded-full  ">
                      {s.type}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="text-[10px] font-semibold  text-gray-500 ">
                      {s.date}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <ListActionButtons
                      onEdit={() => console.log("Edit")}
                      onDelete={() => console.log("Delete")}
                      customActions={
                        <button
                          className="h-9 w-9 flex items-center justify-center rounded-xl bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-all shadow-sm active:scale-90"
                          title="Download"
                        >
                          <FaCloudDownloadAlt size={14} />
                        </button>
                      }
                    />
                  </TableCell>
                </TableRow>
              ))}
              {paginatedSyllabusList.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="h-40 text-center text-gray-500   text-[10px] font-semibold"
                  >
                    No matching syllabus found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {filteredSyllabusList.length > pageSize && (
          <ListPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            totalRecords={filteredSyllabusList.length}
            pageSize={pageSize}
          />
        )}
      </AdminCard>
    </div>
  );
}
