"use client";

import React from "react";
import { GlassCard } from "@/components/cards/GlassCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { FaFileAlt, FaSearch } from "react-icons/fa";

export function ExamAttendanceFilter() {
  return (
    <GlassCard className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-end">
        <div>
          <Label className="block text-[10px] font-black text-muted-foreground uppercase mb-3 ml-2">
            Active Exam
          </Label>
          <Select>
            <SelectTrigger className="w-full bg-white/50 border-border/50 rounded-2xl p-4 text-xs font-black outline-none focus:ring-secondary/20 h-12">
              <SelectValue placeholder="Select Exam" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-border/50">
              <SelectItem value="finals2024">Finals - Year 2024</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="block text-[10px] font-black text-muted-foreground uppercase mb-3 ml-2">
            Grade
          </Label>
          <Select>
            <SelectTrigger className="w-full bg-white/50 border-border/50 rounded-2xl p-4 text-xs font-black outline-none focus:ring-secondary/20 h-12">
              <SelectValue placeholder="Select Grade" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-border/50">
              <SelectItem value="class10">Class 10</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="block text-[10px] font-black text-muted-foreground uppercase mb-3 ml-2">
            Section
          </Label>
          <Select>
            <SelectTrigger className="w-full bg-white/50 border-border/50 rounded-2xl p-4 text-xs font-black outline-none focus:ring-secondary/20 h-12">
              <SelectValue placeholder="Select Section" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-border/50">
              <SelectItem value="sectionA">Section A</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="relative">
          <Label className="block text-[10px] font-black text-muted-foreground uppercase mb-3 ml-2">
            Subject
          </Label>
          <div className="relative">
            <FaFileAlt
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/50"
              size={12}
            />
            <Select>
              <SelectTrigger className="w-full bg-white/50 border-border/50 rounded-2xl p-4 pl-10 text-xs font-black outline-none focus:ring-secondary/20 h-12">
                <SelectValue placeholder="Select Subject" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-border/50">
                <SelectItem value="physics">Theoretical Physics</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button className="w-full bg-secondary text-white rounded-2xl py-6 text-xs font-black uppercase tracking-[0.2em] hover:bg-secondary/90 active:translate-y-1 transition-all flex items-center justify-center gap-3 h-12 shadow-md">
          <FaSearch size={14} />
          Validate
        </Button>
      </div>
    </GlassCard>
  );
}
