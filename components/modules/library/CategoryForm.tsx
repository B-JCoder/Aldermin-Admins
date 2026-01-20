"use client";

import React from "react";
import { FaBookmark, FaPlus } from "react-icons/fa";
import { GlassCard } from "@/components/cards/GlassCard";
import { Button } from "@/components/ui/button";

export function CategoryForm() {
  return (
    <GlassCard className="p-8 h-full flex flex-col">
      <h4 className="mb-6 text-xs font-black text-muted-foreground uppercase tracking-widest leading-none flex items-center justify-between">
        Define Taxonomy Node
        <div className="h-1 w-12 bg-secondary/20 rounded-full"></div>
      </h4>

      <form className="space-y-4 flex-1">
        <div>
          <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1 text-nowrap">
            Category Descriptor <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <FaBookmark
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/50"
              size={12}
            />
            <input
              type="text"
              className="w-full rounded-2xl border-border/50 bg-secondary/5 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-secondary/10 outline-none transition-all shadow-sm italic placeholder:text-muted-foreground/50"
              placeholder="e.g. Quantum Mechanics"
              required
            />
          </div>
        </div>

        <div className="pt-4 mt-auto">
          <Button
            type="submit"
            className="w-full relative overflow-hidden rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 border-b-4 border-primary/20 hover:border-b-0 hover:translate-y-0.5 active:border-b-0 active:translate-y-1 transition-all shadow-lg text-[10px] font-black uppercase tracking-[0.2em] py-6"
          >
            <div className="relative z-10 flex items-center justify-center gap-2">
              <FaPlus /> Authorize Category
            </div>
          </Button>
        </div>
      </form>
    </GlassCard>
  );
}
