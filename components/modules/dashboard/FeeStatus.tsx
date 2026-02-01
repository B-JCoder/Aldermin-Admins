"use client";

import React from "react";
import { AdminCard } from "@/components/common/AdminCard";
import { BiDotsVerticalRounded } from "react-icons/bi";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export function FeeStatus() {
  return (
    <AdminCard className="p-6 h-[400px] flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-6">
          <h6 className="font-semibold text-foreground text-sm  ">
            Fee Status
          </h6>
          <button>
            <BiDotsVerticalRounded
              size={20}
              className="text-gray-500 hover:text-foreground"
            />
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 rounded-xl border border-green-200 bg-green-50/50 backdrop-blur-sm shadow-sm transition-transform hover:scale-105">
            <Badge
              variant="outline"
              className="bg-green-100 text-green-700 border-green-200 font-bold  tracking-wider text-[10px]"
            >
              Paid
            </Badge>
            <strong className="text-green-800 text-lg font-semibold">
              $38,420
            </strong>
          </div>
          <div className="flex justify-between items-center p-4 rounded-xl border border-yellow-200 bg-yellow-50/50 backdrop-blur-sm shadow-sm transition-transform hover:scale-105">
            <Badge
              variant="outline"
              className="bg-yellow-100 text-yellow-700 border-yellow-200 font-bold  tracking-wider text-[10px]"
            >
              Pending
            </Badge>
            <strong className="text-yellow-800 text-lg font-semibold">
              $6,780
            </strong>
          </div>
          <div className="flex justify-between items-center p-4 rounded-xl border border-red-200 bg-red-50/50 backdrop-blur-sm shadow-sm transition-transform hover:scale-105">
            <Badge
              variant="outline"
              className="bg-red-100 text-red-700 border-red-200 font-bold  tracking-wider text-[10px]"
            >
              Overdue
            </Badge>
            <strong className="text-red-800 text-lg font-semibold">
              $1,450
            </strong>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Select>
          <SelectTrigger className="w-full bg-white border-gray-200 text-xs font-bold">
            <SelectValue placeholder="Annual" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="annual">Annual</SelectItem>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2024">2024</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </AdminCard>
  );
}
