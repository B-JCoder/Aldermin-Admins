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
import { FaFilter, FaSearch } from "react-icons/fa";

export function StudentListFilter() {
  return (
    <GlassCard className="p-8 border border-white/20 bg-white/60">
      <div className="flex items-center gap-2 mb-8 uppercase tracking-[0.2em] font-black text-[10px] text-muted-foreground">
        <FaFilter size={10} className="text-secondary" />
        Precision Search
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Label className="block text-[10px] font-black text-muted-foreground uppercase mb-3 ml-2">
            Session Year
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
            Academic Class
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
        <div>
          <Label className="block text-[10px] font-black text-transparent uppercase mb-3 ml-2 select-none">
            Action
          </Label>
          <Button
            variant="secondary"
            className="w-full h-12 rounded-xl text-xs font-black uppercase tracking-[0.2em] shadow-lg"
          >
            <FaSearch className="mr-2" size={14} />
            Query Database
          </Button>
        </div>
      </div>
    </GlassCard>
  );
}
