"use client";

import React from "react";
import { GlassCard } from "@/components/cards/GlassCard";
import { Label } from "@/components/ui/label";
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
  FaChalkboardTeacher,
  FaUsers,
  FaLayerGroup,
} from "react-icons/fa";

interface AssignTeacherFormProps {
  selectedClass: string;
  setSelectedClass: (val: string) => void;
  selectedSection: string;
  setSelectedSection: (val: string) => void;
  selectedTeacher: string;
  setSelectedTeacher: (val: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  classes: string[];
  sections: string[];
  teachers: string[];
}

export function AssignTeacherForm({
  selectedClass,
  setSelectedClass,
  selectedSection,
  setSelectedSection,
  selectedTeacher,
  setSelectedTeacher,
  handleSubmit,
  classes,
  sections,
  teachers,
}: AssignTeacherFormProps) {
  return (
    <GlassCard className="p-8 h-full bg-gradient-to-br from-white/60 to-sidebar/5">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
          Add Assignment
          <div className="h-1 w-12 bg-sidebar/20 rounded-full"></div>
        </h4>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 flex-1">
        <div className="space-y-4">
          {/* Class Selection */}
          <div className="space-y-2">
            <Label className="uppercase text-[10px] tracking-widest text-muted-foreground font-bold">
              Class <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <FaUsers
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10"
                size={14}
              />
              <Select value={selectedClass} onValueChange={setSelectedClass}>
                <SelectTrigger className="pl-10 bg-white/50 backdrop-blur-sm border-white/40 focus:bg-white transition-all py-6 font-medium">
                  <SelectValue placeholder="Select Class" />
                </SelectTrigger>
                <SelectContent>
                  {classes.map((cls) => (
                    <SelectItem key={cls} value={cls}>
                      {cls}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Section Selection */}
          <div className="space-y-2">
            <Label className="uppercase text-[10px] tracking-widest text-muted-foreground font-bold">
              Section <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <FaLayerGroup
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10"
                size={14}
              />
              <Select
                value={selectedSection}
                onValueChange={setSelectedSection}
              >
                <SelectTrigger className="pl-10 bg-white/50 backdrop-blur-sm border-white/40 focus:bg-white transition-all py-6 font-medium">
                  <SelectValue placeholder="Select Section" />
                </SelectTrigger>
                <SelectContent>
                  {sections.map((sec) => (
                    <SelectItem key={sec} value={sec}>
                      {sec}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Teacher Selection */}
          <div className="space-y-2">
            <Label className="uppercase text-[10px] tracking-widest text-muted-foreground font-bold">
              Teacher <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <FaChalkboardTeacher
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10"
                size={14}
              />
              <Select
                value={selectedTeacher}
                onValueChange={setSelectedTeacher}
              >
                <SelectTrigger className="pl-10 bg-white/50 backdrop-blur-sm border-white/40 focus:bg-white transition-all py-6 font-medium">
                  <SelectValue placeholder="Select Teacher" />
                </SelectTrigger>
                <SelectContent>
                  {teachers.map((teacher) => (
                    <SelectItem key={teacher} value={teacher}>
                      {teacher}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            className="w-full py-6 text-xs font-black uppercase tracking-[0.2em] bg-secondary hover:bg-secondary/90 text-white shadow-lg transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-2">
              <FaCheck className="italic" />
              Assign Teacher
            </div>
          </Button>
        </div>
      </form>
    </GlassCard>
  );
}
