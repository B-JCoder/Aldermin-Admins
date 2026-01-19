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
  FaPrint,
  FaSearch,
  FaCertificate,
  FaUsers,
  FaLayerGroup,
  FaUserGraduate,
} from "react-icons/fa";

export default function GenerateCertificatePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const [students, setStudents] = useState([
    {
      id: 1,
      admissionNo: "ADM-2024-001",
      name: "Alice Johnson",
      class: "Grade 10",
      section: "Alpha",
      selected: false,
    },
    {
      id: 2,
      admissionNo: "ADM-2024-005",
      name: "Bob Smith",
      class: "Grade 10",
      section: "Alpha",
      selected: false,
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

  const toggleSelect = (id: number) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, selected: !s.selected } : s))
    );
  };

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Accolade Issuance Matrix"
        subtitle="Batch Certificate Generation & Processing Terminal"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Issuance Parameters */}
        <div className="lg:col-span-4 h-full">
          <GlassCard className="p-10 flex flex-col h-full bg-gradient-to-br from-white to-secondary/5">
            <h4 className="mb-8 text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
              Issuance Configuration
            </h4>

            <form className="space-y-6 flex-1">
              <div className="space-y-5">
                <div>
                  <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
                    Academic Grade <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaLayerGroup
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/40"
                      size={12}
                    />
                    <select className="w-full rounded-2xl border-white/40 bg-white/50 p-4 pl-10 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm appearance-none cursor-pointer">
                      <option>Select Grade</option>
                      <option>Grade 10</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
                    Sectional Unit <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaUsers
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/40"
                      size={12}
                    />
                    <select className="w-full rounded-2xl border-white/40 bg-white/50 p-4 pl-10 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm appearance-none cursor-pointer">
                      <option>Select Unit</option>
                      <option>Alpha</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
                    Accolade Canvas <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaCertificate
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/40"
                      size={12}
                    />
                    <select className="w-full rounded-2xl border-white/40 bg-white/50 p-4 pl-10 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm appearance-none cursor-pointer text-secondary">
                      <option>Academic Excellence 2024</option>
                      <option>Sports Achievement</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button className="w-full h-16 bg-secondary hover:bg-secondary/90 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl shadow-secondary/20 transition-all active:scale-95">
                  <FaSearch className="mr-2 italic" /> Filter Honours Candidates
                </Button>
              </div>
            </form>
          </GlassCard>
        </div>

        {/* Candidate List */}
        <div className="lg:col-span-8 space-y-6 flex flex-col h-full">
          <ListToolbar
            searchPlaceHolder="Search candidates..."
            onSearch={setSearchTerm}
            showAddButton={false}
          />

          <GlassCard className="flex-1 flex flex-col">
            <div className="p-8 border-b border-white/20 flex items-center justify-between">
              <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
                Qualified Honours Stream
              </h4>
              <Button className="h-10 px-6 bg-secondary hover:bg-secondary/90 text-white text-[10px] font-black rounded-xl uppercase tracking-widest transition-all gap-2 shadow-lg shadow-secondary/10 active:scale-95">
                <FaPrint /> Generate Batch
              </Button>
            </div>

            <div className="flex-1 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">
                      <input
                        type="checkbox"
                        className="rounded border-secondary/30 text-secondary focus:ring-secondary accent-secondary"
                      />
                    </TableHead>
                    <TableHead>Candidate Profile</TableHead>
                    <TableHead className="text-center">
                      Enrollment Node
                    </TableHead>
                    <TableHead className="text-center">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedStudents.map((s: any) => (
                    <TableRow key={s.id} className="group">
                      <TableCell>
                        <input
                          type="checkbox"
                          checked={s.selected}
                          onChange={() => toggleSelect(s.id)}
                          className="rounded border-secondary/30 text-secondary focus:ring-secondary accent-secondary cursor-pointer"
                        />
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary ring-4 ring-secondary/5 group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                            <FaUserGraduate size={14} />
                          </div>
                          <div>
                            <div className="font-black text-foreground tracking-tight text-sm uppercase italic leading-none mb-1">
                              {s.name}
                            </div>
                            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                              {s.class} • Section {s.section}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="px-3 py-1.5 bg-secondary/10 text-secondary text-[10px] font-mono font-black rounded border border-secondary/20 uppercase">
                          {s.admissionNo}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <button className="text-[9px] font-black text-secondary uppercase tracking-widest hover:underline active:scale-95 transition-all">
                          Preview Accolade
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                  {paginatedStudents.length === 0 && (
                    <TableRow>
                      <TableCell
                        colSpan={4}
                        className="h-40 text-center text-muted-foreground uppercase tracking-widest text-[10px] font-black"
                      >
                        No matches found in honors stream.
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
