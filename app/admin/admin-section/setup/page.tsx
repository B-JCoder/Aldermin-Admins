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
import { FaCheck, FaPuzzlePiece, FaTag } from "react-icons/fa";

export default function AdminSetupPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const [setupList, setSetupList] = useState([
    {
      id: 1,
      type: "Academic Session",
      name: "Autumn Cohort 2024",
      description: "Standard autumn academic period",
    },
    {
      id: 2,
      type: "Operational Shift",
      name: "Nocturnal (Evening)",
      description: "Evening class administration",
    },
  ]);

  const filteredSetup = setupList.filter(
    (s: any) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredSetup.length / pageSize);
  const paginatedSetup = filteredSetup.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Institutional Configuration"
        subtitle="Core Administrative Parameters & Setup Environment"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Creation Form */}
        <div className="lg:col-span-4 h-full">
          <AdminCard className="p-10 flex flex-col h-full bg-gradient-to-br from-white to-secondary/5">
            <h4 className="mb-8 text-xs font-semibold text-gray-500   leading-none">
              Define Parameter
            </h4>

            <form className="space-y-6 flex-1">
              <div className="space-y-5">
                <div>
                  <label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1">
                    Taxonomy Class <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaPuzzlePiece
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/40"
                      size={12}
                    />
                    <input
                      type="text"
                      className="w-full rounded-2xl border-gray-200 bg-white p-4 pl-10 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm"
                      placeholder="e.g. Session Type"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1">
                    Parameter Designation{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaTag
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/40"
                      size={12}
                    />
                    <input
                      type="text"
                      className="w-full rounded-2xl border-gray-200 bg-white p-4 pl-10 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm"
                      placeholder="e.g. Morning Shift"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1">
                    Conceptual Description
                  </label>
                  <textarea
                    className="w-full rounded-2xl border-gray-200 bg-white p-4 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm min-h-[120px]"
                    placeholder="Define the scope of this parameter..."
                  ></textarea>
                </div>
              </div>

              <div className="pt-6">
                <Button className="w-full h-16 bg-secondary hover:bg-secondary/90 text-white rounded-2xl font-semibold  text-[10px]  shadow-xl shadow-secondary/20 transition-all active:scale-95">
                  <FaCheck className="mr-2 " /> Initialize Parameter
                </Button>
              </div>
            </form>
          </AdminCard>
        </div>

        {/* List Index */}
        <div className="lg:col-span-8 space-y-6 flex flex-col h-full">
          <ListToolbar
            searchPlaceHolder="Search configuration matrix..."
            onSearch={setSearchTerm}
            showAddButton={false}
          />

          <AdminCard className="flex-1 flex flex-col">
            <div className="p-8 border-b border-gray-200">
              <h4 className="text-xs font-semibold text-gray-500   leading-none">
                Active Configuration Matrix
              </h4>
            </div>

            <div className="flex-1 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-20">SN</TableHead>
                    <TableHead>Configuration Entity</TableHead>
                    <TableHead className="text-center">Description</TableHead>
                    <TableHead className="text-center">Governance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedSetup.map((s: any, index: number) => (
                    <TableRow key={s.id} className="group">
                      <TableCell className=" text-xs text-gray-500 ">
                        {(currentPage - 1) * pageSize + index + 1}
                      </TableCell>
                      <TableCell>
                        <div className="font-semibold text-foreground text-sm   tracking-tight leading-none mb-1">
                          {s.name}
                        </div>
                        <div className="text-[10px] font-bold text-secondary   flex items-center gap-1.5 ">
                          <FaPuzzlePiece
                            size={8}
                            className="text-secondary/60"
                          />{" "}
                          {s.type}
                        </div>
                      </TableCell>
                      <TableCell className="text-center max-w-xs">
                        <div className="text-[10px] text-gray-500/60  font-medium leading-relaxed">
                          {s.description}
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
                  {paginatedSetup.length === 0 && (
                    <TableRow>
                      <TableCell
                        colSpan={4}
                        className="h-40 text-center text-gray-500   text-[10px] font-semibold"
                      >
                        No matches found in configuration matrix.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            {filteredSetup.length > pageSize && (
              <ListPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                totalRecords={filteredSetup.length}
                pageSize={pageSize}
              />
            )}
          </AdminCard>
        </div>
      </div>
    </div>
  );
}

