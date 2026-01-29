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
import { FaUserTie } from "react-icons/fa";

interface Designation {
  id: number;
  title: string;
}

interface DesignationListProps {
  designationList: Designation[];
  onDelete: (id: number) => void;
}

export function DesignationList({
  designationList: initialDesignationList,
  onDelete,
}: DesignationListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const filteredDesignationList = initialDesignationList.filter((d) =>
    d.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredDesignationList.length / pageSize);
  const paginatedDesignationList = filteredDesignationList.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="space-y-6 flex flex-col h-full">
      <ListToolbar
        searchPlaceHolder="Search designations..."
        onSearch={setSearchTerm}
        showAddButton={false}
      />

      <AdminCard className="flex-1 flex flex-col">
        <div className="p-8 border-b border-gray-200">
          <h4 className="text-xs font-semibold text-gray-500   leading-none">
            Authorized Institutional Roles
          </h4>
        </div>

        <div className="flex-1 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-20">SN</TableHead>
                <TableHead>Role Profile</TableHead>
                <TableHead className="text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedDesignationList.map((item, index) => (
                <TableRow key={item.id} className="group">
                  <TableCell className=" text-xs text-gray-500 ">
                    {(currentPage - 1) * pageSize + index + 1}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-secondary/10 text-secondary rounded-lg group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                        <FaUserTie size={14} />
                      </div>
                      <span className="font-semibold text-foreground text-sm   tracking-tight">
                        {item.title}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <ListActionButtons
                      onEdit={() => console.log("Edit")}
                      onDelete={() => onDelete(item.id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
              {paginatedDesignationList.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={3}
                    className="h-40 text-center text-gray-500   text-[10px] font-semibold"
                  >
                    No matching designations found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {filteredDesignationList.length > pageSize && (
          <ListPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            totalRecords={filteredDesignationList.length}
            pageSize={pageSize}
          />
        )}
      </AdminCard>
    </div>
  );
}
