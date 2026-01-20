"use client";

import React from "react";
import { GlassCard } from "@/components/cards/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FaChartLine, FaCheckCircle } from "react-icons/fa";

export function MarkGradeForm() {
  return (
    <GlassCard className="p-8 h-full flex flex-col">
      <h4 className="mb-8 text-xs font-black text-muted-foreground uppercase tracking-widest leading-none flex items-center gap-2">
        Standard Architecture
        <div className="h-[1px] flex-1 bg-border/50"></div>
      </h4>

      <form className="space-y-6 flex-1">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <Label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
              Grade Identity <span className="text-rose-500">*</span>
            </Label>
            <Input
              type="text"
              className="w-full rounded-2xl border-border/50 bg-secondary/5 h-12 text-sm font-black focus:ring-secondary/20 shadow-sm italic uppercase placeholder:text-muted-foreground/50"
              placeholder="e.g. A+"
            />
          </div>
          <div>
            <Label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
              Base GPA <span className="text-rose-500">*</span>
            </Label>
            <Input
              type="text"
              className="w-full rounded-2xl border-border/50 bg-secondary/5 h-12 text-sm font-black focus:ring-secondary/20 shadow-sm font-mono placeholder:text-muted-foreground/50"
              placeholder="4.00"
            />
          </div>

          <div className="col-span-2 space-y-2">
            <div className="text-[10px] font-black text-muted-foreground/70 uppercase tracking-widest px-1 flex items-center gap-2">
              <FaChartLine size={10} /> Percentage Boundary
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="number"
                className="w-full rounded-2xl border-border/50 bg-white h-12 text-xs font-bold focus:ring-secondary/20 shadow-sm placeholder:text-muted-foreground/50"
                placeholder="From %"
              />
              <Input
                type="number"
                className="w-full rounded-2xl border-border/50 bg-white h-12 text-xs font-bold focus:ring-secondary/20 shadow-sm placeholder:text-muted-foreground/50"
                placeholder="To %"
              />
            </div>
          </div>

          <div className="col-span-2 space-y-2">
            <div className="text-[10px] font-black text-muted-foreground/70 uppercase tracking-widest px-1 flex items-center gap-2">
              <FaChartLine size={10} /> GPA Thresholds
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="text"
                className="w-full rounded-2xl border-border/50 bg-white h-12 text-xs font-bold focus:ring-secondary/20 shadow-sm font-mono placeholder:text-muted-foreground/50"
                placeholder="Min"
              />
              <Input
                type="text"
                className="w-full rounded-2xl border-border/50 bg-white h-12 text-xs font-bold focus:ring-secondary/20 shadow-sm font-mono placeholder:text-muted-foreground/50"
                placeholder="Max"
              />
            </div>
          </div>

          <div className="col-span-2">
            <Label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
              Qualitative Remark
            </Label>
            <Textarea
              className="w-full rounded-2xl border-border/50 bg-secondary/5 p-4 text-xs font-bold focus:ring-secondary/20 shadow-sm min-h-[100px] italic placeholder:text-muted-foreground/50"
              placeholder="Enter academic feedback..."
            />
          </div>
        </div>

        <div className="pt-4 mt-auto">
          <Button
            type="submit"
            className="w-full relative overflow-hidden rounded-2xl bg-secondary text-white hover:bg-secondary/90 border-b-4 border-secondary/20 hover:border-b-0 hover:translate-y-0.5 active:border-b-0 active:translate-y-1 transition-all shadow-lg text-xs font-black uppercase tracking-widest py-6"
          >
            <div className="relative z-10 flex items-center justify-center gap-2">
              <FaCheckCircle className="italic" />
              Commit To Standards
            </div>
          </Button>
        </div>
      </form>
    </GlassCard>
  );
}
