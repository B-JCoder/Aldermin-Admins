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
import { FaFolderOpen, FaEdit, FaTrash } from "react-icons/fa";

import { ListToolbar } from "@/components/common/ListToolbar";
import { ListPagination } from "@/components/common/ListPagination";
import { ListActionButtons } from "@/components/common/ListActionButtons";

interface FeeGroup {
  id: number;
  group: string;
  description: string;
}

interface FeeGroupListProps {
  groups: FeeGroup[];
  onDelete: (id: number) => void;
}

export function FeeGroupList({ groups, onDelete }: FeeGroupListProps) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 5;

  const filteredGroups = groups.filter(
    (g) =>
      g.group.toLowerCase().includes(searchTerm.toLowerCase()) ||
      g.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredGroups.length / pageSize);
  const paginatedGroups = filteredGroups.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="space-y-6 flex flex-col h-full">
      <ListToolbar
        searchPlaceHolder="Search fee groups..."
        onSearch={setSearchTerm}
        showAddButton={false}
      />

      <GlassCard className="flex-1 flex flex-col p-0 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

        <div className="p-8 pb-4 relative z-10 border-b border-white/20">
          <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
            Existing Fee Groups
          </h4>
        </div>

        <div className="flex-1 overflow-x-auto p-8 pt-0 relative z-10">
          <div className="rounded-xl border border-white/20 bg-white/40 overflow-hidden">
            <Table>
              <TableHeader className="bg-white/50">
                <TableRow>
                  <TableHead className="px-6 py-4 text-left w-16 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    SN
                  </TableHead>
                  <TableHead className="px-6 py-4 text-left text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Group Name
                  </TableHead>
                  <TableHead className="px-6 py-4 text-left text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Description
                  </TableHead>
                  <TableHead className="px-6 py-4 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedGroups.map((item, index) => (
                  <TableRow
                    key={item.id}
                    className="group hover:bg-white/60 transition-all font-medium"
                  >
                    <TableCell className="px-6 py-6 text-muted-foreground/50 font-mono text-xs italic">
                      {(currentPage - 1) * pageSize + index + 1}
                    </TableCell>
                    <TableCell className="px-6 py-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-secondary/10 rounded-lg text-secondary group-hover:bg-secondary group-hover:text-white transition-colors shadow-sm">
                          <FaFolderOpen size={16} />
                        </div>
                        <span className="font-black text-foreground tracking-tight text-sm uppercase italic">
                          {item.group}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-6 text-muted-foreground font-medium text-xs italic">
                      {item.description}
                    </TableCell>
                    <TableCell className="px-6 py-6 text-center">
                      <ListActionButtons
                        onEdit={() => console.log("Edit")}
                        onDelete={() => onDelete(item.id)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
                {paginatedGroups.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={4}
                      className="h-32 text-center text-muted-foreground uppercase tracking-widest text-[10px] font-black"
                    >
                      No groups defined.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>

        {filteredGroups.length > pageSize && (
          <div className="p-8 pt-0 relative z-10">
            <ListPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalRecords={filteredGroups.length}
              pageSize={pageSize}
            />
          </div>
        )}
      </GlassCard>
    </div>
  );
}
