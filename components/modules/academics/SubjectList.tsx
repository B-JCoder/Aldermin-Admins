"use client";

import React, { useState } from "react";
import { GlassCard } from "@/components/cards/GlassCard";
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
import { FaBook } from "react-icons/fa";

interface Subject {
  name: string;
  code: string;
  type: "Theory" | "Practical";
}

interface SubjectListProps {
  subjects: Subject[];
}

export function SubjectList({ subjects: initialSubjects }: SubjectListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const filteredSubjects = initialSubjects.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredSubjects.length / pageSize);
  const paginatedSubjects = filteredSubjects.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="space-y-6 flex flex-col h-full">
      <ListToolbar
        searchPlaceHolder="Search subjects..."
        onSearch={setSearchTerm}
        showAddButton={false}
      />

      <GlassCard className="flex-1 flex flex-col">
        <div className="p-8 border-b border-white/20">
          <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
            Authorized Subjects
          </h4>
        </div>

        <div className="flex-1 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-20">SN</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead className="text-center">Classification</TableHead>
                <TableHead className="text-center">Code</TableHead>
                <TableHead className="text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedSubjects.map((subject, index) => (
                <TableRow key={index} className="group">
                  <TableCell className="font-mono text-xs text-muted-foreground italic">
                    {(currentPage - 1) * pageSize + index + 1}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-sidebar/5 flex items-center justify-center text-muted-foreground group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                        <FaBook size={16} />
                      </div>
                      <div>
                        <div className="font-black text-foreground text-sm uppercase italic tracking-tight">
                          {subject.name}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <span
                      className={`px-3 py-1 text-[9px] font-black rounded-full uppercase tracking-widest ${
                        subject.type === "Theory"
                          ? "bg-blue-500/10 text-blue-500"
                          : "bg-emerald-500/10 text-emerald-500"
                      }`}
                    >
                      {subject.type}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="text-[10px] font-black uppercase text-muted-foreground font-mono">
                      {subject.code || "---"}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <ListActionButtons
                      onEdit={() => console.log("Edit")}
                      onDelete={() => console.log("Delete")}
                    />
                  </TableCell>
                </TableRow>
              ))}
              {paginatedSubjects.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="h-40 text-center text-muted-foreground uppercase tracking-widest text-[10px] font-black"
                  >
                    No matching subjects found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {filteredSubjects.length > pageSize && (
          <ListPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            totalRecords={filteredSubjects.length}
            pageSize={pageSize}
          />
        )}
      </GlassCard>
    </div>
  );
}
