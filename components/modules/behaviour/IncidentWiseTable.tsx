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
import { FaShieldAlt, FaUserGraduate } from "react-icons/fa";

import { ListToolbar } from "@/components/common/ListToolbar";
import { ListPagination } from "@/components/common/ListPagination";

interface IncidentReportItem {
  id: number;
  incident: string;
  students: string[];
}

interface IncidentWiseTableProps {
  reports: IncidentReportItem[];
}

export function IncidentWiseTable({ reports }: IncidentWiseTableProps) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 5;

  const filteredReports = reports.filter((item) =>
    item.incident.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredReports.length / pageSize);
  const paginatedReports = filteredReports.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="space-y-6 flex flex-col h-full">
      <ListToolbar
        searchPlaceHolder="Search incidents..."
        onSearch={setSearchTerm}
        showAddButton={false}
      />

      <GlassCard className="flex-1 flex flex-col p-0 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none"></div>

        <div className="p-8 pb-4 relative z-10 border-b border-white/20">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
              Taxonomy-Centric Distribution
            </h4>
            <Badge
              variant="secondary"
              className="px-3 py-1 bg-secondary/10 text-secondary border-none text-[9px] font-black rounded-lg uppercase tracking-tighter"
            >
              Live Stream
            </Badge>
          </div>
        </div>

        <div className="flex-1 overflow-x-auto p-8 pt-0 relative z-10">
          <div className="rounded-xl border border-white/20 bg-white/40 overflow-hidden">
            <Table>
              <TableHeader className="bg-white/50">
                <TableRow>
                  <TableHead className="px-8 py-6 text-left w-20 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    SN
                  </TableHead>
                  <TableHead className="px-8 py-6 text-left text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Conduct Node
                  </TableHead>
                  <TableHead className="px-8 py-6 text-left text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Attributed Subjects
                  </TableHead>
                  <TableHead className="px-8 py-6 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Magnitude
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedReports.map((item, index) => (
                  <TableRow
                    key={item.id}
                    className="group hover:bg-white/60 transition-all"
                  >
                    <TableCell className="px-8 py-10 text-muted-foreground/50 font-mono text-xs italic">
                      {(currentPage - 1) * pageSize + index + 1}
                    </TableCell>
                    <TableCell className="px-8 py-10">
                      <div className="font-black text-foreground tracking-tight text-base font-serif italic uppercase leading-none group-hover:text-secondary transition-colors">
                        {item.incident}
                      </div>
                      <div className="mt-2 text-[9px] font-black text-secondary uppercase tracking-widest flex items-center gap-1">
                        <FaShieldAlt size={8} /> Active Taxonomy Node
                      </div>
                    </TableCell>
                    <TableCell className="px-8 py-10">
                      <div className="flex flex-wrap gap-2">
                        {item.students.map((student, sIndex) => (
                          <div
                            key={sIndex}
                            className="flex items-center gap-2 pl-1 pr-3 py-1 bg-white border border-border/50 rounded-full shadow-sm hover:border-secondary/20 transition-all group/chip"
                          >
                            <div className="w-6 h-6 rounded-full bg-secondary/5 flex items-center justify-center text-secondary text-[10px]">
                              <FaUserGraduate size={10} />
                            </div>
                            <span className="text-[10px] font-bold text-muted-foreground/80 uppercase tracking-tighter group-hover/chip:text-secondary transition-colors">
                              {student}
                            </span>
                          </div>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="px-8 py-10 text-center">
                      <div className="inline-flex items-center justify-center px-4 py-2 bg-accent text-white rounded-2xl shadow-lg">
                        <span className="text-xs font-black font-mono">
                          {item.students.length}
                        </span>
                        <span className="ml-2 text-[8px] font-black uppercase text-white/60">
                          Total
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {filteredReports.length > pageSize && (
          <div className="p-8 pt-0 relative z-10">
            <ListPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalRecords={filteredReports.length}
              pageSize={pageSize}
            />
          </div>
        )}
      </GlassCard>
    </div>
  );
}
