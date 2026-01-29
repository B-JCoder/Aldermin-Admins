"use client";

import React from "react";
import { AdminCard } from "@/components/common/AdminCard";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FaFilter, FaSearch } from "react-icons/fa";

export function StudentListFilter() {
  return (
    <AdminCard className="p-8 border border-gray-200 bg-white">
      <div className="flex items-center gap-2 mb-8  tracking-[0.2em] font-semibold text-[10px] text-gray-500">
        <FaFilter size={10} className="text-secondary" />
        Precision Search
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Label className="block text-[10px] font-semibold text-gray-500  mb-3 ml-2">
            Session Year
          </Label>
          <Select>
            <SelectTrigger className="w-full bg-white border-gray-200 h-12 rounded-xl text-xs font-bold">
              <SelectValue placeholder="2023 - 2024" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="23-24">2023 - 2024</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="block text-[10px] font-semibold text-gray-500  mb-3 ml-2">
            Academic Class
          </Label>
          <Select>
            <SelectTrigger className="w-full bg-white border-gray-200 h-12 rounded-xl text-xs font-bold">
              <SelectValue placeholder="Class 10" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">Class 10</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="block text-[10px] font-semibold text-gray-500  mb-3 ml-2">
            Sectional Unit
          </Label>
          <Select>
            <SelectTrigger className="w-full bg-white border-gray-200 h-12 rounded-xl text-xs font-bold">
              <SelectValue placeholder="Section A" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="A">Section A</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="block text-[10px] font-semibold text-transparent  mb-3 ml-2 select-none">
            Action
          </Label>
          <Button
            variant="secondary"
            className="w-full h-12 rounded-xl text-xs font-semibold  tracking-[0.2em] shadow-lg"
          >
            <FaSearch className="mr-2" size={14} />
            Query Database
          </Button>
        </div>
      </div>
    </AdminCard>
  );
}
