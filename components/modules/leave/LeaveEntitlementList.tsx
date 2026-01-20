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
import { Input } from "@/components/ui/input";
import { FaEdit, FaTrash, FaSearch } from "react-icons/fa";

export interface LeaveEntitlement {
  id: number;
  role: string;
  leaveType: string;
  days: number;
}

interface LeaveEntitlementListProps {
  entitlements: LeaveEntitlement[];
}

export function LeaveEntitlementList({
  entitlements,
}: LeaveEntitlementListProps) {
  return (
    <GlassCard className="h-full overflow-hidden p-0 relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

      <div className="p-8 pb-4 flex items-center justify-between relative">
        <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
          Entitlement Matrix
        </h4>
        <div className="relative">
          <FaSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/50"
            size={12}
          />
          <Input
            type="text"
            placeholder="Search Roles..."
            className="pl-10 pr-4 h-9 rounded-lg bg-white/50 border-white/40 text-[10px] font-bold focus:bg-white w-48 transition-all"
          />
        </div>
      </div>

      <div className="p-6 pt-0">
        <div className="rounded-xl border border-white/20 overflow-hidden bg-white/40">
          <Table>
            <TableHeader className="bg-white/50">
              <TableRow>
                <TableHead className="px-6 py-4 text-left text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                  Role
                </TableHead>
                <TableHead className="px-6 py-4 text-center text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                  Leave Type
                </TableHead>
                <TableHead className="px-6 py-4 text-center text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                  Quota (Days)
                </TableHead>
                <TableHead className="px-6 py-4 text-center text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {entitlements.map((e) => (
                <TableRow
                  key={e.id}
                  className="group hover:bg-white/60 transition-colors"
                >
                  <TableCell className="px-6 py-4">
                    <div className="font-black text-foreground tracking-tight text-sm font-serif italic uppercase leading-none mb-1">
                      {e.role}
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4 text-center text-muted-foreground font-bold text-xs">
                    {e.leaveType}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-center">
                    <div className="text-[10px] font-black uppercase text-foreground font-mono">
                      {e.days}
                    </div>
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
