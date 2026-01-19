import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { GlassCard } from "@/components/cards/GlassCard";
import { ListToolbar } from "@/components/common/ListToolbar";
import { ListPagination } from "@/components/common/ListPagination";
import { ListActionButtons } from "@/components/common/ListActionButtons";

interface Assignment {
  id: number;
  title: string;
  class: string;
  subject: string;
  deadline: string;
  submitted: number;
  total: number;
}

interface AssignmentListProps {
  assignments: Assignment[];
}

export function AssignmentList({
  assignments: initialAssignments,
}: AssignmentListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const filteredAssignments = initialAssignments.filter(
    (a) =>
      a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredAssignments.length / pageSize);
  const paginatedAssignments = filteredAssignments.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="space-y-6 flex flex-col h-full">
      <ListToolbar
        searchPlaceHolder="Search assignments..."
        onSearch={setSearchTerm}
        showAddButton={false}
      />

      <GlassCard className="flex-1 flex flex-col">
        <div className="p-8 border-b border-white/20">
          <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
            Active Assignment Queue
          </h4>
        </div>

        <div className="flex-1 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-20">SN</TableHead>
                <TableHead>Assignment Detail</TableHead>
                <TableHead className="text-center">Deadline</TableHead>
                <TableHead className="text-center">Submission Status</TableHead>
                <TableHead className="text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedAssignments.map((a, index) => (
                <TableRow key={a.id} className="group">
                  <TableCell className="font-mono text-xs text-muted-foreground italic">
                    {(currentPage - 1) * pageSize + index + 1}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <span className="font-black text-foreground text-sm uppercase italic tracking-tight">
                        {a.title}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-secondary/10 text-secondary border border-secondary/20">
                          {a.subject}
                        </span>
                        <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">
                          {a.class}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <span className="font-mono text-xs font-bold text-muted-foreground">
                      {a.deadline}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-foreground">
                          {a.submitted}
                        </span>
                        <span className="text-[10px] font-bold text-muted-foreground uppercase">
                          of {a.total}
                        </span>
                      </div>
                      <div className="w-24 h-1.5 bg-sidebar/5 rounded-full overflow-hidden border border-white/20">
                        <div
                          className="h-full bg-secondary shadow-[0_0_10px_rgba(0,109,95,0.3)] transition-all duration-500"
                          style={{ width: `${(a.submitted / a.total) * 100}%` }}
                        />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <ListActionButtons
                      onEdit={() => console.log("Edit")}
                      onDelete={() => console.log("Delete")}
                    />
                  </TableCell>
                </TableRow>
              ))}
              {paginatedAssignments.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="h-40 text-center text-muted-foreground uppercase tracking-widest text-[10px] font-black"
                  >
                    No matching assignments found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {filteredAssignments.length > pageSize && (
          <ListPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            totalRecords={filteredAssignments.length}
            pageSize={pageSize}
          />
        )}
      </GlassCard>
    </div>
  );
}
