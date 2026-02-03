"use client";

import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { PageHeader } from "@/components/common/PageHeader";
import { FeeTypeForm } from "@/components/modules/fees/FeeTypeForm";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/common/DataTable";
import { apiService } from "@/lib/api-service";
import { ListActionButtons } from "@/components/common/ListActionButtons";

interface FeeType {
  id: number;
  name: string;
  code: string;
  amount: string;
}

export default function FeeTypePage() {
  const [formData, setFormData] = useState({
    typeName: "",
    feeGroup: "",
    description: "",
  });

  const [feeTypes, setFeeTypes] = useState<FeeType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeeTypes = async () => {
      try {
        const data = await apiService.fees.getTypes();
        setFeeTypes(data);
      } catch (error) {
        console.error("Error fetching fee types:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFeeTypes();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.typeName || !formData.feeGroup) return;

    // Simulate creation
    const newType = {
      id: Math.random(),
      name: formData.typeName,
      code: formData.typeName.substring(0, 3).toUpperCase(),
      amount: "0", // Default or from form if added
    };

    setFeeTypes([...feeTypes, newType]);
    setFormData({ typeName: "", feeGroup: "", description: "" });
    alert("Fee Type authorized successfully!");
  };

  const columns = [
    {
      header: "Fee Type",
      accessor: "name" as keyof FeeType,
      className: "font-semibold text-gray-700",
    },
    {
      header: "Code",
      accessor: "code" as keyof FeeType,
    },
    {
      header: "Base Amount",
      accessor: "amount" as keyof FeeType,
    },
    {
      header: "Actions",
      accessor: (item: FeeType) => (
        <ListActionButtons
          onView={() => console.log("View", item.id)}
          onEdit={() => console.log("Edit", item.id)}
          onDelete={() => setFeeTypes(feeTypes.filter((f) => f.id !== item.id))}
        />
      ),
      className: "text-center",
      headerClassName: "text-center",
    },
  ];

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Revenue Classification"
        subtitle="Financial Ledger Setup"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold text-[10px] shadow-lg shadow-secondary/10 transition-all">
            <FaPlus /> Authorize Fee Type
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Creation Form */}
        <div className="lg:col-span-4 h-full sticky top-8">
          <FeeTypeForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
          />
        </div>

        {/* List Index */}
        <div className="lg:col-span-8 h-full">
          <DataTable
            data={feeTypes}
            columns={columns}
            searchKey="name"
            searchPlaceholder="Search fee types..."
            title="Classification Records"
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
