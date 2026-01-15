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
import { Badge } from "@/components/ui/badge";
import { FaLayerGroup, FaEdit, FaTrash } from "react-icons/fa";

interface Category {
  id: number;
  name: string;
  grade: string;
  section: string;
}

interface CategoryListProps {
  categories: Category[];
}

export function CategoryList({ categories }: CategoryListProps) {
  return (
    <GlassCard className="p-8 pb-0 overflow-hidden relative">
      <div className="flex items-center justify-between mb-8 relative z-10">
        <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
          Classification Index
        </h4>
        <Badge
          variant="secondary"
          className="px-4 py-1.5 text-[10px] bg-secondary/10 text-secondary border-secondary/20 font-black rounded-full uppercase tracking-tighter shadow-none hover:bg-secondary/20"
        >
          {categories.length} Taxonomies Found
        </Badge>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/40">
        <Table>
          <TableHeader className="bg-white/50">
            <TableRow>
              <TableHead className="w-16 text-[10px] uppercase font-black text-muted-foreground">
                SN
              </TableHead>
              <TableHead className="text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                Category Name
              </TableHead>
              <TableHead className="text-center text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                Scope
              </TableHead>
              <TableHead className="text-center text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((c, index) => (
              <TableRow
                key={c.id}
                className="hover:bg-white/60 transition-colors group"
              >
                <TableCell className="font-mono text-xs text-muted-foreground italic">
                  {index + 1}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/50 border border-white/40 flex items-center justify-center text-secondary/50 group-hover:bg-white group-hover:text-secondary group-hover:shadow-sm transition-all">
                      <FaLayerGroup size={12} />
                    </div>
                    <span className="font-black text-foreground tracking-tight text-sm font-serif italic">
                      {c.name}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="inline-flex gap-2">
                    <Badge
                      variant="outline"
                      className="bg-white/50 text-muted-foreground"
                    >
                      G: {c.grade}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-white/50 text-muted-foreground"
                    >
                      S: {c.section}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-blue-500 hover:text-blue-600 hover:bg-blue-50/50"
                    >
                      <FaEdit size={14} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50/50"
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
    </GlassCard>
  );
}
