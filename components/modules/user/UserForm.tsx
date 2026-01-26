"use client";

import React from "react";
import { GlassCard } from "@/components/cards/GlassCard";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPlus, FaEnvelope, FaLock } from "react-icons/fa";

export function UserForm() {
  return (
    <GlassCard className="p-8 h-full bg-gradient-to-br from-white to-secondary/5">
      <h4 className="mb-6 text-xs font-black text-gray-400 uppercase tracking-widest leading-none flex items-center justify-between">
        Register User
        <div className="h-1 w-12 bg-secondary/20 rounded-full"></div>
      </h4>

      <form className="space-y-4 flex-1">
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <Label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              placeholder="e.g. John Doe"
              className="w-full rounded-2xl border-white/40 bg-white/50 p-4 text-xs font-bold focus:ring-2 focus:ring-secondary/20 outline-none transition-all shadow-sm h-12"
              required
            />
          </div>
          <div className="space-y-2">
            <Label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">
              Email Address <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <FaEnvelope
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 z-10"
                size={12}
              />
              <Input
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-2xl border-white/40 bg-white/50 p-4 pl-10 text-xs font-bold focus:ring-2 focus:ring-secondary/20 outline-none transition-all shadow-sm h-12"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">
                System Role
              </Label>
              <Select>
                <SelectTrigger className="w-full rounded-2xl border-white/40 bg-white/50 p-4 text-xs font-bold focus:ring-2 focus:ring-secondary/20 outline-none transition-all shadow-sm h-12">
                  <SelectValue placeholder="Select Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="teacher">Teacher</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="accountant">Accountant</SelectItem>
                  <SelectItem value="librarian">Librarian</SelectItem>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="parent">Parent</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">
                Password
              </Label>
              <div className="relative">
                <FaLock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 z-10"
                  size={12}
                />
                <Input
                  type="password"
                  placeholder="••••••"
                  className="w-full rounded-2xl border-white/40 bg-white/50 p-4 pl-10 text-xs font-bold focus:ring-2 focus:ring-secondary/20 outline-none transition-all shadow-sm h-12"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <Button className="w-full relative overflow-hidden rounded-2xl bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] transition-all shadow-xl shadow-secondary/10">
            <div className="relative z-10 flex items-center justify-center gap-2">
              <FaPlus className="italic" />
              Create Account
            </div>
          </Button>
        </div>
      </form>
    </GlassCard>
  );
}
