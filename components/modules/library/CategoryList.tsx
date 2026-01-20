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
import { FaLayerGroup, FaEdit, FaTrash } from "react-icons/fa";

export interface Category {
  id: number;
  title: string;
}

interface CategoryListProps {
  categories: Category[];
}

export function CategoryList({ categories }: CategoryListProps) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 5;

  const totalPages = Math.ceil(categories.length / pageSize);
  const paginatedCategories = categories.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <GlassCard className="flex-1 flex flex-col p-0 overflow-hidden relative h-full">
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

      <div className="p-8 pb-4 relative z-10 border-b border-white/20">
        <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
          Authorized Category Registry
        </h4>
      </div>

      <div className="flex-1 overflow-x-auto p-8 pt-0 relative z-10">
        <div className="rounded-xl border border-white/20 bg-white/40 overflow-hidden">
          <Table>
            <TableHeader className="bg-white/50">
              <TableRow>
                <TableHead className="px-6 py-6 text-left w-20 text-[10px] uppercase font-black text-muted-foreground">
                  SN
                </TableHead>
                <TableHead className="px-6 py-6 text-left text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                  Authorized Category
                </TableHead>
                <TableHead className="px-6 py-6 text-center text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedCategories.map((c, index) => (
                <TableRow
                  key={c.id}
                  className="hover:bg-secondary/5 transition-all group"
                >
                  <TableCell className="px-6 py-8 text-muted-foreground/50 font-mono text-xs italic">
                    {(currentPage - 1) * pageSize + index + 1}
                  </TableCell>
                  <TableCell className="px-6 py-8">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary ring-4 ring-secondary/5 group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-sm relative overflow-hidden">
                        <FaLayerGroup size={12} />
                      </div>
                      <div className="font-black text-foreground tracking-tight text-base font-serif italic uppercase leading-none">
                        {c.title}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-8 text-center text-[10px] font-black text-secondary uppercase tracking-widest">
                    <div className="flex justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 p-0 rounded-xl bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-all shadow-sm"
                      >
                        <FaEdit size={14} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 p-0 rounded-xl bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white transition-all shadow-sm"
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

      {categories.length > pageSize && (
        <div className="p-8 pt-0 relative z-10">
          <ListPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            totalRecords={categories.length}
            pageSize={pageSize}
          />
        </div>
      )}
    </GlassCard>
  );
}
