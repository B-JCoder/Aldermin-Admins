"use client";

import React, { useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import { PageHeader } from "@/components/common/PageHeader";
import { QuerySearchForm } from "@/components/modules/admin-section/QuerySearchForm";
import { QueryList } from "@/components/modules/admin-section/QueryList";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AdmissionQueryPage() {
  const [searchParams, setSearchParams] = useState({
    dateFrom: "",
    dateTo: "",
    source: "",
    status: "",
  });

  const [queries, setQueries] = useState([
    {
      id: 1,
      admissionNo: "ADM001",
      name: "John Doe",
      fatherName: "Mr. Doe",
      dob: "2010-01-01",
      class: "10th",
    },
    {
      id: 2,
      admissionNo: "ADM002",
      name: "Jane Smith",
      fatherName: "Mr. Smith",
      dob: "2011-05-15",
      class: "9th",
    },
  ]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search params:", searchParams);
  };

  const handleDelete = (id: number) => {
    setQueries((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Inquiry Pipeline"
        subtitle="Lead Management Matrix"
        action={
          <Link href="/admin/admin-section/admission-query/create">
            <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold  text-[10px]  shadow-lg shadow-secondary/10 transition-all">
              <FaPlus /> Authorize Inquiry
            </Button>
          </Link>
        }
      />

      <div className="space-y-8">
        {/* Search Section */}
        <QuerySearchForm
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          onSubmit={handleSearchSubmit}
        />

        {/* List Section */}
        <QueryList queries={queries} onDelete={handleDelete} />
      </div>
    </div>
  );
}
