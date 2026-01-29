"use client";

import React from "react";
import { AdminCard } from "@/components/common/AdminCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  FaFilter,
  FaIdCard,
  FaPlus,
  FaUser,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export function MemberForm() {
  return (
    <AdminCard className="p-8 h-fit sticky top-8">
      <h4 className="mb-8 text-xs font-semibold text-gray-500   leading-none flex items-center justify-between">
        Induct New Member
        <div className="h-1 w-12 bg-secondary/20 rounded-full"></div>
      </h4>

      <form className="space-y-6">
        <div className="space-y-1">
          <Label className="text-[10px] font-semibold text-gray-500   ml-1">
            Full Name <span className="text-rose-500">*</span>
          </Label>
          <div className="relative">
            <FaUser
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500/50"
              size={10}
            />
            <Input
              type="text"
              className="w-full rounded-2xl border-border/50 bg-secondary/5 pl-10 h-10 text-xs font-bold focus:ring-secondary/20 shadow-sm placeholder:text-gray-500/50"
              placeholder="e.g. John Doe"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label className="text-[10px] font-semibold text-gray-500   ml-1">
              Membership Modality <span className="text-rose-500">*</span>
            </Label>
            <div className="relative">
              <FaFilter
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500/50"
                size={10}
              />
              <Select>
                <SelectTrigger className="w-full rounded-2xl border-border/50 bg-secondary/5 pl-10 h-10 text-[10px] font-bold focus:ring-secondary/20 text-foreground">
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent className="rounded-xl border-border/50">
                  <SelectItem value="student">Student Archetype</SelectItem>
                  <SelectItem value="staff">Staff Archetype</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-1">
            <Label className="text-[10px] font-semibold text-gray-500   ml-1">
              Industrial Member ID <span className="text-rose-500">*</span>
            </Label>
            <div className="relative">
              <FaIdCard
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500/50"
                size={10}
              />
              <Input
                type="text"
                className="w-full rounded-2xl border-border/50 bg-secondary/5 pl-10 h-10 text-[10px]  font-bold focus:ring-secondary/20 shadow-sm placeholder:text-gray-500/50"
                placeholder="e.g. LIB-001"
                required
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label className="text-[10px] font-semibold text-gray-500   ml-1">
              Email Address
            </Label>
            <div className="relative">
              <FaEnvelope
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500/50"
                size={10}
              />
              <Input
                type="email"
                className="w-full rounded-2xl border-border/50 bg-secondary/5 pl-10 h-10 text-[10px] font-bold focus:ring-secondary/20 shadow-sm placeholder:text-gray-500/50"
                placeholder="e.g. john@academy.edu"
              />
            </div>
          </div>
          <div className="space-y-1">
            <Label className="text-[10px] font-semibold text-gray-500   ml-1">
              Mobile Number
            </Label>
            <div className="relative">
              <FaPhone
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500/50"
                size={10}
              />
              <Input
                type="text"
                className="w-full rounded-2xl border-border/50 bg-secondary/5 pl-10 h-10 text-[10px] font-bold focus:ring-secondary/20 shadow-sm placeholder:text-gray-500/50"
                placeholder="e.g. +1 234..."
              />
            </div>
          </div>
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            className="w-full relative overflow-hidden rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 border-b-4 border-primary/20 hover:border-b-0 hover:translate-y-0.5 active:border-b-0 active:translate-y-1 transition-all shadow-lg text-[10px] font-semibold  tracking-[0.2em] py-6"
          >
            <div className="relative z-10 flex items-center justify-center gap-2">
              <FaPlus /> Authorize Membership
            </div>
          </Button>
        </div>
      </form>
    </AdminCard>
  );
}
