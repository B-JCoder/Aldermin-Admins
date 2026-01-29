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
import { Badge } from "@/components/ui/badge";
import { FaLayerGroup, FaEdit, FaTrash } from "react-icons/fa";

import { ListToolbar } from "@/components/common/ListToolbar";
import { ListPagination } from "@/components/common/ListPagination";
import { ListActionButtons } from "@/components/common/ListActionButtons";

interface Group {
  id: number;
  name: string;
  grade: string;
  section: string;
}

interface GroupListProps {
  groups: Group[];
}

export function GroupList({ groups }: GroupListProps) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 5;

  const filteredGroups = groups.filter(
    (group) =>
      group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      group.grade.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredGroups.length / pageSize);
  const paginatedGroups = filteredGroups.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="space-y-6 flex flex-col h-full">
      <ListToolbar
        searchPlaceHolder="Search groups..."
        onSearch={setSearchTerm}
        showAddButton={false}
      />

      <AdminCard className="flex-1 flex flex-col p-8 pb-0 overflow-hidden relative">
        <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
          <h4 className="text-xs font-semibold text-gray-500   leading-none">
            Assembly Registry
          </h4>
          <Badge
            variant="secondary"
            className="bg-secondary text-white px-4 py-1.5 text-[10px] font-semibold rounded-full  tracking-tighter shadow-sm hover:bg-secondary/90"
          >
            {groups.length} Groups Active
          </Badge>
        </div>

        <div className="flex-1 overflow-x-auto">
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
            <Table>
              <TableHeader className="bg-white">
                <TableRow>
                  <TableHead className="px-6 py-5 w-16 text-[10px]  font-semibold text-gray-500">
                    SN
                  </TableHead>
                  <TableHead className="px-6 py-5 text-[10px]  font-semibold  text-gray-500">
                    Assembly Identity
                  </TableHead>
                  <TableHead className="px-6 py-5 text-center text-[10px]  font-semibold  text-gray-500">
                    Target Scope
                  </TableHead>
                  <TableHead className="px-6 py-5 text-center text-[10px]  font-semibold  text-gray-500">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedGroups.map((g, index) => (
                  <TableRow
                    key={g.id}
                    className="hover:bg-white transition-all group"
                  >
                    <TableCell className="px-6 py-5 text-gray-500  text-xs ">
                      {(currentPage - 1) * pageSize + index + 1}
                    </TableCell>
                    <TableCell className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-secondary/50 group-hover:bg-secondary/10 group-hover:text-secondary group-hover:shadow-sm transition-all border border-gray-200">
                          <FaLayerGroup size={12} />
                        </div>
                        <span className="font-semibold text-foreground tracking-tight text-sm  ">
                          {g.name}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-5 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <Badge
                          variant="outline"
                          className="bg-white text-gray-500 text-[9px]"
                        >
                          Grades: {g.grade}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="bg-white text-gray-500 text-[9px]"
                        >
                          Units: {g.section}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-5 text-center">
                      <ListActionButtons
                        onEdit={() => console.log("Edit", g.id)}
                        onDelete={() => console.log("Delete", g.id)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {filteredGroups.length > pageSize && (
          <div className="pt-4 pb-4">
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
