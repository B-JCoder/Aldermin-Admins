"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { ListToolbar } from "@/components/common/ListToolbar";
import { ListPagination } from "@/components/common/ListPagination";
import { GlassCard } from "@/components/cards/GlassCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  FaUserCheck,
  FaRegCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaRunning,
} from "react-icons/fa";

export default function StaffAttendancePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const [attendanceDate, setAttendanceDate] = useState("2023-12-14");

  const [attendanceList, setAttendanceList] = useState([
    {
      id: 1,
      staffId: "STF001",
      name: "Marcus Aurelius",
      role: "Teacher",
      status: "Present",
      clockIn: "08:30 AM",
      clockOut: "04:30 PM",
    },
    {
      id: 2,
      staffId: "STF008",
      name: "Seneca Minor",
      role: "Admin",
      status: "Absent",
      clockIn: "-",
      clockOut: "-",
    },
    {
      id: 3,
      staffId: "STF012",
      name: "Epictetus Slave",
      role: "Librarian",
      status: "Late",
      clockIn: "09:12 AM",
      clockOut: "04:30 PM",
    },
  ]);

  const handleStatusChange = (id: number, newStatus: string) => {
    setAttendanceList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  const filteredAttendance = attendanceList.filter(
    (a) =>
      a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.staffId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredAttendance.length / pageSize);
  const paginatedAttendance = filteredAttendance.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="container mx-auto space-y-8">
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
                className="pl-10 pr-4 py-3 rounded-xl bg-white/50 border-white/40 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm"
              />
            </div>
            <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 h-12 px-6 rounded-xl font-bold uppercase text-[10px] tracking-widest shadow-lg shadow-secondary/10 transition-all">
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
          <GlassCard
            key={i}
            className={`p-6 border-none bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 text-white shadow-xl shadow-${stat.color}-500/20`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-black uppercase opacity-70 tracking-widest">
                  {stat.label}
                </p>
                <h3 className="text-3xl font-black mt-1 font-mono tracking-tighter">
                  {stat.val}
                </h3>
              </div>
              <stat.Icon size={32} className="opacity-20 translate-x-1" />
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="space-y-6 flex flex-col h-full">
        <ListToolbar
          searchPlaceHolder="Search staff identity..."
          onSearch={setSearchTerm}
          showAddButton={false}
        />

        <GlassCard className="flex-1 flex flex-col">
          <div className="p-8 border-b border-white/20 flex items-center justify-between">
            <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
              Daily Attendance Repository
            </h4>
            <div className="flex items-center gap-3">
              <span className="text-[9px] font-black text-muted-foreground uppercase tracking-wider">
                Categorize by:
              </span>
              <select className="bg-secondary/5 border-none text-[9px] font-black uppercase rounded-lg px-2 py-1.5 outline-none focus:bg-secondary/10 transition-all cursor-pointer">
                <option>Department</option>
                <option>Functional Role</option>
              </select>
            </div>
          </div>

          <div className="flex-1 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-20">SN</TableHead>
                  <TableHead>Staff Identity</TableHead>
                  <TableHead>Functional Role</TableHead>
                  <TableHead className="text-center">Status Matrix</TableHead>
                  <TableHead className="text-center">Temporal Logic</TableHead>
                  <TableHead className="text-center">Memoranda</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedAttendance.map((item, index) => (
                  <TableRow key={item.id} className="group">
                    <TableCell className="font-mono text-xs text-muted-foreground italic">
                      {(currentPage - 1) * pageSize + index + 1}
                    </TableCell>
                    <TableCell>
                      <div className="font-black text-foreground text-sm uppercase italic tracking-tight leading-none mb-1">
                        {item.name}
                      </div>
                      <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                        UID: {item.staffId}
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="px-2 py-1 bg-secondary/10 text-secondary text-[9px] font-bold rounded border border-secondary/20 uppercase tracking-widest">
                        {item.role}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center gap-1.5">
                        {[
                          {
                            key: "Present",
                            abbr: "P",
                            color: "emerald",
                            label: "Present",
                          },
                          {
                            key: "Late",
                            abbr: "L",
                            color: "amber",
                            label: "Late",
                          },
                          {
                            key: "Absent",
                            abbr: "A",
                            color: "rose",
                            label: "Absent",
                          },
                          {
                            key: "Half Day",
                            abbr: "H",
                            color: "indigo",
                            label: "Half-Day",
                          },
                        ].map((btn) => (
                          <button
                            key={btn.key}
                            onClick={() => handleStatusChange(item.id, btn.key)}
                            title={btn.label}
                            className={`w-8 h-8 rounded-full text-[9px] font-black uppercase transition-all shadow-sm ring-1 ring-inset ${
                              item.status === btn.key
                                ? `bg-${btn.color}-500 text-white ring-${btn.color}-600 shadow-${btn.color}-500/20`
                                : `bg-white/50 text-muted-foreground ring-white/60 hover:bg-${btn.color}-500/10 hover:text-${btn.color}-600`
                            }`}
                          >
                            {btn.abbr}
                          </button>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center justify-center gap-4">
                        <div className="text-center">
                          <p className="text-[9px] font-black text-muted-foreground/40 uppercase leading-none mb-1 tracking-tighter">
                            Inbound
                          </p>
                          <p className="text-[10px] font-bold text-foreground font-mono">
                            {item.clockIn}
                          </p>
                        </div>
                        <div className="w-px h-6 bg-white/20" />
                        <div className="text-center">
                          <p className="text-[9px] font-black text-muted-foreground/40 uppercase leading-none mb-1 tracking-tighter">
                            Outbound
                          </p>
                          <p className="text-[10px] font-bold text-foreground font-mono">
                            {item.clockOut}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="w-48">
                      <input
                        type="text"
                        placeholder="Log memoranda..."
                        className="w-full bg-white/40 border-white/20 rounded-xl px-3 py-2 text-[10px] focus:bg-white outline-none transition-all placeholder:text-muted-foreground/30 font-medium italic"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredAttendance.length > pageSize && (
            <ListPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalRecords={filteredAttendance.length}
              pageSize={pageSize}
            />
          )}
        </GlassCard>
      </div>
    </div>
  );
}
