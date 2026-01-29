"use client";

import React from "react";
import { FaBookmark, FaLayerGroup, FaHashtag, FaPlus } from "react-icons/fa";
import { AdminCard } from "@/components/common/AdminCard";
import { Button } from "@/components/ui/button";

export function SubjectForm() {
  return (
    <AdminCard className="p-8 h-full flex flex-col">
      <h4 className="mb-6 text-xs font-semibold text-gray-500   leading-none flex items-center justify-between">
        Authorize Subject Node
        <div className="h-1 w-12 bg-secondary/20 rounded-full"></div>
      </h4>

      <form className="space-y-4 flex-1">
        <div>
          <label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1 text-nowrap">
            Subject Appellation <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <FaBookmark
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500/50"
              size={12}
            />
            <input
              type="text"
              className="w-full rounded-2xl border-border/50 bg-secondary/5 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-secondary/10 outline-none transition-all shadow-sm  placeholder:text-gray-500/50"
              placeholder="e.g. Thermodynamics"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1 text-nowrap">
            Taxonomy Category <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <FaLayerGroup
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500/50"
              size={12}
            />
            <select className="w-full rounded-2xl border-border/50 bg-secondary/5 p-4 pl-10 text-xs font-bold focus:ring-4 focus:ring-secondary/10 outline-none transition-all shadow-sm appearance-none cursor-pointer text-foreground">
              <option>Select Category</option>
              <option>Theoretical Physics</option>
              <option>Classical Literature</option>
              <option>Advanced Mathematics</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1 text-nowrap">
            Subject Identifier (Code) <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <FaHashtag
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500/50"
              size={12}
            />
            <input
              type="text"
              className="w-full rounded-2xl border-border/50 bg-secondary/5 p-4 pl-10 text-xs  font-bold focus:ring-4 focus:ring-secondary/10 outline-none transition-all shadow-sm placeholder:text-gray-500/50"
              placeholder="e.g. PHY-101"
              required
            />
          </div>
        </div>

        <div className="pt-4 mt-auto">
          <Button
            type="submit"
            className="w-full relative overflow-hidden rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 border-b-4 border-primary/20 hover:border-b-0 hover:translate-y-0.5 active:border-b-0 active:translate-y-1 transition-all shadow-lg text-[10px] font-semibold  tracking-[0.2em] py-6"
          >
            <div className="relative z-10 flex items-center justify-center gap-2">
              <FaPlus /> Authorize Subject
            </div>
          </Button>
        </div>
      </form>
    </AdminCard>
  );
}
