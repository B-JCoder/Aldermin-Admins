"use client";

import React from "react";
import { AdminCard } from "@/components/common/AdminCard";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaSearch } from "react-icons/fa";

export function LessonPlanFilter() {
  return (
    <AdminCard className="p-6 bg-white">
      <div className="flex flex-wrap gap-4 items-end">
        <div className="flex-1 min-w-[200px] space-y-2">
          <Label className="block text-[10px] font-semibold text-gray-500 ">
            Search Teacher
          </Label>
          <div className="relative">
            <FaSearch
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={12}
            />
            <Input
              className="pl-10 bg-white backdrop-blur-sm border-gray-200 focus:bg-white text-xs font-bold"
              placeholder="Staff name..."
            />
          </div>
        </div>
        <div className="w-40 space-y-2">
          <Label className="block text-[10px] font-semibold text-gray-500 ">
            Class
          </Label>
          <Select defaultValue="all">
            <SelectTrigger className="bg-white backdrop-blur-sm border-gray-200 focus:bg-white text-xs font-bold">
              <SelectValue placeholder="All Classes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Classes</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-40 space-y-2">
          <Label className="block text-[10px] font-semibold text-gray-500 ">
            Status
          </Label>
          <Select defaultValue="all">
            <SelectTrigger className="bg-white backdrop-blur-sm border-gray-200 focus:bg-white text-xs font-bold">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="bg-gray-800 text-white px-8 py-2.5 rounded-xl text-xs font-semibold   hover:bg-black transition-all h-[42px]">
          Filter
        </Button>
      </div>
    </AdminCard>
  );
}
