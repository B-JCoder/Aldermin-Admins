"use client";

import React, { useState } from "react";
import { FaFileInvoiceDollar, FaPrint } from "react-icons/fa";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { InvoiceStats } from "@/components/modules/fees/InvoiceStats";
import { InvoiceListTable } from "@/components/modules/fees/InvoiceListTable";

export default function FeeInvoicePage() {
  const [invoices, setInvoices] = useState([
    {
      id: 1,
      admissionNo: "ADM001",
      studentName: "Marcus Aurelius",
      amount: "5000",
      paid: "5000",
      dueDate: "2023-12-01",
      status: "Paid",
    },
    {
      id: 2,
      admissionNo: "ADM042",
      studentName: "Seneca Minor",
      amount: "5000",
      paid: "2000",
      dueDate: "2023-12-05",
      status: "Partial",
    },
    {
      id: 3,
      admissionNo: "ADM108",
      studentName: "Epictetus Slave",
      amount: "4500",
      paid: "0",
      dueDate: "2023-12-10",
      status: "Unpaid",
    },
  ]);

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Fee Invoice Management"
        subtitle="Track Student Payment Liabilities"
        action={
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="rounded-xl border-secondary/20 text-secondary font-black text-[10px] uppercase tracking-widest hover:bg-secondary hover:text-white transition-all shadow-sm px-6 h-12"
            >
              <FaPrint className="mr-2" /> Export
            </Button>
            <Button className="rounded-xl bg-secondary text-white hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/10 text-[10px] font-black uppercase tracking-widest px-6 h-12">
              <FaFileInvoiceDollar className="mr-2" /> New Invoice
            </Button>
          </div>
        }
      />

      <InvoiceStats />

      <InvoiceListTable invoices={invoices} />
    </div>
  );
}
