"use client";

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

export interface LeaveType {
  id: number;
  name: string;
  code: string;
  description: string;
}

interface LeaveTypeListProps {
  types: LeaveType[];
}

export function LeaveTypeList({ types }: LeaveTypeListProps) {
  return (
    <GlassCard className="h-full overflow-hidden p-0 relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

      <div className="p-8 pb-4 flex items-center justify-between relative">
        <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
          Active Types
        </h4>
      </div>

      <div className="p-6 pt-0">
        <div className="rounded-xl border border-white/20 overflow-hidden bg-white/40">
          <Table>
            <TableHeader className="bg-white/50">
              <TableRow>
                <TableHead className="px-6 py-4 text-left w-16 text-[10px] uppercase font-black text-muted-foreground">
                  SN
                </TableHead>
                <TableHead className="px-6 py-4 text-left text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                  Classification
                </TableHead>
                <TableHead className="px-6 py-4 text-center text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                  Code
                </TableHead>
                <TableHead className="px-6 py-4 text-center text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {types.map((t, index) => (
                <TableRow
                  key={t.id}
                  className="group hover:bg-white/60 transition-colors"
                >
                  <TableCell className="px-6 py-4 text-muted-foreground/50 font-mono text-xs italic">
                    {index + 1}
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <div className="font-black text-foreground tracking-tight text-sm font-serif italic uppercase leading-none mb-1">
                      {t.name}
                    </div>
                    <div className="text-[10px] font-bold text-muted-foreground">
                      {t.description}
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4 text-center text-primary font-mono font-bold text-xs">
                    {t.code}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-1">
                      <Button
                        variant="secondary"
                        size="icon"
                        className="h-8 w-8 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary hover:text-white"
                      >
                        <FaEdit size={12} />
                      </Button>
                      <Button
                        variant="destructive"
                        size="icon"
                        className="h-8 w-8 rounded-lg bg-red-100 text-red-600 hover:bg-red-600 hover:text-white shadow-none"
                      >
                        <FaTrash size={12} />
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
