"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { ListToolbar } from "@/components/common/ListToolbar";
import { ListPagination } from "@/components/common/ListPagination";
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
  FaLayerGroup,
  FaUsers,
  FaUserGraduate,
  FaCheckCircle,
  FaExclamationCircle,
  FaPrint,
} from "react-icons/fa";

export default function HomeworkReportPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const [reportList, setReportList] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      class: "Grade 10 (Alpha)",
      subject: "Advanced Physics",
      marks: 24,
      submissionDate: "2024-03-24",
      evaluationDate: "2024-03-27",
      status: "Complete",
    },
    {
      id: 2,
      name: "Bob Smith",
      class: "Grade 10 (Alpha)",
      subject: "Advanced Physics",
      marks: 0,
      submissionDate: "-",
      evaluationDate: "-",
      status: "Incomplete",
    },
  ]);

  const filteredReports = reportList.filter(
    (r) =>
      r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.class.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredReports.length / pageSize);
  const paginatedReports = filteredReports.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="container mx-auto space-y-8 pb-20">
      <PageHeader
        title="Pedagogical Analytics"
        subtitle="Evaluation Matrix Repository"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold  text-[10px]  shadow-lg shadow-secondary/10 transition-all">
            <FaPrint /> Export Matrix
          </Button>
        }
      />

      <div className="space-y-6 flex flex-col h-full">
        <AdminCard className="p-8 bg-gradient-to-br from-white to-secondary/5">
          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
            <div>
              <label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1">
                Class Tier
              </label>
              <div className="relative">
                <FaLayerGroup
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  size={12}
                />
                <select className="w-full rounded-2xl border-gray-200 bg-white p-4 pl-10 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm appearance-none">
                  <option>Grade 10</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1">
                Sectional Unit
              </label>
              <div className="relative">
                <FaUsers
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  size={12}
                />
                <select className="w-full rounded-2xl border-gray-200 bg-white p-4 pl-10 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm appearance-none">
                  <option>Alpha</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-semibold text-gray-500   mb-2 px-1">
                Academic Domain
              </label>
              <select className="w-full rounded-2xl border-gray-200 bg-white p-4 text-xs font-bold focus:bg-white outline-none transition-all shadow-sm appearance-none">
                <option>Advanced Physics</option>
              </select>
            </div>
            <Button className="h-14 bg-secondary hover:bg-secondary/90 text-white rounded-2xl font-semibold  text-[10px]  shadow-lg transition-all active:scale-95">
              Query Results
            </Button>
          </form>
        </AdminCard>

        <ListToolbar
          searchPlaceHolder="Search subject profile..."
          onSearch={setSearchTerm}
          showAddButton={false}
        />

        <AdminCard className="flex-1 flex flex-col">
          <div className="p-8 border-b border-gray-200">
            <h4 className="text-xs font-semibold text-gray-500   leading-none">
              Evaluation Performance Stream
            </h4>
          </div>

          <div className="flex-1 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-20">SN</TableHead>
                  <TableHead>Subject Profile</TableHead>
                  <TableHead className="text-center">Mark Valence</TableHead>
                  <TableHead>Temporal Nodes</TableHead>
                  <TableHead className="text-center">Compliance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedReports.map((r, index) => (
                  <TableRow key={r.id} className="group">
                    <TableCell className=" text-xs text-gray-500 ">
                      {(currentPage - 1) * pageSize + index + 1}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shadow-inner group-hover:bg-secondary group-hover:text-white transition-all shadow-sm font-semibold text-sm">
                          <FaUserGraduate size={14} />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground text-sm   tracking-tight leading-none mb-1">
                            {r.name}
                          </div>
                          <div className="text-[10px] font-bold text-gray-500   leading-none">
                            {r.class} • {r.subject}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="text-lg font-semibold  text-foreground leading-none">
                        {r.marks}
                        <span className="text-[9px] text-gray-500/60 ml-1 ">
                          pts
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-[10px]">
                          <span className="font-semibold text-gray-500  w-20 tracking-tighter">
                            Submitted:
                          </span>
                          <span className="font-bold text-foreground ">
                            {r.submissionDate}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px]">
                          <span className="font-semibold text-gray-500  w-20 tracking-tighter">
                            Evaluated:
                          </span>
                          <span className="font-bold text-foreground ">
                            {r.evaluationDate}
                          </span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-semibold   ${
                          r.status === "Complete"
                            ? "bg-emerald-500/10 text-emerald-600"
                            : "bg-amber-500/10 text-amber-600 animate-pulse"
                        }`}
                      >
                        {r.status === "Complete" ? (
                          <FaCheckCircle size={10} />
                        ) : (
                          <FaExclamationCircle size={10} />
                        )}
                        {r.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
                {paginatedReports.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="h-40 text-center text-gray-500   text-[10px] font-semibold"
                    >
                      No matching records in evaluation matrix.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {filteredReports.length > pageSize && (
            <ListPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalRecords={filteredReports.length}
              pageSize={pageSize}
            />
          )}
        </AdminCard>
      </div>
    </div>
  );
}

