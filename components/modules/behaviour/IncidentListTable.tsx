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

      <AdminCard className="flex-1 flex flex-col p-0 overflow-hidden relative">
        

        <div className="p-8 pb-4 relative z-10 border-b border-gray-200">
          <h4 className="text-xs font-semibold text-gray-500   leading-none">
            Conduct Registry Index
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
                    Conduct Profile
                  </TableHead>
                  <TableHead className="px-6 py-4 text-center text-[10px] font-semibold   text-gray-500">
                    Merit Alpha
                  </TableHead>
                  <TableHead className="px-6 py-4 text-center text-[10px] font-semibold   text-gray-500">
                    Interaction
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedIncidents.map((incident, index) => (
                  <TableRow
                    key={incident.id}
                    className="group hover:bg-white transition-all"
                  >
                    <TableCell className="px-6 py-8 text-gray-500/50  text-xs ">
                      {(currentPage - 1) * pageSize + index + 1}
                    </TableCell>
                    <TableCell className="px-6 py-8">
                      <div className="font-semibold text-foreground tracking-tight text-base    leading-none mb-2 group-hover:text-secondary transition-colors">
                        {incident.title}
                      </div>
                      <div className="text-[10px] text-gray-500 font-medium leading-relaxed max-w-sm line-clamp-1">
                        {incident.description}
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-8 text-center">
                      <span
                        className={`inline-flex items-center justify-center min-w-[3rem] px-3 py-1.5 rounded-xl text-xs font-semibold shadow-sm border ${
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
      </AdminCard>
    </div>
  );
}
