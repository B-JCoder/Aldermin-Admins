"use client";

import React, { useState } from "react";
import { GlassCard } from "@/components/cards/GlassCard";
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
import {
  FaUserPlus,
  FaGraduationCap,
  FaUserAlt,
  FaPhoneAlt,
  FaHospitalSymbol,
  FaUsers,
  FaFileAlt,
  FaSave,
} from "react-icons/fa";
import { cn } from "@/lib/utils";

export function StudentOnboarding() {
  const [activeSegment, setActiveSegment] = useState("academic");

  const segments = [
    { id: "academic", label: "Academic", icon: <FaGraduationCap /> },
    { id: "personal", label: "Personal", icon: <FaUserAlt /> },
    { id: "contact", label: "Contact", icon: <FaPhoneAlt /> },
    { id: "medical", label: "Medical", icon: <FaHospitalSymbol /> },
    { id: "parents", label: "Family", icon: <FaUsers /> },
    { id: "guardian", label: "Guardian", icon: <FaUserPlus /> },
    { id: "additional", label: "Extended", icon: <FaFileAlt /> },
  ];

  return (
    <div className="pb-8">
      <GlassCard className="mb-8 p-1.5 flex flex-wrap gap-1">
        {segments.map((seg) => (
          <button
            key={seg.id}
            onClick={() => setActiveSegment(seg.id)}
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
              activeSegment === seg.id
                ? "bg-secondary text-white shadow-md"
                : "text-muted-foreground hover:bg-secondary/10 hover:text-secondary"
            )}
          >
            {seg.icon}
            <span className="hidden lg:inline">{seg.label}</span>
          </button>
        ))}
      </GlassCard>

      <form className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <GlassCard className="p-8">
            {activeSegment === "academic" && (
              <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-4 text-xs font-black text-muted-foreground uppercase tracking-widest">
                  <span className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
                    01
                  </span>
                  Institutional Placement
                  <div className="h-[1px] flex-1 bg-secondary/10"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black text-muted-foreground uppercase ml-2">
                      Session Year <span className="text-secondary">*</span>
                    </Label>
                    <Select>
                      <SelectTrigger className="w-full bg-white/50 border-white/40 h-12 rounded-xl text-xs font-bold">
                        <SelectValue placeholder="2023 - 2024" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="23-24">2023 - 2024</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black text-muted-foreground uppercase ml-2">
                      Grade / Class <span className="text-secondary">*</span>
                    </Label>
                    <Select>
                      <SelectTrigger className="w-full bg-white/50 border-white/40 h-12 rounded-xl text-xs font-bold">
                        <SelectValue placeholder="Class 10" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">Class 10</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black text-muted-foreground uppercase ml-2">
                      Sectional Unit <span className="text-secondary">*</span>
                    </Label>
                    <Select>
                      <SelectTrigger className="w-full bg-white/50 border-white/40 h-12 rounded-xl text-xs font-bold">
                        <SelectValue placeholder="A" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A">A</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black text-muted-foreground uppercase ml-2">
                      Admission No.
                    </Label>
                    <Input
                      className="w-full bg-secondary/5 border-secondary/20 rounded-xl py-6 text-xs font-black text-secondary uppercase tracking-widest placeholder:text-secondary/30"
                      placeholder="SIS-2023-..."
                    />
                  </div>
                </div>
              </section>
            )}

            {activeSegment === "personal" && (
              <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-4 text-xs font-black text-muted-foreground uppercase tracking-widest">
                  <span className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
                    02
                  </span>
                  Persona Details
                  <div className="h-[1px] flex-1 bg-secondary/10"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black text-muted-foreground uppercase ml-2">
                      Legal First Name <span className="text-secondary">*</span>
                    </Label>
                    <Input className="w-full bg-white/50 border-white/40 py-6 text-xs font-bold" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black text-muted-foreground uppercase ml-2">
                      Legal Last Name <span className="text-secondary">*</span>
                    </Label>
                    <Input className="w-full bg-white/50 border-white/40 py-6 text-xs font-bold" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black text-muted-foreground uppercase ml-2">
                      Birth Date <span className="text-secondary">*</span>
                    </Label>
                    <Input
                      type="date"
                      className="w-full bg-white/50 border-white/40 py-6 text-xs font-bold"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black text-muted-foreground uppercase ml-2">
                      Gender Identity <span className="text-secondary">*</span>
                    </Label>
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        type="button"
                        variant="secondary"
                        className="py-6 rounded-xl text-[10px] font-black uppercase tracking-widest"
                      >
                        Male
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="py-6 rounded-xl border-white/40 bg-white/30 text-muted-foreground text-[10px] font-black uppercase tracking-widest hover:bg-white/50"
                      >
                        Female
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {activeSegment !== "academic" && activeSegment !== "personal" && (
              <div className="py-20 text-center space-y-4">
                <div className="text-6xl text-secondary/20 flex justify-center">
                  {segments.find((s) => s.id === activeSegment)?.icon}
                </div>
                <div className="text-xs font-black text-muted-foreground uppercase tracking-[0.3em]">
                  Segment {activeSegment} UI Layer Initialized
                </div>
              </div>
            )}
          </GlassCard>
        </div>

        {/* Side Actions & Overview */}
        <div className="lg:col-span-4 space-y-8">
          <GlassCard className="bg-secondary text-white p-8 relative overflow-hidden group border-0">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700"></div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-50 mb-8">
              Registration Status
            </h4>
            <div className="space-y-6">
              <div>
                <div className="text-3xl font-black italic tracking-tighter">
                  Profile Not Finalized
                </div>
                <div className="text-[10px] font-bold text-white/70 mt-2 uppercase tracking-widest">
                  Step 1 of 7: {activeSegment}
                </div>
              </div>
              <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-white w-1/7"></div>
              </div>
              <Button className="w-full bg-white text-secondary hover:bg-white/90 rounded-2xl py-6 text-xs font-black uppercase tracking-widest shadow-xl">
                <FaSave size={14} className="mr-2" />
                Commit Archive
              </Button>
            </div>
          </GlassCard>

          <GlassCard className="p-8 space-y-6">
            <h4 className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">
              Patron Portrait
            </h4>
            <div className="aspect-square bg-secondary/5 rounded-[2rem] border-4 border-dashed border-secondary/10 flex flex-col items-center justify-center text-secondary/30 gap-4 group cursor-pointer hover:border-secondary/30 hover:bg-secondary/10 transition-all">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg border border-white/40 flex items-center justify-center text-secondary/20 group-hover:text-secondary transition-colors">
                <FaUserAlt size={32} />
              </div>
              <div className="text-[9px] font-black uppercase tracking-widest text-secondary/50">
                Upload Digital ISO
              </div>
            </div>
          </GlassCard>
        </div>
      </form>
    </div>
  );
}
