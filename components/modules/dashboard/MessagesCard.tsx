"use client";

import React from "react";
import { GlassCard } from "@/components/cards/GlassCard";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function MessagesCard() {
  return (
    <GlassCard className="p-6 h-[400px] flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h6 className="font-black text-foreground text-sm uppercase tracking-widest">
          Messages
        </h6>
        <button>
          <BiDotsVerticalRounded
            size={20}
            className="text-muted-foreground hover:text-foreground"
          />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar space-y-4 pr-1">
        {/* Message 1 */}
        <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/40 transition-colors cursor-pointer group">
          <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
            <AvatarImage src="/assets/images/dashboard-img/img-3.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between w-full items-center mb-1">
              <h6 className="font-bold text-sm text-foreground leading-none group-hover:text-secondary transition-colors">
                John Doe
              </h6>
              <small className="text-muted-foreground text-[10px] font-bold uppercase">
                10m
              </small>
            </div>
            <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed font-medium">
              Regarding student progress report, please review the attached...
            </p>
          </div>
        </div>

        {/* Message 2 */}
        <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/40 transition-colors cursor-pointer group">
          <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
            <AvatarImage src="/assets/images/dashboard-img/img-2.jpeg" />
            <AvatarFallback>SS</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between w-full items-center mb-1">
              <h6 className="font-bold text-sm text-foreground leading-none group-hover:text-secondary transition-colors">
                Sarah Smith
              </h6>
              <small className="text-muted-foreground text-[10px] font-bold uppercase">
                2h
              </small>
            </div>
            <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed font-medium">
              Meeting request for next week regarding the science fair...
            </p>
          </div>
        </div>

        {/* Message 3 */}
        <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/40 transition-colors cursor-pointer group">
          <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
            {/* Fallback for admin */}
            <AvatarFallback className="bg-secondary text-white font-black">
              AD
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between w-full items-center mb-1">
              <h6 className="font-bold text-sm text-foreground leading-none group-hover:text-secondary transition-colors">
                Admin
              </h6>
              <small className="text-muted-foreground text-[10px] font-bold uppercase">
                5h
              </small>
            </div>
            <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed font-medium">
              System maintenance notice scheduled for this weekend...
            </p>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
