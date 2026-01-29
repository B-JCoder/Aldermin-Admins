"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { ListToolbar } from "@/components/common/ListToolbar";
import { ListPagination } from "@/components/common/ListPagination";
import { ListActionButtons } from "@/components/common/ListActionButtons";
import { AdminCard } from "@/components/common/AdminCard";
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
  FaPhoneAlt,
  FaCheck,
  FaUserTie,
  FaCalendarAlt,
  FaClock,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

export default function PhoneLogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const [phoneLog, setPhoneLog] = useState([
    {
      id: 1,
      name: "Dr. Julian Sterling",
      phone: "555-0101",
      date: "2024-03-25",
      followUp: "2024-03-28",
      duration: "05:22",
      type: "Incoming",
      status: "Completed",
    },
    {
      id: 2,
      name: "Elara Vance",
      phone: "555-0115",
      date: "2024-03-25",
      followUp: "2024-03-26",
      duration: "02:15",
      type: "Outgoing",
      status: "Follow-up Required",
    },
  ]);

  const filteredLog = phoneLog.filter(
    (log: any) =>
      log.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredLog.length / pageSize);
  const paginatedLog = filteredLog.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Telephonic Communications"
        subtitle="Institutional Dialogue Registry"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Log Creation Form */}
        <div className="lg:col-span-4 h-full">
          <AdminCard className="p-10 flex flex-col h-full bg-gradient-to-br from-white to-secondary/5">
            <h4 className="mb-8 text-xs font-semibold text-gray-500   leading-none">
              New Communication Log
            </h4>

            <form className="space-y-6 flex-1">
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1">
                    Interlocutor Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaUserTie
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                      size={10}
                    />
                    <input
                      type="text"
                      className="w-full rounded-2xl border-gray-200 bg-white p-4 pl-10 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm"
                      placeholder="Contact Name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1">
                    Communication Node <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaPhoneAlt
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                      size={10}
                    />
                    <input
                      type="text"
                      className="w-full rounded-2xl border-gray-200 bg-white p-4 pl-10 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm "
                      placeholder="+1 (555) 000-0000"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1">
                      Interaction Date
                    </label>
                    <div className="relative">
                      <FaCalendarAlt
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                        size={10}
                      />
                      <input
                        type="date"
                        className="w-full rounded-2xl border-gray-200 bg-white p-4 pl-10 text-[10px] font-bold focus:bg-white outline-none transition-all shadow-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1">
                      Next Phase
                    </label>
                    <div className="relative">
                      <FaCalendarAlt
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                        size={10}
                      />
                      <input
                        type="date"
                        className="w-full rounded-2xl border-gray-200 bg-white p-4 pl-10 text-[10px] font-bold focus:bg-white outline-none transition-all shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <FaClock
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                      size={10}
                    />
                    <input
                      type="text"
                      className="w-full rounded-2xl border-gray-200 bg-white p-4 pl-10 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm "
                      placeholder="MM:SS"
                    />
                  </div>
                  <select className="w-full rounded-2xl border-gray-200 bg-white p-4 text-xs font-semibold   focus:bg-white outline-none transition-all shadow-sm appearance-none cursor-pointer">
                    <option>Incoming</option>
                    <option>Outgoing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1">
                    Internal Memoranda
                  </label>
                  <textarea
                    className="w-full rounded-2xl border-gray-200 bg-white p-4 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm min-h-[100px]"
                    placeholder="Brief context of the dialogue..."
                  ></textarea>
                </div>
              </div>

              <div className="pt-6">
                <Button className="w-full h-16 bg-secondary hover:bg-secondary/90 text-white rounded-2xl font-semibold  text-[10px]  shadow-xl shadow-secondary/20 transition-all active:scale-95">
                  <FaCheck className="mr-2 " /> Log Communication
                </Button>
              </div>
            </form>
          </AdminCard>
        </div>

        {/* Log Streams */}
        <div className="lg:col-span-8 space-y-6 flex flex-col h-full">
          <ListToolbar
            searchPlaceHolder="Search communication stream..."
            onSearch={setSearchTerm}
            showAddButton={false}
          />

          <AdminCard className="flex-1 flex flex-col">
            <div className="p-8 border-b border-gray-200">
              <h4 className="text-xs font-semibold text-gray-500   leading-none">
                Institutional Dial history
              </h4>
            </div>

            <div className="flex-1 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-20">SN</TableHead>
                    <TableHead>Interlocutor Profile</TableHead>
                    <TableHead className="text-center">Vector</TableHead>
                    <TableHead className="text-center">Chronology</TableHead>
                    <TableHead className="text-center">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedLog.map((log: any, index: number) => (
                    <TableRow key={log.id} className="group">
                      <TableCell className=" text-xs text-gray-500 ">
                        {(currentPage - 1) * pageSize + index + 1}
                      </TableCell>
                      <TableCell>
                        <div className="font-semibold text-foreground text-sm   tracking-tight leading-none mb-1">
                          {log.name}
                        </div>
                        <div className="text-[10px] font-bold text-gray-500   flex items-center gap-1.5 ">
                          <FaPhoneAlt size={8} className="text-secondary/60" />{" "}
                          {log.phone}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-semibold   ${
                            log.type === "Incoming"
                              ? "bg-indigo-500/10 text-indigo-600"
                              : "bg-rose-500/10 text-rose-600"
                          }`}
                        >
                          {log.type === "Incoming" ? (
                            <FaArrowDown size={8} />
                          ) : (
                            <FaArrowUp size={8} />
                          )}
                          {log.type}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="text-[10px] font-semibold  text-gray-500  mb-1">
                          {log.date}
                        </div>
                        <div className="text-[9px] font-bold text-gray-500/60 flex items-center justify-center gap-1.5">
                          <FaClock size={8} /> {log.duration}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <ListActionButtons
                          onEdit={() => console.log("Edit")}
                          onDelete={() => console.log("Delete")}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                  {paginatedLog.length === 0 && (
                    <TableRow>
                      <TableCell
                        colSpan={5}
                        className="h-40 text-center text-gray-500   text-[10px] font-semibold"
                      >
                        No matches in communication history.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            {filteredLog.length > pageSize && (
              <ListPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                totalRecords={filteredLog.length}
                pageSize={pageSize}
              />
            )}
          </AdminCard>
        </div>
      </div>
    </div>
  );
}

