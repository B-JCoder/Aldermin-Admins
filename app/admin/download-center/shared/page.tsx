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

export default function SharedContentPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const [contentList, setContentList] = useState([
    {
      id: 1,
      name: "Final Exam Preparation",
      sendTo: "Class 10-A, 10-B",
      sharedDate: "2023-11-20",
      validUpto: "2023-12-25",
      sharedBy: "Admin User",
    },
    {
      id: 2,
      name: "Chemistry Lab Manual",
      sendTo: "Class 11 Science",
      sharedDate: "2023-11-25",
      validUpto: "2024-06-30",
      sharedBy: "John Teacher",
    },
  ]);

  const filteredContent = contentList.filter(
    (item: any) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sendTo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sharedBy.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredContent.length / pageSize);
  const paginatedContent = filteredContent.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Shared Content Registry"
        subtitle="View and manage files shared with students or staff"
      />

      <div className="space-y-6 flex flex-col h-full">
        <ListToolbar
          searchPlaceHolder="Search shared resources..."
          onSearch={setSearchTerm}
          showAddButton={false}
        />

        <AdminCard className="flex-1 flex flex-col">
          <div className="p-8 border-b border-gray-200">
            <h4 className="text-xs font-semibold text-gray-500   leading-none">
              Institutional Resource Governance
            </h4>
          </div>

          <div className="flex-1 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">SN</TableHead>
                  <TableHead>Resource Name</TableHead>
                  <TableHead>Recipients</TableHead>
                  <TableHead>Shared Date</TableHead>
                  <TableHead>Valid Until</TableHead>
                  <TableHead>Publisher</TableHead>
                  <TableHead className="text-center">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedContent.map((item: any, index: number) => (
                  <TableRow key={item.id} className="group">
                    <TableCell className=" text-xs text-gray-500 ">
                      {(currentPage - 1) * pageSize + index + 1}
                    </TableCell>
                    <TableCell>
                      <div className="font-semibold text-foreground text-sm   tracking-tight leading-none group-hover:text-secondary group-hover:underline cursor-pointer transition-all">
                        {item.name}
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-xl bg-secondary/10 border border-secondary/20 px-3 py-1.5 text-[10px] font-semibold text-secondary  ">
                        {item.sendTo}
                      </span>
                    </TableCell>
                    <TableCell className="text-[11px] font-bold text-gray-500/60 ">
                      {item.sharedDate}
                    </TableCell>
                    <TableCell>
                      <span className="text-[10px] font-semibold text-red-500 bg-red-50/50 border border-red-100 px-2 py-1.5 rounded-xl  ">
                        {item.validUpto}
                      </span>
                    </TableCell>
                    <TableCell className="text-[11px] font-semibold text-secondary  ">
                      {item.sharedBy}
                    </TableCell>
                    <TableCell className="text-center">
                      <ListActionButtons
                        onEdit={() => console.log("Edit")}
                        onDelete={() => console.log("Delete")}
                      />
                    </TableCell>
                  </TableRow>
                ))}
                {paginatedContent.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={7}
                      className="h-40 text-center text-gray-500   text-[10px] font-semibold"
                    >
                      No matching resources shared.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {filteredContent.length > pageSize && (
            <ListPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalRecords={filteredContent.length}
              pageSize={pageSize}
            />
          )}
        </AdminCard>
      </div>
    </div>
  );
}

