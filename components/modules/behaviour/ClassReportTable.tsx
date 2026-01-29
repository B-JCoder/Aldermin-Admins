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
import { FaUsers, FaArrowUp } from "react-icons/fa";

import { ListToolbar } from "@/components/common/ListToolbar";
import { ListPagination } from "@/components/common/ListPagination";
import { ListActionButtons } from "@/components/common/ListActionButtons";

interface ClassRank {
  id: number;
  rank: number;
  class: string;
  students: number;
  points: number;
}

interface ClassReportTableProps {
  ranks: ClassRank[];
}

export function ClassReportTable({ ranks }: ClassReportTableProps) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 5;

  const filteredRanks = ranks.filter((rank) =>
    rank.class.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredRanks.length / pageSize);
  const paginatedRanks = filteredRanks.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="space-y-6 flex flex-col h-full">
      <ListToolbar
        searchPlaceHolder="Search classes..."
        onSearch={setSearchTerm}
        showAddButton={false}
      />

      <AdminCard className="flex-1 flex flex-col p-0 overflow-hidden relative">
        

        <div className="p-8 pb-4 relative z-10 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-semibold text-gray-500   leading-none">
              Tier Merit Standings
            </h4>
          </div>
        </div>

        <div className="flex-1 overflow-x-auto p-8 pt-0 relative z-10">
          <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
            <Table>
              <TableHeader className="bg-white">
                <TableRow>
                  <TableHead className="px-8 py-6 text-left w-24 text-[10px] font-semibold   text-gray-500">
                    Standing
                  </TableHead>
                  <TableHead className="px-8 py-6 text-left text-[10px] font-semibold   text-gray-500">
                    Organizational Tier
                  </TableHead>
                  <TableHead className="px-8 py-6 text-center text-[10px] font-semibold   text-gray-500">
                    Subject Magnitude
                  </TableHead>
                  <TableHead className="px-8 py-6 text-center text-[10px] font-semibold   text-gray-500">
                    Aggregate Merit
                  </TableHead>
                  <TableHead className="px-8 py-6 text-center text-[10px] font-semibold   text-gray-500">
                    Governance
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedRanks.map((rank) => (
                  <TableRow
                    key={rank.id}
                    className="group hover:bg-white transition-all font-medium"
                  >
                    <TableCell className="px-8 py-10">
                      <div className="flex items-center gap-3  font-semibold  text-gray-500/60 group-hover:text-secondary transition-colors text-lg">
                        #{rank.rank}
                      </div>
                    </TableCell>
                    <TableCell className="px-8 py-10">
                      <div className="font-semibold text-foreground tracking-tight text-lg    leading-none mb-1 group-hover:text-secondary transition-colors">
                        {rank.class}
                      </div>
                      <div className="text-[9px] font-semibold text-gray-500  ">
                        Verified Institutional Grade
                      </div>
                    </TableCell>
                    <TableCell className="px-8 py-10 text-center">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-muted/50 rounded-xl border border-border/50 group-hover:bg-white transition-all">
                        <FaUsers
                          className="text-gray-500 group-hover:text-secondary"
                          size={10}
                        />
                        <span className="text-[10px] font-semibold text-gray-500">
                          {rank.students} Subjects
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="px-8 py-10 text-center">
                      <div className="inline-flex items-center gap-1 text-xl font-semibold  text-emerald-600">
                        {rank.points}
                        <FaArrowUp size={10} className="mb-2" />
                      </div>
                    </TableCell>
                    <TableCell className="px-8 py-10 text-center">
                      <ListActionButtons
                        onView={() => console.log("Drill Down")}
                      />
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
      </AdminCard>
    </div>
  );
}
