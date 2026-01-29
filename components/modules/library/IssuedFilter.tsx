"use client";

import React from "react";
import { AdminCard } from "@/components/common/AdminCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FaBarcode, FaSearch, FaArrowRight } from "react-icons/fa";

export function IssuedFilter() {
  return (
    <AdminCard className="p-8 relative overflow-hidden bg-gradient-to-br from-white to-secondary/5">
      

      <form className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
        <div className="space-y-2">
          <Label className="text-[10px] font-semibold text-gray-500   px-1">
            Asset Allocation
          </Label>
          <div className="relative">
            <FaBarcode
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500/50"
              size={12}
            />
            <Select>
              <SelectTrigger className="w-full rounded-2xl border-border/50 bg-white pl-10 py-6 text-xs font-bold focus:ring-secondary/20">
                <SelectValue placeholder="All Assets" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-border/50">
                <SelectItem value="all">All Assets</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="md:col-span-2 space-y-2">
          <Label className="text-[10px] font-semibold text-gray-500   px-1">
            Member / Identifier Search
          </Label>
          <div className="relative">
            <FaSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500/50"
              size={12}
            />
            <Input
              type="text"
              className="w-full rounded-2xl border-border/50 bg-white pl-10 py-6 text-xs font-bold focus:ring-secondary/20  placeholder:text-gray-500/50 h-auto"
              placeholder="Enter Member ID or full name..."
            />
          </div>
        </div>

        <div className="flex items-end">
          <Button
            type="submit"
            className="w-full rounded-2xl bg-secondary text-white border-b-4 border-black/20 hover:bg-secondary/90 active:border-b-0 active:translate-y-1 transition-all h-[52px]  tracking-[0.2em] text-[10px] font-semibold shadow-xl"
          >
            Analyzed Disbursement
          </Button>
        </div>
      </form>
    </AdminCard>
  );
}
