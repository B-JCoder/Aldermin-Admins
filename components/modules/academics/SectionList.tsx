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

interface SectionListProps {
  sections: string[];
}

export function SectionList({ sections: initialSections }: SectionListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const filteredSections = initialSections.filter((s) =>
    s.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredSections.length / pageSize);
  const paginatedSections = filteredSections.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="space-y-6 flex flex-col h-full">
      <ListToolbar
        searchPlaceHolder="Search sections..."
        onSearch={setSearchTerm}
        showAddButton={false}
      />

      <GlassCard className="flex-1 flex flex-col">
        <div className="p-8 border-b border-white/20">
          <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
            Authorized Sections
          </h4>
        </div>

        <div className="flex-1 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-20">SN</TableHead>
                <TableHead>Section Name</TableHead>
                <TableHead className="text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedSections.map((section, index) => (
                <TableRow key={index} className="group">
                  <TableCell className="font-mono text-xs text-muted-foreground italic">
                    {(currentPage - 1) * pageSize + index + 1}
                  </TableCell>
                  <TableCell>
                    <div className="font-black text-foreground text-sm uppercase italic tracking-tight">
                      {section}
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
              {paginatedSections.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={3}
                    className="h-40 text-center text-muted-foreground uppercase tracking-widest text-[10px] font-black"
                  >
                    No matching sections found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {filteredSections.length > pageSize && (
          <ListPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            totalRecords={filteredSections.length}
            pageSize={pageSize}
          />
        )}
      </GlassCard>
    </div>
  );
}
