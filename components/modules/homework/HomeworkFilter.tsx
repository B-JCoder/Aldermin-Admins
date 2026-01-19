"use client";

import React from "react";
import { GlassCard } from "@/components/cards/GlassCard";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaSearch, FaFilter, FaUserGraduate } from "react-icons/fa";

export function HomeworkFilter() {
  return (
    <GlassCard className="p-8 bg-gradient-to-br from-white/60 to-sidebar/5">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
          Assignment Filters
          <div className="h-1 w-12 bg-sidebar/20 rounded-full"></div>
        </h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="space-y-2">
          <Label className="uppercase text-[10px] tracking-widest text-muted-foreground font-bold">
            Academic Tier
          </Label>
          <div className="relative">
            <FaUserGraduate
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10"
              size={14}
            />
            <Select>
              <SelectTrigger className="pl-10 bg-white/50 backdrop-blur-sm border-white/40 focus:bg-white transition-all py-6">
                <SelectValue placeholder="Grade 10" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">Grade 10</SelectItem>
                <SelectItem value="11">Grade 11</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="uppercase text-[10px] tracking-widest text-muted-foreground font-bold">
            Unit Assignment
          </Label>
          <div className="relative">
            <FaFilter
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10"
              size={14}
            />
            <Select>
              <SelectTrigger className="pl-10 bg-white/50 backdrop-blur-sm border-white/40 focus:bg-white transition-all py-6">
                <SelectValue placeholder="Alpha" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Alpha">Alpha</SelectItem>
                <SelectItem value="Beta">Beta</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="uppercase text-[10px] tracking-widest text-muted-foreground font-bold">
            Subject Domain
          </Label>
          <Select>
            <SelectTrigger className="bg-white/50 backdrop-blur-sm border-white/40 focus:bg-white transition-all py-6">
              <SelectValue placeholder="Advanced Physics" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="physics">Advanced Physics</SelectItem>
              <SelectItem value="chemistry">Organic Chemistry</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 flex flex-col justify-end">
          <Button className="w-full py-6 text-xs font-black uppercase tracking-[0.2em] bg-secondary hover:bg-secondary/90 text-white shadow-lg transition-all active:scale-[0.98]">
            <div className="flex items-center gap-2">
              <FaSearch className="italic" />
              Query Assignments
            </div>
          </Button>
        </div>
      </div>
    </GlassCard>
  );
}
