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
import Link from "next/link";
import {
  FaUserPlus,
  FaIdBadge,
  FaPhone,
  FaEnvelope,
  FaBuilding,
  FaUserTie,
} from "react-icons/fa";

export default function StaffListPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const [staffList, setStaffList] = useState([
    {
      id: 1,
      staffNo: "STF2023-001",
      name: "Marcus Aurelius",
      role: "Teacher",
      department: "Academic",
      designation: "Lead Lecturer",
      mobile: "+8801700000001",
      email: "marcus@aldermin.edu",
    },
    {
      id: 2,
      staffNo: "STF2023-008",
      name: "Seneca Minor",
      role: "Admin",
      department: "Administration",
      designation: "Registrar",
      mobile: "+8801700000008",
      email: "seneca@aldermin.edu",
    },
  ]);

  const filteredStaff = staffList.filter(
    (staff: any) =>
      staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.staffNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredStaff.length / pageSize);
  const paginatedStaff = filteredStaff.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Institutional Directory"
        subtitle="Personnel Infrastructure"
        action={
          <Link href="/admin/hr/add-staff">
            <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold uppercase text-[10px] tracking-widest shadow-lg shadow-secondary/10 transition-all">
              <FaUserPlus /> Authorize Personnel
            </Button>
          </Link>
        }
      />

      <div className="space-y-6 flex flex-col h-full">
        <ListToolbar
          searchPlaceHolder="Search directory..."
          onSearch={setSearchTerm}
          showAddButton={false}
        />

        <GlassCard className="flex-1 flex flex-col">
          <div className="p-8 border-b border-white/20">
            <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">
              Certified Staff Index
            </h4>
          </div>

          <div className="flex-1 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-20">SN</TableHead>
                  <TableHead>Staff Identity</TableHead>
                  <TableHead>Role / Dept</TableHead>
                  <TableHead>Designation</TableHead>
                  <TableHead>Contact Info</TableHead>
                  <TableHead className="text-center">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedStaff.map((staff: any, index: number) => (
                  <TableRow key={staff.id} className="group">
                    <TableCell className="font-mono text-xs text-muted-foreground italic">
                      {(currentPage - 1) * pageSize + index + 1}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-full flex items-center justify-center font-black text-sm shadow-inner group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                          {staff.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-black text-foreground text-sm uppercase italic tracking-tight leading-none mb-1">
                            {staff.name}
                          </div>
                          <div className="flex items-center gap-1 text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none">
                            <FaIdBadge
                              className="text-muted-foreground/40"
                              size={10}
                            />{" "}
                            {staff.staffNo}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="inline-flex px-2 py-0.5 rounded bg-secondary/10 text-secondary text-[9px] font-black uppercase tracking-widest mb-1.5 shadow-sm">
                        {staff.role}
                      </span>
                      <div className="flex items-center gap-1 text-[10px] text-muted-foreground font-bold uppercase tracking-widest leading-none">
                        <FaBuilding
                          className="text-muted-foreground/40"
                          size={10}
                        />{" "}
                        {staff.department}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 text-[10px] font-black text-foreground uppercase tracking-widest">
                        <FaUserTie
                          className="text-muted-foreground/40"
                          size={12}
                        />
                        {staff.designation}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground transition-colors hover:text-secondary cursor-pointer">
                          <FaPhone
                            className="text-muted-foreground/40"
                            size={10}
                          />{" "}
                          {staff.mobile}
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground transition-colors hover:text-secondary cursor-pointer">
                          <FaEnvelope
                            className="text-muted-foreground/40"
                            size={10}
                          />{" "}
                          {staff.email}
                        </div>
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
                {paginatedStaff.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      className="h-40 text-center text-muted-foreground uppercase tracking-widest text-[10px] font-black"
                    >
                      No records match the active directory search.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {filteredStaff.length > pageSize && (
            <ListPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalRecords={filteredStaff.length}
              pageSize={pageSize}
            />
          )}
        </GlassCard>
      </div>
    </div>
  );
}
