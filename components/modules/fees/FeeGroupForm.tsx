"use client";

import React from "react";
import { AdminCard } from "@/components/common/AdminCard";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaFolderOpen, FaSave } from "react-icons/fa";

interface FeeGroupFormProps {
  formData: {
    groupName: string;
    description: string;
  };
  setFormData: (data: any) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function FeeGroupForm({
  formData,
  setFormData,
  onSubmit,
}: FeeGroupFormProps) {
  return (
    <AdminCard className="p-8 h-full bg-gradient-to-br from-white/60 to-secondary/5">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-sm font-bold text-gray-500   flex items-center gap-2">
          Create New Group
          <div className="h-1 w-12 bg-secondary/20 rounded-full"></div>
        </h4>
      </div>

      <form onSubmit={onSubmit} className="space-y-6 flex-1">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className=" text-[10px]  text-gray-500 font-bold">
              Group Name <span className="text-secondary">*</span>
            </Label>
            <div className="relative">
              <FaFolderOpen
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500/50 z-10"
                size={14}
              />
              <Input
                placeholder="e.g. Science Lab Fees"
                value={formData.groupName}
                onChange={(e) =>
                  setFormData({ ...formData, groupName: e.target.value })
                }
                className="pl-10 bg-white backdrop-blur-sm border-gray-200 focus:bg-white transition-all font-medium py-6"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className=" text-[10px]  text-gray-500 font-bold">
              Description
            </Label>
            <Textarea
              placeholder="Detailed description of the fee group..."
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="bg-white backdrop-blur-sm border-gray-200 focus:bg-white transition-all font-medium min-h-[120px] resize-none"
            />
          </div>
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            className="w-full py-6 text-xs font-semibold  tracking-[0.2em] bg-secondary hover:bg-secondary/90 text-white shadow-lg transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-2">
              <FaSave className="" />
              Save Group
            </div>
          </Button>
        </div>
      </form>
    </AdminCard>
  );
}
