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
  FaPlus,
  FaIdCard,
  FaUserFriends,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";

export default function VisitorBookPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const [visitorList, setVisitorList] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      phone: "555-0101",
      person: "2",
      purpose: "Admissions Inquiry",
      date: "2024-03-25",
      timeIn: "09:00 AM",
      status: "Checked In",
    },
    {
      id: 2,
      name: "Bob Smith",
      phone: "555-0102",
      person: "1",
      purpose: "Vendor Delivery",
      date: "2024-03-25",
      timeIn: "10:30 AM",
      status: "Checked Out",
    },
  ]);

  const filteredVisitors = visitorList.filter(
    (v) =>
      v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.purpose.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredVisitors.length / pageSize);
  const paginatedVisitors = filteredVisitors.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Visitor Logbook"
        subtitle="External Interaction Matrix"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold  text-[10px]  shadow-lg shadow-secondary/10 transition-all">
            <FaPlus /> Authorize Entry
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Creation Form */}
        <div className="lg:col-span-4 h-full">
          <AdminCard className="p-10 flex flex-col h-full bg-gradient-to-br from-white to-secondary/5">
            <h4 className="mb-8 text-xs font-semibold text-gray-500   leading-none">
              Inward Log Registry
            </h4>

            <form className="space-y-6 flex-1">
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1">
                    Visitor Appellation <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-2xl border-gray-200 bg-white p-4 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm"
                    placeholder="Full Name"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1">
                      Identity Token <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FaIdCard
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                        size={12}
                      />
                      <input
                        type="text"
                        className="w-full rounded-2xl border-gray-200 bg-white p-4 pl-10 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm"
                        placeholder="ID No"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1">
                      Census
                    </label>
                    <div className="relative">
                      <FaUserFriends
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                        size={12}
                      />
                      <input
                        type="number"
                        className="w-full rounded-2xl border-gray-200 bg-white p-4 pl-10 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm"
                        placeholder="1"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1">
                    Interaction Intent
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-2xl border-gray-200 bg-white p-4 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm "
                    placeholder="Consultation"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <FaCalendarAlt
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                      size={12}
                    />
                    <input
                      type="date"
                      className="w-full rounded-2xl border-gray-200 bg-white p-4 pl-10 text-[10px] font-bold focus:bg-white outline-none transition-all shadow-sm"
                    />
                  </div>
                  <div className="relative">
                    <FaClock
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                      size={12}
                    />
                    <input
                      type="time"
                      className="w-full rounded-2xl border-gray-200 bg-white p-4 pl-10 text-[10px] font-bold focus:bg-white outline-none transition-all shadow-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button className="w-full h-16 bg-secondary hover:bg-secondary/90 text-white rounded-2xl font-semibold  text-[10px]  shadow-xl shadow-secondary/20 transition-all active:scale-95">
                  Authorize Entry
                </Button>
              </div>
            </form>
          </AdminCard>
        </div>

        {/* List Index */}
        <div className="lg:col-span-8 space-y-6 flex flex-col h-full">
          <ListToolbar
            searchPlaceHolder="Search visitor stream..."
            onSearch={setSearchTerm}
            showAddButton={false}
          />

          <AdminCard className="flex-1 flex flex-col">
            <div className="p-8 border-b border-gray-200">
              <h4 className="text-xs font-semibold text-gray-500   leading-none">
                Live Patron Stream
              </h4>
            </div>

            <div className="flex-1 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-20">SN</TableHead>
                    <TableHead>Patron Profile</TableHead>
                    <TableHead className="text-center">Temporal Node</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                    <TableHead className="text-center">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedVisitors.map((v, index) => (
                    <TableRow key={v.id} className="group">
                      <TableCell className=" text-xs text-gray-500 ">
                        {(currentPage - 1) * pageSize + index + 1}
                      </TableCell>
                      <TableCell>
                        <div className="font-semibold text-foreground text-sm   tracking-tight mb-1 leading-none">
                          {v.name}
                        </div>
                        <div className="text-[10px] font-bold text-secondary   flex items-center gap-2">
                          <FaUserFriends size={10} /> {v.person} • {v.purpose}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="text-[10px] font-semibold  text-gray-500  leading-none mb-1">
                          {v.date}
                        </div>
                        <div className="text-[9px] font-bold text-gray-500/60 ">
                          {v.timeIn}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-[9px] font-semibold   ${
                            v.status === "Checked In"
                              ? "bg-emerald-500/10 text-emerald-600 animate-pulse"
                              : "bg-muted text-gray-500"
                          }`}
                        >
                          {v.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <ListActionButtons
                          onEdit={() => console.log("Edit")}
                          onDelete={() => console.log("Delete")}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                  {paginatedVisitors.length === 0 && (
                    <TableRow>
                      <TableCell
                        colSpan={5}
                        className="h-40 text-center text-gray-500   text-[10px] font-semibold"
                      >
                        No matches in interaction stream.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            {filteredVisitors.length > pageSize && (
              <ListPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                totalRecords={filteredVisitors.length}
                pageSize={pageSize}
              />
            )}
          </AdminCard>
        </div>
      </div>
    </div>
  );
}

