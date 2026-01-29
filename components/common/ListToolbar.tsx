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
      <div className="relative flex-1 max-w-md">
        <FaSearch
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={14}
        />
        <Input
          placeholder={searchPlaceHolder}
          onChange={(e) => onSearch?.(e.target.value)}
          className="pl-9 h-10 bg-white border-gray-200 focus:border-secondary focus:ring-secondary/20 rounded-lg text-sm"
        />
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
        <Button
          variant="outline"
          size="sm"
          className="h-10 px-4 rounded-lg border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium"
        >
          <FaFilter size={12} className="mr-2" />
          Filter
        </Button>

        {action}

        {showAddButton && (
          <Button
            onClick={onAdd}
            size="sm"
            className="h-10 px-4 rounded-lg bg-secondary text-white hover:bg-secondary/90 shadow-sm font-medium"
          >
            <FaPlus size={12} className="mr-2" />
            {addButtonText}
          </Button>
        )}
      </div>
    </div>
  );
}
