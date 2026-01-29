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
import {
  FaTrash,
  FaDownload,
  FaFilePdf,
  FaFileWord,
  FaFileImage,
  FaFileAlt,
} from "react-icons/fa";

export default function DownloadCenterListPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const [contents, setContents] = useState([
    {
      id: 1,
      name: "Student Handbook 2024",
      type: "PDF",
      category: "Administrative",
      date: "2024-01-10",
      size: "3.5 MB",
    },
    {
      id: 2,
      name: "Event Schedule Q1",
      type: "Image",
      category: "Events",
      date: "2024-01-12",
      size: "1.2 MB",
    },
    {
      id: 3,
      name: "Application Form template",
      type: "Word",
      category: "Forms",
      date: "2024-02-01",
      size: "0.5 MB",
    },
  ]);

  const getIcon = (type: string) => {
    switch (type) {
      case "PDF":
        return <FaFilePdf className="text-secondary/60" size={16} />;
      case "Word":
        return <FaFileWord className="text-secondary/60" size={16} />;
      case "Image":
        return <FaFileImage className="text-secondary/60" size={16} />;
      default:
        return <FaFileAlt className="text-secondary/60" size={16} />;
    }
  };

  const filteredContents = contents.filter(
    (c: any) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredContents.length / pageSize);
  const paginatedContents = filteredContents.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Central Content Registry"
        subtitle="Manage & Distribute Institutional Digital Assets"
      />

      <div className="space-y-6 flex flex-col h-full">
        <ListToolbar
          searchPlaceHolder="Search digital assets..."
          onSearch={setSearchTerm}
          showAddButton={false}
        />

        <AdminCard className="flex-1 flex flex-col">
          <div className="p-8 border-b border-gray-200">
            <h4 className="text-xs font-semibold text-gray-500   leading-none">
              Stored Assets Registry
            </h4>
          </div>

          <div className="flex-1 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Asset Name</TableHead>
                  <TableHead className="text-center">Classification</TableHead>
                  <TableHead className="text-center">Format</TableHead>
                  <TableHead className="text-center">Uploaded</TableHead>
                  <TableHead className="text-center">Options</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedContents.map((c: any) => (
                  <TableRow key={c.id} className="group">
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-2xl bg-secondary/5 border border-secondary/10 flex items-center justify-center shadow-sm group-hover:bg-secondary group-hover:border-secondary transition-all">
                          <div className="group-hover:text-white transition-colors">
                            {getIcon(c.type)}
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-foreground text-sm   leading-none mb-1">
                            {c.name}
                          </div>
                          <div className="text-[10px] font-bold text-gray-500   ">
                            Size: {c.size}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <td className="px-6 py-6 text-center">
                      <span className="px-3 py-1.5 bg-secondary/10 text-secondary text-[9px] font-semibold rounded-xl   border border-secondary/20">
                        {c.category}
                      </span>
                    </td>
                    <TableCell className="text-center">
                      <span className="text-xs  font-bold text-gray-500/60">
                        {c.type}
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="text-xs  font-bold text-gray-500/40 ">
                        {c.date}
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center gap-2">
                        <button
                          className="p-2.5 rounded-xl bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-all shadow-sm active:scale-95"
                          title="Download"
                        >
                          <FaDownload size={12} />
                        </button>
                        <button
                          className="p-2.5 rounded-xl bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-sm active:scale-95"
                          title="Delete"
                        >
                          <FaTrash size={12} />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {paginatedContents.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="h-40 text-center text-gray-500   text-[10px] font-semibold"
                    >
                      No matching assets found in registry.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {filteredContents.length > pageSize && (
            <ListPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalRecords={filteredContents.length}
              pageSize={pageSize}
            />
          )}
        </AdminCard>
      </div>
    </div>
  );
}

