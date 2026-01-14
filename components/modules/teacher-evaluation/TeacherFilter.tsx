"use client";

import React from "react";
import { GlassCard } from "@/components/cards/GlassCard";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaFilter, FaSearch } from "react-icons/fa";

export function TeacherFilter() {
  return (
    <GlassCard className="p-8">
      <div className="flex items-center gap-2 mb-8 uppercase tracking-[0.2em] font-black text-[10px] text-muted-foreground">
        <FaFilter className="text-secondary" />
        Metric Filtering
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-3">
          <Label className="block text-[10px] font-black text-muted-foreground uppercase ml-2">
            Department
          </Label>
          <Select>
            <SelectTrigger className="w-full bg-white/50 border-white/40 h-12 rounded-xl text-xs font-bold">
              <SelectValue placeholder="All Departments" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="math">Mathematics</SelectItem>
              <SelectItem value="science">Science</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-3">
          <Label className="block text-[10px] font-black text-muted-foreground uppercase ml-2">
            Performance Tier
          </Label>
          <Select>
            <SelectTrigger className="w-full bg-white/50 border-white/40 h-12 rounded-xl text-xs font-bold">
              <SelectValue placeholder="All Tiers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Tiers</SelectItem>
              <SelectItem value="top">Top Performers</SelectItem>
              <SelectItem value="improve">Needs Improvement</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-3">
          <Label className="block text-[10px] font-black text-transparent uppercase ml-2 select-none">
            Action
          </Label>
          <Button
            variant="secondary"
            className="w-full h-12 rounded-xl text-xs font-black uppercase tracking-[0.2em]"
          >
            <FaSearch className="mr-2" size={14} />
            Analyze Data
          </Button>
        </div>
      </div>
    </GlassCard>
  );
}
