"use client";

import React from "react";
import { GlassCard } from "@/components/cards/GlassCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { FaSearch } from "react-icons/fa";

interface MarksheetFilterProps {
  searchParams: any;
  handleInputChange: (e: any) => void;
  handleSearch: (e: React.FormEvent) => void;
}

export function MarksheetFilter({
  searchParams,
  handleInputChange,
  handleSearch,
}: MarksheetFilterProps) {
  // Adapter for Select onValueChange to match handleInputChange signature if needed,
  // but for simplicity we can just directly use state setters or similar in parent.
  // However, the original code used name/value on native select.
  // With Shadcn Select, we use onValueChange.
  // I will mock the event or pass simple change handlers.

  const onSelectChange = (name: string, value: string) => {
    handleInputChange({ target: { name, value } });
  };

  return (
    <GlassCard className="p-8">
      <h4 className="mb-4 text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
        Report Generation Filter
      </h4>
      <form
        onSubmit={handleSearch}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end"
      >
        <div>
          <Label className="block text-xs font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
            Exam <span className="text-rose-500">*</span>
          </Label>
          <Select
            onValueChange={(val) => onSelectChange("exam", val)}
            value={searchParams.exam}
          >
            <SelectTrigger className="w-full rounded-2xl border-border/50 bg-secondary/5 h-12 text-xs font-bold focus:ring-secondary/20">
              <SelectValue placeholder="Select Exam" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-border/50">
              <SelectItem value="term1">First Term 2023</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="block text-xs font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
            Class <span className="text-rose-500">*</span>
          </Label>
          <Select
            onValueChange={(val) => onSelectChange("className", val)}
            value={searchParams.className}
          >
            <SelectTrigger className="w-full rounded-2xl border-border/50 bg-secondary/5 h-12 text-xs font-bold focus:ring-secondary/20">
              <SelectValue placeholder="Select Class" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-border/50">
              <SelectItem value="10">Class 10</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="block text-xs font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
            Section <span className="text-rose-500">*</span>
          </Label>
          <Select
            onValueChange={(val) => onSelectChange("section", val)}
            value={searchParams.section}
          >
            <SelectTrigger className="w-full rounded-2xl border-border/50 bg-secondary/5 h-12 text-xs font-bold focus:ring-secondary/20">
              <SelectValue placeholder="Select Section" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-border/50">
              <SelectItem value="A">Section A</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="block text-xs font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
            Subject <span className="text-rose-500">*</span>
          </Label>
          <Select
            onValueChange={(val) => onSelectChange("subject", val)}
            value={searchParams.subject}
          >
            <SelectTrigger className="w-full rounded-2xl border-border/50 bg-secondary/5 h-12 text-xs font-bold focus:ring-secondary/20">
              <SelectValue placeholder="Select Subject" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-border/50">
              <SelectItem value="math">Mathematics</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="lg:col-span-4 flex justify-end mt-2">
          <Button
            type="submit"
            className="flex items-center gap-2 rounded-2xl bg-secondary text-white px-10 py-6 text-xs font-black uppercase tracking-[0.2em] transition-all hover:bg-secondary/90 active:scale-[0.98] shadow-lg h-auto"
          >
            <FaSearch size={14} />
            Generate Marksheet
          </Button>
        </div>
      </form>
    </GlassCard>
  );
}
