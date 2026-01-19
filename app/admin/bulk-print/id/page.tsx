"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { ListToolbar } from "@/components/common/ListToolbar";
import { ListPagination } from "@/components/common/ListPagination";
import { GlassCard } from "@/components/cards/GlassCard";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaPrint, FaSearch, FaLayerGroup } from "react-icons/fa";

export default function BulkIDPrintPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      admissionNo: "ADM001",
      class: "Class 10",
      section: "A",
      layout: "Vertical ID",
    },
    {
      id: 2,
      name: "Bob Smith",
      admissionNo: "ADM002",
      class: "Class 10",
      section: "A",
      layout: "Vertical ID",
    },
  ]);

  const filteredStudents = students.filter(
    (s: any) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.admissionNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredStudents.length / pageSize);
  const paginatedStudents = filteredStudents.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Institutional Bulk ID Printer"
        subtitle="Configure Parameters & Execute Identification Card Production"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Config Form */}
        <div className="lg:col-span-4 h-full">
          <GlassCard className="p-10 flex flex-col h-full bg-gradient-to-br from-white to-secondary/5">
            <h4 className="mb-8 text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
              ID Card Parameters
            </h4>

            <form className="space-y-6 flex-1">
              <div className="space-y-5">
                <div>
                  <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
                    Target Class Taxonomy
                  </label>
                  <select className="w-full rounded-2xl border-white/40 bg-white/50 p-4 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm appearance-none cursor-pointer">
                    <option>Class 10</option>
                    <option>Class 9</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
                    Identification Blueprint
                  </label>
                  <div className="relative">
                    <FaLayerGroup
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/40"
                      size={12}
                    />
                    <select className="w-full rounded-2xl border-white/40 bg-white/50 p-4 pl-10 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm appearance-none cursor-pointer text-secondary italic underline">
                      <option>Standard Student ID</option>
                      <option>Faculty ID Blueprint</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button className="w-full h-16 bg-secondary hover:bg-secondary/90 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl shadow-secondary/20 transition-all active:scale-95">
                  <FaSearch className="mr-2 italic" /> Load Member Stream
                </Button>
              </div>
            </form>
          </GlassCard>
        </div>

        {/* Card Production Queue */}
        <div className="lg:col-span-8 space-y-6 flex flex-col h-full">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 w-full">
              <ListToolbar
                searchPlaceHolder="Search production queue..."
                onSearch={setSearchTerm}
                showAddButton={false}
              />
            </div>
            <Button className="h-14 px-8 bg-secondary hover:bg-secondary/90 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl shadow-secondary/20 transition-all active:scale-95 flex items-center gap-2">
              <FaPrint className="text-secondary-foreground/80" /> Execute
              Primary Print
            </Button>
          </div>

          <GlassCard className="flex-1 flex flex-col">
            <div className="p-8 border-b border-white/20">
              <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
                Card Production Queue
              </h4>
            </div>

            <div className="flex-1 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">
                      <input
                        type="checkbox"
                        className="rounded-lg border-white/40 bg-white/50 text-secondary focus:ring-secondary/20 transition-all cursor-pointer w-4 h-4"
                      />
                    </TableHead>
                    <TableHead>Member Profile</TableHead>
                    <TableHead className="text-center">Draft Layout</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedStudents.map((s: any) => (
                    <TableRow key={s.id} className="group">
                      <TableCell>
                        <input
                          type="checkbox"
                          className="rounded-lg border-white/40 bg-white/50 text-secondary focus:ring-secondary/20 transition-all cursor-pointer w-4 h-4"
                        />
                      </TableCell>
                      <TableCell>
                        <div className="font-black text-foreground text-sm uppercase italic tracking-tight leading-none mb-1 group-hover:text-secondary group-hover:underline cursor-pointer transition-all">
                          {s.name}
                        </div>
                        <div className="text-[10px] font-mono font-bold text-secondary uppercase tracking-widest">
                          {s.admissionNo}{" "}
                          <span className="opacity-20 mx-1">|</span> {s.class}{" "}
                          {s.section}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="text-[10px] font-black uppercase text-secondary/60 font-mono tracking-widest italic opacity-60">
                          {s.layout}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                  {paginatedStudents.length === 0 && (
                    <TableRow>
                      <TableCell
                        colSpan={3}
                        className="h-40 text-center text-muted-foreground uppercase tracking-widest text-[10px] font-black"
                      >
                        No matches found in production queue.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            {filteredStudents.length > pageSize && (
              <ListPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                totalRecords={filteredStudents.length}
                pageSize={pageSize}
              />
            )}
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
