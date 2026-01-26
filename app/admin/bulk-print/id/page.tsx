"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { IDConfig } from "@/components/modules/bulk-print/IDConfig";
import { IDQueue } from "@/components/modules/bulk-print/IDQueue";

export default function BulkIDPrintPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      admissionNo: "ADM001",
      class: "Class 10",
      section: "A",
      layout: "Vertical ID",
    },
    {
      id: 2,
      name: "Bob Smith",
      admissionNo: "ADM002",
      class: "Class 10",
      section: "A",
      layout: "Vertical ID",
    },
  ]);

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Institutional Bulk ID Printer"
        subtitle="Configure Parameters & Execute Identification Card Production"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Config Form */}
        <div className="lg:col-span-4 h-full">
          <IDConfig />
        </div>

        {/* Card Production Queue */}
        <div className="lg:col-span-8 h-full">
          <IDQueue
            students={students}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pageSize={pageSize}
          />
        </div>
      </div>
    </div>
  );
}
