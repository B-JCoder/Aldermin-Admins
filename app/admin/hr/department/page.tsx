"use client";

import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { PageHeader } from "@/components/common/PageHeader";
import { DepartmentForm } from "@/components/modules/hr/DepartmentForm";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/common/DataTable";
import { apiService } from "@/lib/api-service";
import { ListActionButtons } from "@/components/common/ListActionButtons";

interface Department {
  id: number;
  title: string;
}

export default function DepartmentPage() {
  const [departmentTitle, setDepartmentTitle] = useState("");
  const [departmentList, setDepartmentList] = useState<Department[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const data = (await apiService.hr.getDepartments()) as Department[];
        setDepartmentList(data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDepartments();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (departmentTitle.trim()) {
      const newDept = {
        id: departmentList.length + 1,
        title: departmentTitle,
      };
      setDepartmentList([...departmentList, newDept]);
      setDepartmentTitle("");
    }
  };

  const columns = [
    {
      header: "Department Title",
      accessor: "title" as keyof Department,
      className: "font-semibold text-foreground",
    },
    {
      header: "Action",
      accessor: (item: Department) => (
        <ListActionButtons
          onEdit={() => console.log("Edit", item.id)}
          onDelete={() =>
            setDepartmentList(departmentList.filter((d) => d.id !== item.id))
          }
        />
      ),
      className: "text-right",
      headerClassName: "text-right",
    },
  ];

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Institutional Units"
        subtitle="Departmental Management"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold text-[10px] shadow-lg shadow-secondary/10 transition-all">
            <FaPlus /> Authorize Unit
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Creation Form */}
        <div className="lg:col-span-4 h-full sticky top-8">
          <DepartmentForm
            departmentTitle={departmentTitle}
            setDepartmentTitle={setDepartmentTitle}
            onSubmit={handleSubmit}
          />
        </div>

        {/* List Index */}
        <div className="lg:col-span-8 h-full">
          <DataTable
            data={departmentList}
            columns={columns}
            searchKey="title"
            searchPlaceholder="Search departments..."
            title="Active Units"
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
