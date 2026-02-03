"use client";

import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { PageHeader } from "@/components/common/PageHeader";
import { DesignationForm } from "@/components/modules/hr/DesignationForm";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/common/DataTable";
import { apiService } from "@/lib/api-service";
import { ListActionButtons } from "@/components/common/ListActionButtons";

interface Designation {
  id: number;
  title: string;
}

export default function DesignationPage() {
  const [designationTitle, setDesignationTitle] = useState("");
  const [designationList, setDesignationList] = useState<Designation[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDesignations = async () => {
      try {
        const data = (await apiService.hr.getDesignations()) as Designation[];
        setDesignationList(data);
      } catch (error) {
        console.error("Error fetching designations:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDesignations();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (designationTitle.trim()) {
      const newDesig = {
        id: designationList.length + 1,
        title: designationTitle,
      };
      setDesignationList([...designationList, newDesig]);
      setDesignationTitle("");
    }
  };

  const columns = [
    {
      header: "Designation Title",
      accessor: "title" as keyof Designation,
      className: "font-semibold text-foreground",
    },
    {
      header: "Action",
      accessor: (item: Designation) => (
        <ListActionButtons
          onEdit={() => console.log("Edit", item.id)}
          onDelete={() =>
            setDesignationList(designationList.filter((d) => d.id !== item.id))
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
        title="Institutional Roles"
        subtitle="Staff Hierarchy Management"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold text-[10px] shadow-lg shadow-secondary/10 transition-all">
            <FaPlus /> Authorize Role
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Creation Form */}
        <div className="lg:col-span-4 h-full sticky top-8">
          <DesignationForm
            designationTitle={designationTitle}
            setDesignationTitle={setDesignationTitle}
            onSubmit={handleSubmit}
          />
        </div>

        {/* List Index */}
        <div className="lg:col-span-8 h-full">
          <DataTable
            data={designationList}
            columns={columns}
            searchKey="title"
            searchPlaceholder="Search roles..."
            title="Staff Hierarchy"
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
