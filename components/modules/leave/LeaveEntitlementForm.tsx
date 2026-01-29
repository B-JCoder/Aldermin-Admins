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
import { FaCheck } from "react-icons/fa";

export function LeaveEntitlementForm() {
  return (
    <AdminCard className="h-full flex flex-col bg-gradient-to-br from-white to-secondary/5 border-secondary/10">
      <div className="mb-6 flex items-center justify-between">
        <h4 className="text-xs font-semibold text-gray-500   leading-none">
          Define Quota
        </h4>
        <div className="h-1 w-12 bg-secondary/20 rounded-full"></div>
      </div>

      <form className="space-y-4 flex-1">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-[10px] font-semibold text-gray-500   px-1">
              Target Role
            </Label>
            <Select>
              <SelectTrigger className="w-full rounded-xl bg-white border-gray-200 focus:bg-white transition-all font-bold text-xs h-12">
                <SelectValue placeholder="Select Role..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="teacher">Teacher</SelectItem>
                <SelectItem value="accountant">Accountant</SelectItem>
                <SelectItem value="librarian">Librarian</SelectItem>
                <SelectItem value="admin">Admin Staff</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-[10px] font-semibold text-gray-500   px-1">
              Leave Type
            </Label>
            <Select>
              <SelectTrigger className="w-full rounded-xl bg-white border-gray-200 focus:bg-white transition-all font-bold text-xs h-12">
                <SelectValue placeholder="Select Type..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sick">Sick Leave</SelectItem>
                <SelectItem value="casual">Casual Leave</SelectItem>
                <SelectItem value="maternity">Maternity Leave</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-[10px] font-semibold text-gray-500   px-1">
              Days per Year
            </Label>
            <Input
              type="number"
              className="rounded-xl bg-white border-gray-200 focus:bg-white transition-all font-bold text-xs p-4 h-12"
              placeholder="e.g. 12"
            />
          </div>
        </div>

        <div className="pt-4 mt-auto">
          <Button
            type="submit"
            className="w-full rounded-xl bg-foreground text-background font-semibold text-[10px]  tracking-[0.2em] h-12 shadow-lg hover:shadow-xl hover:bg-foreground/90 transition-all flex items-center justify-center gap-2"
          >
            <FaCheck size={12} className="" />
            Assign Quota
          </Button>
        </div>
      </form>
    </AdminCard>
  );
}
