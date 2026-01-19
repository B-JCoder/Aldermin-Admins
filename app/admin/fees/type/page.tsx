"use client";

import React, { useState } from "react";
import { FaPlus, FaMoneyBillWave } from "react-icons/fa";
import { PageHeader } from "@/components/common/PageHeader";
import { FeeTypeForm } from "@/components/modules/fees/FeeTypeForm";
import { FeeTypeList } from "@/components/modules/fees/FeeTypeList";
import { Button } from "@/components/ui/button";

export default function FeeTypePage() {
  const [formData, setFormData] = useState({
    typeName: "",
    feeGroup: "",
    description: "",
  });

  const [feeTypeList, setFeeTypeList] = useState([
    {
      id: 1,
      type: "Admission Fee",
      group: "General Fees",
      description: "One-time admission charge for new students.",
    },
    {
      id: 2,
      type: "Monthly Tuition",
      group: "Academic Fees",
      description: "Monthly recurring tuition fee.",
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.typeName || !formData.feeGroup) return;

    setFeeTypeList([
      ...feeTypeList,
      {
        id: feeTypeList.length + 1,
        type: formData.typeName,
        group:
          formData.feeGroup === "general" ? "General Fees" : "Academic Fees",
        description: formData.description,
      },
    ]);

    setFormData({ typeName: "", feeGroup: "", description: "" });
  };

  const handleDelete = (id: number) => {
    setFeeTypeList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Revenue Classification"
        subtitle="Financial Ledger Setup"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold uppercase text-[10px] tracking-widest shadow-lg shadow-secondary/10 transition-all">
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
          <FeeTypeList feeTypeList={feeTypeList} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}
