"use client";

import React, { useState } from "react";
import { AdminCard } from "@/components/common/AdminCard";
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
    <AdminCard className="p-8 h-full flex flex-col">
      <h4 className="mb-6 text-xs font-semibold text-gray-500   leading-none flex items-center justify-between">
        Define Taxonomy
        <div className="h-1 w-12 bg-secondary/20 rounded-full"></div>
      </h4>

      <form onSubmit={handleSubmit} className="space-y-6 flex-1">
        <div>
          <Label className="block text-xs font-semibold text-gray-500   mb-2 px-1">
            Category Designation <span className="text-destructive">*</span>
          </Label>
          <Input
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="w-full bg-white backdrop-blur-sm border-gray-200 font-bold focus:bg-white transition-all py-6"
            placeholder="e.g. Merit Scholarship"
            required
          />
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            variant="default"
            className="w-full py-6 text-xs font-semibold   transition-all shadow-lg text-white"
          >
            <div className="flex items-center justify-center gap-2">
              <FaCheckCircle className="" />
              Initialize Record
            </div>
          </Button>
        </div>
      </form>
    </AdminCard>
  );
}
