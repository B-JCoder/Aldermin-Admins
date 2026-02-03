"use client";

import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { PageHeader } from "@/components/common/PageHeader";
import { ClassForm } from "@/components/modules/academics/ClassForm";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/common/DataTable";
import { apiService } from "@/lib/api-service";
import { ListActionButtons } from "@/components/common/ListActionButtons";

interface ClassData {
  id: number;
  name: string;
  passingMarks: number;
  averageMarks: number;
}

export default function ClassPage() {
  const [className, setClassName] = useState("");
  const [passingMarks, setPassingMarks] = useState("33");
  const [selectedSections, setSelectedSections] = useState<string[]>([]);
  const [classList, setClassList] = useState<ClassData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const data = (await apiService.academics.getClasses()) as string[];
        // Map string array to object array for DataTable
        const mappedData = data.map((name, index) => ({
          id: index + 1,
          name: name,
          passingMarks: 33,
          averageMarks: 0,
        }));
        setClassList(mappedData);
      } catch (error) {
        console.error("Error fetching classes:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchClasses();
  }, []);

  const toggleSection = (section: string) => {
    setSelectedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section],
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!className) return;
    setClassList([
      ...classList,
      {
        id: classList.length + 1,
        name: className,
        passingMarks: parseInt(passingMarks),
        averageMarks: 0,
      },
    ]);
    setClassName("");
    setSelectedSections([]);
  };

  const columns = [
    {
      header: "Class Name",
      accessor: "name" as keyof ClassData,
      className: "font-semibold text-gray-700",
    },
    {
      header: "Passing Marks",
      accessor: "passingMarks" as keyof ClassData,
    },
    {
      header: "Average Performance",
      accessor: (item: ClassData) => (
        <span className="text-gray-500 italic">No data</span>
      ),
    },
    {
      header: "Action",
      accessor: (item: ClassData) => (
        <ListActionButtons
          onEdit={() => console.log("Edit", item.id)}
          onDelete={() =>
            setClassList(classList.filter((c) => c.id !== item.id))
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
        title="Institutional Grades"
        subtitle="Academic Management"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold text-[10px] shadow-lg shadow-secondary/10 transition-all">
            <FaPlus /> Authorize Class
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Creation Form */}
        <div className="lg:col-span-4 h-full sticky top-8">
          <ClassForm
            className={className}
            setClassName={setClassName}
            passingMarks={passingMarks}
            setPassingMarks={setPassingMarks}
            selectedSections={selectedSections}
            toggleSection={toggleSection}
            onSubmit={handleSubmit}
          />
        </div>

        {/* List Index */}
        <div className="lg:col-span-8 h-full">
          <DataTable
            data={classList}
            columns={columns}
            searchKey="name"
            searchPlaceholder="Search classes..."
            title="Registered Grades"
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
