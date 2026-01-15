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
import {
  FaCheck,
  FaCalendarAlt,
  FaCloudDownloadAlt,
  FaGraduationCap,
  FaFileAlt,
} from "react-icons/fa";

export function AssignmentForm() {
  return (
    <GlassCard className="p-8 h-full bg-gradient-to-br from-white/60 to-sidebar/5">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
          Deploy Assignment
          <div className="h-1 w-12 bg-sidebar/20 rounded-full"></div>
        </h4>
      </div>

      <form className="space-y-6 flex-1">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="uppercase text-[10px] tracking-widest text-muted-foreground font-bold">
              Task Title <span className="text-red-500">*</span>
            </Label>
            <Input
              placeholder="e.g. Chapter 4 Exercises"
              className="bg-white/50 backdrop-blur-sm border-white/40 focus:bg-white transition-all font-medium py-6"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="uppercase text-[10px] tracking-widest text-muted-foreground font-bold">
                Academic Class <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <FaGraduationCap
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10"
                  size={14}
                />
                <Select>
                  <SelectTrigger className="pl-10 bg-white/50 backdrop-blur-sm border-white/40 focus:bg-white transition-all py-6">
                    <SelectValue placeholder="Select Class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="class-10">Class 10</SelectItem>
                    <SelectItem value="class-9">Class 9</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="uppercase text-[10px] tracking-widest text-muted-foreground font-bold">
                Subject
              </Label>
              <div className="relative">
                <FaFileAlt
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10"
                  size={14}
                />
                <Select>
                  <SelectTrigger className="pl-10 bg-white/50 backdrop-blur-sm border-white/40 focus:bg-white transition-all py-6">
                    <SelectValue placeholder="Select Subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="maths">Mathematics</SelectItem>
                    <SelectItem value="physics">Physics</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="uppercase text-[10px] tracking-widest text-muted-foreground font-bold">
              Submission Deadline
            </Label>
            <div className="relative">
              <FaCalendarAlt
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={14}
              />
              <Input
                type="date"
                className="pl-10 bg-white/50 backdrop-blur-sm border-white/40 focus:bg-white transition-all font-medium py-6"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="uppercase text-[10px] tracking-widest text-muted-foreground font-bold">
              Task Document
            </Label>
            <div className="relative">
              <Input type="file" className="hidden" id="assignment-file" />
              <Label
                htmlFor="assignment-file"
                className="w-full rounded-xl border-dashed border-2 border-slate-200 p-4 pl-10 bg-slate-50/50 hover:bg-white cursor-pointer transition-all flex items-center text-xs font-bold uppercase tracking-widest text-muted-foreground"
              >
                <FaCloudDownloadAlt className="mr-2 text-secondary" size={16} />
                Attach PDF/DOC
              </Label>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            className="w-full py-6 text-xs font-black uppercase tracking-[0.2em] bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-2">
              <FaCheck className="italic" />
              Publish Task
            </div>
          </Button>
        </div>
      </form>
    </GlassCard>
  );
}
