"use client";

import React, { useState, useMemo } from "react";
import { AdminCard } from "@/components/common/AdminCard";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Button } from "@/components/ui/button";

export function CalendarCard() {
  const today = new Date();
  const [viewDate, setViewDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { days, firstDay, monthName, year } = useMemo(() => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const monthName = viewDate.toLocaleString("default", { month: "long" });

    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return { days: daysArray, firstDay, monthName, year };
  }, [viewDate]);

  const handlePrevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  const isToday = (day: number) => {
    return (
      day === today.getDate() &&
      viewDate.getMonth() === today.getMonth() &&
      viewDate.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (day: number) => {
    return (
      day === selectedDate.getDate() &&
      viewDate.getMonth() === selectedDate.getMonth() &&
      viewDate.getFullYear() === selectedDate.getFullYear()
    );
  };

  return (
    <AdminCard className="h-full p-4 md:p-6 flex flex-col items-center justify-center text-center">
      <div className="w-full flex-1 flex flex-col items-center justify-center min-h-[250px]">
        <div className="w-full max-w-[280px]">
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrevMonth}
              className="h-8 w-8 rounded-full hover:bg-secondary/10 hover:text-secondary"
            >
              <BiChevronLeft size={24} />
            </Button>
            <span className="font-semibold text-foreground text-lg tracking-tight">
              {monthName} {year}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleNextMonth}
              className="h-8 w-8 rounded-full hover:bg-secondary/10 hover:text-secondary"
            >
              <BiChevronRight size={24} />
            </Button>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center text-xs mb-3 text-gray-500 font-semibold  tracking-wider">
            <span>Su</span>
            <span>Mo</span>
            <span>Tu</span>
            <span>We</span>
            <span>Th</span>
            <span>Fr</span>
            <span>Sa</span>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-foreground">
            {/* Empty slots for the first week */}
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} className="h-8 w-8" />
            ))}

            {/* Actual Days */}
            {days.map((day) => {
              const todayActive = isToday(day);
              const selectedActive = isSelected(day);

              return (
                <span
                  key={day}
                  onClick={() =>
                    setSelectedDate(new Date(year, viewDate.getMonth(), day))
                  }
                  className={`h-8 w-8 flex items-center justify-center rounded-full cursor-pointer transition-all ${
                    selectedActive
                      ? "bg-secondary text-white scale-110"
                      : todayActive
                        ? "bg-secondary/20 text-secondary border border-secondary/30"
                        : "hover:bg-secondary/10 hover:text-secondary"
                  }`}
                >
                  {day}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <Button
        variant="secondary"
        className="mt-4 w-3/4 rounded-xl text-xs font-semibold"
      >
        Manage Calendar
      </Button>
    </AdminCard>
  );
}
