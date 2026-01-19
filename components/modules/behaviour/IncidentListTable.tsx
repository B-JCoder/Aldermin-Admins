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
import { Badge } from "@/components/ui/badge";
import { FaEdit, FaTrash } from "react-icons/fa";
import { ListToolbar } from "@/components/common/ListToolbar";
import { ListPagination } from "@/components/common/ListPagination";
import { ListActionButtons } from "@/components/common/ListActionButtons";

interface Incident {
  id: number;
  title: string;
  points: number;
  description: string;
}

interface IncidentListTableProps {
  incidents: Incident[];
}

export function IncidentListTable({ incidents }: IncidentListTableProps) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 5;

  const filteredIncidents = incidents.filter(
    (inc) =>
      inc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inc.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredIncidents.length / pageSize);
  const paginatedIncidents = filteredIncidents.slice(
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
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

        <div className="p-8 pb-4 relative z-10 border-b border-white/20">
          <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
            Conduct Registry Index
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
                    Conduct Profile
                  </TableHead>
                  <TableHead className="px-6 py-4 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Merit Alpha
                  </TableHead>
                  <TableHead className="px-6 py-4 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Interaction
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedIncidents.map((incident, index) => (
                  <TableRow
                    key={incident.id}
                    className="group hover:bg-white/60 transition-all"
                  >
                    <TableCell className="px-6 py-8 text-muted-foreground/50 font-mono text-xs italic">
                      {(currentPage - 1) * pageSize + index + 1}
                    </TableCell>
                    <TableCell className="px-6 py-8">
                      <div className="font-black text-foreground tracking-tight text-base font-serif italic uppercase leading-none mb-2 group-hover:text-secondary transition-colors">
                        {incident.title}
                      </div>
                      <div className="text-[10px] text-muted-foreground font-medium leading-relaxed max-w-sm line-clamp-1">
                        {incident.description}
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-8 text-center">
                      <span
                        className={`inline-flex items-center justify-center min-w-[3rem] px-3 py-1.5 rounded-xl text-xs font-black shadow-sm border ${
                          incident.points >= 0
                            ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                            : "bg-rose-50 text-rose-600 border-rose-100"
                        }`}
                      >
                        {incident.points >= 0
                          ? `+${incident.points}`
                          : incident.points}
                      </span>
                    </TableCell>
                    <TableCell className="px-6 py-8 text-center">
                      <ListActionButtons
                        onEdit={() => console.log("Edit")}
                        onDelete={() => console.log("Delete")}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {filteredIncidents.length > pageSize && (
          <div className="p-8 pt-0 relative z-10">
            <ListPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalRecords={filteredIncidents.length}
              pageSize={pageSize}
            />
          </div>
        )}
      </GlassCard>
    </div>
  );
}
