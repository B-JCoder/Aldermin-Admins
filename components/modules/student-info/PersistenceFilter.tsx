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
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";

interface PersistenceFilterProps {
  attendanceDate: string;
  setAttendanceDate: (date: string) => void;
}

export function PersistenceFilter({
  attendanceDate,
  setAttendanceDate,
}: PersistenceFilterProps) {
  return (
    <AdminCard className="p-8 border border-gray-200 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-end">
        <div>
          <Label className="block text-[10px] font-semibold text-gray-500  mb-3 ml-2">
            Academic Grade
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
          <Label className="block text-[10px] font-semibold text-gray-500  mb-3 ml-2">
            Observation Date
          </Label>
          <Input
            type="date"
            value={attendanceDate}
            onChange={(e) => setAttendanceDate(e.target.value)}
            className="w-full bg-white border-gray-200 h-12 rounded-xl text-xs font-bold"
          />
        </div>
        <Button
          variant="default"
          className="w-full bg-accent text-white rounded-xl h-12 text-xs font-semibold  tracking-[0.2em] shadow-lg hover:bg-accent/90"
        >
          <FaSearch className="mr-2" size={14} />
          Fetch Registry
        </Button>
      </div>
    </AdminCard>
  );
}
