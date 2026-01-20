"use client";

import React from "react";
import { GlassCard } from "@/components/cards/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaCheckCircle, FaChartBar } from "react-icons/fa";

export function ExamSetupForm() {
  return (
    <GlassCard className="p-8 h-full flex flex-col">
      <h4 className="mb-8 text-xs font-black text-muted-foreground uppercase tracking-widest leading-none flex items-center gap-2">
        Setup Architecture
        <div className="h-[1px] flex-1 bg-border/50"></div>
      </h4>

      <form className="space-y-6 flex-1">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
              System <span className="text-rose-500">*</span>
            </Label>
            <Select>
              <SelectTrigger className="w-full rounded-2xl border-border/50 bg-secondary/5 h-12 text-xs font-bold focus:ring-secondary/20">
                <SelectValue placeholder="Select System" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-border/50">
                <SelectItem value="point">Point System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
              Type <span className="text-rose-500">*</span>
            </Label>
            <Input
              type="text"
              className="w-full rounded-2xl border-border/50 bg-secondary/5 h-12 text-xs font-bold focus:ring-secondary/20 shadow-sm italic placeholder:text-muted-foreground/50"
              placeholder="e.g. Theory"
            />
          </div>
          <div>
            <Label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
              Grade <span className="text-rose-500">*</span>
            </Label>
            <Select>
              <SelectTrigger className="w-full rounded-2xl border-border/50 bg-secondary/5 h-12 text-xs font-bold focus:ring-secondary/20">
                <SelectValue placeholder="Select Grade" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-border/50">
                <SelectItem value="class10">Class 10</SelectItem>
                <SelectItem value="class11">Class 11</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
              Unit <span className="text-rose-500">*</span>
            </Label>
            <Select>
              <SelectTrigger className="w-full rounded-2xl border-border/50 bg-secondary/5 h-12 text-xs font-bold focus:ring-secondary/20">
                <SelectValue placeholder="Select Section" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-border/50">
                <SelectItem value="sectionA">Section A</SelectItem>
                <SelectItem value="sectionB">Section B</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-2">
            <Label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
              Discipline Subject <span className="text-rose-500">*</span>
            </Label>
            <Select>
              <SelectTrigger className="w-full rounded-2xl border-border/50 bg-secondary/10 h-12 text-xs font-black text-secondary outline-none focus:ring-secondary/20">
                <SelectValue placeholder="Select Subject" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-border/50">
                <SelectItem value="physics">Theoretical Physics</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
              Pass Mark <span className="text-rose-500">*</span>
            </Label>
            <Input
              type="number"
              className="w-full rounded-2xl border-border/50 bg-secondary/5 h-12 text-xs font-bold focus:ring-secondary/20 shadow-sm placeholder:text-muted-foreground/50"
              placeholder="33"
            />
          </div>
          <div>
            <Label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
              Max Total
            </Label>
            <Input
              type="number"
              className="w-full rounded-2xl border-border/50 bg-secondary/5 h-12 text-xs font-bold focus:ring-secondary/20 shadow-sm placeholder:text-muted-foreground/50"
              placeholder="100"
            />
          </div>
        </div>

        <div className="pt-4 space-y-4">
          <div className="flex items-center gap-2 text-[10px] font-black text-muted-foreground/70 uppercase tracking-[0.2em]">
            <FaChartBar size={12} />
            Distribution Schema
          </div>
          <div className="bg-secondary/5 p-6 rounded-3xl border border-secondary/10 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="text"
                className="bg-white border-none rounded-xl p-3 text-xs font-bold shadow-sm h-10"
                placeholder="Component Title"
              />
              <Input
                type="number"
                className="bg-white border-none rounded-xl p-3 text-xs font-bold shadow-sm h-10"
                placeholder="Mark"
              />
            </div>
            <div className="flex justify-between items-center px-2">
              <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest italic">
                Cumulative Total:
              </span>
              <span className="text-xs font-black text-secondary font-mono">
                100
              </span>
            </div>
          </div>
        </div>

        <div className="pt-6 mt-auto">
          <Button
            type="submit"
            className="w-full relative overflow-hidden rounded-2xl bg-secondary text-white hover:bg-secondary/90 border-b-4 border-secondary/20 hover:border-b-0 hover:translate-y-0.5 active:border-b-0 active:translate-y-1 transition-all shadow-lg text-[10px] font-black uppercase tracking-[0.2em] py-6"
          >
            <div className="relative z-10 flex items-center justify-center gap-2">
              <FaCheckCircle className="italic" />
              Initialize Configuration
            </div>
          </Button>
        </div>
      </form>
    </GlassCard>
  );
}
