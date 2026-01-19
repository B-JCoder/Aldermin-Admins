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
import { Input } from "@/components/ui/input";
import { FaForward, FaUserTag } from "react-icons/fa";

import { ListToolbar } from "@/components/common/ListToolbar";
import { ListPagination } from "@/components/common/ListPagination";

interface CarryForwardItem {
  id: number;
  name: string;
  admissionNo: string;
  prevBalance: string;
  carryAmount: string;
  status: string;
}

interface CarryForwardListTableProps {
  list: CarryForwardItem[];
}

export function CarryForwardListTable({ list }: CarryForwardListTableProps) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 5;

  const filteredList = list.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.admissionNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredList.length / pageSize);
  const paginatedList = filteredList.slice(
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
          <div className="flex items-center gap-3">
            <div className="p-2 bg-secondary/10 rounded-xl">
              <FaForward className="text-secondary" size={20} />
            </div>
            <div>
              <h4 className="text-lg font-black text-foreground uppercase tracking-tight leading-none">
                Previous Session Balance Transfer
              </h4>
              <p className="text-[10px] font-bold text-muted-foreground mt-1 uppercase tracking-widest">
                Adjust unpaid dues from previous academic cycle
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-x-auto p-8 pt-0 relative z-10">
          <div className="rounded-xl border border-white/20 bg-white/40 overflow-hidden">
            <Table>
              <TableHeader className="bg-white/50">
                <TableRow>
                  <TableHead className="px-6 py-6 text-left w-16 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    SN
                  </TableHead>
                  <TableHead className="px-6 py-6 text-left text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Student Identity
                  </TableHead>
                  <TableHead className="px-6 py-6 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Prev. Balance
                  </TableHead>
                  <TableHead className="px-6 py-6 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Carry Forward
                  </TableHead>
                  <TableHead className="px-6 py-6 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Action Status
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedList.map((item, index) => (
                  <TableRow
                    key={item.id}
                    className="group hover:bg-white/60 transition-all font-medium"
                  >
                    <TableCell className="px-6 py-6 text-muted-foreground/50 font-mono text-xs italic">
                      {(currentPage - 1) * pageSize + index + 1}
                    </TableCell>
                    <TableCell className="px-6 py-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white rounded-full text-muted-foreground border border-border/50">
                          <FaUserTag size={14} />
                        </div>
                        <div>
                          <div className="font-black text-foreground tracking-tight text-sm font-serif italic uppercase group-hover:text-secondary transition-colors">
                            {item.name}
                          </div>
                          <div className="text-[9px] uppercase font-black text-muted-foreground tracking-widest">
                            ADM: {item.admissionNo}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-6 text-center tabular-nums font-black text-rose-500 text-sm">
                      ${item.prevBalance}
                    </TableCell>
                    <TableCell className="px-6 py-6 text-center">
                      <div className="flex justify-center">
                        <Input
                          type="number"
                          defaultValue={item.carryAmount}
                          className="w-24 h-10 rounded-xl border-secondary/20 bg-secondary/5 text-center text-sm font-black focus:ring-secondary/20 text-secondary shadow-inner"
                        />
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-6 text-center">
                      <div className="flex justify-center">
                        <span
                          className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border shadow-sm ${
                            item.status === "Forwarded"
                              ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                              : "bg-muted/50 text-muted-foreground border-border/50"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {list.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="h-32 text-center text-muted-foreground uppercase tracking-widest text-[10px] font-black"
                    >
                      No overdue balances found for selection.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>

        {filteredList.length > pageSize && (
          <div className="p-8 pt-0 relative z-10">
            <ListPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalRecords={filteredList.length}
              pageSize={pageSize}
            />
          </div>
        )}
      </GlassCard>
    </div>
  );
}
