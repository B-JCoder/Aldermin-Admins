"use client";

import React, { useState } from "react";
import { GlassCard } from "@/components/cards/GlassCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ListToolbar } from "@/components/common/ListToolbar";
import { ListPagination } from "@/components/common/ListPagination";
import { ListActionButtons } from "@/components/common/ListActionButtons";
import { FaMoneyCheckAlt } from "react-icons/fa";

interface FeeType {
  id: number;
  type: string;
  group: string;
  description: string;
}

interface FeeTypeListProps {
  feeTypeList: FeeType[];
  onDelete: (id: number) => void;
}

export function FeeTypeList({
  feeTypeList: initialFeeTypeList,
  onDelete,
}: FeeTypeListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const filteredFeeTypeList = initialFeeTypeList.filter(
    (f) =>
      f.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.group.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredFeeTypeList.length / pageSize);
  const paginatedFeeTypeList = filteredFeeTypeList.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="space-y-6 flex flex-col h-full">
      <ListToolbar
        searchPlaceHolder="Search fee types..."
        onSearch={setSearchTerm}
        showAddButton={false}
      />

      <GlassCard className="flex-1 flex flex-col p-0 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

        <div className="p-8 pb-4 relative z-10 border-b border-white/20">
          <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
            Authorized Fee Classification
          </h4>
        </div>

        <div className="flex-1 overflow-x-auto p-8 pt-0 relative z-10">
          <div className="rounded-xl border border-white/20 bg-white/40 overflow-hidden">
            <Table>
              <TableHeader className="bg-white/50">
                <TableRow>
                  <TableHead className="px-6 py-6 text-left w-20 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    SN
                  </TableHead>
                  <TableHead className="px-6 py-6 text-left text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Fee Narrative
                  </TableHead>
                  <TableHead className="px-6 py-6 text-left text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Category
                  </TableHead>
                  <TableHead className="px-6 py-6 text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedFeeTypeList.map((item, index) => (
                  <TableRow
                    key={item.id}
                    className="group hover:bg-white/60 transition-all font-medium"
                  >
                    <TableCell className="px-6 py-6 text-muted-foreground/50 font-mono text-xs italic">
                      {(currentPage - 1) * pageSize + index + 1}
                    </TableCell>
                    <TableCell className="px-6 py-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-secondary/10 rounded-lg text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                          <FaMoneyCheckAlt size={14} />
                        </div>
                        <div>
                          <div className="font-black text-foreground text-sm uppercase italic tracking-tight group-hover:text-secondary transition-colors">
                            {item.type}
                          </div>
                          <div className="text-[10px] font-bold text-muted-foreground truncate max-w-[200px] uppercase tracking-widest">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-6">
                      <span className="px-3 py-1 bg-secondary/5 text-secondary text-[9px] font-black rounded-full uppercase tracking-widest border border-secondary/10 shadow-sm">
                        {item.group}
                      </span>
                    </TableCell>
                    <TableCell className="px-6 py-6 text-center">
                      <ListActionButtons
                        onEdit={() => console.log("Edit")}
                        onDelete={() => onDelete(item.id)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
                {paginatedFeeTypeList.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={4}
                      className="h-40 text-center text-muted-foreground uppercase tracking-widest text-[10px] font-black"
                    >
                      No matching fee types found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>

        {filteredFeeTypeList.length > pageSize && (
          <div className="p-8 pt-0 relative z-10">
            <ListPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalRecords={filteredFeeTypeList.length}
              pageSize={pageSize}
            />
          </div>
        )}
      </GlassCard>
    </div>
  );
}
