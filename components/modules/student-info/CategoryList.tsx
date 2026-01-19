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
import { Badge } from "@/components/ui/badge";
import { FaLayerGroup } from "react-icons/fa";

interface Category {
  id: number;
  name: string;
  grade: string;
  section: string;
}

interface CategoryListProps {
  categories: Category[];
}

export function CategoryList({
  categories: initialCategories,
}: CategoryListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const filteredCategories = initialCategories.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCategories.length / pageSize);
  const paginatedCategories = filteredCategories.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="space-y-6 flex flex-col h-full">
      <ListToolbar
        searchPlaceHolder="Search categories..."
        onSearch={setSearchTerm}
        showAddButton={false}
      />

      <GlassCard className="flex-1 flex flex-col">
        <div className="p-8 border-b border-white/20">
          <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
            Authorized Classifications
          </h4>
        </div>

        <div className="flex-1 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-20">SN</TableHead>
                <TableHead>Category Profile</TableHead>
                <TableHead className="text-center">Scope</TableHead>
                <TableHead className="text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedCategories.map((c, index) => (
                <TableRow key={c.id} className="group">
                  <TableCell className="font-mono text-xs text-muted-foreground italic">
                    {(currentPage - 1) * pageSize + index + 1}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                        <FaLayerGroup size={12} />
                      </div>
                      <span className="font-black text-foreground text-sm uppercase italic tracking-tight">
                        {c.name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="inline-flex gap-2">
                      <Badge
                        variant="outline"
                        className="bg-white/50 text-[9px] font-bold border-white/40 uppercase tracking-tighter"
                      >
                        G: {c.grade}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="bg-white/50 text-[9px] font-bold border-white/40 uppercase tracking-tighter"
                      >
                        S: {c.section}
                      </Badge>
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
              {paginatedCategories.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="h-40 text-center text-muted-foreground uppercase tracking-widest text-[10px] font-black"
                  >
                    No matching categories found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {filteredCategories.length > pageSize && (
          <ListPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            totalRecords={filteredCategories.length}
            pageSize={pageSize}
          />
        )}
      </GlassCard>
    </div>
  );
}
