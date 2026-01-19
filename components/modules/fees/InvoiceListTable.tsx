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
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";

import { ListToolbar } from "@/components/common/ListToolbar";
import { ListPagination } from "@/components/common/ListPagination";
import { ListActionButtons } from "@/components/common/ListActionButtons";

interface Invoice {
  id: number;
  admissionNo: string;
  studentName: string;
  amount: string;
  paid: string;
  dueDate: string;
  status: string;
}

interface InvoiceListTableProps {
  invoices: Invoice[];
}

export function InvoiceListTable({ invoices }: InvoiceListTableProps) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 5;

  const filteredInvoices = invoices.filter(
    (inv) =>
      inv.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inv.admissionNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredInvoices.length / pageSize);
  const paginatedInvoices = filteredInvoices.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="space-y-6 flex flex-col h-full">
      <ListToolbar
        searchPlaceHolder="Search invoices..."
        onSearch={setSearchTerm}
        showAddButton={false}
      />

      <GlassCard className="flex-1 flex flex-col p-0 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

        <div className="p-8 pb-4 relative z-10 border-b border-white/20">
          <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
            Fee Invoice Ledger
          </h4>
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
                    Admission No
                  </TableHead>
                  <TableHead className="px-6 py-6 text-left text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Student Details
                  </TableHead>
                  <TableHead className="px-6 py-6 text-right text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Amount
                  </TableHead>
                  <TableHead className="px-6 py-6 text-right text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Paid
                  </TableHead>
                  <TableHead className="px-6 py-6 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Due Date
                  </TableHead>
                  <TableHead className="px-6 py-6 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Status
                  </TableHead>
                  <TableHead className="px-6 py-6 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedInvoices.map((item, index) => (
                  <TableRow
                    key={item.id}
                    className="group hover:bg-white/60 transition-all font-medium"
                  >
                    <TableCell className="px-6 py-6 text-muted-foreground/50 font-mono text-xs italic">
                      {(currentPage - 1) * pageSize + index + 1}
                    </TableCell>
                    <TableCell className="px-6 py-6">
                      <Badge
                        variant="secondary"
                        className="px-2 py-1 bg-secondary/10 text-secondary border-none text-[9px] font-black rounded uppercase tracking-tighter"
                      >
                        {item.admissionNo}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-6 py-6">
                      <div className="font-black text-foreground tracking-tight text-sm font-serif italic uppercase group-hover:text-secondary transition-colors">
                        {item.studentName}
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-6 text-right font-black text-foreground tabular-nums text-sm">
                      ${item.amount}
                    </TableCell>
                    <TableCell className="px-6 py-6 text-right">
                      <span className="font-bold text-emerald-600 tabular-nums text-sm">
                        ${item.paid}
                      </span>
                    </TableCell>
                    <TableCell className="px-6 py-6 text-center">
                      <span className="text-muted-foreground font-medium text-xs font-mono">
                        {item.dueDate}
                      </span>
                    </TableCell>
                    <TableCell className="px-6 py-6 text-center">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border shadow-sm ${
                          item.status === "Paid"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                            : item.status === "Partial"
                            ? "bg-amber-50 text-amber-700 border-amber-100"
                            : "bg-rose-50 text-rose-700 border-rose-100"
                        }`}
                      >
                        {item.status}
                      </span>
                    </TableCell>
                    <TableCell className="px-6 py-6 text-center">
                      <ListActionButtons
                        onView={() => console.log("View Invoice")}
                        onEdit={() => console.log("Edit Invoice")}
                      />
                    </TableCell>
                  </TableRow>
                ))}
                {invoices.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={8}
                      className="h-32 text-center text-muted-foreground uppercase tracking-widest text-[10px] font-black"
                    >
                      No invoices found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>

        {filteredInvoices.length > pageSize && (
          <div className="p-8 pt-0 relative z-10">
            <ListPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalRecords={filteredInvoices.length}
              pageSize={pageSize}
            />
          </div>
        )}
      </GlassCard>
    </div>
  );
}
