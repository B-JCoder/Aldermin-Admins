import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { GlassCard } from "@/components/cards/GlassCard";
import { Button } from "@/components/ui/button";
import { FaEdit, FaTrash } from "react-icons/fa";

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

export function AssignmentList({ assignments }: AssignmentListProps) {
  return (
    <GlassCard className="h-full relative overflow-hidden p-0">
      <div className="absolute top-0 right-0 w-64 h-64 bg-sidebar/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

      <div className="p-6 border-b border-white/20">
        <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
          Active Assignment Queue
        </h4>
      </div>

      <div className="p-6">
        <div className="rounded-lg border border-white/20 overflow-hidden bg-white/40">
          <Table>
            <TableHeader className="bg-white/50">
              <TableRow>
                <TableHead className="w-16 font-bold uppercase text-[10px] tracking-wider text-muted-foreground">
                  SN
                </TableHead>
                <TableHead className="font-bold uppercase text-[10px] tracking-wider text-muted-foreground">
                  Task Identity
                </TableHead>
                <TableHead className="text-center font-bold uppercase text-[10px] tracking-wider text-muted-foreground">
                  Deadline
                </TableHead>
                <TableHead className="text-center font-bold uppercase text-[10px] tracking-wider text-muted-foreground">
                  Submission
                </TableHead>
                <TableHead className="text-center font-bold uppercase text-[10px] tracking-wider text-muted-foreground">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assignments.map((a, index) => (
                <TableRow
                  key={a.id}
                  className="hover:bg-sidebar/5 transition-colors"
                >
                  <TableCell className="font-mono text-xs text-muted-foreground bg-transparent">
                    {index + 1}
                  </TableCell>
                  <TableCell className="bg-transparent">
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-foreground text-sm uppercase font-serif italic">
                        {a.title}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-sidebar/10 text-sidebar border border-sidebar/20">
                          {a.subject}
                        </span>
                        <span className="text-[10px] font-medium text-muted-foreground uppercase">
                          {a.class}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center bg-transparent">
                    <span className="font-mono text-xs font-bold text-muted-foreground">
                      {a.deadline}
                    </span>
                  </TableCell>
                  <TableCell className="text-center bg-transparent">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs font-bold">
                        {a.submitted}{" "}
                        <span className="text-muted-foreground">
                          / {a.total}
                        </span>
                      </span>
                      <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-sidebar"
                          style={{ width: `${(a.submitted / a.total) * 100}%` }}
                        />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center bg-transparent">
                    <div className="flex justify-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-blue-500 hover:text-blue-600 hover:bg-blue-50"
                      >
                        <FaEdit size={14} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
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
    </GlassCard>
  );
}
