"use client";

import React from "react";
import { AdminCard } from "@/components/common/AdminCard";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaSearch, FaCalendarAlt } from "react-icons/fa";

export function PayrollConfig() {
  return (
    <AdminCard className="p-8 h-full bg-gradient-to-br from-white to-secondary/5">
      <h4 className="mb-6 text-xs font-semibold text-gray-400   leading-none flex items-center justify-between">
        Payroll Config
        <div className="h-1 w-12 bg-secondary/20 rounded-full"></div>
      </h4>

      <form className="space-y-4 flex-1">
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <Label className="block text-[10px] font-semibold text-gray-400   px-1">
              Role / Designation
            </Label>
            <Select>
              <SelectTrigger className="w-full rounded-2xl border-gray-200 bg-white p-4 text-xs font-bold focus:ring-2 focus:ring-secondary/20 outline-none transition-all shadow-sm h-12">
                <SelectValue placeholder="All Staff" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Staff</SelectItem>
                <SelectItem value="teaching">Teaching Staff</SelectItem>
                <SelectItem value="admin">Admin Staff</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="block text-[10px] font-semibold text-gray-400   px-1">
              Pay Period
            </Label>
            <div className="relative">
              <FaCalendarAlt
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 z-10"
                size={12}
              />
              <Input
                type="month"
                className="w-full rounded-2xl border-gray-200 bg-white p-4 pl-10 text-[10px] font-bold focus:ring-2 focus:ring-secondary/20 outline-none transition-all shadow-sm h-12"
              />
            </div>
          </div>
        </div>
        <div className="pt-4">
          <Button className="w-full relative overflow-hidden rounded-2xl bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-[10px] font-semibold  tracking-[0.2em] transition-all shadow-xl shadow-secondary/10">
            <div className="relative z-10 flex items-center justify-center gap-2">
              <FaSearch className="" />
              Retrieve Slips
            </div>
          </Button>
        </div>
      </form>
    </AdminCard>
  );
}
