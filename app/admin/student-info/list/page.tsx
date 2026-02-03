"use client";

import React, { useState, useEffect } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/common/DataTable";
import { apiService } from "@/lib/api-service";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { FaIdCard, FaMapMarkerAlt } from "react-icons/fa";
import { ListActionButtons } from "@/components/common/ListActionButtons";

interface Student {
  id: number;
  admissionNo: string;
  name: string;
  fatherName: string;
  dob: string;
  className: string;
  gender: string;
  category: string;
}

export default function StudentListPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiService.students.getAll();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      header: "Identity",
      accessor: (student: Student) => (
        <div>
          <Badge
            variant="secondary"
            className="text-[10px] font-semibold bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 shadow-none px-3 py-1"
          >
            {student.admissionNo}
          </Badge>
          <div className="mt-2 flex items-center gap-1 text-[9px] font-semibold text-gray-500 tracking-tighter">
            <FaIdCard size={10} /> Certified Member
          </div>
        </div>
      ),
    },
    {
      header: "Student Profile",
      accessor: (student: Student) => (
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12 border-2 border-white shadow-sm ring-2 ring-secondary/5">
            <AvatarFallback className="bg-secondary/10 text-secondary font-semibold text-lg">
              {student.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="text-base font-semibold text-foreground tracking-tight leading-none group-hover:text-secondary transition-colors">
              {student.name}
            </div>
            <div className="text-[10px] font-bold text-gray-500 mt-1 flex items-center gap-2">
              {student.gender}{" "}
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>{" "}
              {student.dob}
            </div>
          </div>
        </div>
      ),
    },
    {
      header: "Guardianship",
      accessor: (student: Student) => (
        <div>
          <div className="text-xs font-semibold text-foreground tracking-tight mb-1">
            {student.fatherName}
          </div>
          <div className="text-[9px] font-semibold text-gray-500 leading-none">
            Primary Contact
          </div>
        </div>
      ),
    },
    {
      header: "Class Point",
      accessor: (student: Student) => (
        <div className="inline-flex flex-col items-center">
          <Badge className="px-4 py-1.5 bg-accent text-white text-[10px] font-semibold rounded-lg shadow-lg hover:bg-accent/90">
            {student.className}
          </Badge>
          <div className="mt-2 text-[9px] font-semibold text-emerald-600 flex items-center gap-1">
            <FaMapMarkerAlt size={8} /> Active Desk
          </div>
        </div>
      ),
      className: "text-center",
      headerClassName: "text-center",
    },
    {
      header: "Interaction",
      accessor: (student: Student) => (
        <ListActionButtons
          onView={() => console.log("View", student.id)}
          onEdit={() => console.log("Edit", student.id)}
          onDelete={() => console.log("Delete", student.id)}
        />
      ),
      className: "text-center",
      headerClassName: "text-center",
    },
  ];

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Student Directory"
        subtitle="Academic Year 2023-24"
        action={
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="rounded-2xl border-secondary/20 text-secondary font-semibold text-xs hover:bg-secondary hover:text-white transition-all shadow-sm"
            >
              Batch Actions
            </Button>
            <Button
              variant="default"
              className="rounded-2xl bg-accent text-white font-semibold text-xs hover:bg-accent/90 transition-all shadow-xl"
            >
              Export Ledger
            </Button>
          </div>
        }
      />

      <DataTable
        data={students}
        columns={columns}
        searchKey="name"
        searchPlaceholder="Search students by name..."
        title="Student List"
        isLoading={isLoading}
        onAdd={() => console.log("Add New Student")}
        addButtonText="Add Student"
      />
    </div>
  );
}
