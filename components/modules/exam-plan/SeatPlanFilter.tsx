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
import { FaSearch } from "react-icons/fa";

export function SeatPlanFilter() {
  return (
    <AdminCard className="p-8">
      <h4 className="mb-4 text-xs font-semibold text-gray-500   leading-none">
        Logistics Filter
      </h4>
      <form className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
        <div className="md:col-span-3">
          <Label className="block text-xs font-semibold text-gray-500   mb-2 px-1">
            Examination Session <span className="text-rose-500">*</span>
          </Label>
          <Select>
            <SelectTrigger className="w-full rounded-2xl border-border/50 bg-secondary/5 h-12 text-xs font-bold focus:ring-secondary/20">
              <SelectValue placeholder="Select Exam" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-border/50">
              <SelectItem value="midt">Mid-Term 2023</SelectItem>
              <SelectItem value="fint">Final-Term 2023</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="block text-xs font-semibold text-gray-500   mb-2 px-1">
            Class <span className="text-rose-500">*</span>
          </Label>
          <Select>
            <SelectTrigger className="w-full rounded-2xl border-border/50 bg-secondary/5 h-12 text-xs font-bold focus:ring-secondary/20">
              <SelectValue placeholder="Select Class" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-border/50">
              <SelectItem value="9">Class 9</SelectItem>
              <SelectItem value="10">Class 10</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="block text-xs font-semibold text-gray-500   mb-2 px-1">
            Section <span className="text-rose-500">*</span>
          </Label>
          <Select>
            <SelectTrigger className="w-full rounded-2xl border-border/50 bg-secondary/5 h-12 text-xs font-bold focus:ring-secondary/20">
              <SelectValue placeholder="Select Section" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-border/50">
              <SelectItem value="A">Section A</SelectItem>
              <SelectItem value="B">Section B</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex justify-end">
          <Button className="flex items-center gap-2 rounded-2xl bg-secondary text-white px-8 py-6 text-xs font-semibold  tracking-[0.2em] transition-all hover:bg-secondary/90 active:scale-[0.98] shadow-lg h-auto">
            <FaSearch size={14} />
            Filter Records
          </Button>
        </div>
      </form>
    </AdminCard>
  );
}
