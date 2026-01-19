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

export default function ContentTypePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const [typeList, setTypeList] = useState([
    {
      id: 1,
      name: "Assignment",
      description: "Student homework assignments.",
    },
    {
      id: 2,
      name: "Syllabus",
      description: "Academic year syllabus documents.",
    },
  ]);

  const filteredTypes = typeList.filter(
    (item: any) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredTypes.length / pageSize);
  const paginatedTypes = filteredTypes.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Content Type Taxonomy"
        subtitle="Define and Organize Institutional Digital Asset Classifications"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form Section */}
        <div className="lg:col-span-4 h-full">
          <GlassCard className="p-10 flex flex-col h-full bg-gradient-to-br from-white to-secondary/5">
            <h4 className="mb-8 text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
              Define Taxonomy
            </h4>
            <form className="space-y-6 flex-1">
              <div className="space-y-5">
                <div>
                  <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
                    Classification Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-2xl border-white/40 bg-white/50 p-4 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm italic"
                    placeholder="e.g. Technical Guide"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 px-1">
                    Conceptual Description
                  </label>
                  <textarea
                    className="w-full rounded-2xl border-white/40 bg-white/50 p-4 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm min-h-[120px]"
                    placeholder="Define the scope of this classification..."
                    rows={4}
                  ></textarea>
                </div>
              </div>

              <div className="pt-6">
                <Button className="w-full h-16 bg-secondary hover:bg-secondary/90 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl shadow-secondary/20 transition-all active:scale-95">
                  Save Taxonomy Class
                </Button>
              </div>
            </form>
          </GlassCard>
        </div>

        {/* List Section */}
        <div className="lg:col-span-8 space-y-6 flex flex-col h-full">
          <ListToolbar
            searchPlaceHolder="Search taxonomy registry..."
            onSearch={setSearchTerm}
            showAddButton={false}
          />

          <GlassCard className="flex-1 flex flex-col">
            <div className="p-8 border-b border-white/20">
              <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
                Active Classification Registry
              </h4>
            </div>

            <div className="flex-1 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-20">SN</TableHead>
                    <TableHead>Classification Name</TableHead>
                    <TableHead>Scope Description</TableHead>
                    <TableHead className="text-center">Governance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedTypes.map((item: any, index: number) => (
                    <TableRow key={item.id} className="group">
                      <TableCell className="font-mono text-xs text-muted-foreground italic">
                        {(currentPage - 1) * pageSize + index + 1}
                      </TableCell>
                      <TableCell>
                        <div className="font-black text-foreground text-sm uppercase italic tracking-tight leading-none">
                          {item.name}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-[10px] text-muted-foreground/60 italic font-medium leading-relaxed max-w-sm">
                          {item.description}
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
                  {paginatedTypes.length === 0 && (
                    <TableRow>
                      <TableCell
                        colSpan={4}
                        className="h-40 text-center text-muted-foreground uppercase tracking-widest text-[10px] font-black"
                      >
                        No matches found in taxonomy registry.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            {filteredTypes.length > pageSize && (
              <ListPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                totalRecords={filteredTypes.length}
                pageSize={pageSize}
              />
            )}
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
