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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContentTypePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const [typeList] = useState([
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
      item.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredTypes.length / pageSize);
  const paginatedTypes = filteredTypes.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  return (
    <div className="container mx-auto max-w-7xl space-y-6">
      <PageHeader
        title="Content Type"
        subtitle="Manage content types for the download center."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form Section */}
        <div className="lg:col-span-4">
          <AdminCard
            title="Add New Type"
            description="Create a new content classification."
          >
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Type Name <span className="text-red-500">*</span>
                </Label>
                <Input id="name" placeholder="e.g. Technical Guide" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter description..."
                  rows={4}
                />
              </div>

              <div className="pt-2">
                <Button className="w-full bg-secondary hover:bg-secondary/90">
                  Save Type
                </Button>
              </div>
            </form>
          </AdminCard>
        </div>

        {/* List Section */}
        <div className="lg:col-span-8 space-y-6">
          <AdminCard className="p-0 overflow-hidden">
            <div className="p-6 pb-0">
              <ListToolbar
                searchPlaceHolder="Search types..."
                onSearch={setSearchTerm}
                showAddButton={false}
              />
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px] text-center">SN</TableHead>
                    <TableHead>Type Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-center w-[120px]">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedTypes.map((item: any, index: number) => (
                    <TableRow key={item.id} className="hover:bg-gray-50/50">
                      <TableCell className="text-center font-medium text-gray-500">
                        {(currentPage - 1) * pageSize + index + 1}
                      </TableCell>
                      <TableCell>
                        <span className="font-medium text-gray-900">
                          {item.name}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="text-gray-500 text-sm">
                          {item.description}
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
                  {paginatedTypes.length === 0 && (
                    <TableRow>
                      <TableCell
                        colSpan={4}
                        className="h-32 text-center text-gray-500"
                      >
                        No content types found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            {filteredTypes.length > pageSize && (
              <div className="p-4 border-t border-gray-100">
                <ListPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                  totalRecords={filteredTypes.length}
                  pageSize={pageSize}
                />
              </div>
            )}
          </AdminCard>
        </div>
      </div>
    </div>
  );
}
