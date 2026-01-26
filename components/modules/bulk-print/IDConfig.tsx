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
import { FaSearch, FaLayerGroup } from "react-icons/fa";

export function IDConfig() {
  return (
    <GlassCard className="p-10 flex flex-col h-full bg-gradient-to-br from-white to-secondary/5">
      <h4 className="mb-8 text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
        ID Card Parameters
      </h4>

      <form className="space-y-6 flex-1">
        <div className="space-y-5">
          <div className="space-y-2">
            <Label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">
              Target Class Taxonomy
            </Label>
            <Select>
              <SelectTrigger className="w-full rounded-2xl border-white/40 bg-white/50 p-4 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm h-12">
                <SelectValue placeholder="Select Class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">Class 10</SelectItem>
                <SelectItem value="9">Class 9</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">
              Identification Blueprint
            </Label>
            <div className="relative">
              <FaLayerGroup
                className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/40 z-10"
                size={12}
              />
              <Select>
                <SelectTrigger className="w-full rounded-2xl border-white/40 bg-white/50 p-4 pl-10 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm h-12 text-secondary italic underline">
                  <SelectValue placeholder="Select Blueprint" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Standard Student ID</SelectItem>
                  <SelectItem value="faculty">Faculty ID Blueprint</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="pt-6">
          <Button className="w-full h-16 bg-secondary hover:bg-secondary/90 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl shadow-secondary/20 transition-all active:scale-95">
            <FaSearch className="mr-2 italic" /> Load Member Stream
          </Button>
        </div>
      </form>
    </GlassCard>
  );
}
