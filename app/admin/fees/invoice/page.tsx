"use client";

import React, { useState, useEffect } from "react";
import { FaFileInvoiceDollar, FaPrint } from "react-icons/fa";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { InvoiceStats } from "@/components/modules/fees/InvoiceStats";
import { DataTable } from "@/components/common/DataTable";
import { apiService } from "@/lib/api-service";
import { Badge } from "@/components/ui/badge";
import { ListActionButtons } from "@/components/common/ListActionButtons";

interface Invoice {
  id: number;
  invoiceId: string;
  studentName: string;
  amount: string;
  date: string;
  status: string;
}

export default function FeeInvoicePage() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const data = await apiService.fees.getCollection();
        setInvoices(data);
      } catch (error) {
        console.error("Error fetching invoices:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchInvoices();
  }, []);

  const columns = [
    {
      header: "Invoice ID",
      accessor: "invoiceId" as keyof Invoice,
      className: "font-semibold text-secondary",
    },
    {
      header: "Student Name",
      accessor: "studentName" as keyof Invoice,
      className: "font-bold",
    },
    {
      header: "Total Amount",
      accessor: "amount" as keyof Invoice,
    },
    {
      header: "Due Date",
      accessor: "date" as keyof Invoice,
    },
    {
      header: "Status",
      accessor: (item: Invoice) => (
        <Badge
          variant={item.status === "Paid" ? "default" : "outline"}
          className={
            item.status === "Paid"
              ? "bg-emerald-500 hover:bg-emerald-600"
              : "text-amber-600 border-amber-200"
          }
        >
          {item.status}
        </Badge>
      ),
    },
    {
      header: "Actions",
      accessor: (item: Invoice) => (
        <ListActionButtons
          onView={() => console.log("View", item.id)}
          onEdit={() => console.log("Edit", item.id)}
          onDelete={() => setInvoices(invoices.filter((i) => i.id !== item.id))}
        />
      ),
      className: "text-center",
      headerClassName: "text-center",
    },
  ];

  return (
    <div className="container mx-auto space-y-8 pb-10">
      <PageHeader
        title="Fee Invoice Management"
        subtitle="Track Student Payment Liabilities"
        action={
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="rounded-xl border-secondary/20 text-secondary font-semibold text-[10px] hover:bg-secondary hover:text-white transition-all shadow-sm px-6 h-12"
            >
              <FaPrint className="mr-2" /> Export
            </Button>
            <Button className="rounded-xl bg-secondary text-white hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/10 text-[10px] font-semibold px-6 h-12">
              <FaFileInvoiceDollar className="mr-2" /> New Invoice
            </Button>
          </div>
        }
      />

      <InvoiceStats />

      <DataTable
        data={invoices}
        columns={columns}
        searchKey="studentName"
        searchPlaceholder="Search invoices by student name..."
        title="Revenue Ledger"
        isLoading={isLoading}
      />
    </div>
  );
}
