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
  FaExchangeAlt,
  FaHistory,
} from "react-icons/fa";

export interface Member {
  id: number;
  name: string;
  type: string;
  memberId: string;
  email: string;
  mobile: string;
}

interface IssueReturnListProps {
  members: Member[];
}

export function IssueReturnList({ members }: IssueReturnListProps) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 5;

  const totalPages = Math.ceil(members.length / pageSize);
  const paginatedMembers = members.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <GlassCard className="flex-1 flex flex-col p-0 overflow-hidden relative">
      <div className="p-8 border-b border-white/20 flex items-center justify-between bg-secondary/5">
        <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
          Circulation Engagement Stream
        </h4>
      </div>

      <div className="overflow-x-auto p-0">
        <Table>
          <TableHeader className="bg-secondary/5">
            <TableRow>
              <TableHead className="px-8 py-6 text-left w-20 text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                SN
              </TableHead>
              <TableHead className="px-8 py-6 text-left text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                Industrial Identity
              </TableHead>
              <TableHead className="px-8 py-6 text-left text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                Communication Nodes
              </TableHead>
              <TableHead className="px-8 py-6 text-center text-[10px] uppercase font-black tracking-widest text-muted-foreground">
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
                <TableCell className="px-8 py-10 text-muted-foreground/50 font-mono text-xs italic">
                  {(currentPage - 1) * pageSize + index + 1}
                </TableCell>
                <TableCell className="px-8 py-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary ring-4 ring-secondary/5 group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-sm relative overflow-hidden">
                      <FaUserGraduate size={16} />
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    </div>
                    <div>
                      <div className="font-black text-foreground tracking-tight text-base font-serif italic uppercase leading-none mb-1">
                        {m.name}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black text-secondary uppercase tracking-widest">
                          {m.type} Archetype
                        </span>
                        <span className="h-1 w-1 bg-muted-foreground/30 rounded-full"></span>
                        <span className="text-[9px] font-mono font-bold text-muted-foreground">
                          {m.memberId}
                        </span>
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-8 py-10">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-[10px] text-muted-foreground italic">
                      <FaEnvelope
                        className="text-muted-foreground/50"
                        size={10}
                      />
                      <span>{m.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-mono font-medium">
                      <FaPhone className="text-muted-foreground/50" size={10} />
                      <span>{m.mobile}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-8 py-10 text-center">
                  <div className="flex justify-center gap-2">
                    <Button
                      variant="default"
                      className="flex items-center gap-2 px-5 py-2.5 bg-secondary text-white text-[9px] font-black rounded-xl uppercase tracking-widest hover:bg-secondary/90 transition-all shadow-lg active:scale-95 group/btn h-auto"
                    >
                      <FaExchangeAlt
                        size={10}
                        className="group-hover/btn:rotate-180 transition-transform duration-500"
                      />
                      Issue / Return
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="p-2.5 bg-secondary/5 text-muted-foreground rounded-xl hover:bg-white hover:text-secondary transition-all border border-secondary/10 shadow-sm h-auto w-auto"
                    >
                      <FaHistory size={12} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
