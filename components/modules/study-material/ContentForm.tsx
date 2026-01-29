"use client";

import React from "react";
import { AdminCard } from "@/components/common/AdminCard";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FaCheck,
  FaCalendarAlt,
  FaCloudUploadAlt,
  FaLayerGroup,
  FaUsers,
  FaFileAlt,
} from "react-icons/fa";

export function ContentForm() {
  return (
    <AdminCard className="p-8 h-full bg-gradient-to-br from-white/60 to-sidebar/5">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-sm font-bold text-gray-500   flex items-center gap-2">
          Upload New Asset
          <div className="h-1 w-12 bg-sidebar/20 rounded-full"></div>
        </h4>
      </div>

      <form className="space-y-6 flex-1">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className=" text-[10px]  text-gray-500 font-bold">
              Content Title <span className="text-red-500">*</span>
            </Label>
            <Input
              placeholder="e.g. Midterm Syllabus"
              className="bg-white backdrop-blur-sm border-gray-200 focus:bg-white transition-all font-medium py-6"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className=" text-[10px]  text-gray-500 font-bold">
                Content Type <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <FaLayerGroup
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 z-10"
                  size={14}
                />
                <Select>
                  <SelectTrigger className="pl-10 bg-white backdrop-blur-sm border-gray-200 focus:bg-white transition-all py-6">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="assignment">Assignment</SelectItem>
                    <SelectItem value="syllabus">Syllabus</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label className=" text-[10px]  text-gray-500 font-bold">
                Target Audience
              </Label>
              <div className="relative">
                <FaUsers
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 z-10"
                  size={14}
                />
                <Select>
                  <SelectTrigger className="pl-10 bg-white backdrop-blur-sm border-gray-200 focus:bg-white transition-all py-6">
                    <SelectValue placeholder="Audience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Classes</SelectItem>
                    <SelectItem value="class-10">Class 10</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label className=" text-[10px]  text-gray-500 font-bold">
              Description
            </Label>
            <Input
              placeholder="Brief description..."
              className="bg-white backdrop-blur-sm border-gray-200 focus:bg-white transition-all font-medium py-6"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className=" text-[10px]  text-gray-500 font-bold">
                Publish Date
              </Label>
              <div className="relative">
                <FaCalendarAlt
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  size={14}
                />
                <Input
                  type="date"
                  className="pl-10 bg-white backdrop-blur-sm border-gray-200 focus:bg-white transition-all font-medium py-6"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className=" text-[10px]  text-gray-500 font-bold">
                Attachment
              </Label>
              <div className="relative">
                <Input type="file" className="hidden" id="content-file" />
                <Label
                  htmlFor="content-file"
                  className="w-full h-[52px] rounded-xl border-dashed border-2 border-slate-200 p-4 pl-10 bg-slate-50/50 hover:bg-white cursor-pointer transition-all flex items-center text-[10px] font-bold   text-gray-500 overflow-hidden"
                >
                  <FaFileAlt
                    className="mr-2 text-secondary shrink-0"
                    size={16}
                  />
                  <span className="truncate">Choose File</span>
                </Label>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            className="w-full py-6 text-xs font-semibold  tracking-[0.2em] bg-secondary hover:bg-secondary/90 text-white shadow-lg transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-2">
              <FaCloudUploadAlt className="" />
              Upload Asset
            </div>
          </Button>
        </div>
      </form>
    </AdminCard>
  );
}
