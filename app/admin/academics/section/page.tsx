"use client";

import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { PageHeader } from "@/components/common/PageHeader";
import { SectionForm } from "@/components/modules/academics/SectionForm";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/common/DataTable";
import { apiService } from "@/lib/api-service";
import { ListActionButtons } from "@/components/common/ListActionButtons";

interface SectionData {
  id: number;
  name: string;
}

export default function SectionPage() {
  const [sections, setSections] = useState<SectionData[]>([]);
  const [sectionName, setSectionName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const data = (await apiService.academics.getSections()) as string[];
        const mappedData = data.map((name, index) => ({
          id: index + 1,
          name: name,
        }));
        setSections(mappedData);
      } catch (error) {
        console.error("Error fetching sections:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSections();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sectionName) return;
    setSections([...sections, { id: Math.random(), name: sectionName }]);
    setSectionName("");
  };

  const columns = [
    {
      header: "Section Identifier",
      accessor: "name" as keyof SectionData,
      className: "font-semibold text-secondary",
    },
    {
      header: "Action",
      accessor: (item: SectionData) => (
        <ListActionButtons
          onEdit={() => console.log("Edit", item.id)}
          onDelete={() => setSections(sections.filter((s) => s.id !== item.id))}
        />
      ),
      className: "text-end",
      headerClassName: "text-end",
    },
  ];

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Institutional Sections"
        subtitle="Academic Management"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold text-[10px] shadow-lg shadow-secondary/10">
            <FaPlus /> Authorize Section
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Creation Form */}
        <div className="lg:col-span-4 h-full sticky top-8">
          <SectionForm
            sectionName={sectionName}
            setSectionName={setSectionName}
            onSubmit={handleSubmit}
          />
        </div>

        {/* List Index */}
        <div className="lg:col-span-8 h-full">
          <DataTable
            data={sections}
            columns={columns}
            searchKey="name"
            searchPlaceholder="Search sections..."
            title="Active Sections"
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
