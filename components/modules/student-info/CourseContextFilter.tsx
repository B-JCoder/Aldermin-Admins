"use client";

import React from "react";
import { GlassCard } from "@/components/cards/GlassCard";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaBook, FaSearch } from "react-icons/fa";

interface CourseContextFilterProps {
  attendanceDate: string;
  setAttendanceDate: (date: string) => void;
}

export function CourseContextFilter({
  attendanceDate,
  setAttendanceDate,
}: CourseContextFilterProps) {
  return (
    <GlassCard className="p-8 border border-white/20 bg-white/60">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-end">
        <div>
          <Label className="block text-[10px] font-black text-muted-foreground uppercase mb-3 ml-2">
            Academic Grade
          </Label>
          <Select>
            <SelectTrigger className="w-full bg-white/50 border-white/40 h-12 rounded-xl text-xs font-bold">
              <SelectValue placeholder="Class 10" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">Class 10</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="block text-[10px] font-black text-muted-foreground uppercase mb-3 ml-2">
            Sectional Unit
          </Label>
          <Select>
            <SelectTrigger className="w-full bg-white/50 border-white/40 h-12 rounded-xl text-xs font-bold">
              <SelectValue placeholder="Section A" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="A">Section A</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="relative">
          <Label className="block text-[10px] font-black text-muted-foreground uppercase mb-3 ml-2">
            Subject Discipline
          </Label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10 pointer-events-none">
              <FaBook size={14} />
            </div>
            <Select>
              <SelectTrigger className="w-full bg-white/50 border-white/40 h-12 rounded-xl text-xs font-bold pl-10">
                <SelectValue placeholder="Mathematics" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="math">Mathematics</SelectItem>
                <SelectItem value="phy">Theoretical Physics</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Label className="block text-[10px] font-black text-muted-foreground uppercase mb-3 ml-2">
            Lecture Date
          </Label>
          <Input
            type="date"
            value={attendanceDate}
            onChange={(e) => setAttendanceDate(e.target.value)}
            className="w-full bg-white/50 border-white/40 h-12 rounded-xl text-xs font-bold"
          />
        </div>
        <Button
          variant="secondary"
          className="w-full rounded-xl h-12 text-xs font-black uppercase tracking-[0.2em] shadow-lg"
        >
          <FaSearch className="mr-2" size={14} />
          Verify Roll
        </Button>
      </div>
    </GlassCard>
  );
}
