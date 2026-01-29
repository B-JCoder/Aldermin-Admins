"use client";

import React from "react";
import { AdminCard } from "@/components/common/AdminCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaDatabase, FaPlus } from "react-icons/fa";

interface QuestionBankFormProps {
  form: any;
  setForm: (value: any) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function QuestionBankForm({
  form,
  setForm,
  onSubmit,
}: QuestionBankFormProps) {
  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <AdminCard className="p-6 h-full flex flex-col overflow-auto">
      <div className="flex items-center gap-2 mb-6 border-b border-border/50 pb-4">
        <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
          <FaDatabase size={16} />
        </div>
        <h3 className="text-sm font-semibold text-foreground  tracking-wider">
          Add To Bank
        </h3>
      </div>

      <form onSubmit={onSubmit} className="space-y-4 flex-1">
        <div>
          <Label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1">
            Group <span className="text-rose-500">*</span>
          </Label>
          <Select
            value={form.group}
            onValueChange={(val) => handleChange("group", val)}
          >
            <SelectTrigger className="w-full rounded-xl border-border/50 bg-secondary/5 h-10 text-xs font-bold focus:ring-secondary/20">
              <SelectValue placeholder="Select Group" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-border/50">
              <SelectItem value="science">Science</SelectItem>
              <SelectItem value="arts">Arts</SelectItem>
            </SelectContent>
          </Select>
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
            Section <span className="text-rose-500">*</span>
          </Label>
          <Select
            value={form.section}
            onValueChange={(val) => handleChange("section", val)}
          >
            <SelectTrigger className="w-full rounded-xl border-border/50 bg-secondary/5 h-10 text-xs font-bold focus:ring-secondary/20">
              <SelectValue placeholder="Select Section" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-border/50">
              <SelectItem value="A">Section A</SelectItem>
              <SelectItem value="B">Section B</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1">
            Question Type <span className="text-rose-500">*</span>
          </Label>
          <Select
            value={form.type}
            onValueChange={(val) => handleChange("type", val)}
          >
            <SelectTrigger className="w-full rounded-xl border-border/50 bg-secondary/5 h-10 text-xs font-bold focus:ring-secondary/20">
              <SelectValue placeholder="Question Type" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-border/50">
              <SelectItem value="MCQ">MCQ</SelectItem>
              <SelectItem value="Descriptive">Descriptive</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1">
            Question Text <span className="text-rose-500">*</span>
          </Label>
          <Textarea
            className="w-full rounded-xl border-border/50 bg-white p-3 text-xs font-medium focus:ring-secondary/20 min-h-[80px] resize-none"
            placeholder="Type question here..."
            value={form.question}
            onChange={(e) => handleChange("question", e.target.value)}
          />
        </div>

        <div>
          <Label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1">
            Marks <span className="text-rose-500">*</span>
          </Label>
          <Input
            type="number"
            className="w-full rounded-xl border-border/50 bg-white h-10 text-xs font-bold focus:ring-secondary/20"
            placeholder="e.g. 5"
            value={form.marks}
            onChange={(e) => handleChange("marks", e.target.value)}
          />
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            className="w-full bg-secondary text-white rounded-xl py-6 text-xs font-semibold  tracking-[0.2em] hover:bg-secondary/90 active:translate-y-1 transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <FaPlus size={12} />
            Save Question
          </Button>
        </div>
      </form>
    </AdminCard>
  );
}
