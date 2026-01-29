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
import { FaCloudDownloadAlt } from "react-icons/fa";

interface Download {
  id: number;
  title: string;
  type: string;
  date: string;
  size: string;
}

interface DownloadListProps {
  downloads: Download[];
}

export function DownloadList({
  downloads: initialDownloads,
}: DownloadListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const filteredDownloads = initialDownloads.filter((d) =>
    d.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredDownloads.length / pageSize);
  const paginatedDownloads = filteredDownloads.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="space-y-6 flex flex-col h-full">
      <ListToolbar
        searchPlaceHolder="Search resources..."
        onSearch={setSearchTerm}
        showAddButton={false}
      />

      <AdminCard className="flex-1 flex flex-col">
        <div className="p-8 border-b border-gray-200">
          <h4 className="text-xs font-semibold text-gray-500   leading-none">
            Authorized Digital Library
          </h4>
        </div>

        <div className="flex-1 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-20">SN</TableHead>
                <TableHead>Resource Data</TableHead>
                <TableHead className="text-center">Access</TableHead>
                <TableHead className="text-center">Format</TableHead>
                <TableHead className="text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedDownloads.map((d, index) => (
                <TableRow key={d.id} className="group">
                  <TableCell className=" text-xs text-gray-500 ">
                    {(currentPage - 1) * pageSize + index + 1}
                  </TableCell>
                  <TableCell>
                    <div className="font-semibold text-foreground text-sm   tracking-tight mb-1">
                      {d.title}
                    </div>
                    <div className="text-[10px] font-bold text-gray-500  tracking-tighter">
                      {d.date}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <span className="px-3 py-1 bg-secondary/10 text-secondary text-[9px] font-semibold rounded-full  ">
                      {d.type}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="text-[10px] font-semibold  text-gray-500 ">
                      {d.size}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <ListActionButtons
                      onEdit={() => console.log("Edit")}
                      onDelete={() => console.log("Delete")}
                      customActions={
                        <button
                          className="h-9 w-9 flex items-center justify-center rounded-xl bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-all shadow-sm active:scale-90"
                          title="Download"
                        >
                          <FaCloudDownloadAlt size={14} />
                        </button>
                      }
                    />
                  </TableCell>
                </TableRow>
              ))}
              {paginatedDownloads.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="h-40 text-center text-gray-500   text-[10px] font-semibold"
                  >
                    No matching resources found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {filteredDownloads.length > pageSize && (
          <ListPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            totalRecords={filteredDownloads.length}
            pageSize={pageSize}
          />
        )}
      </AdminCard>
    </div>
  );
}
