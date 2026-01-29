"use client";

import React, { useState } from "react";
import { AdminCard } from "@/components/common/AdminCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ListToolbar } from "@/components/common/ListToolbar";
import { ListPagination } from "@/components/common/ListPagination";
import { ListActionButtons } from "@/components/common/ListActionButtons";
import { FaDownload, FaLayerGroup, FaUsers } from "react-icons/fa";

interface Content {
  id: number;
  title: string;
  type: string;
  availableFor: string;
  date: string;
  file: string;
}

interface ContentListProps {
  contentList: Content[];
}

export function ContentList({
  contentList: initialContentList,
}: ContentListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const filteredContentList = initialContentList.filter(
    (c) =>
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredContentList.length / pageSize);
  const paginatedContentList = filteredContentList.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="space-y-6 flex flex-col h-full">
      <ListToolbar
        searchPlaceHolder="Search content..."
        onSearch={setSearchTerm}
        showAddButton={false}
      />

      <AdminCard className="flex-1 flex flex-col">
        <div className="p-8 border-b border-gray-200">
          <h4 className="text-xs font-semibold text-gray-500   leading-none">
            Authorized Digital Assets
          </h4>
        </div>

        <div className="flex-1 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-20">SN</TableHead>
                <TableHead>Asset Profile</TableHead>
                <TableHead className="text-center">Target</TableHead>
                <TableHead className="text-center">Date</TableHead>
                <TableHead className="text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedContentList.map((c, index) => (
                <TableRow key={c.id} className="group">
                  <TableCell className=" text-xs text-gray-500 ">
                    {(currentPage - 1) * pageSize + index + 1}
                  </TableCell>
                  <TableCell>
                    <div className="font-semibold text-foreground text-sm   tracking-tight mb-1">
                      {c.title}
                    </div>
                    <div className="text-[10px] font-semibold text-secondary flex items-center gap-1 bg-secondary/10 w-fit px-2 py-0.5 rounded-full  ">
                      <FaLayerGroup size={10} /> {c.type}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center gap-1.5 text-[10px] font-semibold   text-gray-500">
                      <FaUsers size={12} className="text-sidebar/40" />
                      {c.availableFor}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="text-[10px] font-semibold  text-gray-500 ">
                      {c.date}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex justify-center gap-2">
                      <ListActionButtons
                        onEdit={() => console.log("Edit")}
                        onDelete={() => console.log("Delete")}
                        customActions={
                          <button
                            className="h-9 w-9 flex items-center justify-center rounded-xl bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-all shadow-sm active:scale-90"
                            title="Download"
                          >
                            <FaDownload size={14} />
                          </button>
                        }
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {paginatedContentList.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="h-40 text-center text-gray-500   text-[10px] font-semibold"
                  >
                    No matching assets found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {filteredContentList.length > pageSize && (
          <ListPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            totalRecords={filteredContentList.length}
            pageSize={pageSize}
          />
        )}
      </AdminCard>
    </div>
  );
}
