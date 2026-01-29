"use client";

import React from "react";
import { AdminCard } from "@/components/common/AdminCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaLaptopCode, FaPlus } from "react-icons/fa";

interface OnlineExamFormProps {
  form: any;
  setForm: (value: any) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function OnlineExamForm({
  form,
  setForm,
  onSubmit,
}: OnlineExamFormProps) {
  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <AdminCard className="p-6 h-full flex flex-col overflow-auto">
      <div className="flex items-center gap-2 mb-6 border-b border-border/50 pb-4">
        <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
          <FaLaptopCode size={16} />
        </div>
        <h3 className="text-sm font-semibold text-foreground  tracking-wider">
          Configure Online Exam
        </h3>
      </div>

      <form onSubmit={onSubmit} className="space-y-4 flex-1">
        <div>
          <Label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1">
            Exam Title <span className="text-rose-500">*</span>
          </Label>
          <Input
            className="w-full rounded-xl border-border/50 bg-secondary/5 h-10 text-xs font-bold focus:ring-secondary/20"
            placeholder="e.g. Mid-Term Physics Online"
            value={form.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />
        </div>

        <div>
          <Label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1">
            Class <span className="text-rose-500">*</span>
          </Label>
          <Select
            value={form.className}
            onValueChange={(val) => handleChange("className", val)}
          >
            <SelectTrigger className="w-full rounded-xl border-border/50 bg-secondary/5 h-10 text-xs font-bold focus:ring-secondary/20">
              <SelectValue placeholder="Select Class" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-border/50">
              <SelectItem value="Class 9">Class 9</SelectItem>
              <SelectItem value="Class 10">Class 10</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1">
            Subject <span className="text-rose-500">*</span>
          </Label>
          <Select
            value={form.subject}
            onValueChange={(val) => handleChange("subject", val)}
          >
            <SelectTrigger className="w-full rounded-xl border-border/50 bg-secondary/5 h-10 text-xs font-bold focus:ring-secondary/20">
              <SelectValue placeholder="Select Subject" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-border/50">
              <SelectItem value="Physics">Physics</SelectItem>
              <SelectItem value="Chemistry">Chemistry</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1">
              Date <span className="text-rose-500">*</span>
            </Label>
            <Input
              type="date"
              className="w-full rounded-xl border-border/50 bg-white h-10 text-xs font-bold focus:ring-secondary/20"
              value={form.date}
              onChange={(e) => handleChange("date", e.target.value)}
            />
          </div>
          <div>
            <Label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1">
              End Date <span className="text-rose-500">*</span>
            </Label>
            <Input
              type="date"
              className="w-full rounded-xl border-border/50 bg-white h-10 text-xs font-bold focus:ring-secondary/20"
              value={form.endDate}
              onChange={(e) => handleChange("endDate", e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1">
              Duration (Min) <span className="text-rose-500">*</span>
            </Label>
            <Input
              type="number"
              className="w-full rounded-xl border-border/50 bg-white h-10 text-xs font-bold focus:ring-secondary/20"
              placeholder="e.g. 60"
              value={form.duration}
              onChange={(e) => handleChange("duration", e.target.value)}
            />
          </div>
          <div>
            <Label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1">
              Pass (%) <span className="text-rose-500">*</span>
            </Label>
            <Input
              type="number"
              className="w-full rounded-xl border-border/50 bg-white h-10 text-xs font-bold focus:ring-secondary/20"
              placeholder="e.g. 40"
              value={form.percentage}
              onChange={(e) => handleChange("percentage", e.target.value)}
            />
          </div>
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            className="w-full bg-secondary text-white rounded-xl py-6 text-xs font-semibold  tracking-[0.2em] hover:bg-secondary/90 active:translate-y-1 transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <FaPlus size={12} />
            Schedule Exam
          </Button>
        </div>
      </form>
    </AdminCard>
  );
}
