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
import { ListPagination } from "@/components/common/ListPagination";
import {
  FaUserGraduate,
  FaEnvelope,
  FaPhone,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

export interface Member {
  id: number;
  name: string;
  type: string;
  memberId: string;
  email: string;
  mobile: string;
}

interface MemberListProps {
  members: Member[];
}

export function MemberList({ members }: MemberListProps) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 5;

  const totalPages = Math.ceil(members.length / pageSize);
  const paginatedMembers = members.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  return (
    <AdminCard className="flex-1 flex flex-col p-0 overflow-hidden relative">
      <div className="p-8 pb-4 relative z-10 border-b border-gray-200">
        <h4 className="text-xs font-semibold text-gray-500   leading-none">
          Active Membership Indices
        </h4>
      </div>

      <div className="flex-1 overflow-x-auto p-8 pt-0 relative z-10">
        <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
          <Table>
            <TableHeader className="bg-white">
              <TableRow>
                <TableHead className="px-6 py-5 text-left w-16 text-[10px]  font-semibold  text-gray-500">
                  SN
                </TableHead>
                <TableHead className="px-6 py-5 text-left text-[10px]  font-semibold  text-gray-500">
                  Identity Profile
                </TableHead>
                <TableHead className="px-6 py-5 text-left text-[10px]  font-semibold  text-gray-500">
                  Communication Nodes
                </TableHead>
                <TableHead className="px-6 py-5 text-center text-[10px]  font-semibold  text-gray-500">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedMembers.map((m, index) => (
                <TableRow
                  key={m.id}
                  className="hover:bg-secondary/5 transition-all group"
                >
                  <TableCell className="px-6 py-8 text-gray-500/50  text-xs ">
                    {(currentPage - 1) * pageSize + index + 1}
                  </TableCell>
                  <TableCell className="px-6 py-8">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary ring-4 ring-secondary/5 group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-sm relative overflow-hidden">
                        <FaUserGraduate size={14} />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground tracking-tight text-base    leading-none mb-1">
                          {m.name}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[8px] font-semibold bg-foreground text-background px-2 py-0.5 rounded  ">
                            {m.memberId}
                          </span>
                          <span className="text-[9px] font-semibold text-secondary  ">
                            {m.type} Archetype
                          </span>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-8">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[10px] text-gray-500 ">
                        <FaEnvelope className="text-gray-500/50" size={10} />
                        <span>{m.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-gray-500 ">
                        <FaPhone className="text-gray-500/50" size={10} />
                        <span>{m.mobile}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-8 text-center text-[10px] font-semibold text-secondary  ">
                    <div className="flex justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 p-0 rounded-xl bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-all shadow-sm"
                      >
                        <FaEdit size={14} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 p-0 rounded-xl bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white transition-all shadow-sm"
                      >
                        <FaTrash size={14} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {members.length > pageSize && (
        <div className="p-8 pt-0 relative z-10">
          <ListPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            totalRecords={members.length}
            pageSize={pageSize}
          />
        </div>
      )}
    </AdminCard>
  );
}
