"use client";

import React, { useState } from "react";
import { FaForward, FaSave } from "react-icons/fa";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { CarryForwardFilter } from "@/components/modules/fees/CarryForwardFilter";
import { CarryForwardListTable } from "@/components/modules/fees/CarryForwardListTable";

export default function FeeCarryForwardPage() {
  const [searchParams, setSearchParams] = useState({
    className: "",
    section: "",
  });

  const [carryForwardList, setCarryForwardList] = useState([
    {
      id: 1,
      name: "Marcus Aurelius",
      admissionNo: "ADM001",
      prevBalance: "1200",
      carryAmount: "1200",
      status: "Unprocessed",
    },
    {
      id: 2,
      name: "Seneca Minor",
      admissionNo: "ADM042",
      prevBalance: "450",
      carryAmount: "450",
      status: "Forwarded",
    },
  ]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching carry forward for", searchParams);
  };

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Fee Carry Forward Registry"
        subtitle="Manage Balance Transfers"
        action={
          <Button className="rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-500/20 text-[10px] font-black uppercase tracking-widest px-6 h-12">
            <FaSave className="mr-2" /> Bulk Forward
          </Button>
        }
      />

      <CarryForwardFilter
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        onSearch={handleSearch}
      />

      <CarryForwardListTable list={carryForwardList} />
    </div>
  );
}
