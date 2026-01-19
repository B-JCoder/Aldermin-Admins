"use client";

import React from "react";
import { GlassCard } from "@/components/cards/GlassCard";

export function InvoiceStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <GlassCard className="p-6 bg-emerald-500 text-white border-emerald-400/50 shadow-emerald-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>
        <h6 className="text-[10px] font-black uppercase opacity-80 tracking-widest mb-2 relative z-10">
          Total Collected
        </h6>
        <div className="text-3xl font-black tabular-nums font-mono relative z-10">
          $12,450.00
        </div>
      </GlassCard>

      <GlassCard className="p-6 bg-amber-500 text-white border-amber-400/50 shadow-amber-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>
        <h6 className="text-[10px] font-black uppercase opacity-80 tracking-widest mb-2 relative z-10">
          Total Outstanding
        </h6>
        <div className="text-3xl font-black tabular-nums font-mono relative z-10">
          $4,200.00
        </div>
      </GlassCard>

      <GlassCard className="p-6 bg-rose-500 text-white border-rose-400/50 shadow-rose-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>
        <h6 className="text-[10px] font-black uppercase opacity-80 tracking-widest mb-2 relative z-10">
          Overdue Invoices
        </h6>
        <div className="text-3xl font-black tabular-nums font-mono relative z-10">
          14
        </div>
      </GlassCard>
    </div>
  );
}
