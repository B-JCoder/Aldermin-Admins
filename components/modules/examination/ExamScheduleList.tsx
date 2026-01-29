"use client";

import React from "react";
import { AdminCard } from "@/components/common/AdminCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ListPagination } from "@/components/common/ListPagination";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaDoorOpen,
  FaUserTie,
} from "react-icons/fa";

export interface ExamScheduleItem {
  id: number;
  subject: string;
  date: string;
  day: string;
  time: string;
  className: string;
  teacher: string;
  duration: string;
  room: string;
}

interface ExamScheduleListProps {
  schedules: ExamScheduleItem[];
}

export function ExamScheduleList({ schedules }: ExamScheduleListProps) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 5;

  const totalPages = Math.ceil(schedules.length / pageSize);
  const paginatedSchedules = schedules.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <AdminCard className="p-0 overflow-hidden relative">
      

      <div className="relative overflow-x-auto p-4">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-gray-200 hover:bg-transparent">
              <TableHead className="px-6 py-8 text-left text-[10px] font-semibold   text-gray-500 w-16">
                SN
              </TableHead>
              <TableHead className="px-6 py-8 text-left text-[10px] font-semibold   text-gray-500">
                Chronology
              </TableHead>
              <TableHead className="px-6 py-8 text-left text-[10px] font-semibold   text-gray-500">
                Academic Domain
              </TableHead>
              <TableHead className="px-6 py-8 text-left text-[10px] font-semibold   text-gray-500">
                Env / Room
              </TableHead>
              <TableHead className="px-6 py-8 text-left text-[10px] font-semibold   text-gray-500">
                Invigilator
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-white/20">
            {paginatedSchedules.map((item, index) => (
              <TableRow
                key={item.id}
                className="group hover:bg-secondary/5 transition-all text-sm"
              >
                <TableCell className="px-6 py-10 text-gray-500/50  text-xs ">
                  {(currentPage - 1) * pageSize + index + 1}
                </TableCell>
                <TableCell className="px-6 py-10">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-secondary/10 text-secondary rounded-lg group-hover:bg-secondary group-hover:text-white transition-colors">
                        <FaCalendarAlt size={12} />
                      </div>
                      <div className="font-semibold text-foreground tracking-tight text-xs ">
                        {item.date}
                      </div>
                    </div>
                    <div className="font-semibold text-[9px] text-gray-500  tracking-[0.2em] ml-8">
                      {item.day}
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <FaClock className="text-gray-500/50" size={10} />
                      <span className="text-[10px] font-bold text-gray-500  tracking-tighter">
                        {item.time}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-6 py-10">
                  <div className="font-semibold text-foreground tracking-tight text-base   mb-2 group-hover:text-secondary transition-colors ">
                    {item.subject}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-secondary/5 text-gray-500 text-[9px] font-semibold rounded  tracking-tighter border border-secondary/10">
                      {item.className}
                    </span>
                    <span className="px-3 py-1 bg-foreground text-background text-[9px] font-semibold rounded  tracking-tighter ">
                      {item.duration}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="px-6 py-10">
                  <div className="flex items-center gap-2 text-foreground">
                    <FaMapMarkerAlt
                      className="text-gray-500/50"
                      size={12}
                    />
                    <span className="font-semibold text-sm ">
                      {item.room}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 font-bold text-[9px] text-gray-500  ">
                    <FaDoorOpen size={10} /> Access Point Alpha
                  </div>
                </TableCell>
                <TableCell className="px-6 py-10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/5 flex items-center justify-center text-gray-500 transition-all group-hover:scale-110 border border-secondary/10">
                      <FaUserTie size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-foreground tracking-tight ">
                        {item.teacher}
                      </div>
                      <div className="text-[9px] font-bold text-gray-500   mt-1">
                        Lead Supervisor
                      </div>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {schedules.length > pageSize && (
          <div className="p-4 pt-0">
            <ListPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalRecords={schedules.length}
              pageSize={pageSize}
            />
          </div>
        )}
      </div>
    </AdminCard>
  );
}
