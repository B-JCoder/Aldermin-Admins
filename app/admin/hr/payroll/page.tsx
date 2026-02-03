"use client";

import React, { useState, useEffect } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { AdminCard } from "@/components/common/AdminCard";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/common/DataTable";
import { apiService } from "@/lib/api-service";
import { ListActionButtons } from "@/components/common/ListActionButtons";
import {
  FaMoneyBillWave,
  FaFileInvoice,
  FaCheckCircle,
  FaHourglassHalf,
} from "react-icons/fa";

interface PayrollItem {
  id: number;
  staffName: string;
  role: string;
  department: string;
  month: string;
  year: string;
  grossSalary: string;
  netSalary: string;
  status: string;
}

export default function PayrollPage() {
  const [payrollList, setPayrollList] = useState<PayrollItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPayroll = async () => {
      try {
        const data = (await apiService.hr.getPayroll()) as PayrollItem[];
        setPayrollList(data);
      } catch (error) {
        console.error("Error fetching payroll:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPayroll();
  }, []);

  const columns = [
    {
      header: "Personnel Identity",
      accessor: (item: PayrollItem) => (
        <div className="font-semibold text-foreground text-sm tracking-tight">
          {item.staffName}
        </div>
      ),
    },
    {
      header: "Departmental Node",
      accessor: (item: PayrollItem) => (
        <div>
          <div className="text-xs font-bold text-foreground mb-1 tracking-tight">
            {item.role}
          </div>
          <div className="text-[10px] text-gray-500 font-semibold">
            {item.department}
          </div>
        </div>
      ),
    },
    {
      header: "Temporal Index",
      accessor: (item: PayrollItem) => (
        <div className="text-center">
          <div className="font-bold text-foreground text-xs tracking-tighter">
            {item.month}
          </div>
          <div className="text-[10px] text-gray-500">{item.year}</div>
        </div>
      ),
      className: "text-center",
      headerClassName: "text-center",
    },
    {
      header: "Financial Vector",
      accessor: (item: PayrollItem) => (
        <div className="text-right tabular-nums">
          <div className="text-[10px] font-bold text-gray-500 leading-none mb-1 tracking-tighter">
            Net Disbursement
          </div>
          <div className="text-lg font-semibold text-foreground tracking-tighter">
            ${item.netSalary}
          </div>
        </div>
      ),
      className: "text-right",
      headerClassName: "text-right",
    },
    {
      header: "Payment Phase",
      accessor: (item: PayrollItem) => (
        <div className="flex justify-center">
          <span
            className={`px-4 py-1.5 rounded-full text-[9px] font-semibold shadow-sm ring-1 ring-inset ${
              item.status === "Paid"
                ? "bg-emerald-500/10 text-emerald-600 ring-emerald-500/20"
                : item.status === "Generated"
                  ? "bg-indigo-500/10 text-indigo-600 ring-indigo-500/20"
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
    {
      header: "Action",
      accessor: (item: PayrollItem) => (
        <div className="flex justify-center h-full">
          <button className="p-3 rounded-xl bg-secondary/5 text-secondary hover:bg-secondary hover:text-white transition-all shadow-sm ring-1 ring-secondary/20 active:scale-95">
            <FaFileInvoice size={14} />
          </button>
        </div>
      ),
      className: "text-center",
      headerClassName: "text-center",
    },
  ];

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Staff Payroll Management"
        subtitle="Institutional Compensation & Disbursement Terminal"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 h-12 px-6 rounded-xl font-bold text-[10px] shadow-lg shadow-secondary/10 transition-all">
            <FaMoneyBillWave size={14} /> Authorize Cycle Disbursement
          </Button>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            label: "Aggregate Disbursement",
            val: "$128,450",
            color: "emerald",
            Icon: FaCheckCircle,
          },
          {
            label: "Pending Authorizations",
            val: "14 Records",
            color: "amber",
            Icon: FaHourglassHalf,
          },
          {
            label: "Active Fiscal Cycle",
            val: "DEC 2023",
            color: "indigo",
            Icon: FaFileInvoice,
          },
        ].map((stat, i) => (
          <AdminCard
            key={i}
            className="p-8 flex items-center gap-6 group hover:translate-y-[-2px] transition-all duration-300"
          >
            <div
              className={`p-5 bg-${stat.color}-500/10 text-${stat.color}-600 rounded-2xl group-hover:bg-${stat.color}-500 group-hover:text-white transition-all shadow-sm ring-1 ring-${stat.color}-500/20`}
            >
              <stat.Icon size={24} />
            </div>
            <div>
              <p className="text-[10px] font-semibold text-gray-500 leading-none mb-2">
                {stat.label}
              </p>
              <h3 className="text-2xl font-semibold text-foreground tracking-tighter">
                {stat.val}
              </h3>
            </div>
          </AdminCard>
        ))}
      </div>

      <DataTable
        data={payrollList}
        columns={columns}
        searchKey="staffName"
        searchPlaceholder="Search personnel payroll..."
        title="Institutional Payroll Ledger"
        isLoading={isLoading}
      />
    </div>
  );
}
