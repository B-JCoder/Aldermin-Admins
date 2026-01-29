"use client";

import React from "react";
import { AdminCard } from "@/components/common/AdminCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaLayerGroup, FaPlus } from "react-icons/fa";

interface QuestionGroupFormProps {
  title: string;
  setTitle: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function QuestionGroupForm({
  title,
  setTitle,
  onSubmit,
}: QuestionGroupFormProps) {
  return (
    <AdminCard className="p-6 h-full flex flex-col">
      <div className="flex items-center gap-2 mb-6 border-b border-border/50 pb-4">
        <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
          <FaLayerGroup size={16} />
        </div>
        <h3 className="text-sm font-semibold text-foreground  tracking-wider">
          Add Question Group
        </h3>
      </div>

      <form onSubmit={onSubmit} className="space-y-6 flex-1 flex flex-col">
        <div>
          <Label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1">
            Group Title <span className="text-rose-500">*</span>
          </Label>
          <Input
            type="text"
            className="w-full rounded-xl border-border/50 bg-secondary/5 h-12 text-sm font-bold focus:ring-secondary/20 transition-all placeholder:text-gray-500/40"
            placeholder="e.g. Science Group A"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mt-auto">
          <Button
            type="submit"
            className="w-full bg-secondary text-white rounded-xl py-6 text-xs font-semibold  tracking-[0.2em] hover:bg-secondary/90 active:translate-y-1 transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <FaPlus size={12} />
            Create Group
          </Button>
        </div>
      </form>
    </AdminCard>
  );
}
