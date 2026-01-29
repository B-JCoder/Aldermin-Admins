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
import { AdminCard } from "@/components/common/AdminCard";
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
    <AdminCard className="h-full overflow-hidden p-0 relative">
      

      <div className="p-8 pb-4 flex items-center justify-between relative">
        <h4 className="text-xs font-semibold text-gray-500   leading-none">
          Entitlement Matrix
        </h4>
        <div className="relative">
          <FaSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500/50"
            size={12}
          />
          <Input
            type="text"
            placeholder="Search Roles..."
            className="pl-10 pr-4 h-9 rounded-lg bg-white border-gray-200 text-[10px] font-bold focus:bg-white w-48 transition-all"
          />
        </div>
      </div>

      <div className="p-6 pt-0">
        <div className="rounded-xl border border-gray-200 overflow-hidden bg-white">
          <Table>
            <TableHeader className="bg-white">
              <TableRow>
                <TableHead className="px-6 py-4 text-left text-[10px]  font-semibold  text-gray-500">
                  Role
                </TableHead>
                <TableHead className="px-6 py-4 text-center text-[10px]  font-semibold  text-gray-500">
                  Leave Type
                </TableHead>
                <TableHead className="px-6 py-4 text-center text-[10px]  font-semibold  text-gray-500">
                  Quota (Days)
                </TableHead>
                <TableHead className="px-6 py-4 text-center text-[10px]  font-semibold  text-gray-500">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {entitlements.map((e) => (
                <TableRow
                  key={e.id}
                  className="group hover:bg-white transition-colors"
                >
                  <TableCell className="px-6 py-4">
                    <div className="font-semibold text-foreground tracking-tight text-sm    leading-none mb-1">
                      {e.role}
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4 text-center text-gray-500 font-bold text-xs">
                    {e.leaveType}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-center">
                    <div className="text-[10px] font-semibold  text-foreground ">
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
    </AdminCard>
  );
}
