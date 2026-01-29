"use client";

import React, { useState } from "react";
import { IssuedFilter } from "@/components/modules/library/IssuedFilter";
import { IssuedList } from "@/components/modules/library/IssuedList";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { FaPrint } from "react-icons/fa";

export default function IssuedBooksPage() {
  const [issuedList, setIssuedList] = useState([
    {
      id: 1,
      title: "The Selfish Gene",
      bookNo: "B-501",
      isbn: "978-0198788607",
      member: "Julian Sterling",
      author: "Richard Dawkins",
      subject: "Evolutionary Biology",
      issueDate: "2024-03-10",
      returnDate: "2024-03-24",
      status: "Active",
    },
    {
      id: 2,
      title: "Brief Answers",
      bookNo: "B-204",
      isbn: "978-1473695986",
      member: "Prof. Vance",
      author: "Stephen Hawking",
      subject: "Astrophysics",
      issueDate: "2024-03-05",
      returnDate: "2024-03-19",
      status: "Overdue",
    },
  ]);

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <PageHeader
          title="Active Disbursement Ledger"
          subtitle="Manage Issued Books"
        />
        <Button className="flex items-center gap-2 px-6 py-3 bg-foreground text-background text-[10px] font-semibold rounded-xl  tracking-[0.2em] hover:bg-foreground/90 transition-all shadow-xl active:scale-95 h-auto">
          <FaPrint /> Export Disbursement Stream
        </Button>
      </div>

      <IssuedFilter />
      <IssuedList issuedBooks={issuedList} />
    </div>
  );
}
