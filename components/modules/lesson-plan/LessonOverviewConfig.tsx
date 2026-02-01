"use client";

import React from "react";
import { AdminCard } from "@/components/common/AdminCard";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaGraduationCap } from "react-icons/fa";

interface LessonOverviewConfigProps {
  formData: any;
  handleInputChange: (e: any) => void;
}

export function LessonOverviewConfig({
  formData,
  handleInputChange,
}: LessonOverviewConfigProps) {
  const onSelectChange = (name: string, value: string) => {
    handleInputChange({ target: { name, value } });
  };
  return (
    <AdminCard className="p-4 md:p-8 h-full bg-gradient-to-br from-white to-secondary/5">
      <h4 className="mb-8 text-xs font-semibold text-gray-400   leading-none flex items-center gap-2">
        Auditor Configuration
        <div className="h-[1px] flex-1 bg-secondary/20"></div>
      </h4>

      <form className="space-y-6 flex-1">
        <div className="space-y-2">
          <Label className="block text-[10px] font-semibold text-gray-500  ">
            Primary Instructor
          </Label>
          <Select
            onValueChange={(val) => onSelectChange("teacher", val)}
            value={formData.teacher}
          >
            <SelectTrigger className="w-full rounded-xl border-gray-200 p-4 text-xs font-bold outline-none bg-white shadow-sm focus:ring-2 focus:ring-secondary/20 h-10">
              <SelectValue placeholder="Select Staff" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Marcus Aurelius</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="block text-[10px] font-semibold text-gray-500  ">
              Class
            </Label>
            <Select
              onValueChange={(val) => onSelectChange("className", val)}
              value={formData.className}
            >
              <SelectTrigger className="w-full rounded-xl border-gray-200 p-4 text-xs font-bold outline-none bg-white shadow-sm focus:ring-2 focus:ring-secondary/20 h-10">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Class 10">Class 10</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="block text-[10px] font-semibold text-gray-500  ">
              Section
            </Label>
            <Select
              onValueChange={(val) => onSelectChange("section", val)}
              value={formData.section}
            >
              <SelectTrigger className="w-full rounded-xl border-gray-200 p-4 text-xs font-bold outline-none bg-white shadow-sm focus:ring-2 focus:ring-secondary/20 h-10">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="A">A</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="block text-[10px] font-semibold text-gray-500  ">
            Subject Domain
          </Label>
          <Select
            onValueChange={(val) => onSelectChange("subject", val)}
            value={formData.subject}
          >
            <SelectTrigger className="w-full rounded-xl border-gray-200 p-4 text-xs font-bold outline-none bg-white shadow-sm focus:ring-2 focus:ring-secondary/20 h-10">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mathematics">Mathematics</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="pt-6">
          <Button className="w-full py-6 bg-secondary text-white rounded-xl text-xs font-semibold   shadow-xl shadow-secondary/10 hover:bg-secondary/90 transition-all flex items-center justify-center gap-2">
            <FaGraduationCap size={16} />
            Verify Progress
          </Button>
        </div>
      </form>
    </AdminCard>
  );
}
