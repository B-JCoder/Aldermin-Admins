"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { ListToolbar } from "@/components/common/ListToolbar";
import { ListPagination } from "@/components/common/ListPagination";
import { AdminCard } from "@/components/common/AdminCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  FaMoneyBillWave,
  FaFileInvoice,
  FaCheckCircle,
  FaTimesCircle,
  FaHourglassHalf,
} from "react-icons/fa";

export default function PayrollPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const [payrollList, setPayrollList] = useState([
    {
      id: 1,
      staffName: "Marcus Aurelius",
      role: "Lead Teacher",
      department: "Academic",
      month: "December",
      year: "2023",
      grossSalary: "4500",
      netSalary: "4200",
      status: "Paid",
    },
    {
      id: 2,
      staffName: "Seneca Minor",
      role: "Accountant",
      department: "Finance",
      month: "December",
      year: "2023",
      grossSalary: "3800",
      netSalary: "3500",
      status: "Generated",
    },
    {
      id: 3,
      staffName: "Epictetus Slave",
      role: "Librarian",
      department: "Library",
      month: "December",
      year: "2023",
      grossSalary: "3200",
      netSalary: "3000",
      status: "Processing",
    },
  ]);

  const filteredPayroll = payrollList.filter(
    (p: any) =>
      p.staffName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPayroll.length / pageSize);
  const paginatedPayroll = filteredPayroll.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="container mx-auto space-y-8">
      <PageHeader
        title="Staff Payroll Management"
        subtitle="Institutional Compensation & Disbursement Terminal"
        action={
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 h-12 px-6 rounded-xl font-bold  text-[10px]  shadow-lg shadow-secondary/10 transition-all">
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
              <p className="text-[10px] font-semibold text-gray-500   leading-none mb-2">
                {stat.label}
              </p>
              <h3 className="text-2xl font-semibold text-foreground tracking-tighter  ">
                {stat.val}
              </h3>
            </div>
          </AdminCard>
        ))}
      </div>

      <div className="space-y-6 flex flex-col h-full">
        <ListToolbar
          searchPlaceHolder="Search Personnel Payroll..."
          onSearch={setSearchTerm}
          showAddButton={false}
        />

        <AdminCard className="flex-1 flex flex-col">
          <div className="p-8 border-b border-gray-200">
            <h4 className="text-xs font-semibold text-gray-500   leading-none">
              Institutional Payroll Ledger
            </h4>
          </div>

          <div className="flex-1 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-20">SN</TableHead>
                  <TableHead>Personnel Identity</TableHead>
                  <TableHead>Departmental Node</TableHead>
                  <TableHead className="text-center">Temporal Index</TableHead>
                  <TableHead className="text-right">Financial Vector</TableHead>
                  <TableHead className="text-center">Payment Phase</TableHead>
                  <TableHead className="text-center">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedPayroll.map((item: any, index: number) => (
                  <TableRow key={item.id} className="group">
                    <TableCell className=" text-xs text-gray-500 ">
                      {(currentPage - 1) * pageSize + index + 1}
                    </TableCell>
                    <TableCell>
                      <div className="font-semibold text-foreground text-sm   tracking-tight leading-none">
                        {item.staffName}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-xs font-bold text-foreground mb-1  tracking-tight">
                        {item.role}
                      </div>
                      <div className="text-[10px] text-gray-500  font-semibold ">
                        {item.department}
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="font-bold text-foreground text-xs   tracking-tighter">
                        {item.month}
                      </div>
                      <div className="text-[10px] text-gray-500  ">
                        {item.year}
                      </div>
                    </TableCell>
                    <TableCell className="text-right tabular-nums">
                      <div className="text-[10px] font-bold text-gray-500  leading-none mb-1 tracking-tighter">
                        Net Disbursement
                      </div>
                      <div className="text-lg font-semibold text-foreground  tracking-tighter">
                        ${item.netSalary}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <span
                          className={`px-4 py-1.5 rounded-full text-[9px] font-semibold   shadow-sm ring-1 ring-inset ${
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
                    </TableCell>
                    <TableCell className="text-center">
                      <button className="p-3 rounded-xl bg-secondary/5 text-secondary hover:bg-secondary hover:text-white transition-all shadow-sm ring-1 ring-secondary/20 active:scale-95">
                        <FaFileInvoice size={14} />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
                {paginatedPayroll.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={7}
                      className="h-40 text-center text-gray-500   text-[10px] font-semibold"
                    >
                      No matching records in payroll stream.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {filteredPayroll.length > pageSize && (
            <ListPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalRecords={filteredPayroll.length}
              pageSize={pageSize}
            />
          )}
        </AdminCard>
      </div>
    </div>
  );
}

