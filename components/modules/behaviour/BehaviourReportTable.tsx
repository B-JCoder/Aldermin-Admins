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
import { Badge } from "@/components/ui/badge";
import { FaUserGraduate, FaCrown } from "react-icons/fa";

import { ListToolbar } from "@/components/common/ListToolbar";
import { ListPagination } from "@/components/common/ListPagination";

interface BehaviourRank {
  id: number;
  rank: number;
  admissionNo: string;
  name: string;
  class: string;
  gender: string;
  phone: string;
  points: number;
}

interface BehaviourReportTableProps {
  ranks: BehaviourRank[];
}

export function BehaviourReportTable({ ranks }: BehaviourReportTableProps) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 5;

  const filteredRanks = ranks.filter(
    (rank) =>
      rank.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rank.admissionNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredRanks.length / pageSize);
  const paginatedRanks = filteredRanks.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="space-y-6 flex flex-col h-full">
      <ListToolbar
        searchPlaceHolder="Search students..."
        onSearch={setSearchTerm}
        showAddButton={false}
      />

      <GlassCard className="flex-1 flex flex-col p-0 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

        <div className="p-8 pb-4 relative z-10 border-b border-white/20">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
              Conduct Distinction Stream
            </h4>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.5)]"></div>
                <span className="text-[9px] font-black text-muted-foreground uppercase">
                  Legacy Tier
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-x-auto p-8 pt-0 relative z-10">
          <div className="rounded-xl border border-white/20 bg-white/40 overflow-hidden">
            <Table>
              <TableHeader className="bg-white/50">
                <TableRow>
                  <TableHead className="px-8 py-6 text-left w-24 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Standing
                  </TableHead>
                  <TableHead className="px-8 py-6 text-left text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Subject Profile
                  </TableHead>
                  <TableHead className="px-8 py-6 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Enrollment Node
                  </TableHead>
                  <TableHead className="px-8 py-6 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Interaction
                  </TableHead>
                  <TableHead className="px-8 py-6 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Aggregate Merit
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedRanks.map((rank) => (
                  <TableRow
                    key={rank.id}
                    className="group hover:bg-white/60 transition-all"
                  >
                    <TableCell className="px-8 py-10">
                      <div className="flex items-center gap-3">
                        {rank.rank === 1 ? (
                          <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 shadow-lg shadow-amber-50 ring-2 ring-amber-50 relative overflow-hidden">
                            <FaCrown className="relative z-10" />
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-2xl bg-muted/50 flex items-center justify-center text-muted-foreground font-mono font-black italic border border-border/50 uppercase text-[10px]">
                            #{rank.rank}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="px-8 py-10">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary ring-4 ring-secondary/5">
                          <FaUserGraduate size={16} />
                        </div>
                        <div>
                          <div className="font-black text-foreground tracking-tight text-base font-serif italic uppercase leading-none mb-1 group-hover:text-secondary transition-colors">
                            {rank.name}
                          </div>
                          <div className="text-[9px] font-black text-muted-foreground uppercase tracking-widest">
                            {rank.gender} • {rank.class}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="px-8 py-10 text-center">
                      <span className="px-3 py-1 bg-secondary/5 text-secondary text-[10px] font-mono font-black rounded border border-secondary/10 italic tracking-tighter shadow-sm">
                        {rank.admissionNo}
                      </span>
                    </TableCell>
                    <TableCell className="px-8 py-10 text-center text-[10px] font-mono font-bold text-muted-foreground italic">
                      {rank.phone}
                    </TableCell>
                    <TableCell className="px-8 py-10 text-center">
                      <div className="inline-flex flex-col items-center">
                        <div className="text-xl font-black font-mono text-emerald-600 leading-none mb-1">
                          + {rank.points}
                        </div>
                        <div className="text-[8px] font-black uppercase text-muted-foreground/50 tracking-[0.2em]">
                          Alpha Merit
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {filteredRanks.length > pageSize && (
          <div className="p-8 pt-0 relative z-10">
            <ListPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalRecords={filteredRanks.length}
              pageSize={pageSize}
            />
          </div>
        )}
      </GlassCard>
    </div>
  );
}
