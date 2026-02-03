"use client";

import React, { useState, useEffect } from "react";
import { FaSave, FaUserGraduate } from "react-icons/fa";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { CarryForwardFilter } from "@/components/modules/fees/CarryForwardFilter";
import { DataTable } from "@/components/common/DataTable";
import { apiService } from "@/lib/api-service";

interface CarryForwardItem {
  id: number;
  name: string;
  admissionNo: string;
  prevBalance: string;
  carryAmount: string;
  status: string;
}

export default function FeeCarryForwardPage() {
  const [carryForwardList, setCarryForwardList] = useState<CarryForwardItem[]>(
    [],
  );
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useState({
    className: "",
    section: "",
  });

  useEffect(() => {
    const fetchCarryForward = async () => {
      try {
        const data =
          (await apiService.fees.getFeeCarryForward()) as CarryForwardItem[];
        setCarryForwardList(data);
      } catch (error) {
        console.error("Error fetching carry forward:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCarryForward();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching carry forward for", searchParams);
  };

  const columns = [
    {
      header: "Patron Identity",
      accessor: (item: CarryForwardItem) => (
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
            <FaUserGraduate size={16} />
          </div>
          <div>
            <div className="font-semibold text-foreground tracking-tight text-sm leading-none mb-1">
              {item.name}
            </div>
            <div className="text-[9px] text-gray-500 tracking-tighter uppercase font-bold">
              ID: {item.admissionNo}
            </div>
          </div>
        </div>
      ),
    },
    {
      header: "Accumulated Liability",
      accessor: (item: CarryForwardItem) => (
        <div className="text-center font-mono font-bold text-rose-500">
          ${item.prevBalance}
        </div>
      ),
      className: "text-center",
      headerClassName: "text-center",
    },
    {
      header: "Transfer Quantum",
      accessor: (item: CarryForwardItem) => (
        <div className="text-center font-mono font-bold text-secondary">
          ${item.carryAmount}
        </div>
      ),
      className: "text-center",
      headerClassName: "text-center",
    },
    {
      header: "Vector Status",
      accessor: (item: CarryForwardItem) => (
        <div className="flex justify-center">
          <span
            className={`px-4 py-1.5 rounded-full text-[9px] font-semibold shadow-sm ring-1 ring-inset ${
              item.status === "Forwarded"
                ? "bg-emerald-500/10 text-emerald-600 ring-emerald-500/20"
                : "bg-amber-500/10 text-amber-600 ring-amber-500/20"
            }`}
          >
            {item.status}
          </span>
        </div>
      ),
      className: "text-center",
      headerClassName: "text-center",
    },
  ];

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Fee Carry Forward Registry"
        subtitle="Manage Balance Transfers"
        action={
          <Button className="rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-500/20 text-[10px] font-semibold px-6 h-12">
            <FaSave className="mr-2" /> Bulk Forward
          </Button>
        }
      />

      <CarryForwardFilter
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        onSearch={handleSearch}
      />

      <DataTable
        data={carryForwardList}
        columns={columns}
        searchKey="name"
        searchPlaceholder="Search students..."
        title="Institutional Balance Transfer Ledger"
        isLoading={isLoading}
      />
    </div>
  );
}
