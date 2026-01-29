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

      <AdminCard className="flex-1 flex flex-col p-0 overflow-hidden relative">
        

        <div className="p-8 pb-4 relative z-10 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-secondary/10 rounded-xl">
              <FaForward className="text-secondary" size={20} />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground  tracking-tight leading-none">
                Previous Session Balance Transfer
              </h4>
              <p className="text-[10px] font-bold text-gray-500 mt-1  ">
                Adjust unpaid dues from previous academic cycle
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-x-auto p-8 pt-0 relative z-10">
          <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
            <Table>
              <TableHeader className="bg-white">
                <TableRow>
                  <TableHead className="px-6 py-6 text-left w-16 text-[10px] font-semibold   text-gray-500">
                    SN
                  </TableHead>
                  <TableHead className="px-6 py-6 text-left text-[10px] font-semibold   text-gray-500">
                    Student Identity
                  </TableHead>
                  <TableHead className="px-6 py-6 text-center text-[10px] font-semibold   text-gray-500">
                    Prev. Balance
                  </TableHead>
                  <TableHead className="px-6 py-6 text-center text-[10px] font-semibold   text-gray-500">
                    Carry Forward
                  </TableHead>
                  <TableHead className="px-6 py-6 text-center text-[10px] font-semibold   text-gray-500">
                    Action Status
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedList.map((item, index) => (
                  <TableRow
                    key={item.id}
                    className="group hover:bg-white transition-all font-medium"
                  >
                    <TableCell className="px-6 py-6 text-gray-500/50  text-xs ">
                      {(currentPage - 1) * pageSize + index + 1}
                    </TableCell>
                    <TableCell className="px-6 py-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white rounded-full text-gray-500 border border-border/50">
                          <FaUserTag size={14} />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground tracking-tight text-sm    group-hover:text-secondary transition-colors">
                            {item.name}
                          </div>
                          <div className="text-[9px]  font-semibold text-gray-500 ">
                            ADM: {item.admissionNo}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-6 text-center tabular-nums font-semibold text-rose-500 text-sm">
                      ${item.prevBalance}
                    </TableCell>
                    <TableCell className="px-6 py-6 text-center">
                      <div className="flex justify-center">
                        <Input
                          type="number"
                          defaultValue={item.carryAmount}
                          className="w-24 h-10 rounded-xl border-secondary/20 bg-secondary/5 text-center text-sm font-semibold focus:ring-secondary/20 text-secondary shadow-inner"
                        />
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-6 text-center">
                      <div className="flex justify-center">
                        <span
                          className={`px-4 py-1.5 rounded-full text-[9px] font-semibold   border shadow-sm ${
                            item.status === "Forwarded"
                              ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                              : "bg-muted/50 text-gray-500 border-border/50"
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
                      className="h-32 text-center text-gray-500   text-[10px] font-semibold"
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
      </AdminCard>
    </div>
  );
}
