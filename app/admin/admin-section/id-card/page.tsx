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
  FaIdCard,
  FaCheck,
  FaRulerCombined,
  FaImage,
  FaUserShield,
  FaToggleOn,
} from "react-icons/fa";

export default function IDCardPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const [idCardList, setIdCardList] = useState([
    {
      id: 1,
      name: "Student Principal Pass",
      role: "Student",
      layout: "Vertical High-Gloss",
    },
    {
      id: 2,
      name: "Faculty Access Token",
      role: "Staff",
      layout: "Horizontal Matte",
    },
  ]);

  const filteredCards = idCardList.filter(
    (c: any) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCards.length / pageSize);
  const paginatedCards = filteredCards.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Identification Blueprint"
        subtitle="ID Card Design & Architectural Configuration"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Template Designer Form */}
        <div className="lg:col-span-12 xl:col-span-5 h-full">
          <GlassCard className="p-10 flex flex-col h-full bg-gradient-to-br from-white to-secondary/5">
            <h4 className="mb-8 text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
              Design Token Architecture
            </h4>

            <form className="space-y-6 flex-1">
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
                    Blueprint Designation{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-2xl border-white/40 bg-white/50 p-4 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm italic"
                    placeholder="e.g. Standard Student ID"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
                      Width (mm)
                    </label>
                    <div className="relative">
                      <FaRulerCombined
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/40"
                        size={10}
                      />
                      <input
                        type="text"
                        className="w-full rounded-2xl border-white/40 bg-white/50 p-4 pl-10 text-xs font-mono font-bold focus:bg-white outline-none transition-all shadow-sm"
                        placeholder="57"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
                      Height (mm)
                    </label>
                    <div className="relative">
                      <FaRulerCombined
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/40"
                        size={10}
                      />
                      <input
                        type="text"
                        className="w-full rounded-2xl border-white/40 bg-white/50 p-4 pl-10 text-xs font-mono font-bold focus:bg-white outline-none transition-all shadow-sm"
                        placeholder="89"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-3 px-1">
                    Attribute Toggle Matrix
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      "Admission No",
                      "Full Name",
                      "Class/Grade",
                      "Paternal Liaison",
                      "Maternal Liaison",
                      "Geospatial Address",
                      "Interaction Node",
                      "Birth Chronology",
                      "Vital Group",
                    ].map((attr) => (
                      <div
                        key={attr}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-white/40 border border-white/60 hover:border-secondary/30 transition-all group"
                      >
                        <span className="text-[8px] font-black text-muted-foreground uppercase tracking-tighter group-hover:text-secondary">
                          {attr}
                        </span>
                        <FaToggleOn
                          size={14}
                          className="text-secondary cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <label className="w-full flex flex-col items-center gap-2 p-4 rounded-2xl border border-dashed border-white/40 bg-white/40 text-[9px] font-black text-muted-foreground/60 uppercase tracking-widest cursor-pointer hover:bg-white hover:border-secondary/40 transition-all shadow-sm">
                    <FaImage size={14} className="text-secondary/40" />
                    Canvas Vector
                    <input type="file" className="hidden" />
                  </label>
                  <label className="w-full flex flex-col items-center gap-2 p-4 rounded-2xl border border-dashed border-white/40 bg-white/40 text-[9px] font-black text-muted-foreground/60 uppercase tracking-widest cursor-pointer hover:bg-white hover:border-secondary/40 transition-all shadow-sm">
                    <FaUserShield size={14} className="text-secondary/40" />
                    Institutional Seal
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>

              <div className="pt-6">
                <Button className="w-full h-16 bg-secondary hover:bg-secondary/90 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl shadow-secondary/20 transition-all active:scale-95">
                  <FaCheck className="mr-2 italic" /> Establish Blueprint
                </Button>
              </div>
            </form>
          </GlassCard>
        </div>

        {/* Templates Index */}
        <div className="lg:col-span-12 xl:col-span-7 space-y-6 flex flex-col h-full">
          <ListToolbar
            searchPlaceHolder="Search template registry..."
            onSearch={setSearchTerm}
            showAddButton={false}
          />

          <GlassCard className="flex-1 flex flex-col">
            <div className="p-8 border-b border-white/20">
              <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
                Institutional Template Registry
              </h4>
            </div>

            <div className="flex-1 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-20">SN</TableHead>
                    <TableHead>Blueprint Identity</TableHead>
                    <TableHead className="text-center">
                      Applicable Tier
                    </TableHead>
                    <TableHead className="text-center">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedCards.map((card: any, index: number) => (
                    <TableRow key={card.id} className="group">
                      <TableCell className="font-mono text-xs text-muted-foreground italic">
                        {(currentPage - 1) * pageSize + index + 1}
                      </TableCell>
                      <TableCell>
                        <div className="font-black text-foreground text-sm uppercase italic tracking-tight leading-none mb-1">
                          {card.name}
                        </div>
                        <div className="text-[10px] font-bold text-secondary uppercase tracking-widest flex items-center gap-1.5 font-mono">
                          <FaRulerCombined
                            size={8}
                            className="text-secondary/60"
                          />{" "}
                          Layout: {card.layout}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="px-4 py-1.5 bg-secondary text-white text-[9px] font-black rounded-xl uppercase tracking-widest shadow-sm">
                          {card.role}
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
                  {paginatedCards.length === 0 && (
                    <TableRow>
                      <TableCell
                        colSpan={4}
                        className="h-40 text-center text-muted-foreground uppercase tracking-widest text-[10px] font-black"
                      >
                        No matches found in template registry.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            {filteredCards.length > pageSize && (
              <ListPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                totalRecords={filteredCards.length}
                pageSize={pageSize}
              />
            )}
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
