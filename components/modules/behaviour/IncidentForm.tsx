"use client";

import React from "react";
import { GlassCard } from "@/components/cards/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FaBolt, FaStar } from "react-icons/fa";

export function IncidentForm() {
  return (
    <GlassCard className="p-8 h-full bg-gradient-to-br from-white/60 to-secondary/5">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
          Define Conduct Node
          <div className="h-1 w-12 bg-secondary/20 rounded-full"></div>
        </h4>
      </div>

      <form className="space-y-6 flex-1">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="uppercase text-[10px] tracking-widest text-muted-foreground font-bold">
              Designation <span className="text-secondary">*</span>
            </Label>
            <Input
              placeholder="Incident Title"
              className="rounded-2xl border-white/40 bg-white/50 backdrop-blur-sm p-4 text-xs font-bold focus:bg-white transition-all py-6"
            />
          </div>

          <div className="space-y-2">
            <Label className="uppercase text-[10px] tracking-widest text-muted-foreground font-bold">
              Merit Magnitude <span className="text-secondary">*</span>
            </Label>
            <div className="relative">
              <FaStar
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/50"
                size={12}
              />
              <Input
                type="number"
                placeholder="Points"
                className="rounded-2xl border-white/40 bg-white/50 backdrop-blur-sm p-4 pl-10 text-xs font-mono font-bold focus:bg-white transition-all py-6"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="uppercase text-[10px] tracking-widest text-muted-foreground font-bold">
              Qualitative Narrative
            </Label>
            <Textarea
              placeholder="Detailed scope of the conduct..."
              className="rounded-2xl border-white/40 bg-white/50 backdrop-blur-sm p-4 text-xs font-bold focus:bg-white transition-all min-h-[120px] resize-none"
            />
          </div>
        </div>

        <div className="pt-2">
          <Button
            className="w-full py-6 text-xs font-black uppercase tracking-[0.2em] bg-secondary hover:bg-secondary/90 text-white shadow-lg transition-all active:scale-[0.98]"
            type="submit"
          >
            <div className="flex items-center gap-2">
              <FaBolt className="italic" />
              Initialize Taxonomy
            </div>
          </Button>
        </div>
      </form>
    </GlassCard>
  );
}
