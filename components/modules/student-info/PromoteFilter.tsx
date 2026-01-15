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
import { FaSearch } from "react-icons/fa";

export function PromoteFilter() {
  return (
    <GlassCard className="p-8 border border-white/20 bg-white/60">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-end">
        <div>
          <Label className="block text-[10px] font-black text-muted-foreground uppercase mb-3 ml-2">
            Academic Session
          </Label>
          <Select>
            <SelectTrigger className="w-full bg-white/50 border-white/40 h-12 rounded-xl text-xs font-bold">
              <SelectValue placeholder="2023 - 2024" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="23-24">2023 - 2024</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="block text-[10px] font-black text-muted-foreground uppercase mb-3 ml-2">
            Current Grade
          </Label>
          <Select>
            <SelectTrigger className="w-full bg-white/50 border-white/40 h-12 rounded-xl text-xs font-bold">
              <SelectValue placeholder="Class 9" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="9">Class 9</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="block text-[10px] font-black text-muted-foreground uppercase mb-3 ml-2">
            Sectional Unit
          </Label>
          <Select>
            <SelectTrigger className="w-full bg-white/50 border-white/40 h-12 rounded-xl text-xs font-bold">
              <SelectValue placeholder="All Sections" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sections</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button
          variant="default"
          className="w-full bg-secondary text-white rounded-xl h-12 text-xs font-black uppercase tracking-[0.2em] shadow-lg hover:bg-secondary/90"
        >
          <FaSearch className="mr-2" size={14} />
          Inspect Cohort
        </Button>
      </div>
    </GlassCard>
  );
}
