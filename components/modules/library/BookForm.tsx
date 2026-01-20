"use client";

import React from "react";
import {
  FaBook,
  FaTags,
  FaHashtag,
  FaBarcode,
  FaBox,
  FaUserEdit,
  FaBuilding,
  FaDollarSign,
  FaPlus,
} from "react-icons/fa";
import { GlassCard } from "@/components/cards/GlassCard";
import { Button } from "@/components/ui/button";

export function BookForm() {
  return (
    <GlassCard className="p-8 h-fit sticky top-8">
      <h4 className="mb-8 text-xs font-black text-muted-foreground uppercase tracking-widest leading-none flex items-center justify-between">
        Catalog New Asset
        <div className="h-1 w-12 bg-secondary/20 rounded-full"></div>
      </h4>

      <form className="space-y-6">
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-1">
            <label className="text-[9px] font-black text-muted-foreground uppercase tracking-widest ml-1">
              Asset Title <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <FaBook
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/50"
                size={10}
              />
              <input
                type="text"
                className="w-full rounded-2xl border-border/50 bg-secondary/5 p-3.5 pl-10 text-xs font-bold focus:ring-4 focus:ring-secondary/10 outline-none transition-all shadow-sm italic placeholder:text-muted-foreground/50"
                placeholder="e.g. Principia Mathematica"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[9px] font-black text-muted-foreground uppercase tracking-widest ml-1">
                Category <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <FaTags
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/50"
                  size={10}
                />
                <select className="w-full rounded-2xl border-border/50 bg-secondary/5 p-3.5 pl-10 text-[10px] font-bold focus:ring-4 focus:ring-secondary/10 outline-none transition-all shadow-sm appearance-none text-foreground">
                  <option>Physics</option>
                  <option>Chemistry</option>
                  <option>Biology</option>
                  <option>Mathematics</option>
                </select>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[9px] font-black text-muted-foreground uppercase tracking-widest ml-1">
                Internal SN <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <FaHashtag
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/50"
                  size={10}
                />
                <input
                  type="text"
                  className="w-full rounded-2xl border-border/50 bg-secondary/5 p-3.5 pl-10 text-[10px] font-mono font-bold focus:ring-4 focus:ring-secondary/10 outline-none transition-all shadow-sm placeholder:text-muted-foreground/50"
                  placeholder="B-..."
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[9px] font-black text-muted-foreground uppercase tracking-widest ml-1">
                ISBN Code
              </label>
              <div className="relative font-mono">
                <FaBarcode
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/50"
                  size={10}
                />
                <input
                  type="text"
                  className="w-full rounded-2xl border-border/50 bg-secondary/5 p-3.5 pl-10 text-[9px] font-bold focus:ring-4 focus:ring-secondary/10 outline-none transition-all shadow-sm placeholder:text-muted-foreground/50"
                  placeholder="000-000..."
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[9px] font-black text-muted-foreground uppercase tracking-widest ml-1">
                Quantity
              </label>
              <div className="relative">
                <FaBox
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/50"
                  size={10}
                />
                <input
                  type="number"
                  className="w-full rounded-2xl border-border/50 bg-secondary/5 p-3.5 pl-10 text-[10px] font-bold focus:ring-4 focus:ring-secondary/10 outline-none transition-all shadow-sm placeholder:text-muted-foreground/50"
                  placeholder="0"
                />
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[9px] font-black text-muted-foreground uppercase tracking-widest ml-1">
              Author / Publisher
            </label>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative">
                <FaUserEdit
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/50"
                  size={10}
                />
                <input
                  type="text"
                  className="w-full rounded-2xl border-border/50 bg-secondary/5 p-3.5 pl-10 text-[10px] font-bold focus:ring-4 focus:ring-secondary/10 outline-none transition-all shadow-sm placeholder:text-muted-foreground/50"
                  placeholder="Author"
                />
              </div>
              <div className="relative">
                <FaBuilding
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/50"
                  size={10}
                />
                <input
                  type="text"
                  className="w-full rounded-2xl border-border/50 bg-secondary/5 p-3.5 pl-10 text-[10px] font-bold focus:ring-4 focus:ring-secondary/10 outline-none transition-all shadow-sm placeholder:text-muted-foreground/50"
                  placeholder="Publisher"
                />
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[9px] font-black text-muted-foreground uppercase tracking-widest ml-1">
              Asset Valuation (Price)
            </label>
            <div className="relative">
              <FaDollarSign
                className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary"
                size={10}
              />
              <input
                type="text"
                className="w-full rounded-2xl border-border/50 bg-secondary/5 p-3.5 pl-10 text-xs font-mono font-black focus:ring-4 focus:ring-secondary/10 outline-none transition-all shadow-inner placeholder:text-muted-foreground/50"
                placeholder="0.00"
              />
            </div>
          </div>
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            className="w-full relative overflow-hidden rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 border-b-4 border-primary/20 hover:border-b-0 hover:translate-y-0.5 active:border-b-0 active:translate-y-1 transition-all shadow-lg text-[10px] font-black uppercase tracking-[0.2em] py-6"
          >
            <div className="relative z-10 flex items-center justify-center gap-2">
              <FaPlus /> Authorize Asset
            </div>
          </Button>
        </div>
      </form>
    </GlassCard>
  );
}
