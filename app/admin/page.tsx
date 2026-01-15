"use client";

import React from "react";
import { WelcomeCard } from "@/components/modules/dashboard/WelcomeCard";
import { StatCards } from "@/components/modules/dashboard/StatCards";
import { CalendarCard } from "@/components/modules/dashboard/CalendarCard";
import { StudentChart } from "@/components/modules/dashboard/StudentChart";
import { NoticeBoard } from "@/components/modules/dashboard/NoticeBoard";
import { FinancialOverview } from "@/components/modules/dashboard/FinancialOverview";
import { EarningChart } from "@/components/modules/dashboard/EarningChart";
import { FeeStatus } from "@/components/modules/dashboard/FeeStatus";
import { MessagesCard } from "@/components/modules/dashboard/MessagesCard";

export default function Dashboard() {
  return (
    <div className="container-fluid space-y-6 pb-8">
      <div className="grid grid-cols-12 gap-6 mt-4 items-stretch">
        <div className="col-span-12 md:col-span-7">
          <WelcomeCard />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-2">
          <StatCards />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <CalendarCard />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 items-stretch">
        <div className="col-span-12 md:col-span-4 h-full">
          <StudentChart />
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-3 h-full">
          <NoticeBoard />
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-5 h-full">
          <FinancialOverview />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <EarningChart />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-2">
          <FeeStatus />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <MessagesCard />
        </div>
      </div>
    </div>
  );
}
