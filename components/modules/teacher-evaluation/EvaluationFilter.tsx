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

export function EvaluationFilter() {
  return (
    <GlassCard className="p-8">
      <div className="flex items-center gap-2 mb-8 uppercase tracking-[0.2em] font-black text-[10px] text-muted-foreground">
        <FaFilter className="text-secondary" />
        Report Filtering
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <Label className="block text-[10px] font-black text-muted-foreground uppercase ml-2">
            Faculty Member
          </Label>
          <Select>
            <SelectTrigger className="w-full bg-white/50 border-white/40 h-12 rounded-xl text-xs font-bold">
              <SelectValue placeholder="All Faculty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Faculty</SelectItem>
              <SelectItem value="silas">Prof. Silas Vance</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-3">
          <Label className="block text-[10px] font-black text-muted-foreground uppercase ml-2">
            Academic Grade
          </Label>
          <Select>
            <SelectTrigger className="w-full bg-white/50 border-white/40 h-12 rounded-xl text-xs font-bold">
              <SelectValue placeholder="All Grades" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Grades</SelectItem>
              <SelectItem value="10">Class 10</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-3">
          <Label className="block text-[10px] font-black text-muted-foreground uppercase ml-2">
            Rating Level
          </Label>
          <Select>
            <SelectTrigger className="w-full bg-white/50 border-white/40 h-12 rounded-xl text-xs font-bold">
              <SelectValue placeholder="Any Rating" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any Rating</SelectItem>
              <SelectItem value="5">5 Stars</SelectItem>
              <SelectItem value="4">4 Stars</SelectItem>
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
            Filter Reports
          </Button>
        </div>
      </div>
    </GlassCard>
  );
}
