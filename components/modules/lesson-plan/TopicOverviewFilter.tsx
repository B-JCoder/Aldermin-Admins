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
import { FaSearch } from "react-icons/fa";

interface TopicOverviewFilterProps {
  searchParams: any;
  handleInputChange: (e: any) => void;
  handleSearch: (e: React.FormEvent) => void;
}

export function TopicOverviewFilter({
  searchParams,
  handleInputChange,
  handleSearch,
}: TopicOverviewFilterProps) {
  const onSelectChange = (name: string, value: string) => {
    handleInputChange({ target: { name, value } });
  };

  return (
    <GlassCard className="p-6 bg-white/60">
      <form
        onSubmit={handleSearch}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end"
      >
        <div className="space-y-2">
          <Label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest">
            Target Class
          </Label>
          <Select
            onValueChange={(val) => onSelectChange("className", val)}
            value={searchParams.className}
          >
            <SelectTrigger className="w-full rounded-xl border-white/40 p-4 text-xs font-bold focus:ring-2 focus:ring-secondary/20 outline-none bg-white/50 h-10">
              <SelectValue placeholder="Select Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">Class 10</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest">
            Section
          </Label>
          <Select
            onValueChange={(val) => onSelectChange("section", val)}
            value={searchParams.section}
          >
            <SelectTrigger className="w-full rounded-xl border-white/40 p-4 text-xs font-bold focus:ring-2 focus:ring-secondary/20 outline-none bg-white/50 h-10">
              <SelectValue placeholder="Select Section" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="A">Section A</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest">
            Subject
          </Label>
          <Select
            onValueChange={(val) => onSelectChange("subject", val)}
            value={searchParams.subject}
          >
            <SelectTrigger className="w-full rounded-xl border-white/40 p-4 text-xs font-bold focus:ring-2 focus:ring-secondary/20 outline-none bg-white/50 h-10">
              <SelectValue placeholder="Select Subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="math">Mathematics</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="md:col-span-3 flex justify-end">
          <Button
            type="submit"
            className="flex items-center gap-2 rounded-xl bg-gray-800 px-10 py-3 text-white font-black text-xs transition-all hover:bg-black active:scale-[0.98] shadow-md shadow-gray-100 uppercase tracking-widest h-10"
          >
            <FaSearch size={12} />
            Execute Search
          </Button>
        </div>
      </form>
    </GlassCard>
  );
}
