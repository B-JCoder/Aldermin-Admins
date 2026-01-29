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

      <AdminCard className="flex-1 flex flex-col p-0 overflow-hidden relative">
        

        <div className="p-8 pb-4 relative z-10 border-b border-gray-200">
          <h4 className="text-xs font-semibold text-gray-500   leading-none">
            Existing Fee Groups
          </h4>
        </div>

        <div className="flex-1 overflow-x-auto p-8 pt-0 relative z-10">
          <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
            <Table>
              <TableHeader className="bg-white">
                <TableRow>
                  <TableHead className="px-6 py-4 text-left w-16 text-[10px] font-semibold   text-gray-500">
                    SN
                  </TableHead>
                  <TableHead className="px-6 py-4 text-left text-[10px] font-semibold   text-gray-500">
                    Group Name
                  </TableHead>
                  <TableHead className="px-6 py-4 text-left text-[10px] font-semibold   text-gray-500">
                    Description
                  </TableHead>
                  <TableHead className="px-6 py-4 text-center text-[10px] font-semibold   text-gray-500">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedGroups.map((item, index) => (
                  <TableRow
                    key={item.id}
                    className="group hover:bg-white transition-all font-medium"
                  >
                    <TableCell className="px-6 py-6 text-gray-500/50  text-xs ">
                      {(currentPage - 1) * pageSize + index + 1}
                    </TableCell>
                    <TableCell className="px-6 py-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-secondary/10 rounded-lg text-secondary group-hover:bg-secondary group-hover:text-white transition-colors shadow-sm">
                          <FaFolderOpen size={16} />
                        </div>
                        <span className="font-semibold text-foreground tracking-tight text-sm  ">
                          {item.group}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-6 text-gray-500 font-medium text-xs ">
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
                      className="h-32 text-center text-gray-500   text-[10px] font-semibold"
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
      </AdminCard>
    </div>
  );
}
