"use client";

import React, { useState, useEffect } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import {
  FaUserCheck,
  FaRegCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaRunning,
} from "react-icons/fa";
import { DataTable } from "@/components/common/DataTable";
import { apiService } from "@/lib/api-service";
import { AdminCard } from "@/components/common/AdminCard";

interface AttendanceRecord {
  id: number;
  name: string;
  staffId: string;
  role: string;
  status: string;
  clockIn: string;
  clockOut: string;
}

export default function StaffAttendancePage() {
  const [attendanceDate, setAttendanceDate] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [attendanceData, setAttendanceData] = useState<AttendanceRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAttendance = async () => {
      setIsLoading(true);
      try {
        const data = (await apiService.hr.getAttendance(attendanceDate)) as any;
        // Map mock data and add missing fields for display
        const mappedData = data.map((item: any) => ({
          ...item,
          staffId: item.staffId || `STF-0${item.id}`,
          role: item.role || "Faculty",
          clockIn: item.clockIn || "08:30 AM",
          clockOut: item.clockOut || "04:30 PM",
        }));
        setAttendanceData(mappedData);
      } catch (error) {
        console.error("Error fetching attendance:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAttendance();
  }, [attendanceDate]);

  const handleStatusChange = (id: number, newStatus: string) => {
    setAttendanceData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item,
      ),
    );
  };

  const columns = [
    {
      header: "Staff Identity",
      accessor: (item: AttendanceRecord) => (
        <div>
          <div className="font-semibold text-foreground text-sm tracking-tight leading-none mb-1">
            {item.name}
          </div>
          <div className="text-[10px] font-bold text-gray-500">
            UID: {item.staffId}
          </div>
        </div>
      ),
    },
    {
      header: "Functional Role",
      accessor: (item: AttendanceRecord) => (
        <span className="px-2 py-1 bg-secondary/10 text-secondary text-[9px] font-bold rounded border border-secondary/20">
          {item.role}
        </span>
      ),
    },
    {
      header: "Status Matrix",
      accessor: (item: AttendanceRecord) => (
        <div className="flex justify-center gap-1.5">
          {[
            { key: "Present", abbr: "P", color: "emerald", label: "Present" },
            { key: "Late", abbr: "L", color: "amber", label: "Late" },
            { key: "Absent", abbr: "A", color: "rose", label: "Absent" },
            { key: "Half Day", abbr: "H", color: "indigo", label: "Half-Day" },
          ].map((btn) => (
            <button
              key={btn.key}
              onClick={() => handleStatusChange(item.id, btn.key)}
              title={btn.label}
              className={`w-8 h-8 rounded-full text-[9px] font-semibold transition-all shadow-sm ring-1 ring-inset ${
                item.status === btn.key
                  ? `bg-${btn.color}-500 text-white ring-${btn.color}-600`
                  : `bg-white text-gray-500 ring-gray-100 hover:bg-${btn.color}-50/50`
              }`}
            >
              {btn.abbr}
            </button>
          ))}
        </div>
      ),
      className: "text-center",
      headerClassName: "text-center",
    },
    {
      header: "Temporal Logic",
      accessor: (item: AttendanceRecord) => (
        <div className="flex items-center justify-center gap-4 text-xs">
          <div className="text-center">
            <p className="text-[9px] font-semibold text-gray-500/40 leading-none mb-1 tracking-tighter">
              Inbound
            </p>
            <p className="text-[10px] font-bold text-foreground">
              {item.clockIn}
            </p>
          </div>
          <div className="text-center">
            <p className="text-[9px] font-semibold text-gray-500/40 leading-none mb-1 tracking-tighter">
              Outbound
            </p>
            <p className="text-[10px] font-bold text-foreground">
              {item.clockOut}
            </p>
          </div>
        </div>
      ),
      className: "text-center",
      headerClassName: "text-center",
    },
    {
      header: "Memoranda",
      accessor: () => (
        <input
          type="text"
          placeholder="Log memoranda..."
          className="w-full bg-white border-gray-200 rounded-xl px-3 py-2 text-[10px] focus:ring-1 focus:ring-secondary/20 outline-none transition-all placeholder:text-gray-300 font-medium"
        />
      ),
      className: "w-48",
    },
  ];

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Institutional Attendance Ledger"
        subtitle="Staff Daily Presence Tracking"
        action={
          <div className="flex items-center gap-4">
            <div className="relative">
              <FaRegCalendarAlt
                className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/60"
                size={12}
              />
              <input
                type="date"
                value={attendanceDate}
                onChange={(e) => setAttendanceDate(e.target.value)}
                className="pl-10 pr-4 py-3 rounded-xl bg-white border-gray-200 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm"
              />
            </div>
            <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 h-12 px-6 rounded-xl font-bold text-[10px] shadow-lg shadow-secondary/10 transition-all">
              <FaUserCheck size={14} /> Mark All Present
            </Button>
          </div>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Present", val: 42, color: "emerald", Icon: FaCheckCircle },
          { label: "Absent", val: 4, color: "rose", Icon: FaTimesCircle },
          { label: "Late", val: 3, color: "amber", Icon: FaClock },
          { label: "On Leave", val: 2, color: "indigo", Icon: FaRunning },
        ].map((stat, i) => (
          <AdminCard
            key={i}
            className={`p-6 border-none bg-gradient-to-br from-secondary/80 to-secondary text-white shadow-xl shadow-secondary/10`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-semibold opacity-70 uppercase tracking-widest">
                  {stat.label}
                </p>
                <h3 className="text-3xl font-semibold mt-1 tracking-tighter">
                  {stat.val}
                </h3>
              </div>
              <stat.Icon size={32} className="opacity-20 translate-x-1" />
            </div>
          </AdminCard>
        ))}
      </div>

      <DataTable
        data={attendanceData}
        columns={columns}
        searchKey="name"
        searchPlaceholder="Search staff by name or UID..."
        title="Daily Attendance Repository"
        isLoading={isLoading}
      />
    </div>
  );
}
