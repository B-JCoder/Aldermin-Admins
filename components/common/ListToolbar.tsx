"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaSearch, FaPlus, FaFilter } from "react-icons/fa";

export interface ListToolbarProps {
  searchPlaceHolder?: string;
  onSearch?: (value: string) => void;
  onAdd?: () => void;
  addButtonText?: string;
  showAddButton?: boolean;
  action?: React.ReactNode;
}

export function ListToolbar({
  searchPlaceHolder = "Search records...",
  onSearch,
  onAdd,
  addButtonText = "Add New",
  showAddButton = true,
  action,
}: ListToolbarProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
      <div className="relative flex-1 max-w-sm">
        <FaSearch
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          size={12}
        />
        <Input
          placeholder={searchPlaceHolder}
          onChange={(e) => onSearch?.(e.target.value)}
          className="pl-10 bg-white/50 border-white/40 focus:bg-white py-6 rounded-2xl"
        />
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          className="rounded-2xl border-white/40 bg-white/50 py-6 px-6 font-bold uppercase text-[10px] tracking-widest text-muted-foreground hover:text-secondary transition-all"
        >
          <FaFilter size={12} className="mr-2" />
          Filter
        </Button>

        {action}

        {showAddButton && (
          <Button
            onClick={onAdd}
            className="bg-secondary hover:bg-secondary/90 text-white py-6 px-6 rounded-2xl font-bold uppercase text-[10px] tracking-widest shadow-lg shadow-secondary/10 transition-all active:scale-[0.98]"
          >
            <FaPlus size={12} className="mr-2" />
            {addButtonText}
          </Button>
        )}
      </div>
    </div>
  );
}
