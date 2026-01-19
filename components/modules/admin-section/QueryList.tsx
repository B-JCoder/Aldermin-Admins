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
import { FaUserCircle } from "react-icons/fa";

interface Query {
  id: number;
  admissionNo: string;
  name: string;
  fatherName: string;
  dob: string;
  class: string;
}

interface QueryListProps {
  queries: Query[];
  onDelete: (id: number) => void;
}

export function QueryList({
  queries: initialQueries,
  onDelete,
}: QueryListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const filteredQueries = initialQueries.filter(
    (q) =>
      q.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.admissionNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.class.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredQueries.length / pageSize);
  const paginatedQueries = filteredQueries.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="space-y-6 flex flex-col h-full">
      <ListToolbar
        searchPlaceHolder="Search inquiries..."
        onSearch={setSearchTerm}
        showAddButton={false}
      />

      <GlassCard className="flex-1 flex flex-col">
        <div className="p-8 border-b border-white/20">
          <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
            Inquiry Pipeline Registry
          </h4>
        </div>

        <div className="flex-1 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-20">SN</TableHead>
                <TableHead>Prospect Profile</TableHead>
                <TableHead>Guardian Info</TableHead>
                <TableHead className="text-center">Class</TableHead>
                <TableHead className="text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedQueries.map((item, index) => (
                <TableRow key={item.id} className="group">
                  <TableCell className="font-mono text-xs text-muted-foreground italic">
                    {(currentPage - 1) * pageSize + index + 1}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-secondary/10 text-secondary rounded-lg group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                        <FaUserCircle size={16} />
                      </div>
                      <div>
                        <div className="font-black text-foreground text-sm uppercase italic tracking-tight">
                          {item.name}
                        </div>
                        <div className="text-[10px] font-bold text-muted-foreground uppercase">
                          {item.admissionNo} • {item.dob}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="font-bold text-muted-foreground text-[10px] uppercase tracking-widest">
                    {item.fatherName}
                  </TableCell>
                  <TableCell className="text-center">
                    <span className="px-3 py-1 bg-secondary/10 text-secondary text-[9px] font-black rounded-full uppercase tracking-widest">
                      {item.class}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <ListActionButtons
                      onEdit={() => console.log("Edit")}
                      onDelete={() => onDelete(item.id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
              {paginatedQueries.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="h-40 text-center text-muted-foreground uppercase tracking-widest text-[10px] font-black"
                  >
                    No matching inquiries found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {filteredQueries.length > pageSize && (
          <ListPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            totalRecords={filteredQueries.length}
            pageSize={pageSize}
          />
        )}
      </GlassCard>
    </div>
  );
}
