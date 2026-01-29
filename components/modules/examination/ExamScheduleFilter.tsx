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

export function ExamScheduleFilter() {
  return (
    <AdminCard className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-end">
        <div>
          <Label className="block text-[10px] font-semibold text-gray-500  mb-3 ml-2">
            Assessment Type
          </Label>
          <Select>
            <SelectTrigger className="w-full bg-white border-border/50 rounded-2xl p-4 text-xs font-semibold outline-none focus:ring-secondary/20 h-12">
              <SelectValue placeholder="Select Exam" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-border/50">
              <SelectItem value="finals2024">Annual Finals 2024</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="block text-[10px] font-semibold text-gray-500  mb-3 ml-2">
            Academic Grade
          </Label>
          <Select>
            <SelectTrigger className="w-full bg-white border-border/50 rounded-2xl p-4 text-xs font-semibold outline-none focus:ring-secondary/20 h-12">
              <SelectValue placeholder="Select Grade" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-border/50">
              <SelectItem value="class10">Class 10</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="block text-[10px] font-semibold text-gray-500  mb-3 ml-2">
            Sectional Unit
          </Label>
          <Select>
            <SelectTrigger className="w-full bg-white border-border/50 rounded-2xl p-4 text-xs font-semibold outline-none focus:ring-secondary/20 h-12">
              <SelectValue placeholder="Select Section" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-border/50">
              <SelectItem value="sectionA">Section A</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full bg-secondary text-white rounded-2xl py-6 text-xs font-semibold  tracking-[0.2em] hover:bg-secondary/90 active:translate-y-1 transition-all flex items-center justify-center gap-3 h-12 shadow-md">
          <FaSearch size={14} />
          Query Timetable
        </Button>
      </div>
    </AdminCard>
  );
}
