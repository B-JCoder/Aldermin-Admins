"use client";

import React from "react";
import { GlassCard } from "@/components/cards/GlassCard";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaCheck, FaMoneyCheckAlt } from "react-icons/fa";

interface FeeTypeFormProps {
  formData: {
    typeName: string;
    feeGroup: string;
    description: string;
  };
  setFormData: (data: any) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function FeeTypeForm({
  formData,
  setFormData,
  onSubmit,
}: FeeTypeFormProps) {
  return (
    <GlassCard className="p-8 h-full bg-gradient-to-br from-white/60 to-secondary/5">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
          Add New Fee Type
          <div className="h-1 w-12 bg-secondary/20 rounded-full"></div>
        </h4>
      </div>

      <form onSubmit={onSubmit} className="space-y-6 flex-1">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="uppercase text-[10px] tracking-widest text-muted-foreground font-bold">
              Type Name <span className="text-secondary">*</span>
            </Label>
            <div className="relative">
              <FaMoneyCheckAlt
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/50 z-10"
                size={14}
              />
              <Input
                placeholder="e.g. Registration Fee"
                value={formData.typeName}
                onChange={(e) =>
                  setFormData({ ...formData, typeName: e.target.value })
                }
                className="pl-10 bg-white/50 backdrop-blur-sm border-white/40 focus:bg-white transition-all font-medium py-6"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="uppercase text-[10px] tracking-widest text-muted-foreground font-bold">
              Fees Group <span className="text-secondary">*</span>
            </Label>
            <Select
              value={formData.feeGroup}
              onValueChange={(val) =>
                setFormData({ ...formData, feeGroup: val })
              }
            >
              <SelectTrigger className="bg-white/50 backdrop-blur-sm border-white/40 focus:bg-white transition-all py-6">
                <SelectValue placeholder="Select Group" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Fees</SelectItem>
                <SelectItem value="academic">Academic Fees</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="uppercase text-[10px] tracking-widest text-muted-foreground font-bold">
              Description
            </Label>
            <Textarea
              placeholder="Brief details..."
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="bg-white/50 backdrop-blur-sm border-white/40 focus:bg-white transition-all font-medium min-h-[100px] resize-none"
            />
          </div>
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            className="w-full py-6 text-xs font-black uppercase tracking-[0.2em] bg-secondary hover:bg-secondary/90 text-white shadow-lg transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-2">
              <FaCheck className="italic" />
              Save Fee Type
            </div>
          </Button>
        </div>
      </form>
    </GlassCard>
  );
}
