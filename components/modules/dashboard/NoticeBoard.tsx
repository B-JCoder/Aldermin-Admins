"use client";

import React from "react";
import { GlassCard } from "@/components/cards/GlassCard";
import { BiBell, BiPlus, BiPencil, BiTrash } from "react-icons/bi";
import { Button } from "@/components/ui/button";

export function NoticeBoard() {
  return (
    <GlassCard className="p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h5 className="font-black text-foreground text-sm uppercase tracking-widest">
          Notice Board
        </h5>
        <a
          href="#"
          className="text-secondary text-xs font-bold hover:underline uppercase tracking-wide"
        >
          view all
        </a>
      </div>

      <div className="flex-grow-1 overflow-auto custom-scrollbar flex flex-col gap-3 max-h-[210px] pr-2">
        {/* Notice 1 */}
        <div className="p-4 rounded-xl flex gap-3 bg-yellow-50/50 border border-yellow-100 backdrop-blur-sm">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-yellow-100/50 text-yellow-600">
            <BiBell className="text-xl" />
          </div>
          <div>
            <h6 className="font-bold text-foreground text-sm mb-1">
              Sports Day Announcement
            </h6>
            <p className="text-xs text-muted-foreground leading-snug">
              Annual Sports Day on May 12, 2024. Mark your calendars!
            </p>
          </div>
        </div>

        {/* Notice 2 */}
        <div className="p-4 rounded-xl flex gap-3 bg-blue-50/50 border border-blue-100 backdrop-blur-sm">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-blue-100/50 text-blue-600">
            <BiBell className="text-xl" />
          </div>
          <div>
            <h6 className="font-bold text-foreground text-sm mb-1">
              Summer Break Start
            </h6>
            <p className="text-xs text-muted-foreground leading-snug">
              Summer break begins on May 25, 2024. Enjoy!
            </p>
          </div>
        </div>

        {/* Notice 3 */}
        <div className="p-4 rounded-xl flex gap-3 bg-green-50/50 border border-green-100 backdrop-blur-sm">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-green-100/50 text-green-600">
            <BiBell className="text-xl" />
          </div>
          <div>
            <h6 className="font-bold text-foreground text-sm mb-1">
              New Timetable Uploaded
            </h6>
            <p className="text-xs text-muted-foreground leading-snug">
              Check the updated class schedule on the portal.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-4 flex gap-2 border-t border-white/20">
        <Button
          variant="ghost"
          size="sm"
          className="h-8 gap-1 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:bg-secondary/10 hover:text-secondary"
        >
          <BiPlus size={14} /> Add
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-muted-foreground hover:bg-secondary/10 hover:text-secondary"
        >
          <BiPencil size={14} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
        >
          <BiTrash size={14} />
        </Button>
      </div>
    </GlassCard>
  );
}
