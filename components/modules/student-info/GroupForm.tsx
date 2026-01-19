"use client";

import React, { useState } from "react";
import { GlassCard } from "@/components/cards/GlassCard";
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
    <GlassCard className="p-8 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
          Create New Assembly
        </h4>
        <div className="h-1 w-12 bg-secondary/20 rounded-full"></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 flex-1">
        <div>
          <Label className="block text-xs font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
            Assembly Name <span className="text-destructive">*</span>
          </Label>
          <Input
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            className="w-full bg-white/50 border-white/40 py-6 text-xs font-bold"
            placeholder="e.g. Chess Federation"
            required
          />
        </div>

        <div className="pt-4 mt-auto">
          <Button
            type="submit"
            variant="default"
            className="w-full py-6 text-xs font-black uppercase tracking-widest shadow-lg flex items-center justify-center gap-2"
          >
            <FaPlus className="text-sm" />
            Finalize Assembly
          </Button>
        </div>
      </form>
    </GlassCard>
  );
}
