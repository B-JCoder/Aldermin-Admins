"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { CertificateConfig } from "@/components/modules/bulk-print/CertificateConfig";
import { CertificateQueue } from "@/components/modules/bulk-print/CertificateQueue";
import { FaPrint } from "react-icons/fa";

export default function BulkCertificatePrintPage() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      admissionNo: "ADM001",
      class: "Class 10",
      section: "A",
      certificate: "Merit Certificate",
      status: "Ready",
    },
    {
      id: 2,
      name: "Bob Smith",
      admissionNo: "ADM002",
      class: "Class 10",
      section: "A",
      certificate: "Merit Certificate",
      status: "Ready",
    },
    {
      id: 3,
      name: "Charlie Davis",
      admissionNo: "ADM003",
      class: "Class 10",
      section: "B",
      certificate: "Participation",
      status: "Pending Data",
    },
  ]);

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Bulk Certificate Processor"
        subtitle="Batch Operations"
        action={null}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Filter / Config */}
        <div className="lg:col-span-4 h-full">
          <CertificateConfig />
        </div>

        {/* List */}
        <div className="lg:col-span-8 h-full">
          <CertificateQueue students={students} />
        </div>
      </div>
    </div>
  );
}
