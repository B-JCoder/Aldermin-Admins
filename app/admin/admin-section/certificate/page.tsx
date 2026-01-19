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
  FaCertificate,
  FaCheck,
  FaFont,
  FaImage,
  FaSignature,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
} from "react-icons/fa";

export default function CertificatePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const [certificateList, setCertificateList] = useState([
    {
      id: 1,
      name: "Academic Excellence 2024",
      background: "Classic Parchment",
      applicable: "All Students",
    },
    {
      id: 2,
      name: "Varsity Sports Achievement",
      background: "Athletic Gold",
      applicable: "Sports Tier",
    },
  ]);

  const filteredCertificates = certificateList.filter(
    (c: any) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.applicable.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCertificates.length / pageSize);
  const paginatedCertificates = filteredCertificates.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Institutional Accolade Canvas"
        subtitle="Certificate Design & Template Configuration"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Designer Form */}
        <div className="lg:col-span-5 h-full">
          <GlassCard className="p-10 flex flex-col h-full bg-gradient-to-br from-white to-secondary/5">
            <h4 className="mb-8 text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
              Honourary Protocol Design
            </h4>

            <form className="space-y-6 flex-1">
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
                    Accolade Designation <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-2xl border-white/40 bg-white/50 p-4 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm italic"
                    placeholder="e.g. Dean's List Certification"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
                      Typography Class
                    </label>
                    <div className="relative">
                      <FaFont
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                        size={10}
                      />
                      <select className="w-full rounded-2xl border-white/40 bg-white/50 p-4 pl-10 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm appearance-none cursor-pointer">
                        <option>Serif Pro Display</option>
                        <option>Gothic Formal</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
                      Font Amplitude (pt)
                    </label>
                    <input
                      type="number"
                      className="w-full rounded-2xl border-white/40 bg-white/50 p-4 text-xs font-mono font-bold focus:bg-white outline-none transition-all shadow-sm"
                      placeholder="24"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
                    Narrative Body
                  </label>
                  <textarea
                    className="w-full rounded-2xl border-white/40 bg-white/50 p-4 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm min-h-[120px] leading-relaxed"
                    placeholder="This is to certify that [Student Name] has achieved..."
                  ></textarea>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {[
                    { Icon: FaAlignLeft, label: "Left" },
                    { Icon: FaAlignCenter, label: "Center" },
                    { Icon: FaAlignRight, label: "Right" },
                  ].map((align, i) => (
                    <div
                      key={i}
                      className={`p-4 rounded-xl flex flex-col items-center gap-2 cursor-pointer transition-all border ${
                        i === 1
                          ? "bg-secondary/10 border-secondary/20"
                          : "bg-white/40 border-white/20 hover:bg-white hover:border-secondary/30 shadow-sm"
                      }`}
                    >
                      <align.Icon
                        className={
                          i === 1
                            ? "text-secondary"
                            : "text-muted-foreground/40"
                        }
                        size={12}
                      />
                      <span
                        className={`text-[8px] font-black uppercase tracking-widest ${
                          i === 1
                            ? "text-secondary"
                            : "text-muted-foreground/40"
                        }`}
                      >
                        {align.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <label className="w-full flex flex-col items-center gap-2 p-4 rounded-2xl border border-dashed border-white/40 bg-white/40 text-[9px] font-black text-muted-foreground/60 uppercase tracking-widest cursor-pointer hover:bg-white hover:border-secondary/40 transition-all shadow-sm">
                    <FaImage size={14} className="text-secondary/40" />
                    Watermark Asset
                    <input type="file" className="hidden" />
                  </label>
                  <label className="w-full flex flex-col items-center gap-2 p-4 rounded-2xl border border-dashed border-white/40 bg-white/40 text-[9px] font-black text-muted-foreground/60 uppercase tracking-widest cursor-pointer hover:bg-white hover:border-secondary/40 transition-all shadow-sm">
                    <FaSignature size={14} className="text-secondary/40" />
                    Authorize Sign
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>

              <div className="pt-6">
                <Button className="w-full h-16 bg-secondary hover:bg-secondary/90 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl shadow-secondary/20 transition-all active:scale-95">
                  <FaCheck className="mr-2 italic" /> Canonize Accolade Design
                </Button>
              </div>
            </form>
          </GlassCard>
        </div>

        {/* Templates Index */}
        <div className="lg:col-span-7 space-y-6 flex flex-col h-full">
          <ListToolbar
            searchPlaceHolder="Search accolade registry..."
            onSearch={setSearchTerm}
            showAddButton={false}
          />

          <GlassCard className="flex-1 flex flex-col">
            <div className="p-8 border-b border-white/20">
              <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
                Institutional Accolade Registry
              </h4>
            </div>

            <div className="flex-1 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-20">SN</TableHead>
                    <TableHead>Accolade Identity</TableHead>
                    <TableHead className="text-center">Base Vector</TableHead>
                    <TableHead className="text-center">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedCertificates.map((c: any, index: number) => (
                    <TableRow key={c.id} className="group">
                      <TableCell className="font-mono text-xs text-muted-foreground italic">
                        {(currentPage - 1) * pageSize + index + 1}
                      </TableCell>
                      <TableCell>
                        <div className="font-black text-foreground text-sm uppercase italic tracking-tight leading-none mb-1">
                          {c.name}
                        </div>
                        <div className="text-[10px] font-bold text-secondary uppercase tracking-widest flex items-center gap-1.5 font-mono">
                          <FaCertificate
                            size={8}
                            className="text-secondary/60"
                          />{" "}
                          Tier: {c.applicable}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="px-3 py-1.5 bg-secondary/10 text-secondary text-[9px] font-black rounded-xl uppercase tracking-widest border border-secondary/20">
                          {c.background}
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
                  {paginatedCertificates.length === 0 && (
                    <TableRow>
                      <TableCell
                        colSpan={4}
                        className="h-40 text-center text-muted-foreground uppercase tracking-widest text-[10px] font-black"
                      >
                        No matches in accolade registry database.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            {filteredCertificates.length > pageSize && (
              <ListPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                totalRecords={filteredCertificates.length}
                pageSize={pageSize}
              />
            )}
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
