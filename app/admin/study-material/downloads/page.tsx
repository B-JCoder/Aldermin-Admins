"use client";

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { PageHeader } from "@/components/common/PageHeader";
import { DownloadForm } from "@/components/modules/study-material/DownloadForm";
import { DownloadList } from "@/components/modules/study-material/DownloadList";
import { Button } from "@/components/ui/button";

export default function DownloadsPage() {
  const [downloads, setDownloads] = useState([
    {
      id: 1,
      title: "School Prospectus",
      type: "Public",
      date: "2024-01-01",
      size: "2.4 MB",
    },
    {
      id: 2,
      title: "Holiday Calendar",
      type: "Internal",
      date: "2024-01-05",
      size: "1.1 MB",
    },
  ]);

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Institutional Assets"
        subtitle="Distribution Center"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 px-6 rounded-xl font-bold  text-[10px]  shadow-lg shadow-secondary/10 transition-all">
            <FaPlus /> Authorize Resource
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Creation Form */}
        <div className="lg:col-span-4 h-full">
          <DownloadForm />
        </div>

        {/* List Index */}
        <div className="lg:col-span-8 h-full">
          <DownloadList downloads={downloads} />
        </div>
      </div>
    </div>
  );
}
