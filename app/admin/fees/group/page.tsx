"use client";

import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { PageHeader } from "@/components/common/PageHeader";
import { FeeGroupForm } from "@/components/modules/fees/FeeGroupForm";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/common/DataTable";
import { apiService } from "@/lib/api-service";
import { ListActionButtons } from "@/components/common/ListActionButtons";

interface FeeGroup {
  id: number;
  group: string;
  description: string;
}

export default function FeeGroupPage() {
  const [groupList, setGroupList] = useState<FeeGroup[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    groupName: "",
    description: "",
  });

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const data = (await apiService.fees.getFeeGroups()) as FeeGroup[];
        setGroupList(data);
      } catch (error) {
        console.error("Error fetching fee groups:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchGroups();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.groupName) return;

    setGroupList([
      ...groupList,
      {
        id: Math.random(),
        group: formData.groupName,
        description: formData.description,
      },
    ]);
    setFormData({ groupName: "", description: "" });
  };

  const columns = [
    {
      header: "Fee Categorization",
      accessor: "group" as keyof FeeGroup,
      className: "font-semibold text-foreground",
    },
    {
      header: "Summary Specification",
      accessor: "description" as keyof FeeGroup,
      className: "text-gray-500 italic text-xs",
    },
    {
      header: "Action",
      accessor: (item: FeeGroup) => (
        <ListActionButtons
          onEdit={() => console.log("Edit", item.id)}
          onDelete={() =>
            setGroupList(groupList.filter((g) => g.id !== item.id))
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
        title="Fee Group Organization"
        subtitle="Categorize Fee Structures"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold text-[10px] shadow-lg shadow-secondary/10 transition-all">
            <FaPlus /> New Group
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form Section */}
        <div className="lg:col-span-4 h-full sticky top-8">
          <FeeGroupForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
          />
        </div>

        {/* List Section */}
        <div className="lg:col-span-8 h-full">
          <DataTable
            data={groupList}
            columns={columns}
            searchKey="group"
            searchPlaceholder="Search groups..."
            title="Institutional Fee Groups"
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
