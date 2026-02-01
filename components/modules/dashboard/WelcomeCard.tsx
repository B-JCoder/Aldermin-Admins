"use client";

import React from "react";
import { AdminCard } from "@/components/common/AdminCard";

export function WelcomeCard() {
  return (
    <AdminCard className="h-full p-4 md:p-8 relative overflow-hidden flex flex-col lg:flex-row justify-between items-center group">
      {/* Text Section */}
      <div className="flex-grow-1 z-10 max-w-lg mb-6 lg:mb-0 text-center lg:text-left">
        <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3 tracking-tight">
          Welcome back,{" "}
          <span className="text-secondary">The Deenway School Team!</span>
        </h2>
        <p className="text-gray-500 leading-relaxed text-sm font-medium">
          Manage your school operations with ease. Stay updated on academics,
          attendance, finances, and more — all in one place. Let’s keep shaping
          a brighter future together!
        </p>
      </div>
      {/* Image Section */}
      <div className="flex-shrink-0 relative z-10 w-full lg:w-auto flex justify-center lg:block">
        <img
          src="/assets/images/dashboard-img/img-1.png"
          alt="Decoration"
          className="h-[150px] md:h-[220px] object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
          onError={(e) =>
            ((e.target as HTMLImageElement).style.display = "none")
          }
        />
      </div>

      {/* Decorative gradient blob */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
    </AdminCard>
  );
}
