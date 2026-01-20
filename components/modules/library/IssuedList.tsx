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
  FaUserTag,
  FaCalendarAlt,
  FaCheckCircle,
  FaExclamationCircle,
  FaHistory,
} from "react-icons/fa";
import { cn } from "@/lib/utils";

export interface IssuedBook {
  id: number;
  title: string;
  bookNo: string;
  isbn: string;
  member: string;
  author: string;
  subject: string;
  issueDate: string;
  returnDate: string;
  status: string;
}

interface IssuedListProps {
  issuedBooks: IssuedBook[];
}

export function IssuedList({ issuedBooks }: IssuedListProps) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 5;

  const totalPages = Math.ceil(issuedBooks.length / pageSize);
  const paginatedList = issuedBooks.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <GlassCard className="flex-1 flex flex-col p-0 overflow-hidden relative">
      <div className="p-8 border-b border-white/20 flex items-center justify-between bg-secondary/5">
        <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
          Issued Inventory Registry
        </h4>
      </div>

      <div className="overflow-x-auto p-0">
        <Table>
          <TableHeader className="bg-secondary/5">
            <TableRow>
              <TableHead className="px-6 py-6 text-left w-16 text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                SN
              </TableHead>
              <TableHead className="px-6 py-6 text-left text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                Industrial Asset
              </TableHead>
              <TableHead className="px-6 py-6 text-left text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                Allocation Holder
              </TableHead>
              <TableHead className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                Temporal Nodes
              </TableHead>
              <TableHead className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                Status
              </TableHead>
              <TableHead className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedList.map((i, index) => (
              <TableRow
                key={i.id}
                className="hover:bg-secondary/5 transition-all group"
              >
                <TableCell className="px-6 py-10 text-muted-foreground/50 font-mono text-xs italic">
                  {(currentPage - 1) * pageSize + index + 1}
                </TableCell>
                <TableCell className="px-6 py-10">
                  <div>
                    <div className="font-black text-foreground tracking-tight text-base font-serif italic uppercase leading-none mb-1 group-hover:text-secondary transition-colors">
                      {i.title}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[8px] font-black bg-foreground text-background px-2 py-0.5 rounded uppercase tracking-widest">
                        {i.bookNo}
                      </span>
                      <span className="text-[9px] font-black text-muted-foreground uppercase tracking-widest leading-none">
                        {i.author}
                      </span>
                    </div>
                    <div className="text-[9px] font-black text-secondary uppercase tracking-widest mt-2 flex items-center gap-1.5 opacity-60 italic">
                      {i.subject}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-6 py-10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-secondary/10 rounded-lg text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                      <FaUserTag size={12} />
                    </div>
                    <div className="font-black text-foreground tracking-tight text-sm uppercase leading-none">
                      {i.member}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-6 py-10">
                  <div className="space-y-1.5 flex flex-col items-center">
                    <div className="flex items-center gap-2 text-[9px] text-muted-foreground">
                      <FaCalendarAlt size={10} className="text-secondary/70" />
                      <span className="font-black tracking-tighter w-12 uppercase">
                        Issued:
                      </span>
                      <span className="font-mono font-bold text-muted-foreground">
                        {i.issueDate}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[9px] text-muted-foreground">
                      <FaCalendarAlt
                        size={10}
                        className={cn(
                          i.status === "Overdue"
                            ? "text-rose-400"
                            : "text-secondary/70"
                        )}
                      />
                      <span className="font-black tracking-tighter w-12 uppercase">
                        Return:
                      </span>
                      <span
                        className={cn(
                          "font-mono font-bold",
                          i.status === "Overdue"
                            ? "text-rose-600"
                            : "text-muted-foreground"
                        )}
                      >
                        {i.returnDate}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-6 py-10 text-center">
                  <span
                    className={cn(
                      "inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-sm ring-1 ring-inset",
                      i.status === "Active"
                        ? "bg-secondary/5 text-secondary ring-secondary/20"
                        : "bg-rose-50 text-rose-700 ring-rose-100 animate-pulse"
                    )}
                  >
                    {i.status === "Active" ? (
                      <FaCheckCircle />
                    ) : (
                      <FaExclamationCircle />
                    )}
                    {i.status}
                  </span>
                </TableCell>
                <TableCell className="px-6 py-10 text-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="p-2.5 bg-secondary/5 text-muted-foreground rounded-xl hover:bg-secondary hover:text-white transition-all border border-secondary/10 shadow-sm h-auto w-auto group/btn"
                  >
                    <FaHistory
                      size={12}
                      className="group-hover/btn:rotate-[-45deg] transition-transform"
                    />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {issuedBooks.length > pageSize && (
        <div className="p-8 pt-0 relative z-10">
          <ListPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            totalRecords={issuedBooks.length}
            pageSize={pageSize}
          />
        </div>
      )}
    </GlassCard>
  );
}
