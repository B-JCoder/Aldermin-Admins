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
import { FaCheckCircle, FaBookOpen } from "react-icons/fa";

interface LessonFormProps {
  formData: any;
  handleInputChange: (e: any) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export function LessonForm({
  formData,
  handleInputChange,
  handleSubmit,
}: LessonFormProps) {
  // Helper for Select change to mimic event
  const onSelectChange = (name: string, value: string) => {
    handleInputChange({ target: { name, value } });
  };

  return (
    <AdminCard className="p-8 h-full bg-gradient-to-br from-white/60 to-secondary/5">
      <h4 className="mb-6 text-xs font-semibold text-gray-400   leading-none flex items-center justify-between">
        Define New Lesson
        <div className="h-1 w-12 bg-secondary/20 rounded-full"></div>
      </h4>

      <form onSubmit={handleSubmit} className="space-y-6 flex-1">
        <div className="space-y-2">
          <Label className=" text-[10px]  text-gray-500 font-bold">
            Lesson Title <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <FaBookOpen
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 z-10"
              size={14}
            />
            <Input
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="e.g. Intro to Algebra"
              className="pl-10 bg-white backdrop-blur-sm border-gray-200 focus:bg-white transition-all font-medium py-6"
              required
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label className=" text-[10px]  text-gray-500 font-bold">
              Class <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.className}
              onValueChange={(val) => onSelectChange("className", val)}
            >
              <SelectTrigger className="bg-white backdrop-blur-sm border-gray-200 focus:bg-white transition-all py-6 font-medium">
                <SelectValue placeholder="Select Class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Class 10">Class 10</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className=" text-[10px]  text-gray-500 font-bold">
              Section <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.section}
              onValueChange={(val) => onSelectChange("section", val)}
            >
              <SelectTrigger className="bg-white backdrop-blur-sm border-gray-200 focus:bg-white transition-all py-6 font-medium">
                <SelectValue placeholder="Select Section" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Section A">Section A</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className=" text-[10px]  text-gray-500 font-bold">
              Subject <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.subject}
              onValueChange={(val) => onSelectChange("subject", val)}
            >
              <SelectTrigger className="bg-white backdrop-blur-sm border-gray-200 focus:bg-white transition-all py-6 font-medium">
                <SelectValue placeholder="Select Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Mathematics">Mathematics</SelectItem>
                <SelectItem value="Physics">Physics</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            className="w-full py-6 text-xs font-semibold  tracking-[0.2em] bg-secondary hover:bg-secondary/90 text-white shadow-lg transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-2">
              <FaCheckCircle className="" />
              Initialize Lesson
            </div>
          </Button>
        </div>
      </form>
    </AdminCard>
  );
}
