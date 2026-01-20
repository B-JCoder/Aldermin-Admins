"use client";

import React from "react";
import { GlassCard } from "@/components/cards/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaCalendarAlt, FaFileAlt, FaCheck } from "react-icons/fa";

export function LeaveApplicationForm() {
  return (
    <GlassCard className="h-full flex flex-col bg-gradient-to-br from-white to-cyan-50/10 border-cyan-100/20">
      <div className="mb-6 flex items-center justify-between">
        <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
          New Request
        </h4>
        <div className="h-1 w-12 bg-cyan-100 rounded-full"></div>
      </div>

      <form className="space-y-4 flex-1">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">
                Applied Date
              </Label>
              <div className="relative">
                <FaCalendarAlt
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/40"
                  size={12}
                />
                <Input
                  type="date"
                  className="rounded-xl bg-white/50 border-white/40 focus:bg-white pl-10 text-[10px] font-bold h-12"
                  defaultValue="2024-03-25"
                  readOnly
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">
                Leave Type
              </Label>
              <Select>
                <SelectTrigger className="w-full rounded-xl bg-white/50 border-white/40 focus:bg-white transition-all font-bold text-xs h-12">
                  <SelectValue placeholder="Select Type..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sick">Sick Leave</SelectItem>
                  <SelectItem value="casual">Casual Leave</SelectItem>
                  <SelectItem value="earned">Earned Leave</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">
                From Date
              </Label>
              <Input
                type="date"
                className="rounded-xl bg-white/50 border-white/40 focus:bg-white text-[10px] font-bold h-12"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">
                To Date
              </Label>
              <Input
                type="date"
                className="rounded-xl bg-white/50 border-white/40 focus:bg-white text-[10px] font-bold h-12"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">
              Reason / Context
            </Label>
            <Textarea
              className="rounded-xl bg-white/50 border-white/40 focus:bg-white font-bold text-xs min-h-[80px] resize-none p-4"
              placeholder="Explanation for absence..."
            />
          </div>

          <div className="relative">
            <input type="file" className="hidden" id="leave-file" />
            <div className="w-full rounded-xl border border-dashed border-muted-foreground/20 p-4 pl-10 text-[10px] font-black uppercase tracking-widest bg-white/30 cursor-pointer hover:bg-white/50 transition-colors flex items-center truncate text-muted-foreground">
              <FaFileAlt className="mr-2 text-cyan-400" size={14} />
              <label htmlFor="leave-file" className="cursor-pointer w-full">
                Attach Document
              </label>
            </div>
          </div>
        </div>

        <div className="pt-4 mt-auto">
          <Button
            type="submit"
            className="w-full rounded-xl bg-foreground text-background font-black text-[10px] uppercase tracking-[0.2em] h-12 shadow-lg hover:shadow-xl hover:bg-foreground/90 transition-all flex items-center justify-center gap-2"
          >
            <FaCheck size={12} className="italic" />
            Submit Request
          </Button>
        </div>
      </form>
    </GlassCard>
  );
}
