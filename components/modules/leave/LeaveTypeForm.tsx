"use client";

import React from "react";
import { AdminCard } from "@/components/common/AdminCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FaCheck } from "react-icons/fa";

export function LeaveTypeForm() {
  return (
    <AdminCard className="h-full flex flex-col bg-gradient-to-br from-white to-primary/5 border-primary/10">
      <div className="mb-6 flex items-center justify-between">
        <h4 className="text-xs font-semibold text-gray-500   leading-none">
          Create Classification
        </h4>
        <div className="h-1 w-12 bg-primary/20 rounded-full"></div>
      </div>

      <form className="space-y-4 flex-1">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-[10px] font-semibold text-gray-500   px-1">
              Type Name <span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              className="rounded-xl bg-white border-gray-200 focus:bg-white transition-all font-bold text-xs p-4 h-12"
              placeholder="e.g. Maternity Leave"
              required
            />
          </div>
          <div className="space-y-2">
            <Label className="text-[10px] font-semibold text-gray-500   px-1">
              Short Code
            </Label>
            <Input
              type="text"
              className="rounded-xl bg-white border-gray-200 focus:bg-white transition-all  font-bold text-xs p-4 h-12"
              placeholder="e.g. ML"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-[10px] font-semibold text-gray-500   px-1">
              Description
            </Label>
            <Textarea
              className="rounded-xl bg-white border-gray-200 focus:bg-white transition-all font-bold text-xs p-4 min-h-[80px] resize-none"
              placeholder="Brief explanation..."
            />
          </div>
        </div>

        <div className="pt-4 mt-auto">
          <Button
            type="submit"
            className="w-full rounded-xl bg-primary text-primary-foreground font-semibold text-[10px]  tracking-[0.2em] h-12 shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
          >
            <FaCheck size={12} />
            Save Classification
          </Button>
        </div>
      </form>
    </AdminCard>
  );
}
