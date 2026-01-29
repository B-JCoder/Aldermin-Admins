"use client";

import React from "react";
import { AdminCard } from "@/components/common/AdminCard";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaFilter, FaSearch } from "react-icons/fa";

export function TeacherFilter() {
  return (
    <AdminCard className="p-8">
      <div className="flex items-center gap-2 mb-8  tracking-[0.2em] font-semibold text-[10px] text-gray-500">
        <FaFilter className="text-secondary" />
        Metric Filtering
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-3">
          <Label className="block text-[10px] font-semibold text-gray-500  ml-2">
            Department
          </Label>
          <Select>
            <SelectTrigger className="w-full bg-white border-gray-200 h-12 rounded-xl text-xs font-bold">
              <SelectValue placeholder="All Departments" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="math">Mathematics</SelectItem>
              <SelectItem value="science">Science</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-3">
          <Label className="block text-[10px] font-semibold text-gray-500  ml-2">
            Performance Tier
          </Label>
          <Select>
            <SelectTrigger className="w-full bg-white border-gray-200 h-12 rounded-xl text-xs font-bold">
              <SelectValue placeholder="All Tiers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Tiers</SelectItem>
              <SelectItem value="top">Top Performers</SelectItem>
              <SelectItem value="improve">Needs Improvement</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-3">
          <Label className="block text-[10px] font-semibold text-transparent  ml-2 select-none">
            Action
          </Label>
          <Button
            variant="secondary"
            className="w-full h-12 rounded-xl text-xs font-semibold  tracking-[0.2em]"
          >
            <FaSearch className="mr-2" size={14} />
            Analyze Data
          </Button>
        </div>
      </div>
    </AdminCard>
  );
}
