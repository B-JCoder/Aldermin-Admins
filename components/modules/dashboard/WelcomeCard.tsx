"use client";

import React from "react";
import { GlassCard } from "@/components/cards/GlassCard";

export function WelcomeCard() {
  return (
    <GlassCard className="h-full p-8 relative overflow-hidden flex flex-col md:flex-row justify-between items-center group">
      {/* Text Section */}
      <div className="flex-grow-1 z-10 max-w-lg mb-4 md:mb-0">
        <h2 className="text-2xl font-black text-foreground mb-3 tracking-tight">
          Welcome back,{" "}
          <span className="text-secondary">The Deenway School Team!</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed text-sm font-medium">
          Manage your school operations with ease. Stay updated on academics,
          attendance, finances, and more — all in one place. Let’s keep shaping
          a brighter future together!
        </p>
      </div>
      {/* Image Section */}
      <div className="flex-shrink-0 relative z-10">
        <img
          src="/assets/images/dashboard-img/img-1.png"
          alt="Decoration"
          className="h-[180px] md:h-[220px] object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
          onError={(e) =>
            ((e.target as HTMLImageElement).style.display = "none")
          }
        />
      </div>

      {/* Decorative gradient blob */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
    </GlassCard>
  );
}
