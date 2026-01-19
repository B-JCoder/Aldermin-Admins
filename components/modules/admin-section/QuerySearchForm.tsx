"use client";

import React from "react";
import { GlassCard } from "@/components/cards/GlassCard";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaSearch, FaCalendarAlt, FaGlobe } from "react-icons/fa";

interface QuerySearchFormProps {
  searchParams: any;
  setSearchParams: (params: any) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function QuerySearchForm({
  searchParams,
  setSearchParams,
  onSubmit,
}: QuerySearchFormProps) {
  return (
    <GlassCard className="p-8 bg-gradient-to-br from-white/60 to-sidebar/5">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
          Search Filters
          <div className="h-1 w-12 bg-sidebar/20 rounded-full"></div>
        </h4>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-2">
            <Label className="uppercase text-[10px] tracking-widest text-muted-foreground font-bold">
              Date From
            </Label>
            <div className="relative">
              <FaCalendarAlt
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={14}
              />
              <Input
                type="date"
                value={searchParams.dateFrom}
                onChange={(e) =>
                  setSearchParams({ ...searchParams, dateFrom: e.target.value })
                }
                className="pl-10 bg-white/50 backdrop-blur-sm border-white/40 focus:bg-white transition-all font-medium py-6"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="uppercase text-[10px] tracking-widest text-muted-foreground font-bold">
              Date To
            </Label>
            <div className="relative">
              <FaCalendarAlt
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={14}
              />
              <Input
                type="date"
                value={searchParams.dateTo}
                onChange={(e) =>
                  setSearchParams({ ...searchParams, dateTo: e.target.value })
                }
                className="pl-10 bg-white/50 backdrop-blur-sm border-white/40 focus:bg-white transition-all font-medium py-6"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="uppercase text-[10px] tracking-widest text-muted-foreground font-bold">
              Inquiry Source
            </Label>
            <Select
              value={searchParams.source}
              onValueChange={(val) =>
                setSearchParams({ ...searchParams, source: val })
              }
            >
              <SelectTrigger className="bg-white/50 backdrop-blur-sm border-white/40 focus:bg-white transition-all py-6">
                <SelectValue placeholder="Select Source" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Online">Online</SelectItem>
                <SelectItem value="Referral">Referral</SelectItem>
                <SelectItem value="Walk-in">Walk-in</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 flex flex-col justify-end">
            <Button
              type="submit"
              className="w-full py-6 text-xs font-black uppercase tracking-[0.2em] bg-secondary hover:bg-secondary/90 text-white shadow-lg transition-all active:scale-[0.98]"
            >
              <div className="flex items-center gap-2">
                <FaSearch className="italic" />
                Search
              </div>
            </Button>
          </div>
        </div>
      </form>
    </GlassCard>
  );
}
