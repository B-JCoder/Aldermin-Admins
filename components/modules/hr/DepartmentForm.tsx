"use client";

import React from "react";
import { GlassCard } from "@/components/cards/GlassCard";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaCheck, FaBuilding } from "react-icons/fa";

interface DepartmentFormProps {
  departmentTitle: string;
  setDepartmentTitle: (val: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function DepartmentForm({
  departmentTitle,
  setDepartmentTitle,
  onSubmit,
}: DepartmentFormProps) {
  return (
    <GlassCard className="p-8 h-full bg-gradient-to-br from-white/60 to-sidebar/5">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
          Add New Department
          <div className="h-1 w-12 bg-sidebar/20 rounded-full"></div>
        </h4>
      </div>

      <form onSubmit={onSubmit} className="space-y-6 flex-1">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="uppercase text-[10px] tracking-widest text-muted-foreground font-bold">
              Department Title <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <FaBuilding
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10"
                size={14}
              />
              <Input
                placeholder="e.g. Academic Department"
                value={departmentTitle}
                onChange={(e) => setDepartmentTitle(e.target.value)}
                className="pl-10 bg-white/50 backdrop-blur-sm border-white/40 focus:bg-white transition-all font-medium py-6"
                required
              />
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
              Save Department
            </div>
          </Button>
        </div>
      </form>
    </GlassCard>
  );
}
