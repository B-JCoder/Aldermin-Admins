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
import { FaLayerGroup, FaUsers, FaSearch } from "react-icons/fa";

interface CarryForwardFilterProps {
  searchParams: {
    className: string;
    section: string;
  };
  setSearchParams: (data: any) => void;
  onSearch: (e: React.FormEvent) => void;
}

export function CarryForwardFilter({
  searchParams,
  setSearchParams,
  onSearch,
}: CarryForwardFilterProps) {
  return (
    <GlassCard className="p-8 relative overflow-hidden bg-gradient-to-br from-white to-secondary/5">
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

      <div className="flex items-center justify-between mb-6 relative z-10">
        <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none flex items-center gap-2">
          Selection Criteria
          <div className="h-1 w-12 bg-secondary/20 rounded-full"></div>
        </h4>
      </div>

      <form
        onSubmit={onSearch}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 items-end"
      >
        <div className="space-y-2">
          <Label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">
            Class <span className="text-destructive">*</span>
          </Label>
          <div className="relative">
            <FaLayerGroup
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/50"
              size={12}
            />
            <Select
              value={searchParams.className}
              onValueChange={(val) =>
                setSearchParams({ ...searchParams, className: val })
              }
            >
              <SelectTrigger className="w-full rounded-2xl border-border/50 bg-white/50 pl-10 py-6 text-xs font-bold focus:ring-secondary/20">
                <SelectValue placeholder="Select Class" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-border/50">
                <SelectItem value="10">Class 10</SelectItem>
                <SelectItem value="11">Class 11</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">
            Section <span className="text-destructive">*</span>
          </Label>
          <div className="relative">
            <FaUsers
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/50"
              size={12}
            />
            <Select
              value={searchParams.section}
              onValueChange={(val) =>
                setSearchParams({ ...searchParams, section: val })
              }
            >
              <SelectTrigger className="w-full rounded-2xl border-border/50 bg-white/50 pl-10 py-6 text-xs font-bold focus:ring-secondary/20">
                <SelectValue placeholder="Select Section" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-border/50">
                <SelectItem value="A">Section A</SelectItem>
                <SelectItem value="B">Section B</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Button
            type="submit"
            className="w-full rounded-2xl bg-secondary text-white border-b-4 border-black/10 hover:bg-secondary/90 active:border-b-0 active:translate-y-1 transition-all h-[50px] uppercase tracking-[0.2em] text-[10px] font-black shadow-xl"
          >
            <div className="flex items-center justify-center gap-2">
              <FaSearch className="italic" />
              Fetch Balances
            </div>
          </Button>
        </div>
      </form>
    </GlassCard>
  );
}
