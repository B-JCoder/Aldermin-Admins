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
import { FaCalendarAlt, FaLayerGroup, FaUsers, FaSearch } from "react-icons/fa";

export function AssignIncidentFilter() {
  return (
    <GlassCard className="p-8 relative overflow-hidden bg-gradient-to-br from-white to-secondary/5">
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

      <form className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
        <div className="space-y-2">
          <Label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">
            Academic Cycle
          </Label>
          <div className="relative">
            <FaCalendarAlt
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/50"
              size={12}
            />
            <Select>
              <SelectTrigger className="w-full rounded-2xl border-border/50 bg-white/50 pl-10 py-6 text-xs font-bold focus:ring-secondary/20">
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-border/50">
                <SelectItem value="2023-2024">2023-2024</SelectItem>
                <SelectItem value="2024-2025">2024-2025</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">
            Target Grade
          </Label>
          <div className="relative">
            <FaLayerGroup
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/50"
              size={12}
            />
            <Select>
              <SelectTrigger className="w-full rounded-2xl border-border/50 bg-white/50 pl-10 py-6 text-xs font-bold focus:ring-secondary/20">
                <SelectValue placeholder="Select Grade" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-border/50">
                <SelectItem value="grade-10">Grade 10</SelectItem>
                <SelectItem value="grade-11">Grade 11</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">
            Sectional Unit
          </Label>
          <div className="relative">
            <FaUsers
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/50"
              size={12}
            />
            <Select>
              <SelectTrigger className="w-full rounded-2xl border-border/50 bg-white/50 pl-10 py-6 text-xs font-bold focus:ring-secondary/20">
                <SelectValue placeholder="Select Section" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-border/50">
                <SelectItem value="alpha">Alpha</SelectItem>
                <SelectItem value="beta">Beta</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex items-end">
          <Button
            type="submit"
            className="w-full rounded-2xl bg-secondary text-white border-b-4 border-black/20 hover:bg-secondary/90 active:border-b-0 active:translate-y-1 transition-all h-[50px] uppercase tracking-[0.2em] text-[10px] font-black shadow-xl"
          >
            <div className="flex items-center justify-center gap-2 text-white">
              <FaSearch className="italic" />
              Query Subjects
            </div>
          </Button>
        </div>
      </form>
    </GlassCard>
  );
}
