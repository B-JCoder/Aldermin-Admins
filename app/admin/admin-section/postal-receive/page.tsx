"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { ListToolbar } from "@/components/common/ListToolbar";
import { ListPagination } from "@/components/common/ListPagination";
import { ListActionButtons } from "@/components/common/ListActionButtons";
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
  FaCheck,
  FaCalendarAlt,
  FaHashtag,
  FaMapMarkerAlt,
  FaFileAlt,
} from "react-icons/fa";

export default function PostalReceivePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const [postalList, setPostalList] = useState([
    {
      id: 1,
      referenceNo: "RCV-78901",
      from: "Ministry of Education",
      to: "Principal Office",
      date: "2024-03-25",
      status: "Logged",
    },
    {
      id: 2,
      referenceNo: "RCV-78905",
      from: "University Secretariat",
      to: "Dean of Academic Affairs",
      date: "2024-03-25",
      status: "In Distribution",
    },
  ]);

  const filteredPostal = postalList.filter(
    (p: any) =>
      p.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.referenceNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.to.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPostal.length / pageSize);
  const paginatedPostal = filteredPostal.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Institutional Inbound Ledger"
        subtitle="Postal Correspondence Repository"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Creation Form */}
        <div className="lg:col-span-4 h-full">
          <GlassCard className="p-10 flex flex-col h-full bg-gradient-to-br from-white to-secondary/5">
            <h4 className="mb-8 text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
              Catalog Inbound Vector
            </h4>

            <form className="space-y-6 flex-1">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
                      Originator <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-2xl border-white/40 bg-white/50 p-4 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm"
                      placeholder="From"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
                      Codification
                    </label>
                    <div className="relative">
                      <FaHashtag
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                        size={10}
                      />
                      <input
                        type="text"
                        className="w-full rounded-2xl border-white/40 bg-white/50 p-4 pl-10 text-xs font-mono font-bold focus:bg-white outline-none transition-all shadow-sm"
                        placeholder="Ref No"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
                    Internal Destination <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-2xl border-white/40 bg-white/50 p-4 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm"
                    placeholder="To (Unit/Official)"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
                    Geospatial Origin <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaMapMarkerAlt
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                      size={10}
                    />
                    <input
                      type="text"
                      className="w-full rounded-2xl border-white/40 bg-white/50 p-4 pl-10 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm"
                      placeholder="Full Address"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
                    Institutional Memo
                  </label>
                  <textarea
                    className="w-full rounded-2xl border-white/40 bg-white/50 p-4 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm min-h-[100px]"
                    placeholder="Brief narrative context..."
                  ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <FaCalendarAlt
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                      size={10}
                    />
                    <input
                      type="date"
                      className="w-full rounded-2xl border-white/40 bg-white/50 p-4 pl-10 text-[10px] font-bold focus:bg-white outline-none transition-all shadow-sm"
                    />
                  </div>
                  <div className="relative group">
                    <input type="file" className="hidden" id="receive-file" />
                    <label
                      htmlFor="receive-file"
                      className="w-full rounded-2xl border-white/40 bg-white/50 p-4 pl-10 text-[9px] font-black uppercase tracking-widest border border-dashed cursor-pointer hover:bg-white hover:border-secondary/40 transition-all flex items-center shadow-sm"
                    >
                      <FaFileAlt
                        className="absolute left-4 text-muted-foreground/40"
                        size={12}
                      />
                      Scan Document
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button className="w-full h-16 bg-secondary hover:bg-secondary/90 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl shadow-secondary/20 transition-all active:scale-95">
                  <FaCheck className="mr-2 italic" /> Log Inbound Record
                </Button>
              </div>
            </form>
          </GlassCard>
        </div>

        {/* List Index */}
        <div className="lg:col-span-8 space-y-6 flex flex-col h-full">
          <ListToolbar
            searchPlaceHolder="Search inbound stream..."
            onSearch={setSearchTerm}
            showAddButton={false}
          />

          <GlassCard className="flex-1 flex flex-col">
            <div className="p-8 border-b border-white/20">
              <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
                Inbound Corridor Stream
              </h4>
            </div>

            <div className="flex-1 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-20">SN</TableHead>
                    <TableHead>Originator Data</TableHead>
                    <TableHead className="text-center">Reference</TableHead>
                    <TableHead className="text-center">Temporal</TableHead>
                    <TableHead className="text-center">Phase</TableHead>
                    <TableHead className="text-center">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedPostal.map((p: any, index: number) => (
                    <TableRow key={p.id} className="group">
                      <TableCell className="font-mono text-xs text-muted-foreground italic">
                        {(currentPage - 1) * pageSize + index + 1}
                      </TableCell>
                      <TableCell>
                        <div className="font-black text-foreground text-sm uppercase italic tracking-tight leading-none mb-1">
                          {p.from}
                        </div>
                        <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                          Recipient: {p.to}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="px-2 py-1 bg-secondary/10 text-secondary text-[9px] font-bold font-mono rounded border border-secondary/20 uppercase">
                          {p.referenceNo}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="text-[10px] font-black uppercase text-muted-foreground font-mono">
                          {p.date}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                            p.status === "Logged"
                              ? "bg-emerald-500/10 text-emerald-600"
                              : "bg-amber-500/10 text-amber-600 animate-pulse"
                          }`}
                        >
                          {p.status}
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
                  {paginatedPostal.length === 0 && (
                    <TableRow>
                      <TableCell
                        colSpan={6}
                        className="h-40 text-center text-muted-foreground uppercase tracking-widest text-[10px] font-black"
                      >
                        No matches in inbound correspondence stream.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            {filteredPostal.length > pageSize && (
              <ListPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                totalRecords={filteredPostal.length}
                pageSize={pageSize}
              />
            )}
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
