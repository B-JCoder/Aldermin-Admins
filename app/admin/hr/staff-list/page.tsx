"use client";

import React, { useState, useEffect } from "react";
import { PageHeader } from "@/components/common/PageHeader";
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
import { DataTable } from "@/components/common/DataTable";
import { apiService } from "@/lib/api-service";
import { ListActionButtons } from "@/components/common/ListActionButtons";

interface Staff {
  id: number;
  staffId: string;
  name: string;
  role: string;
  department: string;
  designation: string;
  phone: string;
  email?: string;
}

export default function StaffListPage() {
  const [staffMembers, setStaffMembers] = useState<Staff[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const data = (await apiService.hr.getStaff()) as Staff[];
        setStaffMembers(data);
      } catch (error) {
        console.error("Error fetching staff:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchStaff();
  }, []);

  const columns = [
    {
      header: "Staff Identity",
      accessor: (staff: Staff) => (
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-full flex items-center justify-center font-semibold text-sm shadow-inner group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
            {staff.name.charAt(0)}
          </div>
          <div>
            <div className="font-semibold text-foreground text-sm tracking-tight leading-none mb-1">
              {staff.name}
            </div>
            <div className="flex items-center gap-1 text-[10px] font-bold text-gray-500 leading-none">
              <FaIdBadge className="text-gray-500/40" size={10} />{" "}
              {staff.staffId}
            </div>
          </div>
        </div>
      ),
    },
    {
      header: "Role / Dept",
      accessor: (staff: Staff) => (
        <div>
          <span className="inline-flex px-2 py-0.5 rounded bg-secondary/10 text-secondary text-[9px] font-semibold mb-1.5 shadow-sm">
            {staff.role}
          </span>
          <div className="flex items-center gap-1 text-[10px] text-gray-500 font-bold leading-none">
            <FaBuilding className="text-gray-500/40" size={10} />{" "}
            {staff.department}
          </div>
        </div>
      ),
    },
    {
      header: "Designation",
      accessor: (staff: Staff) => (
        <div className="flex items-center gap-2 text-[10px] font-semibold text-foreground">
          <FaUserTie className="text-gray-500/40" size={12} />
          {staff.designation}
        </div>
      ),
    },
    {
      header: "Contact Info",
      accessor: (staff: Staff) => (
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 transition-colors hover:text-secondary cursor-pointer">
            <FaPhone className="text-gray-500/40" size={10} /> {staff.phone}
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 transition-colors hover:text-secondary cursor-pointer">
            <FaEnvelope className="text-gray-500/40" size={10} />{" "}
            {staff.email || "N/A"}
          </div>
        </div>
      ),
    },
    {
      header: "Action",
      accessor: (staff: Staff) => (
        <ListActionButtons
          onEdit={() => console.log("Edit", staff.id)}
          onDelete={() =>
            setStaffMembers(staffMembers.filter((s) => s.id !== staff.id))
          }
        />
      ),
      className: "text-center",
      headerClassName: "text-center",
    },
  ];

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Institutional Directory"
        subtitle="Personnel Infrastructure"
        action={
          <Link href="/admin/hr/add-staff">
            <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold text-[10px] shadow-lg shadow-secondary/10 transition-all">
              <FaUserPlus /> Authorize Personnel
            </Button>
          </Link>
        }
      />

      <DataTable
        data={staffMembers}
        columns={columns}
        searchKey="name"
        searchPlaceholder="Search directory..."
        title="Certified Staff Index"
        isLoading={isLoading}
      />
    </div>
  );
}
