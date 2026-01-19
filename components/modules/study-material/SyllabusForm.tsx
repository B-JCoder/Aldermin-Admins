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
} from "react-icons/fa";

export function SyllabusForm() {
  return (
    <GlassCard className="p-8 h-full bg-gradient-to-br from-white/60 to-sidebar/5">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
          Upload Syllabus
          <div className="h-1 w-12 bg-sidebar/20 rounded-full"></div>
        </h4>
      </div>

      <form className="space-y-6 flex-1">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="uppercase text-[10px] tracking-widest text-muted-foreground font-bold">
              Syllabus Title <span className="text-red-500">*</span>
            </Label>
            <Input
              placeholder="e.g. Final Term Syllabus"
              className="bg-white/50 backdrop-blur-sm border-white/40 focus:bg-white transition-all font-medium py-6"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="uppercase text-[10px] tracking-widest text-muted-foreground font-bold">
                Academic Grade
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
                Type
              </Label>
              <Select>
                <SelectTrigger className="bg-white/50 backdrop-blur-sm border-white/40 focus:bg-white transition-all py-6">
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="academic">Academic</SelectItem>
                  <SelectItem value="extra">Extra-Curricular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="uppercase text-[10px] tracking-widest text-muted-foreground font-bold">
              Description
            </Label>
            <Input
              placeholder="Details..."
              className="bg-white/50 backdrop-blur-sm border-white/40 focus:bg-white transition-all font-medium py-6"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="uppercase text-[10px] tracking-widest text-muted-foreground font-bold">
                Date
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
                Syllabus File
              </Label>
              <div className="relative">
                <Input type="file" className="hidden" id="syllabus-file" />
                <Label
                  htmlFor="syllabus-file"
                  className="w-full h-[52px] rounded-xl border-dashed border-2 border-slate-200 p-4 pl-10 bg-slate-50/50 hover:bg-white cursor-pointer transition-all flex items-center text-[10px] font-bold uppercase tracking-widest text-muted-foreground overflow-hidden"
                >
                  <FaCloudDownloadAlt
                    className="mr-2 text-secondary shrink-0"
                    size={16}
                  />
                  <span className="truncate">Browse/Attach</span>
                </Label>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            className="w-full py-6 text-xs font-black uppercase tracking-[0.2em] bg-secondary hover:bg-secondary/90 text-white shadow-lg transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-2">
              <FaCheck className="italic" />
              Upload Syllabus
            </div>
          </Button>
        </div>
      </form>
    </GlassCard>
  );
}
