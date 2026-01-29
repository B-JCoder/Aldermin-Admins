"use client";

import React, { useState } from "react";
import { AdminCard } from "@/components/common/AdminCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaPlus } from "react-icons/fa6";

interface GroupFormProps {
  onAddGroup: (name: string) => void;
}

export function GroupForm({ onAddGroup }: GroupFormProps) {
  const [groupName, setGroupName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (groupName.trim()) {
      onAddGroup(groupName);
      setGroupName("");
    }
  };

  return (
    <AdminCard className="p-8 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-xs font-semibold text-gray-500   leading-none">
          Create New Assembly
        </h4>
        <div className="h-1 w-12 bg-secondary/20 rounded-full"></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 flex-1">
        <div>
          <Label className="block text-xs font-semibold text-gray-500   mb-2 px-1">
            Assembly Name <span className="text-destructive">*</span>
          </Label>
          <Input
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            className="w-full bg-white border-gray-200 py-6 text-xs font-bold"
            placeholder="e.g. Chess Federation"
            required
          />
        </div>

        <div className="pt-4 mt-auto">
          <Button
            type="submit"
            variant="default"
            className="w-full py-6 text-xs font-semibold   shadow-lg flex items-center justify-center gap-2"
          >
            <FaPlus className="text-sm" />
            Finalize Assembly
          </Button>
        </div>
      </form>
    </AdminCard>
  );
}
