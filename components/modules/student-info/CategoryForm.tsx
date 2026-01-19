"use client";

import React, { useState } from "react";
import { GlassCard } from "@/components/cards/GlassCard";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaCheckCircle } from "react-icons/fa";

interface CategoryFormProps {
  onAddCategory: (name: string) => void;
}

export function CategoryForm({ onAddCategory }: CategoryFormProps) {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (categoryName.trim()) {
      onAddCategory(categoryName);
      setCategoryName("");
    }
  };

  return (
    <GlassCard className="p-8 h-full flex flex-col">
      <h4 className="mb-6 text-xs font-black text-muted-foreground uppercase tracking-widest leading-none flex items-center justify-between">
        Define Taxonomy
        <div className="h-1 w-12 bg-secondary/20 rounded-full"></div>
      </h4>

      <form onSubmit={handleSubmit} className="space-y-6 flex-1">
        <div>
          <Label className="block text-xs font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
            Category Designation <span className="text-destructive">*</span>
          </Label>
          <Input
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="w-full bg-white/50 backdrop-blur-sm border-white/40 font-bold focus:bg-white transition-all py-6"
            placeholder="e.g. Merit Scholarship"
            required
          />
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            variant="default"
            className="w-full py-6 text-xs font-black uppercase tracking-widest transition-all shadow-lg text-white"
          >
            <div className="flex items-center justify-center gap-2">
              <FaCheckCircle className="italic" />
              Initialize Record
            </div>
          </Button>
        </div>
      </form>
    </GlassCard>
  );
}
