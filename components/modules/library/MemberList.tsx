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
    currentPage * pageSize
  );

  return (
    <GlassCard className="flex-1 flex flex-col p-0 overflow-hidden relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="p-8 pb-4 relative z-10 border-b border-white/20">
        <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
          Active Membership Indices
        </h4>
      </div>

      <div className="flex-1 overflow-x-auto p-8 pt-0 relative z-10">
        <div className="rounded-xl border border-white/20 bg-white/40 overflow-hidden">
          <Table>
            <TableHeader className="bg-white/50">
              <TableRow>
                <TableHead className="px-6 py-5 text-left w-16 text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                  SN
                </TableHead>
                <TableHead className="px-6 py-5 text-left text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                  Identity Profile
                </TableHead>
                <TableHead className="px-6 py-5 text-left text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                  Communication Nodes
                </TableHead>
                <TableHead className="px-6 py-5 text-center text-[10px] uppercase font-black tracking-widest text-muted-foreground">
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
                  <TableCell className="px-6 py-8 text-muted-foreground/50 font-mono text-xs italic">
                    {(currentPage - 1) * pageSize + index + 1}
                  </TableCell>
                  <TableCell className="px-6 py-8">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary ring-4 ring-secondary/5 group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-sm relative overflow-hidden">
                        <FaUserGraduate size={14} />
                      </div>
                      <div>
                        <div className="font-black text-foreground tracking-tight text-base font-serif italic uppercase leading-none mb-1">
                          {m.name}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[8px] font-black bg-foreground text-background px-2 py-0.5 rounded uppercase tracking-widest">
                            {m.memberId}
                          </span>
                          <span className="text-[9px] font-black text-secondary uppercase tracking-widest">
                            {m.type} Archetype
                          </span>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-8">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[10px] text-muted-foreground italic">
                        <FaEnvelope
                          className="text-muted-foreground/50"
                          size={10}
                        />
                        <span>{m.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-mono">
                        <FaPhone
                          className="text-muted-foreground/50"
                          size={10}
                        />
                        <span>{m.mobile}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-8 text-center text-[10px] font-black text-secondary uppercase tracking-widest">
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
    </GlassCard>
  );
}
