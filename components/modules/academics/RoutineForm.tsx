"use client";

import React from "react";
import { AdminCard } from "@/components/common/AdminCard";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  FaCheck,
  FaCalendarDay,
  FaClock,
  FaBookOpen,
  FaUserTie,
  FaDoorClosed,
  FaUsers,
  FaLayerGroup,
} from "react-icons/fa";

interface RoutineFormProps {
  formData: any;
  setFormData: (data: any) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export function RoutineForm({
  formData,
  setFormData,
  handleSubmit,
}: RoutineFormProps) {
  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <AdminCard className="p-8 h-full bg-gradient-to-br from-white/60 to-sidebar/5">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-sm font-bold text-gray-500   flex items-center gap-2">
          Add Routine Entry
          <div className="h-1 w-12 bg-sidebar/20 rounded-full"></div>
        </h4>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 flex-1">
        {/* Class & Section Row */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className=" text-[10px]  text-gray-500 font-bold">
              Class <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.class}
              onValueChange={(val) => handleChange("class", val)}
            >
              <SelectTrigger className="bg-white backdrop-blur-sm border-gray-200 focus:bg-white transition-all font-medium">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Class 1">Class 1</SelectItem>
                <SelectItem value="Class 2">Class 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className=" text-[10px]  text-gray-500 font-bold">
              Section <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.section}
              onValueChange={(val) => handleChange("section", val)}
            >
              <SelectTrigger className="bg-white backdrop-blur-sm border-gray-200 focus:bg-white transition-all font-medium">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="A">A</SelectItem>
                <SelectItem value="B">B</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Day */}
        <div className="space-y-2">
          <Label className=" text-[10px]  text-gray-500 font-bold">
            Day <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <FaCalendarDay
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 z-10"
              size={14}
            />
            <Select
              value={formData.day}
              onValueChange={(val) => handleChange("day", val)}
            >
              <SelectTrigger className="pl-10 bg-white backdrop-blur-sm border-gray-200 focus:bg-white transition-all font-medium">
                <SelectValue placeholder="Select Day" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Monday">Monday</SelectItem>
                <SelectItem value="Tuesday">Tuesday</SelectItem>
                <SelectItem value="Wednesday">Wednesday</SelectItem>
                <SelectItem value="Thursday">Thursday</SelectItem>
                <SelectItem value="Friday">Friday</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Time Range */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className=" text-[10px]  text-gray-500 font-bold">
              Start Time
            </Label>
            <Input
              type="time"
              value={formData.startTime}
              onChange={(e) => handleChange("startTime", e.target.value)}
              className="bg-white backdrop-blur-sm border-gray-200 focus:bg-white transition-all font-medium"
            />
          </div>
          <div className="space-y-2">
            <Label className=" text-[10px]  text-gray-500 font-bold">
              End Time
            </Label>
            <Input
              type="time"
              value={formData.endTime}
              onChange={(e) => handleChange("endTime", e.target.value)}
              className="bg-white backdrop-blur-sm border-gray-200 focus:bg-white transition-all font-medium"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="space-y-2">
          <Label className=" text-[10px]  text-gray-500 font-bold">
            Subject <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <FaBookOpen
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 z-10"
              size={14}
            />
            <Select
              value={formData.subject}
              onValueChange={(val) => handleChange("subject", val)}
            >
              <SelectTrigger className="pl-10 bg-white backdrop-blur-sm border-gray-200 focus:bg-white transition-all font-medium">
                <SelectValue placeholder="Select Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Math">Math</SelectItem>
                <SelectItem value="English">English</SelectItem>
                <SelectItem value="Science">Science</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Teacher */}
        <div className="space-y-2">
          <Label className=" text-[10px]  text-gray-500 font-bold">
            Teacher <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <FaUserTie
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 z-10"
              size={14}
            />
            <Select
              value={formData.teacher}
              onValueChange={(val) => handleChange("teacher", val)}
            >
              <SelectTrigger className="pl-10 bg-white backdrop-blur-sm border-gray-200 focus:bg-white transition-all font-medium">
                <SelectValue placeholder="Select Teacher" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Sir Ahmed">Sir Ahmed</SelectItem>
                <SelectItem value="Ms. Sara">Ms. Sara</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Room */}
        <div className="space-y-2">
          <Label className=" text-[10px]  text-gray-500 font-bold">
            Room / Lab
          </Label>
          <div className="relative">
            <FaDoorClosed
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 z-10"
              size={14}
            />
            <Input
              placeholder="e.g. 101"
              value={formData.room}
              onChange={(e) => handleChange("room", e.target.value)}
              className="pl-10 bg-white backdrop-blur-sm border-gray-200 focus:bg-white transition-all font-medium"
            />
          </div>
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            className="w-full py-6 text-xs font-semibold  tracking-[0.2em] bg-secondary hover:bg-secondary/90 text-white shadow-lg transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-2">
              <FaCheck className="" />
              Save Routine
            </div>
          </Button>
        </div>
      </form>
    </AdminCard>
  );
}
